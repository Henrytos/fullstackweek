import { CategoryList } from "./_components/category-list";
import { Header } from "./_components/header";
import { ProductList } from "./_components/product-list";
import { PromoBannerOne } from "./_components/promo-banner-one";
import { PromoBannerTwo } from "./_components/promo-banner-two";
import { RestaurantList } from "./_components/restaurant-list";
import { Search } from "./_components/search";
import { SubTitle } from "./_components/sub-title";

export default async function Home() {
  return (
    <main className="space-y-6 py-4 ">
      <Header />
      <Search />
      <CategoryList />

      <PromoBannerOne />

      <div className="space-y-4 ">
        <div className="flex justify-between px-4">
          <SubTitle>Pedidos Recomendados</SubTitle>
          <span className="text-xs text-primary">ver todos</span>
        </div>
        <ProductList />
      </div>

      <PromoBannerTwo />

      <div className="space-y-4">
        <div className="flex justify-between px-4">
          <SubTitle>Pedidos Recomendados</SubTitle>
          <span className="text-xs text-primary">ver todos</span>
        </div>
        <RestaurantList />
      </div>
    </main>
  );
}
