import Image from "next/image"
import Link from "next/link"

export function LinkBox({
    href,
    imageURL,
    alt = "Image",
    isNotLink = false
}: {
    href: string,
    imageURL: string,
    alt?: string,
    isNotLink?: boolean
}) {
    return (
        <Link href={isNotLink ? "#" : href} className="h-12 w-12 sm:h-16 sm:w-16 rounded-xl border border-gray-100 bg-gray-50 hover:bg-white items-center justify-center flex transition-colors ">
            <Image
                src={imageURL}
                height={64}
                width={64}
                alt={alt}
                className="rounded-xl"
            />
        </Link>
    )
}
