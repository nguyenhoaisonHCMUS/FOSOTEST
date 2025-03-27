import CustomBreadcrumbs from "@/components/Breadcrumbs";
import Banner from "@/components/page/blog/Banner";
import BlogCard from "@/components/page/blog/BlogCard";
import Sidebar from "@/components/page/blog/Sidebar";
import CustomPagination from "@/components/page/CustomPagination";
import { IBlog } from "@/types";
import Image from "next/image";
import { Suspense } from "react";

export const mockBlog: IBlog[] = [
    {
        id: 1,
        title: "Tại sao BOM quan trọng trong quản lý sản xuất?",
        content: "Blog 1 content",
        createdAt: "2023-01-01T08:30:00Z",
        updatedAt: "2023-01-01T10:45:00Z",
        thumbnail: "/images/blog_banner1.png",
        category: "Quản lý sản xuất",
    },
    {
        id: 2,
        title: "Tại sao BOM quan trọng trong quản lý sản xuất?",
        content: "Blog 1 content",
        createdAt: "2023-02-15T14:15:30Z",
        updatedAt: "2023-02-15T16:00:45Z",
        thumbnail: "/images/blog_banner1.png",
        category: "Quản lý bán hàng",
    },
    {
        id: 3,
        title: "Tại sao BOM quan trọng trong quản lý sản xuất?",
        content: "Blog 1 content",
        createdAt: "2023-02-15T14:15:30Z",
        updatedAt: "2023-02-15T16:00:45Z",
        thumbnail: "/images/blog_banner1.png",
        category: "Quản lý bán hàng",
    },
    {
        id: 4,
        title: "Tại sao BOM quan trọng trong quản lý sản xuất?",
        content: "Blog 1 content",
        createdAt: "2023-01-01T08:30:00Z",
        updatedAt: "2023-01-01T10:45:00Z",
        thumbnail: "/images/blog_banner1.png",
        category: "Quản lý sản xuất",
    },
    {
        id: 5,
        title: "Tại sao BOM quan trọng trong quản lý sản xuất?",
        content: "Blog 1 content",
        createdAt: "2023-02-15T14:15:30Z",
        updatedAt: "2023-02-15T16:00:45Z",
        thumbnail: "/images/blog_banner1.png",
        category: "Quản lý bán hàng",
    },
    {
        id: 6,
        title: "Tại sao BOM quan trọng trong quản lý sản xuất?",
        content: "Blog 1 content",
        createdAt: "2023-02-15T14:15:30Z",
        updatedAt: "2023-02-15T16:00:45Z",
        thumbnail: "/images/blog_banner1.png",
        category: "Quản lý bán hàng",
    },
];
// {
//     searchParams,
// }: {
//     searchParams: { [key: string]: string | undefined };
// }
async function page() {
    return (
        <div className=" flex flex-col gap-20">
            <div className="flex justify-between w-full items-center mt-12">
                <div className="max-lg:hidden ml-12 relative aspect-[195/188] 2xl:w-[160px]  xl:w-[130px] w-[100px]">
                    <Image src="/images/Saly-42.png" alt="" fill />
                </div>
                <div className=" flex items-center flex-col flex-1 w-[70%]">
                    <CustomBreadcrumbs />
                    <div className=" lg:text-[64px] md:text-5xl text-3xl font-[400] text-center mt-14">
                        Blog{" "}
                        <span className=" font-bold bg-gradient-to-r from-green-600 via-green-300 to-green-600 bg-clip-text text-transparent">
                            FOSO
                        </span>{" "}
                        - <br />
                        <p className=" ">
                            Cập nhật tin tức{" "}
                            <span className="relative font-bold after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-10 after:rounded-full after:bg-blue-600/20 ">
                                Mới Nhất
                            </span>
                        </p>
                    </div>
                    <p className=" md:text-lg text-[12px] font-semibold text-center">
                        Cùng FOSO khám phá kiến thức, xu hướng công nghệ và sản
                        xuất ngay!
                    </p>
                </div>
                <div className="max-lg:hidden mr-12 relative aspect-[195/160] 2xl:w-[160px]  xl:w-[130px] w-[100px] ">
                    <Image
                        src="/images/Saly-25.png"
                        alt=""
                        fill
                        // width={500}
                        // height={500}
                    />
                </div>
            </div>
            <div className="max-1920:max-w-[1440px] max-w-[1800px] w-[90%] mx-auto grid grid-rows-[auto_auto_auto] 2xl:grid-cols-[20fr_7fr] gap-6">
                <div className=" flex flex-col gap-8 max-2xl:order-2">
                    <h2 className=" font-extrabold text-4xl">
                        Tất cả bài viết{" "}
                    </h2>
                    <Banner
                        className="rounded-[40px] overflow-hidden  aspect-[1042/318]"
                        des="Gia nhập cộng đồng FMRP – Kết nối, chia sẻ, cùng phát triển!"
                        thumbnail="/images/Group.png"
                        imageSize="2xl:w-[776px] md:w-[542px] w h-[100%]"
                    />
                    <div className=" grid grid-cols-1 md:grid-cols-2 gap-6">
                        {mockBlog.map((item) => {
                            return <BlogCard key={item.id} item={item} />;
                        })}
                    </div>
                </div>

                {/* Tìm kiếm */}
                <div className=" flex flex-col gap-8 max-2xl:order-1">
                    <Suspense fallback={<div>Loading Sidebar...</div>}>
                        <Sidebar />
                    </Suspense>
                    <Banner
                        className="rounded-[24px] overflow-hidden py-10"
                        thumbnail="/images/blog_banner2.png"
                        col
                        element={
                            <div className=" flex items-center justify-between gap-2 max-2xl:w-full max-2xl:justify-center">
                                <div className=" relative w-[136px] aspect-square">
                                    <Image
                                        src="/images/blog_banner-sub1.png"
                                        alt=""
                                        fill
                                    />
                                </div>
                                <div className=" flex flex-col gap-3 items-end">
                                    <p className=" text-xl font-bold">
                                        Miễn phí dùng thử
                                    </p>
                                    <div className=" relative w-[154px] aspect-[154/45]">
                                        <Image
                                            src="/images/blog_banner-sub2.png"
                                            alt=""
                                            fill
                                        />
                                    </div>
                                </div>
                            </div>
                        }
                        btText="Trải nghiệm ngay"
                        imageSize=" 2xl:h-[262px] ml-3 w-full"
                    />
                    <Banner
                        className="rounded-[24px] overflow-hidden  py-10 max-2xl:hidden"
                        des="Gia nhập cộng đồng FMRP – Kết nối, chia sẻ, cùng phát triển!"
                        thumbnail="/images/Group.png"
                        imageSize="xl:h-[383px] lg:h-[286px]  w-full"
                        col
                    />
                </div>
                <div className="2xl:col-span-2 max-2xl:order-3">
                    <Suspense fallback={<div>Loading...</div>}>
                        <CustomPagination totalPages={10} />
                    </Suspense>
                </div>
            </div>
        </div>
    );
}

export default page;
