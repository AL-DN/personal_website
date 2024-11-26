import React from "react";
import Link from "next/link";

interface NavButtonProps {
  label: string;
  link: string;
  iconURL: string;
  iconW?: number;
  iconH?: number;
  linkPad?: string;
}

const NavButton = ({
  label,
  link,
  iconURL,
  iconW = 50,
  iconH = 50,
  linkPad = "px-1 pt-1",
}: NavButtonProps) => {
  return (
    <>
      <div className="navbtn navbtn:hover">
        <img src={iconURL} width={iconW} height={iconH} />
        <Link className={linkPad} href={link}>
          {label}
        </Link>
      </div>
    </>
  );
};
export default NavButton;
