import { Simple } from "../../../components/Card";
import { useAppSelector } from "../../../hooks";
import { useGetProductsQuery } from "../../../services/product";

export default function FreshProducts() {
  const user = useAppSelector((state) => state.user.user);
  const { data, error, isLoading } = useGetProductsQuery(
    { limit: 4, offset: 0, categories: ["fresh"] },
    {
      skip: !user,
    }
  );

  if (error) {
    return <></>;
  }

  if (isLoading) {
    return <></>;
  }

  if (data) {
    return (
      <>
        <h3 className="font-semibold text-3xl mb-6">Fresh Recipes</h3>
        {data.map(({ imageUrl, title, slug }) => (
          <Simple
            key={slug}
            imageUrl={imageUrl}
            title={title}
            href={`/product/${slug}`}
            slug={slug}
          />
        ))}
      </>
    );
  }

  return <></>;
}
