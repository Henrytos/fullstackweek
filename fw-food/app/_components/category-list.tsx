import { db } from "../_lib/prisma";
import { CategoryItem } from "./category-item";

export const CategoryList = async () => {
  const categorys = await db.category.findMany({
    take: 8,
  });

  return (
    <div className="mt- grid grid-cols-2 gap-3 px-4">
      {categorys.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};
