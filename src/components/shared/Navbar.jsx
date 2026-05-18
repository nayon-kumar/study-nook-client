"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navlink from "./Navlink";
import { Person, Bars, Xmark } from "@gravity-ui/icons";
import { Avatar, Button } from "@heroui/react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  //   const { data: session, isPending } = authClient.useSession();

  //   const user = session?.user;

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="fixed w-full sm:w-auto bg-white border-2 sm:top-4 sm:left-4 sm:right-4 z-50 sm:rounded-2xl shadow-lg">
      <nav className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between relative">
          {/* Logo - Left */}
          <div className="flex items-center">
            <Link
              href="/"
              onClick={closeMenu}
              className="flex items-center gap-3"
            >
              <Image
                width={64}
                height={24}
                src="/logo34.png"
                alt="Logo"
                priority
              />
              <h3 className="font-bold text-2xl">
                <span className="text-[#0F70B7]">Study</span>
                <span className="text-[#3BAA34]">Nook</span>
              </h3>
            </Link>
          </div>

          {/* Desktop Navigation - Center (Main Links) */}
          <div className="hidden lg:flex items-center gap-6 absolute left-1/2 -translate-x-1/2">
            <Navlink href="/">Home</Navlink>
            <Navlink href="/rooms">Rooms</Navlink>
            <Navlink href="/add-room">Add Room</Navlink>
            <Navlink href="/my-listings">My Listings</Navlink>
            <Navlink href="/my-bookings">My Bookings</Navlink>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-6">
            {/* Desktop Auth Links */}
            <div className="hidden lg:flex items-center gap-6">
              {/* {user ? (
                <>
                  <Link href="/profile">
                    <Avatar>
                      <Avatar.Image
                        referrerPolicy="no-referrer"
                        alt={user?.name}
                        src={user?.image}
                      />
                      <Avatar.Fallback>{user.name.charAt(0)}</Avatar.Fallback>
                    </Avatar>
                  </Link>
                  <Button
                    onClick={async () => await authClient.signOut()}
                    variant="danger"
                  >
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Navlink href="/login">Login</Navlink>
                  <Navlink href="/signup">Sign Up</Navlink>
                </>
              )} */}
              <>
                <Navlink href="/login">Login</Navlink>
                <Navlink href="/register">Register</Navlink>
              </>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 text-gray-700 hover:text-black focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <Xmark className="w-6 h-6" />
              ) : (
                <Bars className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-5 mb-4 pt-6 border-t border-gray-200">
            <div className="flex flex-col gap-5 text-lg">
              <Navlink href="/" onClick={closeMenu}>
                Home
              </Navlink>
              <Navlink href="/rooms" onClick={closeMenu}>
                Rooms
              </Navlink>
              <Navlink href="/add-room" onClick={closeMenu}>
                Add Room
              </Navlink>
              <Navlink href="/my-listings" onClick={closeMenu}>
                My Listings
              </Navlink>
              <Navlink href="/my-bookings" onClick={closeMenu}>
                My Bookings
              </Navlink>

              <div className="pt-4 border-t border-gray-300 flex flex-col gap-5">
                {/* {user ? (
                  <>
                    <Link
                      onClick={closeMenu}
                      className="flex items-center justify-center"
                      href="/profile"
                    >
                      <Avatar>
                        <Avatar.Image
                          referrerPolicy="no-referrer"
                          alt={user?.name}
                          src={user?.image}
                        />
                        <Avatar.Fallback>{user.name.charAt(0)}</Avatar.Fallback>
                      </Avatar>
                    </Link>
                    <Button
                      className="w-full"
                      onClick={async () => await authClient.signOut()}
                      variant="danger"
                    >
                      Logout
                    </Button>
                  </>
                ) : (
                  <>
                    <Navlink onClick={closeMenu} href="/login">
                      Login
                    </Navlink>
                    <Navlink onClick={closeMenu} href="/signup">
                      Sign Up
                    </Navlink>
                  </>
                )} */}
                <>
                  <Navlink onClick={closeMenu} href="/login">
                    Login
                  </Navlink>
                  <Navlink onClick={closeMenu} href="/register">
                    Register
                  </Navlink>
                </>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
