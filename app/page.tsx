import { LinkBox } from "@/components/linkBox"

export default function Home() {
    return (
        <main
            className="flex note min-h-screen items-center justify-center bg-zinc-50 p-4 sm:p-8 lg:p-16 xl:p-32 2xl:p-64"
            style={{
                fontFamily: "var(--font-noto-sans-jp), var(--font-geist-sans)"
            }}
        >
            <div className="grid lg:grid-cols-2 grid-cols-1 w-full h-full min-h-full items-center gap-8 p-8 sm:p-16 rounded-xl border border-stone-200 backdrop-blur-xs">
                <div className="border border-zinc-100 bg-white w-full h-full p-4 sm:p-6 rounded-2xl shadow-2xs transform-gpu transition-all hover:scale-[1.005] hover:bg-zinc-50 hover:shadow-2xl">
                    <div className="flex flex-col justify-between h-full w-full gap-16">
                        <div className="flex flex-row justify-between h-full w-full">
                            <div className="flex flex-col gap-4 justify-center">
                                <div className="flex flex-row gap-2 items-baseline">
                                    <h1 className="text-5xl font-semibold">禍</h1>
                                    <p className="text-base font-light">ka</p>
                                </div>
                                <p className="text-base sm:text-xl font-light">Formally <span className="font-semibold">あきかき</span> (<span className="font-semibold mx-1.5">@akikaki-bot</span>)</p>
                            </div>
                        </div>
                        <div className="flex flex-row gap-2 sm:gap-4 border border-zinc-200 shadow-2xs rounded-xl p-2 justify-center">
                            <LinkBox href="https://x.com/__ka_akmn" imageURL="/icons/x.svg" alt="X" />
                            <LinkBox href="https://github.com/akikaki-bot" imageURL="/icons/github.svg" alt="Github" />
                            <LinkBox href="https://discord.com/users/536489930080256011" imageURL="/icons/discord.svg" alt="Discord" />
                            <LinkBox href="https://blog.akikaki.net" imageURL="/icons/blog-icon.svg" alt="Blog URL" />
                        </div>
                    </div>
                </div>
                <div
                    className="grid grid-rows-2 w-full h-full gap-8"
                    style={{
                        fontFamily: "var(--font-geist-sans)"
                    }}
                >
                    <div className="border-2 border-amber-100 bg-white w-full h-full p-4 rounded-2xl shadow-2xs transform-gpu transition-all hover:scale-[1.005] hover:bg-zinc-50 hover:shadow-2xl">
                        <div className="flex flex-col gap-4 w-full h-full">
                            <h1 className="text-xl sm:text-2xl font-normal"><span className="mx-0.5">✨</span> My skills </h1>
                            <div className="grid box-grid gap-2">
                                <LinkBox href="#" imageURL="/icons/nodejs.svg" alt="Node.js" isNotLink={true} />
                                <LinkBox href="#" imageURL="/icons/typescript.svg" alt="typescript" isNotLink={true} />
                                <LinkBox href="#" imageURL="/icons/javascript.svg" alt="javascript" isNotLink={true} />
                                <LinkBox href="#" imageURL="/icons/react.svg" alt="React" isNotLink={true} />
                                <LinkBox href="#" imageURL="icons/next.svg" alt="Next.js" isNotLink={true} />
                                <LinkBox href="#" imageURL="/icons/python.svg" alt="Python" isNotLink={true} />
                            </div>
                        </div>
                    </div>
                    <div className="border-2 border-yellow-100 bg-white w-full h-full p-4 rounded-2xl shadow-2xs transform-gpu transition-all hover:scale-[1.005] hover:bg-zinc-50 hover:shadow-2xl">
                        <div className="flex flex-col gap-4 h-full w-full">
                            <h1 className="text-xl sm:text-2xl font-normal"><span className="mx-0.5">📚</span> Learning Techs </h1>
                            <div className="grid box-grid gap-2">
                                <LinkBox href="#" imageURL="/icons/zig.svg" alt="Zig" isNotLink={true} />
                                <LinkBox href="#" imageURL="/icons/java.svg" alt="Java" isNotLink={true} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
