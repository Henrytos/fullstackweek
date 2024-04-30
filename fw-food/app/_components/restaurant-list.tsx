import { db } from "../_lib/prisma";
import { SubTitle } from "./sub-title";
import { RestaurantItem } from "./restaurant-item";

export const RestaurantList = async () => {
  const restaurants = await db.restaurant.findMany({
    take: 8,
  });

  return (
    <div className="no-scrollba flex gap-4 overflow-x-auto px-4">
      {restaurants.map((restaurant) => (
        <RestaurantItem restaurant={restaurant} key={restaurant.id} />
      ))}
    </div>
  );
};
