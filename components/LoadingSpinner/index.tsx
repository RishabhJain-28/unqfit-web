import React from "react";

export default function LoadingSpinner() {
  return (
    <div className="spinner-box h-10 w-10">
      <div className="circle-border">
        <div className="circle-core"></div>
      </div>
    </div>
  );
}
