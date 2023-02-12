import React from "react";
import Logo from '../../public/logo';
import Link from "next/link";
type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav>
        <div className="container">
            <div className="nav-container">
                <div className="logo">
                    <Link href="/" className="logo-inner">
                        <Logo />
                    </Link>
                </div>
                <ul className="menu">
                    <li>
                        <a href="/">FACEBOOK</a>
                    </li>
                    <li>
                        <a href="/">GITHUB</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  );
};

export default Navbar;
