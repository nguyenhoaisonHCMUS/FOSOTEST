"use client";
import { useMediaQuery } from "@mui/material";
import MobileHeader from "./MobileHeader";
import DesktopHeader from "./DesktopHeader";

function Header() {
    const isMobile = useMediaQuery("(max-width: 1350px)");
    return isMobile ? <MobileHeader /> : <DesktopHeader />;
}

export default Header;
