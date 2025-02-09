import React from "react";
import { useLocation } from "react-router";

export default function Header() {
  const { pathname } = useLocation();

  if (pathname === "/" || pathname === "/dashboard");

  return (
    <>
      <div>My Application</div>
    </>
  );
}
