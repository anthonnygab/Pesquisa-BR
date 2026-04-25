import Image from "next/image"

export default function Navbar() {
    return (
        <div className="flex flex-row flex-wrap justify-center gap-3 md:gap-4 w-full md:w-auto">
          <Image 
           src="/br-logo.png"
           alt="Logo"
           width={300}
           height={300}
          />
        </div>
    )
}