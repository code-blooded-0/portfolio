import { Link, useLocation } from "react-router";
import { useState } from "react";
import 'animate.css';

const Navbar = () => {
  const [ menuOpen, setMenuOpen ] = useState(false);

  return (
    // <div className="bg-black text-white mx-auto flex flex-col float-right rounded-full border-2 border-blue-500">
    <div className="text-black mx-auto float-right test">
      {/* <div className="test bg-white"></div> */}
      <Link
        className="navLink1 bg-green-300 test"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6 mx-auto mt-4 testHover"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </Link>
      {menuOpen && (
        <>
          <Link className="navLink2 text-black bg-white" to='/'>
            <span className="textLink2">
              <p className="letterH">H</p>
              <p className="letterO">o</p>
              <p className="letterM">m</p>
              <p className="letterE">e</p>
            </span>
          </Link>
          <Link className="navLink3" to='/mywork'>
            <p className="work1">M</p>
            <p className="work2">y</p>
            <p className="work3"> </p>
            <p className="work4">W</p>
            <p className="work5">o</p>
            <p className="work6">r</p>
            <p className="work7">k</p>
          </Link>
          <Link className="navLink4" to='/experience'>
            <p className="exp1">E</p>
            <p className="exp2">x</p>
            <p className="exp3">p</p>
            <p className="exp4">e</p>
            <p className="exp5">r</p>
            <p className="exp6">i</p>
            <p className="exp7">e</p>
            <p className="exp8">n</p>
            <p className="exp9">c</p>
            <p className="exp10">e</p>
          </Link>
          <Link className="navLink5" to='/contact'>
            <p className="contact1">C</p>
            <p className="contact2">o</p>
            <p className="contact3">n</p>
            <p className="contact4">t</p>
            <p className="contact5">a</p>
            <p className="contact6">c</p>
            <p className="contact7">t</p>
            <p className="contact8"> </p>
            <p className="contact9">M</p>
            <p className="contact10">e</p>
          </Link>
        </>
      )}
    </div>
  );
};

export default Navbar;
