import * as React from "react";
import Link from "next/link";
import AccountDropdown from "./AccountDropdown";

import {
  HeaderBlock,
  Logo,
  LogoWrapper,
  LogoImageHolder,
  LogoImage,
  LogoWords,
  HeaderNav,
  NavEntry,
} from "./StyledHeader";

import HamburgerMenu from "../HamburgerMenu";


interface HeaderProps {
  userData: {
    id: number,
    name: string,
    username: string,
    email: string,
    bio: string,
    profilePictureUrl: string,
    socialMediaLinks: string[],
    totalPoints: number,
    totalSeasonPoints: number,
    availablePoints: number,
    volunteerHours: number,
    discord: {
      id: number,
      avatar: string,
      username: string,
      discriminator: string,
    }
  }
}


const Header: React.FC<HeaderProps> = ({ userData }) => {
  return (
    <HeaderBlock>
      <Logo>
        <LogoWrapper>
          <Link href="../" replace>
            <a>
              <LogoImageHolder>
                <LogoImage />
              </LogoImageHolder>
              <LogoWords>Dev Launchers</LogoWords>
            </a>
          </Link>
        </LogoWrapper>
      </Logo>
      <HeaderNav>
        <Link href="../create" replace>
          <a>
            <NavEntry>CREATE</NavEntry>
          </a>
        </Link>
        <Link href="../learn" replace>
          <a>
            <NavEntry>LEARN</NavEntry>
          </a>
        </Link>
        {/* }
          <Link href={"/play"} className="nav-link">
            <NavEntry>PLAY</NavEntry>
          </Link>
          { */}
        <Link href="../support-us" replace>
          <a>
            <NavEntry>SUPPORT US</NavEntry>
          </a>
        </Link>
        <Link href="/">
          <a>
            <NavEntry>JOIN</NavEntry>
          </a>
        </Link>
      </HeaderNav>
      <div />
      <AccountDropdown userData={userData} />
      <HamburgerMenu userData={userData} />
    </HeaderBlock>
  );
};

export default Header;