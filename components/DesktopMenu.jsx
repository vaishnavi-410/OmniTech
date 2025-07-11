'use client';

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function DesktopMenu({ menu }) {
  const [isHover, setHover] = useState(false);

  const toggleHoverMenu = (force) => {
    setHover(force);
  };

  const subMenuAnimate = {
    enter: {
      opacity: 1,
      rotateX: 0,
      transition: { duration: 0.3 },
      display: "block",
    },
    exit: {
      opacity: 0,
      rotateX: -15,
      transition: { duration: 0.3 },
      transitionEnd: { display: "none" },
    },
  };

  const hasSubMenu = menu?.subMenu?.length;

  return (
    <motion.li
      className="group/link relative z-50"
      onHoverStart={() => toggleHoverMenu(true)}
      onHoverEnd={() => toggleHoverMenu(false)}
      key={menu.name}
    >
      {hasSubMenu ? (
        <span className="flex items-center gap-1 hover:text-[#4682B4] hover:bg-white/5 cursor-pointer px-3 py-1 rounded-xl transition-colors duration-200">
          {menu.name}
          <ChevronDown className="mt-[0.6px] group-hover/link:rotate-180 duration-200" />
        </span>
      ) : (
        <Link
          href={menu.path}
          className="flex items-center gap-1 hover:text-[#4682B4] hover:bg-white/5 cursor-pointer px-3 py-1 rounded-xl block transition-colors duration-200"
        >
          {menu.name}
        </Link>
      )}

      {hasSubMenu && (
        <motion.div
          className="sub-menu absolute top-full right-0 z-[1000] mt-2 bg-white text-black p-4 rounded-md shadow-lg min-w-[20rem] max-w-[90vw]"
          initial="exit"
          animate={isHover ? "enter" : "exit"}
          variants={subMenuAnimate}
        >
          <div
            className={`grid gap-6 overflow-y-auto max-h-96 pr-2 ${
              menu.gridCols === 3
                ? "grid-cols-3"
                : menu.gridCols === 2
                ? "grid-cols-2"
                : "grid-cols-1"
            }`}
          >
            {menu.subMenu.map((submenu, i) => (
              <div className="relative cursor-pointer" key={i}>
                {menu.gridCols > 1 && menu?.subMenuHeading?.[i] && (
                  <p className="text-sm mb-4 text-gray-500">
                    {menu?.subMenuHeading?.[i]}
                  </p>
                )}
                <Link
                  href={submenu.path}
                  className="flex items-center gap-x-4 group hover:bg-white/10 hover:text-[#4682B4] p-2 rounded-md transition-colors duration-200"
                >
                  <div className="bg-white/10 w-fit p-2 rounded-md group-hover:bg-white group-hover:text-[#4682B4] duration-300">
                    {submenu.icon && <submenu.icon />}
                  </div>
                  <div>
                    <h6 className="font-semibold">{submenu.name}</h6>
                    <p className="text-sm text-gray-400 group-hover:text-[#87CEFA] duration-200">
                      {submenu.desc}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </motion.li>
  );
}
