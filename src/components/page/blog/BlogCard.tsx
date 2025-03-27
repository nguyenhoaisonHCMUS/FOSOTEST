import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Button, Card, CardContent, CardMedia } from "@mui/material";
import { IBlog } from "@/types";
import Link from "next/link";

type BlogCardProps = {
    item: IBlog;
    className?: string;
};
function BlogCard({ item, className }: BlogCardProps) {
    return (
        <Card
            sx={{
                borderRadius: 4,
                boxShadow: "none",
                transition: "all 0.3s",
                "&:hover": { boxShadow: 3 },
            }}
            className={className}
        >
            {/* Hình ảnh */}
            <Link href={`/resources/blog/${item.id}`} passHref>
                <CardMedia
                    component="img"
                    image={item.thumbnail}
                    alt={item.title}
                    className="w-full lg:h-[300px] xl:h-[450px] object-cover rounded-2xl cursor-pointer"
                />
            </Link>

            <CardContent
                sx={{
                    padding: "24px 0 0 ",
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                }}
            >
                {/* Danh mục */}
                <p className=" bg-[#E2F0FE] text-[#0F4F9E] w-fit px-1 py-2 rounded-lg font-medium text-[9px] md:text-[12px]">
                    {item.category}
                </p>

                {/* Tiêu đề */}
                <Link href={`/resources/blog/${item.id}`}>
                    <p className=" text-base md:text-2xl font-extrabold">
                        {item.title}
                    </p>
                </Link>

                {/* Ngày và thời gian đọc */}
                <Box display="flex" alignItems="center" gap={1} color="gray">
                    <CalendarMonthIcon fontSize="small" />
                    <p className=" text-[12px] md:text-base">
                        {new Date(item.createdAt).toLocaleDateString()}
                    </p>
                    <AccessTimeIcon fontSize="small" />
                    <p className=" text-[12px] md:text-base">10 phút đọc</p>
                </Box>

                {/* Button Khám phá thêm */}
                <Button
                    variant="text"
                    className=" text-sm md:text-lg font-semibold w-fit items-start"
                    sx={{ color: "#667F93" }}
                    endIcon={<ArrowForwardIcon />}
                >
                    Khám phá thêm
                </Button>
            </CardContent>
        </Card>
    );
}

export default BlogCard;
