import { Button } from "@heroui/react";
import { Menu, X } from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import type { RootState } from "../store";
import { useAppDispatch, useAppSelector } from "../hooks";
import { signOut } from "../slice/user";

export default function Header() {
  const user = useAppSelector((state: RootState) => state.user.user);
  const dispatch = useAppDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const menuItems = useMemo(
    () => [
      { text: "Home", href: "/" },
      { text: "About Us", href: "/about" },
      { text: "Contact", href: "/contact" },
    ],
    [],
  );

  const logout = useCallback(() => {
    dispatch(signOut());
    navigate("/login", { viewTransition: true });
  }, [dispatch, navigate]);

  const goToLogin = useCallback(() => {
    navigate("/login", { viewTransition: true });
  }, [navigate]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  if (!user && !["/login", "/signup", "/forgot-password"].includes(pathname)) {
    return <Navigate to="/login" replace />;
  }

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg shadow-sm">
      <header className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-controls="mobile-menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
            className="inline-flex size-10 items-center justify-center rounded-md text-foreground/90 transition hover:bg-content2 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent sm:hidden"
          >
            {isMenuOpen ? (
              <X className="size-5" />
            ) : (
              <Menu className="size-5" />
            )}
          </button>

          <Link
            to="/"
            viewTransition
            className="text-2xl text-black yesteryear-regular"
          >
            Tastebites
          </Link>
        </div>

        <ul className="hidden items-center gap-x-16 sm:flex">
          {menuItems.map(({ href, text }) => (
            <li key={text}>
              <Link
                to={href}
                viewTransition
                className="text-sm font-medium text-foreground/90 transition hover:text-foreground"
              >
                {text}
              </Link>
            </li>
          ))}
          <li>
            <Button variant="primary" onPress={user ? logout : goToLogin}>
              {user ? "Logout" : "Login/Register"}
            </Button>
          </li>
        </ul>
      </header>

      {isMenuOpen ? (
        <div
          id="mobile-menu"
          className="border-t border-separator bg-background sm:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-6">
            {menuItems.map(({ href, text }) => (
              <Link
                key={text}
                to={href}
                viewTransition
                onClick={() => setIsMenuOpen(false)}
                className="rounded-md px-2 py-2 text-base font-medium text-foreground/90 transition hover:bg-content2 hover:text-foreground"
              >
                {text}
              </Link>
            ))}
            <Button
              className="w-full"
              size="lg"
              variant="primary"
              onPress={() => {
                setIsMenuOpen(false);
                if (user) {
                  logout();
                  return;
                }
                goToLogin();
              }}
            >
              {user ? "Logout" : "Login/Register"}
            </Button>
          </div>
        </div>
      ) : null}
    </nav>
  );
}
