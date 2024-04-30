import { db } from "../_lib/prisma";
import { ProductItem } from "./product-item";

export const ProductList = async () => {
  const products = await db.product.findMany({
    take: 8,
    include: {
      restaurant: {
        select: {
          name: true,
        },
      },
    },
  });
  return (
    <div className="flex gap-4 overflow-x-scroll px-4 [&::-webkit-scrollbar]:hidden">
      {products.map((product) => (
        <ProductItem product={product} />
      ))}
    </div>
  );
};
