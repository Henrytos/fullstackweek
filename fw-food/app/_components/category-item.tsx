import { Category } from "@prisma/client";
import Image from "next/image";

interface CategoryItemProps {
  category: Category;
}
export const CategoryItem = ({ category }: CategoryItemProps) => {
  return (
    <>
      <div className="flex items-center gap-3 rounded-full bg-white p-4">
        <Image
          width={30}
          height={30}
          src={category.imageUrl}
          alt={`imagem de ${category.name}`}
          className="object-cover "
        />
        <p className="text-sm/5 font-semibold ">{category.name}</p>
      </div>
    </>
  );
};
