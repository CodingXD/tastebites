import { Post } from "../../../components/Card";
import { useAppSelector } from "../../../hooks";
import { useGetProductsQuery } from "../../../services/product";

export default function LatestProducts() {
  const user = useAppSelector((state) => state.user.user);
  const { data, error, isLoading } = useGetProductsQuery(
    { limit: 2, offset: 0 },
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
        <h3 className="font-semibold text-3xl mb-6">Latest Recipes</h3>
        <div className="space-y-7">
          {data.map(
            ({
              author,
              authorImageUrl,
              createdAt,
              description,
              imageUrl,
              title,
              slug,
            }) => (
              <Post
                key={slug}
                title={title}
                description={description}
                imageUrl={imageUrl}
                author={author}
                authorImageUrl={authorImageUrl}
                createdAt={createdAt}
                href={`/product/${slug}`}
              />
            )
          )}
        </div>
      </>
    );
  }

  return <></>;
}
