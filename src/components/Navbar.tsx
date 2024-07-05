"use client";
import { navlinks } from "@/lib/static_data";
import { Navlink } from "@/lib/types";
import { AlignJustify, X } from "lucide-react";
import Link from "next/link";
import { forwardRef, useEffect, useRef, useState } from "react";

type NavlinksProps = {
  navlinks: Navlink[];
  className?: String;
  navRef?: any;
};
const Navlinks = forwardRef(function Navlinks(
  {
    navlinks,
    className = ` rounded-lg bg-white shadow-md absolute left-0 right-0 top-20 px-3 py-3 z-10`,
  }: NavlinksProps,
  navRef: any
) {
  return (
    <ul className={`${className} `} ref={navRef}>
      {navlinks.map((navItem: Navlink, i) => (
        <li key={i}>
          <Link href={navItem.link}>{navItem.label}</Link>
        </li>
      ))}
    </ul>
  );
});
const Navbar = () => {
  const [collapse, setCollapse] = useState<boolean>(false);
  const navlinksRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        navlinksRef.current != null &&
        !navlinksRef.current.contains(e.target as Node)
      ) {
        setCollapse(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <header className="sticky top-0 z-10">
      <nav className="flex items-center justify-between px-3 py-6 bg-white rounded-md shadow-md sm:px-10 md:px-8 lg:px-28">
        {/* logo */}
        <div className="text-4xl logo">LN</div>
        {/* navlinks */}
        <button
          onClick={() => setCollapse(!collapse)}
          className="h-10 px-2 rounded-full bg-slate-50 md:hidden "
        >
          {collapse ? <X /> : <AlignJustify />}
        </button>
        {collapse && <Navlinks navlinks={navlinks} ref={navlinksRef} />}
        <Navlinks
          navlinks={navlinks}
          className={`hidden md:inline-flex gap-6`}
        />
      </nav>
    </header>
  );
};

export default Navbar;
//TODO: Add animation for entrance
