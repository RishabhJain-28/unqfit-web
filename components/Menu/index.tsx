"use client";
import React, { useState, useRef, useEffect } from "react";
import MenuItem from "./MenuItem";

interface MenuProps {
  renderToggleButton: React.ReactElement<{
    onClick: () => void;
    onMouseLeave: () => void;
    onMouseOver: () => void;
  }>;
  children?: React.ReactNode[];
}

export default function Menu({
  renderToggleButton: toggleButton,
  children,
}: MenuProps) {
  const [showMenu, setShowMenu] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        setShowMenu(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
  return (
    <div ref={ref} className="relative">
      <div className="flex  items-center justify-center overflow-hidden   bg-black">
        {React.cloneElement(toggleButton, {
          onClick: () => {
            setShowMenu(!showMenu);
          },
        })}
      </div>

      {showMenu ? (
        <div
          className="my-2 absolute  right-0 z-50 w-56 rounded-lg    bg-white shadow-lg"
          role="menu"
        >
          <div className=" divide-y divide-black ">
            {children?.map((item, i) => (
              <MenuItem
                key={i}
                onClick={() => {
                  setShowMenu(false);
                }}
              >
                {item}
              </MenuItem>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
