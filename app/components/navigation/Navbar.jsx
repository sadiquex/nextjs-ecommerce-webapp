"use client";

import { useState } from "react";
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
  {
    name: "About",
    link: "/about",
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <MAIN>
      <Box>
        {/* navbar */}
        <div
          style={{
            top: 0,
            left: 0,
            right: 0,
            zIndex: 999,
            backgroundColor: "#fff",
          }}
        >
          {/* navbar */}
          <Toolbar
            sx={{
              paddingLeft: 0,
              paddingRight: 0,
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
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
            <Box sx={{ display: { xs: "none", sm: "flex" }, gap: "6rem" }}>
              <Box
                sx={{
                  display: "flex",
                  gap: "10px",
                }}
              >
                {navItems.map((item) => (
                  <Link href={`${item.link}`} key={item.name}>
                    <Button
                      sx={{
                        color: item.textColor,
                        backgroundColor: item.backgroundColor,

                        "&:hover": {
                          backgroundColor: item.backgroundColor,
                        },
                      }}
                    >
                      {item.name}
                    </Button>
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
