import MainLayout from "@/layouts/mainLayout/MainLayout";
import { ChildrenProps } from "@/types";
import React from "react";

function layout({ children }: ChildrenProps) {
    return <MainLayout>{children}</MainLayout>;
}

export default layout;
