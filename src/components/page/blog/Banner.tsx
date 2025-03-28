"use client";
import { Button } from "@mui/material";
import Image from "next/image";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { JSX } from "react";
export type BannerProps = {
    className?: string;
    des?: string;
    thumbnail: string;
    element?: JSX.Element;
    col?: boolean;
    btText?: string;
    imageSize?: string;
};

function Banner({
    className,
    des,
    thumbnail,
    element,
    col = false,
    btText = "Tham gia ngay",
    imageSize = "w-[426px] h-[262px]",
}: BannerProps) {
    return (
        <div
            className={`${className} ${
                col ? "flex flex-col-reverse" : "flex"
            } gap-6 text-6f bg-gradient-to-r from-[#013DA0] to-[#0375F3]`}
        >
            <div className=" flex flex-col gap-4 px-6 items-start justify-center">
                {des && (
                    <p
                        className={`${
                            col ? "text-xl" : "md:text-4xl w-full lg:w-7/12"
                        }  font-bold " text-base`}
                    >
                        {des}
                    </p>
                )}
                {!des && element ? element : ""}
                <Button
                    variant="outlined"
                    color="inherit"
                    sx={(theme) => ({
                        borderRadius: "40px",
                        width: col ? "100%" : "auto",
                        justifyContent: col ? "space-between" : "",
                        paddingY: col ? "12px" : "",
                        [theme.breakpoints.down("md")]: {
                            fontSize: "10px", // Khi dưới md
                        },
                    })}
                    className=" md:mt-5 mt-2"
                    endIcon={<ArrowOutwardIcon />}
                >
                    {btText}
                </Button>
            </div>
            <div className={`relative  ${imageSize}`}>
                <Image
                    src={thumbnail}
                    alt=""
                    fill
                    sizes="(min-width: 768px) 100vw, 100vw"
                    style={{
                        objectFit: "cover",
                    }}
                />
            </div>
        </div>
    );
}

export default Banner;
