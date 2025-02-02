import React from "react";
import logoLanding from "./../../../assets/svg/Landing/logoSite.svg";
// import seachIcon from "./../../../assets/svg/Landing/searchicon.svg"
import seachIcon from "./../../../assets/svg/Landing/searchicon.svg";
import topProfile from "./../../../assets/svg/ArticlesDetails/profileimg.svg";
import topIcon from "./../../../assets/svg/ArticlesDetails/profileimg.svg";
import { Link } from "react-router-dom";
import DarkLightToggle from "../DarkMode.js";
import { ResponsiveMenu } from "../Header";

const HeaderUserlogin = () => {
  return (
    <div className="bg-gradient-to-r from-green-300 to-gray-50 dark:dark:bg-slate-900 dark:bg-none">
      <div className="flex justify-between items-center container mx-auto px-20 h-20">
        <div className="flex justify-center items-center">
          <DarkLightToggle />
        </div>

        <div className="flex justify-between items-center dark:text-white hidden lg:inline-block">
          <Link to="/about">
            {" "}
            <span className="hover:bg-[#9e969657] hover:text-[#158B68] w-24 text-center rounded-lg cursor-pointer items-center p-1">
              درباره ما
            </span>
          </Link>
          <Link to="/news-articles">
            {" "}
            <span className="hover:bg-[#9e969657] hover:text-[#158B68] mx-4 w-24 text-center rounded-lg cursor-pointer items-center p-1">
              مقالات
            </span>
          </Link>
          <Link to="">
            {" "}
            <span className="hover:bg-[#9e969657] hover:text-[#158B68] mr-4 w-24 text-center rounded-lg cursor-pointer items-center p-1">
              دوره ها
            </span>
          </Link>
          <Link to="/">
            {" "}
            <span className="hover:bg-[#9e969657] hover:text-[#158B68] w-24 text-center rounded-lg cursor-pointer items-center p-1">
              صفحه اصلی{" "}
            </span>
          </Link>
        </div>
        <div className="flex justify-center items-center dark:text-white">
          <Link to="/">
            <span className="cursor-pointer">آکادمی اچ وان</span>
          </Link>
          <Link to="/">
            <img className="h-10 cursor-pointer" src={logoLanding} alt="" />
          </Link>
        </div>

        <ResponsiveMenu />
      </div>
    </div>
  );
};

export { HeaderUserlogin };
