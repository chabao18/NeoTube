import { SubscribedVideosSection } from "../sections/subscribed-videos-section copy";

export const SubscribedView = () => {
  return (
    <div className="max-w-[2400px] mx-auto mb-10 px-4 pt-2.5 flex flex-col gap-y-6">
      <div>
        <h1 className="text-2xl font-bold">Subscribed</h1>
        <p className="text-xs to-muted-foreground">
          Videos from your favorite creators
        </p>
      </div>
      <SubscribedVideosSection />
    </div>
  );
};
