import Link from "next/link";
import React from "react";

function NotFound() {
    return (
        <section className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
            <h1 className="text-6xl font-bold text-gray-800">404</h1>
            <p className="text-xl text-gray-600 mt-4">
                Trang bạn tìm kiếm không tồn tại.
            </p>
            <Link
                href="/"
                className="mt-6 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-all"
            >
                Về trang chủ
            </Link>
        </section>
    );
}

export default NotFound;
