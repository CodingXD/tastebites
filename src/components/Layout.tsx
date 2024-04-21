import { Outlet, useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { NextUIProvider } from "@nextui-org/react";

export default function Layout() {
  const navigate = useNavigate();
  return (
    <NextUIProvider navigate={navigate}>
      <Header />
      <main className="mt-6">
        <Outlet />
      </main>
      <Footer />
    </NextUIProvider>
  );
}
