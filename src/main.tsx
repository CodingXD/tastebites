import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import { Provider } from "react-redux";
import { store } from "./store";
import { Toaster } from "sonner";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        async lazy() {
          const page = await import("./pages/Home/index");
          return { Component: page.default };
        },
      },
      {
        path: "product/:slug",
        async lazy() {
          const page = await import("./pages/ProductSingle");
          return { Component: page.default };
        },
      },
      {
        path: "contact",
        async lazy() {
          const page = await import("./pages/Contact");
          return { Component: page.default };
        },
      },
      {
        path: "login",
        async lazy() {
          const page = await import("./pages/Login");
          return { Component: page.default };
        },
      },
      {
        path: "signup",
        async lazy() {
          const page = await import("./pages/Signup");
          return { Component: page.default };
        },
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
    <Toaster richColors />
  </React.StrictMode>
);
