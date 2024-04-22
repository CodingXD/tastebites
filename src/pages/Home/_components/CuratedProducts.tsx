import { Simple } from "../../../components/Card";
import { useAppSelector } from "../../../hooks";
import { useGetProductsQuery } from "../../../services/product";

export default function CuratedProducts() {
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
      <>
        <h3 className="font-semibold text-4xl">Curated Collections</h3>
        <ul
          role="list"
          className="mt-8 grid gap-x-4 gap-y-8 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8"
        >
          {data.map(({ badges, imageUrl, title }) => (
            <Simple
              imageUrl={imageUrl}
              title={title}
              as="li"
              badges={badges}
              href="/product/abc"
              slug="very-berry-healthy-summer-smoothie"
            />
          ))}
        </ul>
      </>
    );
  }

  return <></>;
}
