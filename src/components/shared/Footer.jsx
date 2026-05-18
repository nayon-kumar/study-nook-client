import Image from "next/image";
import Link from "next/link";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 px-4 md:px-16 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Newsletter */}
          <div>
            <Link href="/">
              <Image src="/logo34.png" alt="Logo" width={64} height={64} />
              <h3 className="font-bold text-2xl mt-4">
                <span className="text-[#0F70B7]">Study</span>
                <span className="text-[#3BAA34]">Nook</span>
              </h3>
            </Link>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white mb-3 tracking-wide">QUICK LINKS</h3>
            <div className="flex flex-col gap-2">
              <Link href="/" className="hover:text-white cursor-pointer">
                Home
              </Link>
              <Link href="rooms" className="hover:text-white cursor-pointer">
                Rooms
              </Link>
              <p className="hover:text-white cursor-pointer">About</p>
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white mb-3 tracking-wide">SUPPORT</h3>
            <ul className="space-y-2">
              <li className="hover:text-white cursor-pointer">Help Center</li>
              <li className="hover:text-white cursor-pointer">
                Terms of Service
              </li>
              <li className="hover:text-white cursor-pointer">
                Privacy Policy
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white mb-3 tracking-wide">CONTACT US</h3>
            <ul className="space-y-2">
              <li>+8801234567890</li>
              <li>info@study-nook.com</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">© 2026 StudyNook. All rights reserved.</p>

          <div className="flex gap-4 mt-4 md:mt-0 text-white text-lg">
            <FaFacebookSquare
              size={20}
              className="cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out"
            />
            <FaSquareXTwitter
              size={20}
              className="cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out"
            />
            <FaLinkedin
              size={20}
              className="cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out"
            />
            <GrInstagram
              size={20}
              className="cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
