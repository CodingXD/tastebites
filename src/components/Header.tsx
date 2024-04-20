import {
  Button,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { useMemo, useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = useMemo(
    () => [
      { text: "Home", href: "/" },
      { text: "About Us", href: "/about" },
      { text: "Contact", href: "/contact" },
    ],
    []
  );

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="shadow-sm">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand as={Link} href="/">
          <p className="text-2xl text-black yesteryear-regular">Tastebites</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-x-16" justify="center">
        {menuItems.map(({ href, text }) => (
          <NavbarItem key={text}>
            <Link color="foreground" href={href}>
              {text}
            </Link>
          </NavbarItem>
        ))}
        <NavbarItem>
          <Button
            as={Link}
            color="default"
            href="/login"
            variant="solid"
            radius="sm"
          >
            Login/Register
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map(({ href, text }) => (
          <NavbarMenuItem key={text}>
            <Link className="w-full" href={href} size="lg">
              {text}
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem className="mt-auto mb-16">
          <Button as={Link} fullWidth href="/login" size="lg">
            Login/Register
          </Button>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
