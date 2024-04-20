import { Chip, Image } from "@nextui-org/react";
import type { SimpleCardProps } from "./types";
import { Star } from "lucide-react";
import { createElement } from "react";

export default function Simple({
  imageUrl,
  rating,
  title,
  isLoading,
  as = "div",
  badges = [],
}: SimpleCardProps) {
  const stars = Array(5)
    .fill(<Star size={24} fill="#EEEEEE" color="#C8C8C8" strokeWidth={1} />)
    .fill(<Star size={24} fill="#E50000" color="#E50000" />, 0, rating);

  return createElement(
    as,
    { className: "relative" },
    <>
      <div className="group aspect-h-7 aspect-w-10 block w-full overflow-hidden max-h-80">
        <Image
          isZoomed
          radius="none"
          alt={title}
          src={imageUrl}
          isLoading={isLoading}
          loading="lazy"
          decoding="async"
        />
      </div>
      {typeof rating === "number" && (
        <div className="mt-4 flex space-x-2">{stars}</div>
      )}
      <div className="mt-2 flex flex-col justify-between align-bottom">
        <p className="min-h-20 text-base font-semibold text-gray-900">
          {title}
        </p>
        {badges.length > 0 && (
          <div className="flex flex-wrap gap-x-4 gap-y-2 mt-auto">
            {badges.map((text) => (
              <Chip
                key={text}
                size="lg"
                variant="bordered"
                radius="sm"
                className="py-4"
                color="danger"
              >
                {text}
              </Chip>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
