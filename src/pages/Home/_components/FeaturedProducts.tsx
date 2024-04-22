import { Simple } from "../../../components/Card";
import { useAppSelector } from "../../../hooks";
import { useGetProductsQuery } from "../../../services/product";

export default function FeaturedProducts() {
  const user = useAppSelector((state) => state.user.user);
  const { data, error, isLoading } = useGetProductsQuery(
    { limit: 3, offset: 0 },
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
      <ul
        role="list"
        className="grid gap-x-4 gap-y-8 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8"
      >
        {data.map(({ slug, imageUrl, rating, title }) => (
          <Simple
            key={imageUrl}
            imageUrl={imageUrl}
            title={title}
            rating={rating}
            as="li"
            href={`/product/${slug}`}
            slug={slug}
          />
        ))}
      </ul>
    );
  }

  return <></>;
}
