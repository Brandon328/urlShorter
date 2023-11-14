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
import LinksBox from "../../Components/LinksBox";
import Card from "../../Components/Card";
import MenuList from "../../Components/MenuList";

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

  return (
    <>
      <main className="px-6 py-8">
        <header className="flex justify-between">
          <img src={logo} alt="logo" />
          <NavBarMenu></NavBarMenu>
          <RxHamburgerMenu className="text-[30px] text-neutral-grayishviolet" />
        </header>
        <section className="mt-5">
          <div className="w-[100%]">
            <img
              className="w-[150%] max-w-none mb-7"
              src={iWorking}
              alt="Illustration working"
            />
          </div>
          <div className="text-center">
            <h2 className="text-4xl font-bold text-neutral-darkblue mb-3">
              More than just shorter links
            </h2>
            <p className="text-neutral-grayishviolet mb-6">
              Build your brand’s recognition and get detailed insights on how
              your links are performing.
            </p>
            <GetStartBtn />
          </div>
          <section className="my-16">
            <ShortenBox />
            <LinksBox
              className="my-5"
              link="https://restofworld.org/2023/india-politicians-iphone-hacking/"
              slink="https://rel.ink/gob3X9"
            />
          </section>
        </section>
        <section className="py-6">
          <div>
            <h2 className="text-center text-2xl font-bold mb-4">
              Advanced Stadistics
            </h2>
            <p className="text-center text-neutral-grayishviolet mb-8">
              Track how your links are performing across the web with our
              advanced statistics dashboard.
            </p>
          </div>
          <div
            className="before:inline-block before:content-[''] 
          before:w-2 before:h-full before:absolute relative
          before:left-1/2 before:z-0 before:bg-primary-cyan"
          >
            <Card
              src={brankIcon}
              title="Brand Recognition"
              description="Boost your brand recognition with each click. Generic links don’t 
    mean a thing. Branded links help instil confidence in your content."
              className="my-24"
            />
            <Card
              src={detailIcon}
              title="Detailed Records"
              description="Gain insights into who is clicking your links. Knowing when and where 
    people engage with your content helps inform better decisions."
              className="my-24"
            />
            <Card
              src={fullyIcon}
              title="Fully Customizable"
              description="Improve brand awareness and content discoverability through customizable 
    links, supercharging audience engagement."
              className="mt-24"
            />
          </div>
        </section>
      </main>
      <section className="relative py-14 bg-primary-darkviolet text-center text-white-0 w-{100vw}">
        <h2 className="text-2xl font-bold mb-5 z-10 relative">
          Boost your links today
        </h2>
        <GetStartBtn className="z-10 relative"></GetStartBtn>
        <img
          className="absolute top-0 right-0 w-full h-full"
          src={boostBg}
          alt="image"
        />
      </section>
      <section className="bg-neutral-darkviolet text-white-0 p-10 text-center">
        <h2 className="text-2xl font-bold">Shortly</h2>
        <div>
          <MenuList title="Features" items={featuresItems} />
          <MenuList title="Resources" items={resourcesItems} />
          <MenuList title="Company" items={companyItems} />
        </div>
        <div className="flex justify-center space-x-7 text-3xl">
          <a href="https://www.facebook.com/">
            <RiFacebookBoxFill />
          </a>
          <a href="https://twitter.com/home">
            <RiTwitterXFill />
          </a>
          <a href="https://www.pinterest.com/">
            <FaPinterestP />
          </a>
          <a href="https://www.instagram.com/">
            <FaInstagram />
          </a>
        </div>
      </section>
    </>
  );
}

export default App;
