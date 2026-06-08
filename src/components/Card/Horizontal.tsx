import { Card } from "@heroui/react";
import type { HorizontalCardProps } from "./types";
import { Link } from "react-router-dom";

export default function Horizontal({
  imageUrl,
  title,
  description,
  href,
}: HorizontalCardProps) {
  return (
    <Card className="border-none bg-background/60 dark:bg-default-100/50 shadow-sm rounded-none">
      <Card.Content>
        <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-20 items-center justify-center">
          <div className="relative col-span-6 md:col-span-5">
            <img
              alt={title}
              className="h-[200px] w-full object-cover shadow-md"
              height={200}
              loading="lazy"
              decoding="async"
              src={imageUrl}
              width={640}
            />
          </div>

          <div className="flex flex-col col-span-6 md:col-span-7">
            <div className="flex justify-between items-start">
              <div className="lg:pr-20">
                <h3 className="text-4xl font-semibold mt-2 mb-4">{title}</h3>
                <p className="text-small text-foreground/80 leading-6 text-pretty">
                  {description}
                </p>
                <Link
                  to={href}
                  className="mt-6 inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-base font-semibold text-accent-foreground transition hover:bg-accent/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  READ MORE
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Card.Content>
    </Card>
  );
}
