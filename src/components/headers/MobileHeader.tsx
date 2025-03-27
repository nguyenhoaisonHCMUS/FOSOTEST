"use client";
import { useState } from "react";
import {
    AppBar,
    Toolbar,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Button,
    Collapse,
    Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import Image from "next/image";
import Link from "next/link";
import SwitchLan from "./SwitchLan";
import { ArrowOutward } from "@mui/icons-material";

export interface NavItem {
    id: number;
    name: string;
    href: string;
    sub?: NavItem[];
}

export const navigations: NavItem[] = [
    { id: 1, name: "Về chúng tôi", href: "/about-us" },
    {
        id: 2,
        name: "Giải pháp",
        href: "/solutions",
        sub: [
            { id: 1, name: "Giải pháp 1", href: "/solutions/1" },
            { id: 2, name: "Giải pháp 2", href: "/solutions/2" },
        ],
    },
    {
        id: 3,
        name: "Tài nguyên",
        href: "/resources",
        sub: [
            { id: 1, name: "Blog", href: "/resources/blog" },
            { id: 2, name: "Tài nguyên 2", href: "/resources/resource-2" },
        ],
    },
    { id: 4, name: "Liên hệ", href: "/contact-us" },
];

const MobileHeader = () => {
    const [open, setOpen] = useState(false);
    const [expanded, setExpanded] = useState<{ [key: number]: boolean }>({});

    const toggleDrawer = (state: boolean) => () => setOpen(state);

    const toggleExpand = (id: number) => (event: React.MouseEvent) => {
        event.stopPropagation(); // Ngăn chặn sự kiện lan ra ngoài
        setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
    };

    return (
        <AppBar
            position="fixed"
            elevation={0}
            className="px-4 py-2"
            sx={{ backgroundColor: "#fff" }}
        >
            <Toolbar className="flex justify-between">
                {/* Logo */}
                <Image
                    src="/images/logo.png"
                    alt="Logo"
                    width={80}
                    height={30}
                />

                {/* Menu Icon */}
                <IconButton edge="end" onClick={toggleDrawer(true)}>
                    <MenuIcon fontSize="large" />
                </IconButton>
            </Toolbar>

            {/* Drawer */}
            <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                <Box className="w-full p-4 flex flex-col gap-4">
                    {/* Close Button */}
                    <IconButton
                        className="self-end"
                        onClick={toggleDrawer(false)}
                    >
                        <CloseIcon />
                    </IconButton>

                    {/* Navigation */}
                    <List>
                        {navigations.map((nav) => (
                            <Box key={nav.id}>
                                <ListItem disablePadding>
                                    <ListItemButton
                                        onClick={() =>
                                            !nav.sub ? setOpen(false) : null
                                        }
                                    >
                                        <Link
                                            href={nav.href}
                                            className="w-full"
                                        >
                                            <ListItemText primary={nav.name} />
                                        </Link>
                                        {nav.sub && (
                                            <IconButton
                                                size="small"
                                                onClick={toggleExpand(nav.id)}
                                            >
                                                {expanded[nav.id] ? (
                                                    <ExpandLessIcon />
                                                ) : (
                                                    <ExpandMoreIcon />
                                                )}
                                            </IconButton>
                                        )}
                                    </ListItemButton>
                                </ListItem>

                                {/* Submenu */}
                                {nav.sub && (
                                    <Collapse
                                        in={expanded[nav.id]}
                                        timeout="auto"
                                        unmountOnExit
                                    >
                                        <List component="div" disablePadding>
                                            {nav.sub.map((sub) => (
                                                <ListItem
                                                    key={sub.id}
                                                    disablePadding
                                                >
                                                    <ListItemButton
                                                        className="pl-8"
                                                        onClick={toggleDrawer(
                                                            false
                                                        )}
                                                    >
                                                        <Link
                                                            href={sub.href}
                                                            className="w-full"
                                                        >
                                                            <ListItemText
                                                                primary={
                                                                    sub.name
                                                                }
                                                            />
                                                        </Link>
                                                    </ListItemButton>
                                                </ListItem>
                                            ))}
                                        </List>
                                    </Collapse>
                                )}
                            </Box>
                        ))}
                    </List>

                    {/* Language Selector */}
                    <div className=" flex justify-end">
                        <SwitchLan className=" w-fit" />
                    </div>

                    {/* CTA Button */}
                    <Button
                        variant="contained"
                        className="bg-green-500 text-white px-4 py-2 rounded-full"
                        endIcon={<ArrowOutward />}
                    >
                        Trở Thành Khách Hàng
                    </Button>
                </Box>
            </Drawer>
        </AppBar>
    );
};

export default MobileHeader;
