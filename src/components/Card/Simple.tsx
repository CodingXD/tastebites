import { Chip } from "@heroui/react";
import type { SimpleCardProps } from "./types";
import { createElement } from "react";
import { Link } from "react-router-dom";
import "@smastrom/react-rating/style.css";
import { Rating, ThinRoundedStar } from "@smastrom/react-rating";
import { useUpdateProductMutation } from "../../services/product";

export default function Simple({
  imageUrl,
  rating,
  title,
  isLoading,
  as = "div",
  badges = [],
  href,
  slug,
}: SimpleCardProps) {
  const [updatePost] = useUpdateProductMutation();
  const resolvedImageUrl = imageUrl.startsWith("/")
    ? `${import.meta.env.VITE_API_URL}${imageUrl}`
    : imageUrl;

  return createElement(
    as,
    { className: "relative" },
    <>
      <div className="group aspect-h-7 aspect-w-10 block w-full overflow-hidden max-h-80">
        <Link to={href}>
          {isLoading ? (
            <div className="h-full w-full animate-pulse bg-secondary" />
          ) : (
            <img
              alt={title}
              src={resolvedImageUrl}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
              decoding="async"
            />
          )}
        </Link>
      </div>
      {typeof rating === "number" && (
        <Rating
          value={rating}
          className="mt-4 size-6 max-w-36"
          itemStyles={{
            itemShapes: ThinRoundedStar,
            activeFillColor: "#E50000",
            activeStrokeColor: "#C8C8C8",
            inactiveFillColor: "#EEEEEE",
            inactiveStrokeColor: "#E50000",
          }}
          onChange={(value: number) => {
            void updatePost({
              slug,
              rating: value,
            }).unwrap();
          }}
        />
      )}
      <div className="min-h-20 mt-2 flex flex-col justify-between align-bottom">
        <Link
          to={href}
          className="text-base font-semibold text-gray-900 max-w-fit"
        >
          {title}
        </Link>
        {badges.length > 0 && (
          <div className="flex flex-wrap gap-x-4 gap-y-2 mt-auto">
            {badges.map((text) => (
              <Chip
                key={text}
                size="lg"
                variant="secondary"
                className="py-4"
                color="danger"
              >
                {text}
              </Chip>
            ))}
          </div>
        )}
      </div>
    </>,
  );
}
