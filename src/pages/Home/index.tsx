import { Horizontal } from "../../components/Card";
import CuratedProducts from "./_components/CuratedProducts";
import FeaturedProducts from "./_components/FeaturedProducts";
import FreshProducts from "./_components/FreshProducts";
import LatestProducts from "./_components/LatestProducts";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-6">
      <FeaturedProducts />
      <div className="my-20">
        <Horizontal
          imageUrl="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="About Us"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        />
      </div>
      <div className="my-20">
        <CuratedProducts />
      </div>
      <div className="my-20">
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="col-span-2">
            <LatestProducts />
          </div>
          <div>
            <FreshProducts />
          </div>
        </div>
      </div>
    </div>
  );
}
