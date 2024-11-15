import { useLocation } from "react-router-dom";
import { brainwave } from "../assets";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

import { navigation } from "../constants";
import Button from "./Button";

import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { useState } from "react";

export const Header = () => {
  const pathName = useLocation();
  const [openNavigtion, setOpenNavigtion] = useState(false);

  const toggleNavigation = () => {
    if (openNavigtion) {
      setOpenNavigtion(false);
      enablePageScroll();
    } else {
      setOpenNavigtion(true);
      disablePageScroll();
    }
  };
  const handleClick = () => {
    if (!openNavigtion) return;
    enablePageScroll();
    setOpenNavigtion(false);
  };
  return (
    <div
      className={`fixed top-0 left-0 z-50 w-full  border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
        openNavigtion ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a href="#hero" className="block w-[12rem] xl:mr-8">
          <img src={brainwave} alt="BRAINWAVE" width={190} height={40} />
        </a>
        <nav
          className={`${
            openNavigtion ? "flex" : "hidden"
          }  fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-6 py-6 md:py-8 lg:mr-0.25 lg:text-xs lg:font-semibold ${
                  item.url === pathName.hash
                    ? "z-2 lg:text-n-1"
                    : "lg:text-n-1/50"
                } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
              >
                {item.title}
              </a>
            ))}
          </div>
          <HamburgerMenu />
        </nav>
        <a
          href="#signup"
          className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block"
        >
          New account
        </a>
        <Button className="hidden lg:flex">sign in</Button>
        <Button
          className={`ml-auto lg:hidden`}
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigtion} />
        </Button>
      </div>
    </div>
  );
};
