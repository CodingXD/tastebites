import type { ElementType } from "react";

interface Common {
  imageUrl: string;
  title: string;
  isLoading?: boolean;
  as?: ElementType;
}

export interface SimpleCardProps extends Common {
  rating?: number;
  badges?: string[];
  href: string;
  slug: string;
}

export interface HorizontalCardProps extends Common {
  description: string;
}

export interface PostCardProps extends Common {
  description: string;
  author: string;
  authorImageUrl: string;
  createdAt: string;
}
