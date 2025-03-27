"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import {
    TextField,
    IconButton,
    List,
    ListItemButton,
    InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useDebounce } from "@/hooks/useDebouce";

export interface ICategory {
    label: string;
    quantity: number;
    value: string;
}

const categories: ICategory[] = [
    { label: "Tất cả", quantity: 108, value: "tat-ca" },
    { label: "Thiết Kế Website", quantity: 36, value: "thiet-ke-website" },
    {
        label: "Thiết Kế App Mobile",
        quantity: 13,
        value: "thiet-ke-app-mobile",
    },
    { label: "Quản Lý Sản Xuất", quantity: 25, value: "quan-ly-san-xuat" },
    { label: "Quản Lý Bán Hàng", quantity: 22, value: "quan-ly-ban-hang" },
    {
        label: "Báo Chí nói gì về FOSO",
        quantity: 7,
        value: "bao-chi-noi-gi-ve-FOSO",
    },
    { label: "Tin tức FOSO", quantity: 5, value: "tin-tuc-FOSO" },
];

const Sidebar = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [search, setSearch] = useState(searchParams.get("search") || "");

    // Nếu không có category -> mặc định chọn "Tất cả"
    const currentCategory = searchParams.get("category") || "tat-ca";
    const debouncedSearchTerm = useDebounce(search, 500);

    useEffect(() => {
        const params = new URLSearchParams(searchParams);
        if (debouncedSearchTerm.trim()) {
            params.set("search", debouncedSearchTerm);
        } else {
            params.delete("search");
        }
        router.push(`?${params.toString()}`, { scroll: false });
    }, [debouncedSearchTerm, router, searchParams]);

    const handleCategoryClick = (value: string) => {
        const params = new URLSearchParams(searchParams);
        params.set("category", value);
        router.push(`?${params.toString()}`, { scroll: false });
    };

    return (
        <div className="flex flex-col gap-4">
            {/* Ô tìm kiếm */}
            <div>
                <h3 className="font-extrabold text-2xl">Tìm Kiếm</h3>
                <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="Tìm kiếm bài viết"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    sx={{
                        padding: "12px 8px 12px 24px",
                        borderRadius: "12px",
                        boxShadow:
                            "0px 12px 24px -4px rgba(145, 158, 171, 0.16)",
                        "& fieldset": { border: "none" },
                    }}
                    slotProps={{
                        input: {
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        sx={{
                                            backgroundColor: "#15AA7A",
                                            color: "white",
                                            borderRadius: "12px",
                                            width: "48px",
                                            height: "48px",
                                        }}
                                    >
                                        <SearchIcon />
                                    </IconButton>
                                </InputAdornment>
                            ),
                        },
                    }}
                />
            </div>

            {/* Danh mục bài viết */}
            <div>
                <h3 className="font-extrabold text-2xl">Danh Mục</h3>
                <List>
                    {categories.map((item) => (
                        <ListItemButton
                            key={item.value}
                            sx={{
                                padding: "14px 0",
                                backgroundColor:
                                    currentCategory === item.value
                                        ? "#E3F2FD"
                                        : "transparent",
                                borderRadius: "8px",
                                transition: "0.2s",
                                "&:hover": { backgroundColor: "#E3F2FD" },
                            }}
                            onClick={() => handleCategoryClick(item.value)}
                        >
                            <p className="w-full flex items-center justify-between">
                                <span>{item.label}</span>
                                <span>{item.quantity}</span>
                            </p>
                        </ListItemButton>
                    ))}
                </List>
            </div>
        </div>
    );
};

export default Sidebar;
