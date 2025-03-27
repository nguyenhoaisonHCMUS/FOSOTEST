import { ChildrenProps } from "@/types";
import Link from "next/link";

export const metadata = {
    title: "Something is wrong",
    description: "Something is wrong",
};

export default function ErrorLayout({ children }: ChildrenProps) {
    return (
        <div>
            {children}
            <Link href="/">Go back to home</Link>
        </div>
    );
}
