import Header from "@/components/headers/Header";
import { ChildrenProps } from "@/types";

export default function MainLayout({ children }: ChildrenProps) {
    return (
        <div className="h-full flex flex-col gap-5 max-lg:mt-[27px]">
            <Header />
            {children}
        </div>
    );
}
