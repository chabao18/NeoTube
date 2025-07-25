"use client";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { trpc } from "@/trpc/client";
import { TrashIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { toast } from "sonner";

interface Props {
  playlistId: string;
}

export const PlaylistHeaderSection = ({ playlistId }: Props) => {
  return (
    <Suspense fallback={<PlaylistHeaderSectionSkeleton />}>
      <ErrorBoundary fallback={<p>Error</p>}>
        <PlaylistHeaderSectionSuspense playlistId={playlistId} />
      </ErrorBoundary>
    </Suspense>
  );
};

const PlaylistHeaderSectionSkeleton = () => {
  return (
    <div className="flex flex-col gap-y-2">
      <Skeleton className="h-6 w-24" />
      <Skeleton className="h-4 w-32" />
    </div>
  );
};

const PlaylistHeaderSectionSuspense = ({ playlistId }: Props) => {
  const [playlist] = trpc.playlist.getOne.useSuspenseQuery({ id: playlistId });
  const utils = trpc.useUtils();
  const router = useRouter();

  const remove = trpc.playlist.remove.useMutation({
    onSuccess: () => {
      toast.success("Playlist removed");
      utils.playlist.getMany.invalidate();
      router.push("/playlists");
    },

    onError: () => {
      toast.error("Something went wrong");
    },
  });

  return (
    <div className="flex justify-between items-center">
      <div>
        <h1 className="text-2xl font-bold">{playlist.name}</h1>
        <p className="text-xs to-muted-foreground">Videos from the playlist</p>
      </div>
      <Button
        variant="outline"
        size="icon"
        className="rounded-full"
        onClick={() => remove.mutate({ id: playlistId })}
        disabled={remove.isPending}
      >
        <TrashIcon />
      </Button>
    </div>
  );
};
