import CategoriesNav from "@/components/CategoriesNav";
import Heronav from "@/components/heronav";
import Products from "@/components/products-shop/products";

export default function Home() {
  return (
    <div className="animate__animated animate__fadeIn">
      <div className="mt-28">
        <CategoriesNav />
      </div>
      <Products />
    </div>
  );
}
