import Header from "@/components/headers/Header";
import { ChildrenProps } from "@/types";

export default function MainLayout({ children }: ChildrenProps) {
    return (
        <div className="h-full flex flex-col gap-5 mt-[92px]  1350:mt-0 ">
            <Header />
            {children}
        </div>
    );
}
