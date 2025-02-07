import React from "react";
import { Link } from "react-router";
import Button from "../component/Button";

export default function Home() {
  return (
    <div>
      Home <br></br>
      <Link to="/about-us">About Us </Link>
      <Button title="home" />
    </div>
  );
}
