import React from "react";
import Logo from '../../public/logo';
type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav>
        <div className="container">
            <div className="nav-container">
                <div className="logo">
                    <a href="/" className="logo-inner">
                        <Logo />
                    </a>
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
