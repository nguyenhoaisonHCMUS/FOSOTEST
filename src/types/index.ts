import { ReactNode } from "react";

export type ChildrenProps = {
    children: ReactNode;
};
  
export type IToken = {
    accessToken: string;
    refreshToken?: string;
};

export interface SubNavItem {
    id: number;
    name: string;
    href: string;
}
export interface NavItem extends SubNavItem {
    sub?: SubNavItem[];
}

export interface IToC {
    title: string;
    id: string;
    subToC?: IToC[];
}
export interface IBlog {
    id: number;
    title: string;
    content: string;
    createdAt: string;
    updatedAt: string;
    thumbnail: string;
    category: string;
    author?: string;
    toc?:IToC[];
}