import { Image, Skeleton } from "@nextui-org/react";
import { useGetProductBySlugQuery } from "../services/product";
import { useParams } from "react-router-dom";

export default function ProductSingle() {
  const { slug } = useParams();
  const { data, error, isLoading } = useGetProductBySlugQuery(slug!, {
    skip: !slug,
  });

  console.log(error);

  return (
    <div className="max-w-5xl mx-auto px-6">
      {error ? (
        <div className="h-96 flex justify-center items-center">
          <small className="text-danger text-2xl">
            {(error as any)?.data?.message}
          </small>
        </div>
      ) : isLoading ? (
        <div className="w-full flex items-center gap-3">
          <div>
            <Skeleton className="flex rounded-full w-12 h-12" />
          </div>
          <div className="w-full flex flex-col gap-2">
            <Skeleton className="h-3 w-3/5 rounded-lg" />
            <Skeleton className="h-3 w-4/5 rounded-lg" />
          </div>
        </div>
      ) : data ? (
        <>
          <Image
            src={
              data.imageUrl.startsWith("/")
                ? `${import.meta.env.VITE_API_URL}${data.imageUrl}`
                : data.imageUrl
            }
            alt={data.title}
            height={120}
            width={1024}
            className="aspect-video object-cover"
          />
          <article className="text-pretty my-10">
            <h1 className="mb-10 lg:text-5xl text-4xl font-semibold">
              {data.title}
            </h1>
            <div className="sm:p-20 p-8 bg-gray-50">
              <h3 className="font-bold sm:text-3xl text-2xl">Recipe</h3>
              <p className="mt-6 sm:text-xl text-lg">
                Here's a simple recipe for {data.title}:
              </p>
              <p className="mt-6 sm:text-xl text-lg">Ingredients:</p>
              <ul className="mt-2 sm:text-xl text-lg leading-10">
                {data.ingredients.map((ing) => (
                  <li key={ing} className="indent-1">
                    - {ing}
                  </li>
                ))}
              </ul>
              <p className="mt-6 sm:text-xl text-lg">Instructions:</p>
              <ol className="mt-2 sm:text-xl text-lg list-decimal list-inside leading-10">
                {data.instructions.map((ins) => (
                  <li key={ins} className="indent-1">
                    {ins}
                  </li>
                ))}
              </ol>
              <p className="mt-6 sm:text-xl text-lg">
                Enjoy your delicious {data.title}!
              </p>
            </div>
          </article>
        </>
      ) : null}
    </div>
  );
}
