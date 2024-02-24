import Image from "next/image";
import { FollowerPointerCard } from "../ui/FollowingPointer";
import img from "@/public/1.png"
import img2 from "@/public/self.jpg"

export function FollowingPointerDemo() {
    return (
        <div className="w-80 mx-auto">
            <FollowerPointerCard
                title={
                    <TitleComponent
                        title={blogContent.author}
                        avatar={blogContent.authorAvatar}
                    />
                }
            >
                <div className="relative overflow-hidden h-full rounded-2xl transition duration-200 group bg-white hover:shadow-xl border border-zinc-100">
                    <div className="w-full aspect-w-16 aspect-h-10 bg-gray-100 rounded-tr-lg rounded-tl-lg overflow-hidden xl:aspect-w-16 xl:aspect-h-10 relative">
                        <Image
                            src={img}
                            alt="thumbnail"
                            className={`group-hover:scale-95 object-cover group-hover:rounded-2xl h-[200px] w-full transform  transition duration-200 `}
                        />
                    </div>
                    <div className="p-4">
                        <h2 className="font-bold my-4 text-lg text-zinc-700">
                            {blogContent.title}
                        </h2>
                        <h2 className="font-normal my-4 text-sm text-zinc-500">
                            {blogContent.description}
                        </h2>
                        <div className="flex flex-row justify-between items-center mt-10">
                            <span className="text-sm text-gray-500">Github link</span>
                            <div className="relative z-10 px-6 py-2 bg-black text-white font-bold rounded-xl block text-xs">
                                Live Preview
                            </div>
                        </div>
                    </div>
                </div>
            </FollowerPointerCard>
        </div>
    );
}

export const blogContent = {
    author: "Sagar dabas",
    title: "Amazing Tailwindcss Grid Layout Examples",
    description:
        "Grids are cool, but Tailwindcss grids are cooler. In this article, we will learn how to create amazing Grid layouts with Tailwindcs grid and React.",
    image: img,
    authorAvatar: img2,
};

export const TitleComponent = ({
    title,
    avatar,
}) => (
    <div className="flex space-x-2 items-center">
        <Image
            src={avatar}
            alt="thumbnail"
            className="rounded-full object-fill h-[20px] w-[20px] border-2 border-white"
        />
        <p>{title}</p>
    </div>
);
