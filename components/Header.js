import React from "react";
import Image from "next/image";
import logo from "../images/logo.png";
import HeaderItem from "./HeaderItem";
import Typography from "@mui/material/Typography";
import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";
function Header() {
  return (
    <header
      className="flex flex-col sm:flex-row m-5 justify-between
    items-center h-auto"
    >
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItem title="Home" Icon={HomeIcon} />
        <HeaderItem title="Trending" Icon={LightningBoltIcon} />
        <HeaderItem title="Verified" Icon={BadgeCheckIcon} />
        <HeaderItem title="Collection" Icon={CollectionIcon} />
        <HeaderItem title="Search" Icon={SearchIcon} />
        <HeaderItem title="Profile" Icon={UserIcon} />
      </div>
      <Typography variant="h3" className="text-white h-8 mb-11">
        Hulu
      </Typography>
    </header>
  );
}

export default Header;
