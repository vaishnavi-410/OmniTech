'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";

export default function MobMenu({ Menus }) {
  const [isOpen, setIsOpen] = useState(false);
  const [clicked, setClicked] = useState(null);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
    setClicked(null);
  };

  const subMenuDrawer = {
    enter: {
      height: "auto",
      overflow: "hidden",
    },
    exit: {
      height: 0,
      overflow: "hidden",
    },
  };

  return (
    <div>
      <button className="lg:hidden z-[999] relative" onClick={toggleDrawer}>
        {isOpen ? <X /> : <Menu />}
      </button>

      <motion.div
        className="fixed left-0 right-0 top-16 overflow-y-auto h-full bg-[#18181A] backdrop-blur text-white p-6 pb-20"
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? "0%" : "-100%" }}
      >
        <ul>
          {Menus.map(({ name, path, subMenu }, i) => {
            const isClicked = clicked === i;
            const hasSubMenu = subMenu?.length;

            return (
              <li key={name}>
                {hasSubMenu ? (
                  <span
                    className="flex justify-between items-center p-4 hover:bg-white/5 rounded-md cursor-pointer"
                    onClick={() => setClicked(isClicked ? null : i)}
                  >
                    {name}
                    <ChevronDown className={`ml-auto transition-transform ${isClicked ? "rotate-180" : ""}`} />
                  </span>
                ) : (
                  <Link
                    href={path}
                    className="block p-4 hover:bg-white/5 rounded-md cursor-pointer"
                    onClick={toggleDrawer}
                  >
                    {name}
                  </Link>
                )}

                {/* Submenu */}
                {hasSubMenu && (
                  <motion.ul
                    initial="exit"
                    animate={isClicked ? "enter" : "exit"}
                    variants={subMenuDrawer}
                    className="ml-5"
                  >
                    {subMenu.map(({ name, icon: Icon, path }) => (
                      <li key={name}>
                        <Link
                          href={path}
                          className="flex items-center gap-2 p-2 hover:bg-white/5 rounded-md cursor-pointer block"
                          onClick={toggleDrawer}
                        >
                          {Icon && <Icon size={17} />}
                          {name}
                        </Link>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </li>
            );
          })}
        </ul>
      </motion.div>
    </div>
  );
}
