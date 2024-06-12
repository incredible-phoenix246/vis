"use client";
import { Add, HambergerMenu, Notification } from "iconsax-react";
import { cn, shrinkString } from "@/utils";
import { NormalMobileSideBar } from "../sidebars/mobile";
import { handleMouseEnter } from "@/utils/text-effect";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useStateCtx } from "@/context/StateCtx";
import { useSession } from "next-auth/react";
import Link from "next/link";

const NormalHeader = () => {
  const { openSidebar, setOpenSidebar } = useStateCtx();
  const { data: session } = useSession();
  const pathname = usePathname().substring(1);

  return (
    <header
      className={cn(
        "lg:px-9 px-3 border-b border-gray-200 dark:border-primary-light h-[50px] sm:h-[70px] md:h-[89px] flex items-center justify-between fixed md:relative max-md:top-0 max-md:left-0 max-md:z-[99] select-none bg-white/80 dark:bg-gray-900 backdrop-blur-lg w-full",
        {
          "md:overflow-hidden": openSidebar,
        }
      )}
    >
      <div
        className={cn("flex items-center gap-x-4", {
          "w-full ": openSidebar,
        })}
      >
        <button
          tabIndex={0}
          aria-haspopup
          aria-expanded={openSidebar}
          type="button"
          className={cn(
            "md:hidden rounded-full focus-visible:bg-black/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-light",
            {
              "rotate-45 absolute right-1 top-1 z-[9999] text-white":
                openSidebar,
            }
          )}
          onClick={() => setOpenSidebar(!openSidebar)}
        >
          {openSidebar ? (
            <Add size={60} className="text-white" />
          ) : (
            <HambergerMenu size={32} className="text-primary" />
          )}
        </button>
        {pathname === "dashboard" ? (
          <div className="flex gap-x-2 sm:gap-x-4 items-center">
            <h2 className="hidden md:inline sm:text-3xl capitalize font-medium text-primary">
              Welcome back! {/* @ts-ignore */}
              {shrinkString({ str: session?.user?.fullName!, len: 10 })}
            </h2>
            <h2 className="max-[370px]:text-base max-[500px]:text-lg text-xl md:hidden capitalize font-medium text-primary">
              {pathname}
            </h2>
          </div>
        ) : (
          <div className="flex gap-x-2 sm:gap-x-4 items-center">
            <h2
              onMouseEnter={handleMouseEnter}
              data-value={pathname}
              className="max-[370px]:text-base max-[500px]:text-lg text-xl sm:text-3xl capitalize font-medium text-primary"
            >
              {pathname}
            </h2>
          </div>
        )}
      </div>
      <div className="flex items-center  md:hidden gap-x-3 xl:gap-x-5  [&>button]:font-medium [&>button]:text-primary">
        <button type="button">
          <Notification size={24} />
        </button>
        <Link
          href="/profile"
          type="button"
          className="w-8 h-8 border border-primary-light rounded-full"
        >
          <Image
            src={
              session?.user?.image
                ? session.user.image
                : `https://ui-avatars.com/api/?name=${session?.user
                    ?.email!}&background=random`
            }
            alt="user"
            width={32}
            height={32}
            className="rounded-full"
          />
        </Link>
      </div>
      <NormalMobileSideBar />
    </header>
  );
};

export { NormalHeader };