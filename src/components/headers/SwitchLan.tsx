"use client";

import { useState } from "react";
import { Menu, MenuItem, Button } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import Image from "next/image";

const languages = [
    { code: "vi", label: "VI", flag: "/images/icon_country.svg" },
    { code: "en", label: "EN", flag: "/images/icon_country.svg" },
];

export default function SwitchLan({ className }: { className?: string }) {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [selectedLang, setSelectedLang] = useState(languages[0]);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (lang?: typeof selectedLang) => {
        if (lang) setSelectedLang(lang);
        setAnchorEl(null);
    };

    return (
        <div
            className={`${className} rounded-full overflow-hidden flex items-center  h-10 gap-3 border border-[rgba(9,9,11,0.1)] bg-gradient-to-b from-[rgba(9,9,11,0.05)] to-[rgba(9,9,11,0.1)]`}
        >
            <Button onClick={handleClick} className=" flex items-center gap-2">
                <Image src={selectedLang.flag} alt="" width={20} height={20} />
                <div className="flex items-center">
                    <span className=" text-sm font-medium">
                        {selectedLang.label}
                    </span>
                    <ExpandMore className=" w-4 h-4" />
                </div>
            </Button>
            <Menu anchorEl={anchorEl} open={open} onClose={() => handleClose()}>
                {languages.map((lang) => (
                    <MenuItem
                        key={lang.code}
                        onClick={() => handleClose(lang)}
                        className=" flex items-center gap-2"
                    >
                        <Image
                            src={lang.flag}
                            alt={lang.label}
                            width={20}
                            height={20}
                        />
                        <span className="">{lang.label}</span>
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
}
