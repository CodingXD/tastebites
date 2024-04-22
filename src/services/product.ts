import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Product } from "../types/product";
import type { Filters } from "../types/filters";
import qs from "qs";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
  tagTypes: ["Products"],
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], Filters>({
      query: (filters) =>
        `products${qs.stringify(filters, { addQueryPrefix: true })}`,
      providesTags: [{ type: "Products" }],
    }),
    getProductBySlug: builder.query<Product, string>({
      query: (slug) => `product/${slug}`,
      providesTags: (result) => [{ type: "Products", id: result?.slug }],
    }),
    updateProduct: builder.mutation<
      Product,
      Partial<Product> & Pick<Product, "slug">
    >({
      query: ({ slug, ...patch }) => ({
        url: `product/${slug}`,
        method: "PATCH",
        body: patch,
      }),
      invalidatesTags: [{ type: "Products" }],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetProductsQuery,
  useGetProductBySlugQuery,
  useUpdateProductMutation,
} = productApi;
