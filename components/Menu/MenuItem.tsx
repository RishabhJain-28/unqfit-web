import React from "react";

interface MenuItemProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}
export default function MenuItem({ children, ...htmlDivProps }: MenuItemProps) {
  return (
    <div {...htmlDivProps}>
      <a
        href="#"
        className=" text-black     flex justify-center items-center text-lg   p-2 m-3 rounded-md hover:bg-gray-200 hover:text-black"
        role="menuitem"
      >
        {children}
      </a>
    </div>
  );
}
