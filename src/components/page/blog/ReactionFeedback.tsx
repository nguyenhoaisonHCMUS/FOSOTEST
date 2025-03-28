"use client";
import { JSX, useState } from "react";
import { Typography, IconButton } from "@mui/material";
import {
    BsHandThumbsUpFill,
    BsHeartFill,
    BsEmojiLaughingFill,
    BsEmojiSurpriseFill,
    BsEmojiNeutralFill,
    BsEmojiAngryFill,
} from "react-icons/bs";

// Định nghĩa type cho phản hồi
type ReactionType = "useful" | "love" | "fun" | "surprise" | "bored" | "angry";

interface Reaction {
    id: ReactionType;
    icon: JSX.Element;
    label: string;
}

// Danh sách phản hồi
const reactions: Reaction[] = [
    {
        id: "useful",
        icon: (
            <BsHandThumbsUpFill
                className="xl:w-12 xl:h-12 md:w-8 md:h-8 w-5 h-5"
                color="gold"
            />
        ),
        label: "Hữu ích",
    },
    {
        id: "love",
        icon: (
            <BsHeartFill
                className="xl:w-12 xl:h-12 md:w-8 md:h-8 w-5 h-5"
                color="red"
            />
        ),
        label: "Yêu thích",
    },
    {
        id: "fun",
        icon: (
            <BsEmojiLaughingFill
                className="xl:w-12 xl:h-12 md:w-8 md:h-8 w-5 h-5"
                color="orange"
            />
        ),
        label: "Thú vị",
    },
    {
        id: "surprise",
        icon: (
            <BsEmojiSurpriseFill
                className="xl:w-12 xl:h-12 md:w-8 md:h-8 w-5 h-5"
                color="yellow"
            />
        ),
        label: "Bất ngờ",
    },
    {
        id: "bored",
        icon: (
            <BsEmojiNeutralFill
                className="xl:w-12 xl:h-12 md:w-8 md:h-8 w-5 h-5"
                color="gray"
            />
        ),
        label: "Nhàm chán",
    },
    {
        id: "angry",
        icon: (
            <BsEmojiAngryFill
                className="xl:w-12 xl:h-12 md:w-8 md:h-8 w-5 h-5"
                color="red"
            />
        ),
        label: "Tức giận",
    },
];

export default function ReactionFeedback() {
    const [counts, setCounts] = useState<Record<ReactionType, number>>({
        useful: 1,
        love: 2,
        fun: 0,
        surprise: 1,
        bored: 0,
        angry: 0,
    });

    const [selected, setSelected] = useState<ReactionType | null>(null);

    const handleReaction = (id: ReactionType) => {
        setCounts((prev) => {
            // Nếu đã chọn reaction này => Bỏ chọn (về 0)
            if (selected === id) {
                return { ...prev, [id]: Math.max(0, prev[id] - 1) };
            }

            // Nếu chọn reaction khác => Giảm số lượng của reaction cũ, tăng số lượng của reaction mới
            const newCounts = { ...prev };
            if (selected) {
                newCounts[selected] = Math.max(0, newCounts[selected] - 1);
            }
            newCounts[id] += 1;

            setSelected(id);
            return newCounts;
        });
    };

    return (
        <div className=" mt-5 flex items-center flex-col bg-6f rounded-3xl py-6">
            <Typography variant="h6">Bạn thấy bài viết như thế nào?</Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
                {Object.values(counts).reduce((a, b) => a + b, 0)} phản hồi
            </Typography>
            <div className=" flex justify-between items-start xl:gap-4 md:gap-2">
                {reactions.map(({ id, icon, label }) => (
                    <div
                        key={id}
                        className={`
                            text-center 
                            p-2 
                            rounded-md 
                            ${
                                selected === id
                                    ? "text-[#10805B] border-2 border-[#10805B]"
                                    : ""
                            }
                        `}
                    >
                        <IconButton onClick={() => handleReaction(id)}>
                            {icon}
                        </IconButton>
                        <Typography variant="body2">{counts[id]}</Typography>
                        <Typography variant="caption" className="max-md:hidden">
                            {label}
                        </Typography>
                    </div>
                ))}
            </div>
        </div>
    );
}
