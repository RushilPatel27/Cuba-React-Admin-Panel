import React from "react";
import { useLocation } from "react-router";

export default function Footer() {
  const { pathname } = useLocation();

  if (pathname === "/" || pathname === "/dashboard");
  return <></>;

  return <div>Footer</div>;
}
