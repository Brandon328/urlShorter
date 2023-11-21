import "./App.css";
import logo from "/images/logo.svg";
import iWorking from "/images/illustration-working.svg";
import brankIcon from "/images/icon-brand-recognition.svg";
import detailIcon from "/images/icon-detailed-records.svg";
import fullyIcon from "/images/icon-fully-customizable.svg";
import boostBg from "/images/bg-boost-mobile.svg";

import { RxHamburgerMenu } from "react-icons/rx";
import { FaPinterestP } from "react-icons/fa";
import { RiFacebookBoxFill } from "react-icons/ri";
import { RiTwitterXFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";

import GetStartBtn from "../../Components/GetStartedBtn";
import ShortenBox from "../../Components/ShortenBox";
import NavBarMenu from "../../Components/NavBarMenu";
// import LinksBox from "../../Components/LinksBox";
import Card from "../../Components/Card";
import MenuList from "../../Components/MenuList";
// import React from "react";

function App() {
  const featuresItems = [
    {
      title: "Link Shortening",
      url: "https://www.frontendmentor.io/challenges",
    },
    {
      title: "Branded Links",
      url: "https://www.frontendmentor.io/challenges",
    },
    {
      title: "Analytics",
      url: "https://www.frontendmentor.io/challenges",
    },
  ];
  const resourcesItems = [
    {
      title: "Blog",
      url: "https://www.frontendmentor.io/challenges",
    },
    {
      title: "Developers",
      url: "https://www.frontendmentor.io/challenges",
    },
    {
      title: "Support",
      url: "https://www.frontendmentor.io/challenges",
    },
  ];
  const companyItems = [
    {
      title: "About",
      url: "https://www.frontendmentor.io/challenges",
    },
    {
      title: "Our Team",
      url: "https://www.frontendmentor.io/challenges",
    },
    {
      title: "Careers",
      url: "https://www.frontendmentor.io/challenges",
    },
    {
      title: "Contact",
      url: "https://www.frontendmentor.io/challenges",
    },
  ];
  function toggleShowNavBar() {
    const nav = document.querySelector("#navMenu");
    nav.classList.toggle("hidden");
  }

  return (
    <>
      <main
        className="pt-10 pb-40
    bg-white-0 sm:pb-0 relative
      lg:pt-12
      "
      >
        <header
          className="flex justify-between px-6 
        md:px-14 lg:px-24 xl:px-48 2xl:px-80
        relative items-center
        "
        >
          <img src={logo} alt="logo" />
          <NavBarMenu className="hidden lg:block"></NavBarMenu>
          <RxHamburgerMenu
            onClick={toggleShowNavBar}
            className="text-[30px] 
          text-neutral-grayishviolet lg:hidden"
          />
        </header>
        <section
          className="mt-6 sm:grid sm:items-center 
        sm:gap-8 sm:grid-cols-2 sm:pb-24 sm:mt-8
        px-6 overflow-x-hidden md:px-14 lg:px-24
        xl:px-48 2xl:px-80
        "
        >
          <div className="w-[100%] sm:order-5">
            <img
              className="w-[150%] max-w-3xl mb-7 inline-block sm:m-0"
              src={iWorking}
              alt="Illustration working"
            />
          </div>
          <div className="text-center sm:text-start">
            <h2
              className="text-4xl font-bold 
            text-neutral-darkblue mb-3
            2xl:text-6xl
            "
            >
              More than just shorter links
            </h2>
            <p className="text-neutral-grayishviolet mb-6">
              Build your brand’s recognition and get detailed insights on how
              your links are performing.
            </p>
            <GetStartBtn />
          </div>
        </section>
        <section
          className="absolute w-full top-full 
          -translate-y-1/2 px-6 md:px-14 lg:px-24
          xl:px-48 2xl:px-80
          "
        >
          <ShortenBox />
          {/* <LinksBox
              className="my-5"
              link="https://restofworld.org/2023/india-politicians-iphone-hacking/"
              slink="https://rel.ink/gob3X9"
            /> */}
        </section>
      </main>
      <section
        className="px-6 pb-8 pt-40 sm:pt-32 
      md:px-14 lg:px-24 xl:px-48 2xl:px-80 2xl:pt-44 2xl:pb-14"
      >
        <div>
          <h2
            className="text-center text-2xl 
          font-bold mb-4 2xl:text-3xl"
          >
            Advanced Stadistics
          </h2>
          <p className="text-center text-neutral-grayishviolet mb-8">
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>
        <div
          className="before:inline-block before:content-[''] 
          before:w-2 before:h-full before:absolute relative
          before:left-1/2 before:z-0 before:bg-primary-cyan
          md:grid md:grid-cols-3 md:gap-5 md:before:w-full md:before:h-2
          md:before:left-0 md:before:top-1/2 md:mt-20 md:mb-10
          "
        >
          <Card
            src={brankIcon}
            title="Brand Recognition"
            description="Boost your brand recognition with each click. Generic links don’t 
    mean a thing. Branded links help instil confidence in your content."
            className="my-24 md:mb-[90px]"
          />
          <Card
            src={detailIcon}
            title="Detailed Records"
            description="Gain insights into who is clicking your links. Knowing when and where 
    people engage with your content helps inform better decisions."
            className="my-24 md:mt-[45px] md:mb-[45px]"
          />
          <Card
            src={fullyIcon}
            title="Fully Customizable"
            description="Improve brand awareness and content discoverability through customizable 
    links, supercharging audience engagement."
            className="mt-24 md:mt-[90px]"
          />
        </div>
      </section>

      <section
        className="relative py-14 bg-primary-darkviolet 
      text-center text-white-0 w-{100vw} 
      "
      >
        <h2 className="text-2xl font-bold mb-5 z-10 relative">
          Boost your links today
        </h2>
        <p
          className="bg-white-0 
        w-fit inline-block rounded-full
        "
        >
          <GetStartBtn className="z-10 relative"></GetStartBtn>
        </p>
        <img
          className="absolute top-0 right-0 w-full h-full"
          src={boostBg}
          alt="image"
        />
      </section>
      <section
        className="bg-neutral-darkviolet text-white-0 
      p-10 text-center md:px-14 lg:px-24
      lg:grid lg:grid-cols-5 lg:text-start
      xl:px-48 2xl:px-80 2xl:grid-cols-6
      "
      >
        <h2
          className="text-2xl font-bold 
        lg:col-span-1 2xl:col-span-2"
        >
          Shortly
        </h2>
        <div
          className="md:grid md:grid-cols-3 
        md:gap-7 lg:col-span-3 2xl:col-span-3
        "
        >
          <MenuList title="Features" items={featuresItems} />
          <MenuList title="Resources" items={resourcesItems} />
          <MenuList title="Company" items={companyItems} />
        </div>
        <div
          className="flex justify-center space-x-7 
        text-3xl lg:col-span-1 lg:space-x-4
        2xl:space-x-8 2xl:col-span-1
        "
        >
          <a
            href="https://www.facebook.com/"
            className="hover:text-primary-cyan"
          >
            <RiFacebookBoxFill />
          </a>
          <a
            href="https://twitter.com/home"
            className="hover:text-primary-cyan"
          >
            <RiTwitterXFill />
          </a>
          <a
            href="https://www.pinterest.com/"
            className="hover:text-primary-cyan"
          >
            <FaPinterestP />
          </a>
          <a
            href="https://www.instagram.com/"
            className="hover:text-primary-cyan"
          >
            <FaInstagram />
          </a>
        </div>
      </section>
    </>
  );
}

export default App;
