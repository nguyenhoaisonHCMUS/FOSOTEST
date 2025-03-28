"use client";

import { Breadcrumbs } from "@mui/material";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { navigations } from "./headers/DesktopHeader";
import { NavItem, SubNavItem } from "@/types";

const findNavItemByHref = (
    href: string,
    items: NavItem[]
): NavItem | SubNavItem | null => {
    for (const item of items) {
        if (item.href === href) return item;
        if (item.sub) {
            const found = findNavItemByHref(href, item.sub);
            if (found) return found;
        }
    }
    return null;
};

interface BreadcrumbProps {
    className?: string;
    breadcrumbTitle?: string;
}

export default function Breadcrumb({
    className,
    breadcrumbTitle,
}: BreadcrumbProps) {
    const pathname = usePathname();
    const segments = pathname.split("/").filter(Boolean);
    const breadcrumbItems = [{ name: "Trang chủ", href: "/" }];

    let currentPath = "";
    segments.forEach((segment, index) => {
        currentPath += `/${segment}`;
        const foundItem = findNavItemByHref(currentPath, navigations);

        if (foundItem) {
            breadcrumbItems.push(foundItem);
        } else if (index === segments.length - 1 && breadcrumbTitle) {
            // Nếu đây là segment cuối cùng và có breadcrumbTitle, thì thay thế ID bằng tiêu đề
            breadcrumbItems.push({ name: breadcrumbTitle, href: currentPath });
        } else {
            breadcrumbItems.push({ name: segment, href: currentPath });
        }
    });

    return (
        <Breadcrumbs aria-label="breadcrumb" className={className}>
            {breadcrumbItems.map((item, index) => {
                const isLast = index === breadcrumbItems.length - 1;
                return isLast ? (
                    <p
                        key={item.href}
                        className=" font-bold text-[#050505] text-[12px] md:text-sm"
                    >
                        {item.name}
                    </p>
                ) : (
                    <Link
                        key={item.href}
                        href={item.href}
                        className=" text-[12px] md:text-sm text-center text-[#050505]"
                    >
                        {item.name}
                    </Link>
                );
            })}
        </Breadcrumbs>
    );
}
