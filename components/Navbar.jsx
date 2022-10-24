import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  AiOutlineClose,
  AiOutlineMail,
  AiOutlineTwitter,
  AiOutlineMenu,
} from "react-icons/ai";
import { BsInstagram, BsTwitter, BsWhatsapp } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { useRouter } from "next/router";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navbg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#1f2937");
  const router = useRouter();

  useEffect(() => {
    if (
      router.asPath === "/azure_technical_analyst" ||
      router.asPath === "/azure_devops" ||
      router.asPath === "/microsoft_azure_team_lead" ||
      router.asPath === "/azure_cloud_engineer" ||
      router.asPath === "/cloud_customer_support" ||
      router.asPath === "/system_admin"
    ) {
      // setNavBg("transparent");
      setLinkColor("black");
    } else {
      setNavBg("#ecf0f3");
      setLinkColor("#1f2937");
    }
  }, [router]);
  const handleNav = () => {
    setNav(!nav);
  };
  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);
  return (
    <div
      style={{ backgroundColor: `${navbg}` }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100]"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-8 2xl:px-16">
        <Link href="/">
          <span className="font-bold text-3xl text-[#5651e5] cursor-pointer">
            JOADES
          </span>
        </Link>

        <div>
          <ul className="hidden md:flex" style={{ color: `${linkColor}` }}>
            <Link href="/">
              <li className="ml-10 text-sm uppercase  hover:text-[#5651e5]">
                Home
              </li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm uppercase hover:text-[#5651e5]">
                About
              </li>
            </Link>
            <Link href="/#certifications">
              <li className="ml-10 text-sm uppercase hover:text-[#5651e5]">
                Certifications
              </li>
            </Link>
            <Link href="/#experience">
              <li className="ml-10 text-sm uppercase hover:text-[#5651e5]">
                Experience
              </li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 text-sm uppercase hover:text-[#5651e5]">
                Contact
              </li>
            </Link>
          </ul>
          <div className="md:hidden cursor-pointer" onClick={handleNav}>
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:[45%] h-screen bg-[#ecf0f3] px-10 py-4 ease-in duration-500"
              : "fixed left-[-100%] top-0  px-10 py-4 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/">
                <span className="font-bold text-4xl text-[#5651e5] cursor-pointer">
                  ZO
                </span>
              </Link>
              <div
                className="rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer"
                onClick={handleNav}
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Let&apos;s build something legendary together
              </p>
            </div>
          </div>
          <div className="flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  About
                </li>
              </Link>
              <Link href="/#certifications">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Certifications
                </li>
              </Link>
              <Link href="/#experience">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Experience
                </li>
              </Link>
              <Link href="/#contact">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Contacts
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
