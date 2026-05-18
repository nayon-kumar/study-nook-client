"use client";

import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

const Hero = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 flex items-center justify-center h-full text-center px-4 animate__animated animate__fadeInUp">
        <div className="max-w-3xl text-white">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
            Find Your Perfect <span className="text-[#0F70B7]">Study Room</span>
          </h1>

          <p className="my-6 text-gray-200">
            Browse and book quiet, private study rooms in your library. <br />
            List your own room and earn.
          </p>

          <div className="flex justify-center gap-4">
            <Link
              href="/rooms"
              className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-lg font-semibold transition cursor-pointer flex items-center gap-2"
            >
              <p>Explore Rooms</p> <FaArrowRight />
            </Link>

            <Link
              href="/my-bookings"
              className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition cursor-pointer"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
