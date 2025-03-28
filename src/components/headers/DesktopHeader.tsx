import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SwitchLan from "./SwitchLan";
import { Box, Button } from "@mui/material";
import { ArrowOutward } from "@mui/icons-material";
import { NavItem } from "@/types";

export const navigations: NavItem[] = [
    {
        id: 1,
        name: "Về chúng tôi",
        href: "/about-us",
    },
    {
        id: 2,
        name: "Giải pháp",
        href: "/solutions",
        sub: [
            {
                id: 1,
                name: "Giải pháp 1",
                href: "/solutions/1",
            },
            {
                id: 2,
                name: "Giải pháp 2",
                href: "/solutions/2",
            },
        ],
    },
    {
        id: 3,
        name: "Tài nguyên",
        href: "/resources",
        sub: [
            {
                id: 1,
                name: "Blog",
                href: "/resources/blog",
            },
            {
                id: 2,
                name: " Tài nguyên 2",
                href: "/resources/resource-2",
            },
        ],
    },
    {
        id: 4,
        name: "Liên hệ",
        href: "/contact-us",
    },
];
function DesktopHeader() {
    const router = useRouter();
    const pathname = usePathname();
    const [hovered, setHovered] = useState<string | null>(null);

    return (
        <header className="">
            <div className=" mt-5 w-11/12 1350:w-[1280px] 1920:w-[70%] rounded-full mx-auto bg-6f/65 backdrop-blur-[25px] shadow-[rgba(0,0,0,0.05)_-9px_20px_60px_-24px] flex items-center justify-center 1920:justify-between py-[14px] px-6 gap-16">
                <div className=" relative w-[134px] h-[55px] lg:w-48">
                    <Image
                        src="/images/logo.png"
                        alt="Vercel Logo"
                        fill
                        sizes="200px"
                        style={{ objectFit: "contain" }}
                    />
                </div>
                <nav className="flex gap-6 items-center">
                    {navigations.map((nav) => {
                        const isActive =
                            pathname === nav.href ||
                            nav.sub?.some((sub) =>
                                pathname.startsWith(sub.href)
                            );
                        return (
                            <div
                                key={nav.name}
                                className="relative"
                                onMouseEnter={() => setHovered(nav.name)}
                                onMouseLeave={() => setHovered(null)}
                            >
                                <button
                                    className={`flex text-[#25272A] items-center gap-1 text-sm hover:cursor-pointer transition relative after:content-[''] after:absolute after:left-0 after:top-5 after:h-[40px] after:bg-transparent after:transition-all after:duration-300 hover:after:w-full ${
                                        isActive ? "font-bold" : "font-medium"
                                    }`}
                                    onClick={() => router.push(nav.href)}
                                >
                                    {nav.name}
                                    {nav.sub && (
                                        <ExpandMoreIcon className="w-4 h-4" />
                                    )}
                                </button>

                                {nav.sub && hovered === nav.name && (
                                    <div className="absolute left-0 mt-8 w-48 bg-white shadow-lg rounded-md z-50">
                                        {nav.sub.map((sub) => (
                                            <button
                                                key={sub.name}
                                                onClick={() =>
                                                    router.push(sub.href)
                                                }
                                                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                                            >
                                                {sub.name}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </nav>
                <div className=" flex items-center justify-end gap-3">
                    <SwitchLan />
                    <Button
                        variant="contained"
                        sx={{
                            background:
                                "linear-gradient(to right, #34d399, #2dd4bf)",
                            borderRadius: "999px",
                            padding: "10px 24px",
                            fontWeight: "700",
                            color: "#052B1E",
                            textTransform: "none",
                            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                            "&:hover": {
                                opacity: 0.9,
                                background:
                                    "linear-gradient(to right, #34d399, #2dd4bf)",
                            },
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                        }}
                    >
                        Trở Thành Khách Hàng
                        <Box
                            sx={{
                                width: 24,
                                height: 24,
                                background: "black",
                                color: "white",
                                borderRadius: "50%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <ArrowOutward fontSize="small" />
                        </Box>
                    </Button>
                </div>
            </div>
        </header>
    );
}

export default DesktopHeader;
