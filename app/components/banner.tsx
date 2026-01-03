"use client";

import Link from "next/link";
import { useState } from "react";

const Banner = () => {
  const [display, setDisplay] = useState("block");

  if (display === "hidden") {
    return;
  }

  return (
    <div className="bg-black text-white text-center py-4 px-8 flex justify-between items-center">
      <div className="flex-1 text-center">
        <h1 className="font-['DM-Sans'] text-sm md:text-xl font-normal">
          Sign up and get 20% off to your first order.{" "}
          <span>
            <Link
              href="/signup"
              onClick={() => {
                setDisplay("hidden");
              }}
              className="underline hover:no-underline"
            >
              Sign Up Now
            </Link>
          </span>
        </h1>
      </div>
      <button
        onClick={() => setDisplay("hidden")}
        className="ml-4 text-white hover:text-gray-300 focus:outline-none"
        aria-label="Close announcement"
      >
        ✕
      </button>
    </div>
  );
};

export default Banner;
