import { Restaurant } from "@prisma/client";
import { BikeIcon, Heart, Star, TimerIcon } from "lucide-react";
import Image from "next/image";
import { formatCurrency } from "../_helpers/price";

interface RestaurantItemProps {
  restaurant: Restaurant;
}

export const RestaurantItem = ({ restaurant }: RestaurantItemProps) => {
  return (
    <div className="h-auto w-64 min-w-64 space-y-3">
      <div className="relative">
        <Image
          src={restaurant.imageUrl}
          alt={restaurant.name}
          className="h-36 w-full rounded-lg object-cover "
          width={266}
          height={136}
        />
        <span className=" absolute left-2.5 top-2.5 flex items-center gap-1 rounded-full bg-white p-1 px-2">
          <Star className="fill-yellow-500 text-yellow-500 " size={12} />
          <span className="text-xs text-zinc-900">5.0</span>
        </span>
        <span className=" absolute right-2.5 top-2.5  flex h-[24px] w-[24px] items-center justify-center rounded-full bg-white/50 p-1">
          <Heart className="border-0 fill-white text-white" size={18} />
        </span>
      </div>
      <div>
        <h3 className="text-sm font-semibold">{restaurant.name}</h3>
        {/* INFORMAÇÕES DA ENTREGA */}
        <div className="flex gap-3">
          {/* CUSTO DE ENTREGA */}
          <div className="flex items-center gap-1">
            <BikeIcon className="text-primary" size={14} />
            <span className="text-xs text-muted-foreground">
              {Number(restaurant.deliveryFee) === 0
                ? "Entrega grátis"
                : formatCurrency(Number(restaurant.deliveryFee))}
            </span>
          </div>
          {/* TEMPO DE ENTREGA */}
          <div className="flex items-center gap-1">
            <TimerIcon className="text-primary" size={14} />
            <span className="text-xs text-muted-foreground">
              {restaurant.deliveryTimeMinutes} min
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
