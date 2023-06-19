import React, { useState, useEffect } from "react";
import "../css/navbar.css";
import gw from "../images/gw.png";
import lw from "../images/lw.png";

// import React, { useState, useRef, useEffect } from "react";
// import "../css/navbar.css";

// function Navbar() {
//   const [prevScrollPos, setPrevScrollPos] = useState(0);
//   const [visible, setVisible] = useState(true);

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [prevScrollPos, visible]);

//   const handleScroll = () => {
//     const currentScrollPos = window.pageYOffset;
//     setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
//     setPrevScrollPos(currentScrollPos);
//   };

//   const Navbar = () => {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);

//     const toggleMenu = () => {
//       setIsMenuOpen(!isMenuOpen);
//     };
//   };

function Navbar() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Moved outside of Navbar function

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible]);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  };

  const toggleMenu = () => {
    // Moved outside of Navbar function
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={visible ? "nav nav-fixed" : "nav"}>
      <div className="navbar">
        <div>
          <a className="title-container" href="/">
            <h1 className="title">Chris Mixa</h1>
          </a>
        </div>
        {/* <ul className="navlinks"> */}
        <ul className={`navlinks ${isMenuOpen ? "active" : ""}`}>
          {/* <ul className={`navlinks ${isMenuOpen ? "active" : ""}`}> */}
          <li class="navbar-item navbar-dropdown">
            <a href="/">Home</a>
          </li>
          <li class="navbar-item">
            <a href="/mywork">Portfolio</a>
          </li>
          <li class="navbar-item">
            <a
              href="https://docs.google.com/document/d/13O8WuhT5zbAtkgIj-Jpm3L5ObLsV3egbYrUlHdlkb98/edit?usp=sharing"
              target="/blank"
            >
              Resume
            </a>
          </li>
        </ul>
        <div class="hamburger-menu" id="hamburgerMenu" onClick={toggleMenu}>
          <div class="hamburger-menu-line"></div>
          <div class="hamburger-menu-line"></div>
          <div class="hamburger-menu-line"></div>
        </div>
        <div className="login-paid">
          <a href="https://github.com/CMIXA" target="/blank">
            <img className="social-media" src={gw} />
          </a>
          <a
            id="right-link"
            href="https://www.linkedin.com/in/christopher-mixa/"
            target="/blank"
          >
            <img className="social-media" src={lw} />
          </a>
          <a id="right-link" href="/contact">
            <button>Contact me</button>
          </a>
        </div>
      </div>
    </nav>
  );
}

// const Navbar = () => {
//   const [prevScrollPos, setPrevScrollPos] = useState(0);
//   const [visible, setVisible] = useState(true);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [activeLink, setActiveLink] = useState("Home");
//   const navRef = useRef(null);
//   const barRef = useRef(null);

//   const handleMenuToggle = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const handleLinkClick = (link) => {
//     setActiveLink(link);
//     setIsMenuOpen(false);
//   };

//   useEffect(() => {
//     const nav = navRef.current;
//     const bar = barRef.current;
//     const activeLinkElement = nav.querySelector(
//       `.navbar-link[data-link="${activeLink}"]`
//     );

//     // Set initial position of the bar
//     bar.style.width = `${activeLinkElement.offsetWidth}px`;
//     bar.style.left = `${activeLinkElement.offsetLeft}px`;

//     // Animate the bar on page load or link click
//     const animateBar = () => {
//       bar.style.width = `${activeLinkElement.offsetWidth}px`;
//       bar.style.left = `${activeLinkElement.offsetLeft}px`;
//     };

//     animateBar();

//     window.addEventListener("resize", animateBar);

//     return () => {
//       window.removeEventListener("resize", animateBar);
//     };
//   }, [activeLink]);

//   // For scroll function
//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [prevScrollPos, visible]);

//   const handleScroll = () => {
//     const currentScrollPos = window.pageYOffset;
//     setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
//     setPrevScrollPos(currentScrollPos);
//   };

//   return (
//     // <nav className="navbar" ref={navRef}>
//     <nav className={visible ? "nav nav-fixed" : "nav"}>
//       <div className="navbar">
//         <div className="navbar-left">
//           <a href="/" className="navbar-name">
//             Chris Mixa
//           </a>
//         </div>
//         <div className="navbar-middle">
//           <button
//             className="navbar-menu-button"
//             onClick={handleMenuToggle}
//             aria-label="Toggle Menu"
//           >
//             Menu
//           </button>
//           <div
//             className={`navbar-menu ${isMenuOpen ? "open" : ""}`}
//             onClick={handleMenuToggle}
//           >
//             <a
//               href="/"
//               className={`navbar-link ${activeLink === "Home" ? "active" : ""}`}
//               data-link="Home"
//               onClick={() => handleLinkClick("Home")}
//             >
//               Home
//             </a>
//             <a
//               href="/portfolio"
//               className={`navbar-link ${
//                 activeLink === "Portfolio" ? "active" : ""
//               }`}
//               data-link="Portfolio"
//               onClick={() => handleLinkClick("Portfolio")}
//             >
//               Portfolio
//             </a>
//             <a
//               href="/resume"
//               className={`navbar-link ${
//                 activeLink === "Resume" ? "active" : ""
//               }`}
//               data-link="Resume"
//               onClick={() => handleLinkClick("Resume")}
//             >
//               Resume
//             </a>
//           </div>
//           <div className="navbar-bar" ref={barRef}></div>
//         </div>
//         <div className="navbar-right">
//           <a href="/contact" className="navbar-button">
//             <button>Contact Me</button>
//           </a>
//         </div>
//       </div>
//     </nav>
//   );
// };

export default Navbar;
