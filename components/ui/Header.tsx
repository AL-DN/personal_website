import React from "react";
import NavButton from "./NavButton";

const Header = () => {
  return (
    <>
      <div className="navbar">
        <div className="navitems">
          <NavButton
            label="Profile"
            link="/profile"
            iconURL="/icons/icons8-male-user.gif"
            iconW={30}
            iconH={30}
          />
          <NavButton
            label="Projects"
            link="/projects"
            iconURL="/icons/icons8-male-user.gif"
            iconW={30}
            iconH={30}
          />
          <NavButton
            label="Gallery"
            link="/gallery"
            iconURL="/icons/icons8-male-user.gif"
            iconW={30}
            iconH={30}
          />
        </div>
      </div>
    </>
  );
};

export default Header;
