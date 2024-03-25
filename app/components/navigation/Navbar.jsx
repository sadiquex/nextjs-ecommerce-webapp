"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import MobileNav from "./MobileNav";

import { GiHamburgerMenu } from "react-icons/gi";

import { MAIN } from "@/app/_ui/uiContainers";
import CartDrawer from "../CartDrawer";

export const navItems = [
  {
    name: "Products",
    link: "/products",
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // handle stickiness of navbar
  useEffect(() => {
    const handleScroll = () => {
      // set the navbar to be sticky the moment we scroll down
      const offset = window.scrollY;
      if (offset > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <MAIN>
      <Box sx={{ width: "100%" }}>
        {/* navbar */}
        <div
          style={{
            position: isSticky ? "fixed" : "static",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 999,
            backgroundColor: "#fff",
            boxShadow: isSticky ? "0px 2px 4px rgba(0, 0, 0, 0.1)" : "none",
          }}
        >
          {/* navbar */}
          <Toolbar>
            {/* logo */}
            <Box
              component="div"
              sx={{
                flexGrow: 1,
                display: { sm: "block" },
              }}
            >
              <Link
                href="/"
                style={{
                  textDecoration: "none",
                  color: "#000",
                  fontWeight: 700,
                }}
              >
                SADIQUE STORE
              </Link>
            </Box>
            <Box
              sx={{
                display: { xs: "none", sm: "flex" },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  gap: "10px",
                }}
              >
                {navItems.map((item) => (
                  <Link href={`${item.link}`} key={item.name}>
                    <Button sx={{ color: "#000" }}>{item.name}</Button>
                  </Link>
                ))}
              </Box>
            </Box>
            {/* cart drawer */}
            <CartDrawer />

            {/* hamburger - on mobile */}
            <IconButton
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{
                display: { sm: "none" },
              }}
            >
              <GiHamburgerMenu size={36} />
            </IconButton>
          </Toolbar>
        </div>
        {/* mobile navbar - drawer */}
        <nav>
          <Drawer
            variant="temporary"
            anchor="right"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: 280,
              },
            }}
          >
            <MobileNav handleDrawerToggle={handleDrawerToggle} />
          </Drawer>
        </nav>
      </Box>
    </MAIN>
  );
}
