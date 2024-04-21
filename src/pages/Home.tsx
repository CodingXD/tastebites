import { Horizontal, Post, Simple } from "../components/Card";

const pageContent = {
  top: [
    {
      imageUrl:
        "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Very berry Healthy Summer Smoothie ssssssssss",
      rating: 4,
      as: "li" as const,
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=1980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Very berry Healthy Summer Smoothie ssssssssss",
      rating: 4,
      as: "li" as const,
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1981&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Very berry Healthy Summer Smoothie ssssssssss",
      rating: 4,
      as: "li" as const,
    },
  ],
  curatedCollections: [
    {
      imageUrl:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Very berry Healthy Summer Smoothie ssssssssss",
      as: "li" as const,
      badges: ["150 Recipies"],
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1606787366850-de6330128bfc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Very berry Healthy Summer Smoothie ssssssssss",
      as: "li" as const,
      badges: ["150 Recipies"],
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1493770348161-369560ae357d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Very berry Healthy Summer Smoothie ssssssssss",
      as: "li" as const,
      badges: ["150 Recipies"],
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Very berry Healthy Summer Smoothie ssssssssss",
      as: "li" as const,
      badges: ["150 Recipies"],
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1606787366850-de6330128bfc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Very berry Healthy Summer Smoothie ssssssssss",
      as: "li" as const,
      badges: ["150 Recipies"],
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1493770348161-369560ae357d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Very berry Healthy Summer Smoothie ssssssssss",
      as: "li" as const,
      badges: ["150 Recipies"],
    },
  ],
  latest: [
    {
      imageUrl:
        "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Pumpkin marshmallow pie",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      author: "John Doe",
      createdAt: "04-20-2024",
      authorImageUrl:
        "https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=1899&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Pumpkin marshmallow pie",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      author: "John Doe",
      createdAt: "04-20-2024",
      authorImageUrl:
        "https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=1899&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ],
  fresh: [
    {
      imageUrl:
        "https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Pumpkin marshmallow pie",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Pumpkin marshmallow pie",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Pumpkin marshmallow pie",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Pumpkin marshmallow pie",
    },
  ],
};

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-6">
      <ul
        role="list"
        className="grid gap-x-4 gap-y-8 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8"
      >
        {pageContent.top.map(({ as, imageUrl, rating, title }) => (
          <Simple
            key={imageUrl}
            imageUrl={imageUrl}
            title={title}
            rating={rating}
            as={as}
          />
        ))}
      </ul>
      <div className="my-20">
        <Horizontal
          imageUrl="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="About Us"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        />
      </div>
      <div className="my-20">
        <h3 className="font-semibold text-4xl">Curated Collections</h3>
        <ul
          role="list"
          className="mt-8 grid gap-x-4 gap-y-8 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8"
        >
          {pageContent.curatedCollections.map(
            ({ as, badges, imageUrl, title }) => (
              <Simple
                imageUrl={imageUrl}
                title={title}
                as={as}
                badges={badges}
              />
            )
          )}
        </ul>
      </div>
      <div className="my-20">
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="col-span-2">
            <h3 className="font-semibold text-3xl mb-6">Latest Recipes</h3>
            <div className="space-y-7">
              {pageContent.latest.map(
                ({
                  author,
                  authorImageUrl,
                  createdAt,
                  description,
                  imageUrl,
                  title,
                }) => (
                  <Post
                    key={imageUrl}
                    title={title}
                    description={description}
                    imageUrl={imageUrl}
                    author={author}
                    authorImageUrl={authorImageUrl}
                    createdAt={createdAt}
                  />
                )
              )}
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-3xl mb-6">Fresh Recipes</h3>
            {pageContent.fresh.map(({ imageUrl, title }) => (
              <Simple imageUrl={imageUrl} title={title} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
