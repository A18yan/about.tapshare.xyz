import Image from "next/image";
import logo from "../assets/logo.jpg";
import Link from "next/link";
export default function Nav() {
  return (
    <>
      <div className="@container my-2 border-b pb-[.55em] border-[#585858]">
        <div className="w-full flex justify-center @[45em]:justify-between @[45em]:px-[2em] items-center">
          <div
            className="flex items-center gap-x-1 cursor-pointer select-none"
            title="TapShare"
          >
            <div className="h-[2.5em] w-[2.5em] @[45em]:h-[2.6em] @[45em]:w-[2.6em] rounded-full border border-[#585858]/90 overflow-hidden ">
              <Image
                src={logo}
                alt="tapshare"
                priority
                className="h-full w-full object-cover rounded-[inherit]"
              />
            </div>
            <h1 className="text-[1.1rem] font-mono font-semibold">Share</h1>
          </div>

          <div className="flex items-center gap-x-5">
            <div className="hidden @[45em]:flex gap-x-5">
              <Link
                href="#"
                className="font-mono tracking-wider hover:tracking-[.095em] @[55em]:text-[1.05rem] before:content-[''] relative before:absolute before:h-[1.5px] before:bg-pink-500 before:w-full after:content-[''] before:bottom-[-1px] after:absolute after:h-[3px] after:bg-pink-500 after:w-[.75em] after:bottom-[-1.5px] after:rounded-l-md after:left-0 hover:after:left-auto hover:after:right-0 hover:after:rounded-r-md duration-200 delay-100 @[70em]:text-[1.1rem] @[70em]:after:h-[3.5px] @[70em]:after:bottom-[-2px] hover:text-slate-300"
              >
                Home
              </Link>
              <Link
                href="#"
                className="font-mono tracking-normal hover:tracking-wider @[55em]:text-[1.05rem] before:content-[''] relative before:absolute before:h-[1.5px] before:bg-pink-500 before:w-full after:content-[''] before:bottom-[-1px] after:absolute after:h-[3px] after:bg-pink-500 after:w-[.75em] after:bottom-[-1.5px] after:rounded-l-md after:left-0 hover:after:left-auto hover:after:right-0 hover:after:rounded-r-md duration-200 delay-100 @[70em]:text-[1.1rem] @[70em]:after:h-[3.5px] @[70em]:after:bottom-[-2px] hover:text-slate-300"
              >
                Features
              </Link>
            </div>
            <div className="">
              <Link
                href="#"
                className=" hidden @[45em]:block border text-[1rem] px-[1.2rem] py-[.45em] rounded-sm hover:tracking-wide font-semibold transition-[.5s] font-mono"
              >
                Try now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
