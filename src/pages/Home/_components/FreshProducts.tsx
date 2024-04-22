import { Simple } from "../../../components/Card";
import { useAppSelector } from "../../../hooks";
import { useGetProductsQuery } from "../../../services/product";

export default function FreshProducts() {
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
        <h3 className="font-semibold text-3xl mb-6">Fresh Recipes</h3>
        {data.map(({ imageUrl, title }) => (
          <Simple
            imageUrl={imageUrl}
            title={title}
            href="/product/abc"
            slug="very-berry-healthy-summer-smoothie"
          />
        ))}
      </>
    );
  }

  return <></>;
}
