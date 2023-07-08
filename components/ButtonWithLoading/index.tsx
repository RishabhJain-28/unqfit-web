import React from "react";
import LoadingSpinner from "../LoadingSpinner";

export interface ButtonWithLoadingProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading: boolean;
  // onClick?: (_: any) => void;
  gradiant?: boolean;
}
const ButtonWithLoading: React.FC<
  React.PropsWithChildren<ButtonWithLoadingProps>
> = ({
  loading,
  // onClick,
  children,
  gradiant = false,
  ...props
}) => {
  if (loading) {
    return <LoadingSpinner />;
  }
  return (
    <button
      // onClick={onClick}
      //   className="block w-1/3 rounded-lg bg-primrary-variant px-5 py-3 text-sm font-medium text-black"
      className={`block w-1/3 rounded-lg px-5 py-3 text-lg font-medium text-black ${
        gradiant ? "btn-grad" : "bg-primrary"
      }`}
      {...props}
    >
      {children}
    </button>
  );
};

export default ButtonWithLoading;
