"use client";

import { Breadcrumbs, Link, Typography } from "@mui/material";
import { usePathname } from "next/navigation";
import { navigations } from "./headers/DesktopHeader";
import { NavItem, SubNavItem } from "@/types";

// Hàm tìm kiếm theo đường dẫn
const findNavItemByHref = (
    href: string,
    items: NavItem[]
): NavItem | SubNavItem | null => {
    for (const item of items) {
        if (item.href === href) return item; // Trả về nếu tìm thấy
        if (item.sub) {
            const found = findNavItemByHref(href, item.sub);
            if (found) return found;
        }
    }
    return null; // Không tìm thấy
};

export default function Breadcrumb({ className }: { className?: string }) {
    const pathname = usePathname();
    const segments = pathname.split("/").filter(Boolean); // Tách đường dẫn

    const breadcrumbItems = [{ name: "Trang chủ", href: "/" }];

    let currentPath = "";
    segments.forEach((segment) => {
        currentPath += `/${segment}`;
        const foundItem = findNavItemByHref(currentPath, navigations);
        if (foundItem) {
            breadcrumbItems.push(foundItem);
        }
    });

    return (
        <Breadcrumbs aria-label="breadcrumb" className={className}>
            {breadcrumbItems.map((item, index) => (
                <Typography
                    key={item.href}
                    sx={{
                        color:
                            index === breadcrumbItems.length - 1
                                ? "#050505"
                                : "inherit",
                        fontWeight:
                            index === breadcrumbItems.length - 1 ? "bold" : "",
                    }}
                    component={
                        index === breadcrumbItems.length - 1 ? "span" : Link
                    }
                    href={
                        index === breadcrumbItems.length - 1
                            ? undefined
                            : item.href
                    }
                >
                    {item.name}
                </Typography>
            ))}
        </Breadcrumbs>
    );
}
