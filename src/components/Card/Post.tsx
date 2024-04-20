import { Image, User } from "@nextui-org/react";
import type { PostCardProps } from "./types";
import { createElement } from "react";
import { formatRelative } from "date-fns";

export default function Post({
  imageUrl,
  title,
  isLoading,
  as = "div",
  author,
  authorImageUrl,
  createdAt,
  description,
}: PostCardProps) {
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
      <div className="p-6 bg-gray-100 border">
        <p className="mb-2 text-base font-semibold text-gray-900">{title}</p>
        <p>{description}</p>
        <div className="flex justify-between mt-8 items-center">
          <User name={author} avatarProps={{ src: authorImageUrl }} />
          <p className="capitalize">{formatRelative(createdAt, new Date())}</p>
        </div>
      </div>
    </>
  );
}
