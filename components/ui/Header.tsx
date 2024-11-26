import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div>
      <Link className="px-3" href="/profile">
        Profile
      </Link>

      <Link className="px-3" href="/projects">
        Projects
      </Link>

      <Link className="px-3" href="/gallery">
        Gallery
      </Link>
    </div>
  );
};

export default Header;
