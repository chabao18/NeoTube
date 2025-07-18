import { DEFAULT_LIMIT } from "@/constants";
import { UserView } from "@/modules/user/ui/views/user-view";
import { HydrateClient, trpc } from "@/trpc/server";

interface Props {
  params: Promise<{ userId: string }>;
}

const Page = async ({ params }: Props) => {
  const { userId } = await params;
  void trpc.users.getOne.prefetch({ id: userId });
  void trpc.videos.getMany.prefetchInfinite({userId: userId, limit: DEFAULT_LIMIT})

  return (
    <HydrateClient>
      <UserView userId={userId} />
    </HydrateClient>
  );
};

export default Page;
