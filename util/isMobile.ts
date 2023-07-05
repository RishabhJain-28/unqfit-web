"use client";
export default () => {
  if (!navigator) {
    return false;
  }
  return (
    navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/iPhone/i)
  );
};
