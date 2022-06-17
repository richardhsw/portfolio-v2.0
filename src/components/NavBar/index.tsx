import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavButtonProps } from "./interface";
import * as styles from "./styles.module.css";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const NavBarContainerStyle = isMenuOpen
    ? styles.NavBarContainerOpen
    : styles.NavBarContainerClosed;

  return (
    <div className={NavBarContainerStyle}>
      <FontAwesomeIcon
        className={styles.HamburgerMenu}
        icon="bars"
        size="3x"
        onClick={toggleMenuOpen}
      />
      {isMenuOpen && (
        <div className={styles.NavBar}>
          <div className={styles.NavButtonList}>
            <NavButton href="#Experiences">
              <p>Experiences</p>
            </NavButton>
            <NavButton href="#Skills">
              <p>Skills</p>
            </NavButton>
            <NavButton href="#Projects">
              <p>Projects</p>
            </NavButton>
            <NavButton href="#ContactMe">
              <p>Contact Me</p>
            </NavButton>
            <NavButton href="#Resume">
              <p>Resume</p>
            </NavButton>
          </div>
        </div>
      )}
    </div>
  );
}

function NavButton({ href, children }: NavButtonProps) {
  return (
    <div className={styles.NavButtonContainer}>
      <a className={styles.NavButton} href={href}>
        {children}
      </a>
    </div>
  );
}

export default NavBar;
