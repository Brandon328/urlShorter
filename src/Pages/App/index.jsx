import "./App.css";
import logo from "/images/logo.svg";
import iWorking from "/images/illustration-working.svg";
import brankIcon from "/images/icon-brand-recognition.svg";
import detailIcon from "/images/icon-detailed-records.svg";
import fullyIcon from "/images/icon-fully-customizable.svg";
import { RxHamburgerMenu } from "react-icons/rx";
import GetStartBtn from "../../Components/GetStartedBtn";
import ShortenBox from "../../Components/ShortenBox";
import NavBarMenu from "../../Components/NavBarMenu";
import LinksBox from "../../Components/LinksBox";
import Card from "../../Components/Card";

function App() {
  return (
    <>
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
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
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
          <p className="text-center text-neutral-grayishviolet">
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>
        <div>
          <Card
            src={brankIcon}
            title="Brand Recognition"
            description="Boost your brand recognition with each click. Generic links don’t 
  mean a thing. Branded links help instil confidence in your content."
          />
          <Card
            src={detailIcon}
            title="Detailed Records"
            description="Gain insights into who is clicking your links. Knowing when and where 
  people engage with your content helps inform better decisions."
          />
          <Card
            src={fullyIcon}
            title="Fully Customizable"
            description="Improve brand awareness and content discoverability through customizable 
  links, supercharging audience engagement."
          />
        </div>
      </section>
    </>
  );
}

export default App;
