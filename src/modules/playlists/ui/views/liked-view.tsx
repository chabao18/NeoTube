import { HistoryVideosSection } from "../sections/history-section";
import { LikedVideosSection } from "../sections/liked-section";


export const LikedView = () => {
  return (
    <div className="max-w-screen-md mx-auto mb-10 px-4 pt-2.5 flex flex-col gap-y-6">
      <div>
        <h1 className="text-2xl font-bold">Liked</h1>
        <p className="text-xs to-muted-foreground">
          Videos you have liked
        </p>
      </div>
      <LikedVideosSection />
    </div>
  );
};
