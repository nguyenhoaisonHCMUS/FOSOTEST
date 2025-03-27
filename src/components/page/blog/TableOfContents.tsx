"use client";
import React, { useState } from "react";
import {
    Box,
    List,
    ListItemButton,
    ListItemText,
    IconButton,
    Typography,
} from "@mui/material";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export interface IToC {
    title: string;
    id: string;
    subToC?: IToC[];
}

interface TableOfContentsProps {
    toc: IToC[];
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ toc }) => {
    const [open, setOpen] = useState(true);

    const handleToggle = () => {
        setOpen(!open);
    };

    const handleScroll = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    const renderTocItems = (items: IToC[], level = 0) => {
        return (
            <List component="nav" sx={{ pl: level * 2, border: "none" }}>
                {items.map((item) => (
                    <React.Fragment key={item.id}>
                        <ListItemButton
                            onClick={() => handleScroll(item.id)}
                            sx={{ pl: level * 2, padding: 0 }}
                        >
                            <ListItemText
                                primary={item.title}
                                sx={{
                                    fontWeight: level === 0 ? "bold" : "normal",
                                    fontSize: level === 0 ? "1rem" : "0.875rem",
                                }}
                            />
                        </ListItemButton>
                        {item.subToC && renderTocItems(item.subToC, level + 1)}
                    </React.Fragment>
                ))}
            </List>
        );
    };

    return (
        <Box>
            <Typography
                variant="h6"
                onClick={handleToggle}
                sx={{
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                Nội Dung Bài Viết
                <IconButton onClick={handleToggle}>
                    {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </IconButton>
            </Typography>
            {open && renderTocItems(toc)}
        </Box>
    );
};

export default TableOfContents;
