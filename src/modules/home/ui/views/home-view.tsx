import { CategoriesSection } from "../sections/categories-section";

interface HomeViewProps {
  categoryId?: string;
}

export const HomeView = ({ categoryId }: HomeViewProps) => {
  return (
    <div className="max-w-[2400px] mx-auto px-4 pt-2.5 flex flex-col gay-y-6">
      <CategoriesSection categoryId={categoryId} />
    </div>
  );
};
