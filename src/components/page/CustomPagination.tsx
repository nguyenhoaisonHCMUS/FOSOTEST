"use client";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import {
    ArrowBackIosNew,
    ArrowForwardIos,
    MoreHoriz,
} from "@mui/icons-material";

type Props = {
    totalPages: number;
};

export default function CustomPagination({ totalPages }: Props) {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const currentPage = Number(searchParams.get("page")) || 1;
    const category = searchParams.get("category") || "";
    const search = searchParams.get("search") || "";

    const updatePage = (newPage: number) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set("page", newPage.toString());
        if (category) params.set("category", category);
        if (search) params.set("search", search);

        replace(`${pathname}?${params.toString()}`);
    };

    const generatePages = () => {
        const pages: (number | string)[] = [];
        const start = Math.max(1, currentPage - 1);
        const end = Math.min(totalPages, currentPage + 1);

        // Thêm 3 số gần currentPage
        for (let i = start; i <= end; i++) {
            pages.push(i);
        }

        // Thêm "..."
        if (start > 2) {
            pages.unshift("...");
            pages.unshift(1);
        }

        if (end < totalPages - 1) {
            pages.push("...");
            pages.push(totalPages);
        }

        return pages;
    };

    return (
        <div className="flex justify-between items-center mt-4 space-x-2 mb-20">
            {/* Nút Trang trước */}
            <button
                onClick={() => updatePage(currentPage - 1)}
                disabled={currentPage === 1}
                className="flex items-center px-3 py-1 rounded-md bg-white hover:bg-gray-100 disabled:opacity-50"
            >
                <ArrowBackIosNew fontSize="small" />
                <span className="ml-1 max-md:hidden">Trang trước</span>
            </button>

            {/* Các số trang */}
            <div>
                {generatePages().map((page, index) =>
                    typeof page === "number" ? (
                        <button
                            key={index}
                            onClick={() => updatePage(page)}
                            className={`px-3 py-1 rounded-md ${
                                page === currentPage
                                    ? "bg-green-100 font-bold"
                                    : "bg-white hover:bg-gray-100"
                            }`}
                        >
                            {page}
                        </button>
                    ) : (
                        <MoreHoriz key={index} className="text-gray-500" />
                    )
                )}
            </div>

            {/* Nút Trang kế tiếp */}
            <button
                onClick={() => updatePage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="flex items-center px-3 py-1 rounded-md bg-white hover:bg-gray-100 disabled:opacity-50"
            >
                <span className="mr-1 max-md:hidden">Trang kế tiếp</span>
                <ArrowForwardIos fontSize="small" />
            </button>
        </div>
    );
}
