import { useDispatch, useSelector } from "react-redux";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { logout } from "../actions/user";

const Header = ({ setMenuOpen, menuOpen }) => {
  return (
    <>
      <nav onClick={() => setMenuOpen(false)}>
        <NavContent setMenuOpen={setMenuOpen} />
      </nav>
      <button className="navBtn" onClick={() => setMenuOpen(!menuOpen)}>
        <MdMenu />
      </button>
    </>
  );
};

export const HeaderPhone = ({ menuOpen, setMenuOpen }) => {
  return (
    <main className={`navPhone ${menuOpen ? "navPhoneComes" : ""}`}>
      <NavContent setMenuOpen={setMenuOpen} />
    </main>
  );
};

const NavContent = ({ setMenuOpen }) => {
  const [openProfile, setOpenProfile] = useState(false);

  const { user, isAuthenticated } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const logoutHandler = () => {
    setMenuOpen(false);
    dispatch(logout());
  };

  return (
    <>
      <h1 onClick={() => setMenuOpen(false)} className="main-heading">
        <Link to={"/"}>Web_Dev</Link>
      </h1>
      <main>
        <Link onClick={() => setMenuOpen(false)} to={"/"}>
          Home
        </Link>
        <Link onClick={() => setMenuOpen(false)} to={"/about"}>
          About
        </Link>
        <Link onClick={() => setMenuOpen(false)} to={"/projects"}>
          Projects
        </Link>
        <Link onClick={() => setMenuOpen(false)} to={"/services"}>
          Services
        </Link>
        <Link onClick={() => setMenuOpen(false)} to={"/courses"}>
          Courses
        </Link>
        <Link onClick={() => setMenuOpen(false)} to={"/contact"}>
          Contact
        </Link>

        {isAuthenticated ? (
          <div className="dropdown">
            <Link>
              {user.name}
              <span>
                <MdKeyboardDoubleArrowDown
                  onClick={() => setOpenProfile((prev) => !prev)}
                />
              </span>
            </Link>
            {openProfile && (
              <ul>
                <li>
                  <Link onClick={() => setMenuOpen(false)} to={"/profile"}>
                    Profile
                  </Link>
                </li>
                <li>
                  <Link onClick={logoutHandler} to={"/logout"}>
                    Logout
                  </Link>
                </li>

                <li>
                  {user && user.role === "admin" && (
                    <Link
                      onClick={() => setMenuOpen(false)}
                      to={"/admin/dashboard"}
                    >
                      Dashboard
                    </Link>
                  )}
                </li>
              </ul>
            )}
          </div>
        ) : (
          <>
            <Link onClick={() => setMenuOpen(false)} to={"/login"}>
              Login
            </Link>
          </>
        )}
      </main>
    </>
  );
};

export default Header;
