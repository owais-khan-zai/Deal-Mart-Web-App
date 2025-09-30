import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/navbarAssets/logo.png";
import { NavLink, useLocation, useNavigate, useParams } from "react-router-dom";
import gsap from "gsap";
import { logout } from "../config/AuthUser";
import { toast } from "react-toastify";
import {
  RiMenuLine, RiHomeLine, RiFileUserLine,
  RiCustomerServiceLine, RiUserLine,
  RiArrowDownSLine, RiCloseLine, RiMailLine, RiLogoutCircleLine
} from 'react-icons/ri';

const Navbar = () => {
  const email = localStorage.getItem("email");
  const navigate = useNavigate();
  const { page } = useParams();
  
  // Refs for mobile menu
  const overlay = useRef();
  const slideMenu = useRef();
  const mainContainer = useRef();
  
  // Refs for user dropdown
  const userAuthInfo = useRef();
  const userButtonRef = useRef();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const items = [
    "Analytics",
    "Profile",
    "Wishlist",
    "Setting"
  ];

  const [ClickItem, setClickItem] = useState();

  useEffect(() => {
    if (page) {
      const fromURL = page.replace(/-/g, " ").toLowerCase();
      const match = items.find((i) => i.toLowerCase() === fromURL);
      if (match) setClickItem(match);
    } 
  }, [page]);

  // Handle clicks outside dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownOpen && 
          userAuthInfo.current && 
          !userAuthInfo.current.contains(event.target) &&
          userButtonRef.current &&
          !userButtonRef.current.contains(event.target)) {
        closeDropdown();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownOpen]);

  const [isEmail, setIsEmail] = useState();

  useEffect(()=>{
    setIsEmail(localStorage.getItem("email"))
  },[])

  const openBtn = () => {
    mainContainer.current.style.display = "flex";
    gsap.to(slideMenu.current, { right: "0%" });
    gsap.to(overlay.current, { opacity: 0.5 });
  };

  const closeBtn = () => {
    gsap.to(slideMenu.current, { right: "-100%" });
    gsap.to(overlay.current, { opacity: 0 });
    setTimeout(() => {
      mainContainer.current.style.display = "none";
    }, 500);
  };

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem("token");
      await logout(token);
      localStorage.removeItem("token");
      localStorage.removeItem("email");
      navigate("/login");
    } catch (error) {
      toast.error(error.message || "Logout Failed");
    }
  };

  // Dropdown handlers
  const openDropdown = () => {
    userAuthInfo.current.style.display = "flex";
    gsap.fromTo(userAuthInfo.current, 
      { opacity: 0, y: -10 },
      { opacity: 1, y: 0, duration: 0.2 }
    );
    setDropdownOpen(true);
  };

  const closeDropdown = () => {
    gsap.to(userAuthInfo.current, 
      { opacity: 0, y: -10, duration: 0.2 }
    );
    setTimeout(() => {
      userAuthInfo.current.style.display = "none";
      setDropdownOpen(false);
    }, 200);
  };

  const toggleDropdown = () => {
    if (dropdownOpen) {
      closeDropdown();
    } else {
      openDropdown();
    }
  };

  const itemHandler = (item) =>{
    setClickItem(item);
    const correct = item.toLowerCase();
    navigate(`/dashboard/${correct}`)
  }

  return (
    <div className="w-full h-20 bg-white shadow-[0_4px_20px_rgba(143,0,255,0.08)] flex items-center justify-between px-6 md:px-8 md:rounded-xl">
      {/* Mobile menu button and icons */}
      <div className="flex items-center gap-4 md:hidden">
        {/* Home icon first */}
        <NavLink to="/">
          <div className="cursor-pointer text-[#8F00FF]">
            <RiHomeLine className="text-xl" />
          </div>
        </NavLink>
        
        {/* Support icon second */}
        <NavLink to="/support">
          <div className="cursor-pointer text-[#8F00FF]">
            <RiCustomerServiceLine className="text-xl" />
          </div>
        </NavLink>
        
        {/* Burger menu last */}
        <RiMenuLine 
          onClick={openBtn}
          className="text-2xl cursor-pointer text-[#8F00FF]"
        />
      </div>

      {/* Logo */}
      <div className="flex items-center">
        <img src={logo} alt="Website Logo" className="w-16"/>
        <span className="bg-gradient-to-r from-[#8F00FF] to-[#DA00FF] bg-clip-text text-transparent font-bold text-2xl">
          DM
        </span>
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex items-center gap-8 text-zinc-600">
        <NavLink to="/">
          <li className="relative cursor-pointer flex flex-col items-center">
            <RiHomeLine className="text-xl" />
            <span className="text-xs mt-1">Home</span>
            <div className="absolute bg-[#8F00FF] w-2 h-2 rounded-full top-0 right-0"></div>
          </li>
        </NavLink>
        
        {isEmail && <NavLink to="/dashboard">
          <li className="relative cursor-pointer flex flex-col items-center">
            <RiFileUserLine className="text-xl" />
            <span className="text-xs mt-1">Dashboard</span>
            <div className="absolute bg-[#8F00FF] w-2 h-2 rounded-full top-0 right-0"></div>
          </li>
        </NavLink>}
        
        <NavLink to='/support'>
          <li className="relative cursor-pointer flex flex-col items-center">
          <RiCustomerServiceLine className="text-xl" />
          <span className="text-xs mt-1">Support</span>
        </li>
        </NavLink>
      </ul>

      {/* User Section */}
      <div className="flex items-center gap-4">
        <div className="relative">
          <button 
            ref={userButtonRef}
            onClick={toggleDropdown}
            className="flex items-center gap-2 bg-[#f9f5ff] rounded-full pl-3 pr-2 py-1.5 cursor-pointer"
          >
            <div className="bg-gradient-to-r from-[#8F00FF] to-[#DA00FF] w-8 h-8 rounded-full flex items-center justify-center text-white">
              <RiUserLine />
            </div>
            <RiArrowDownSLine className="text-[#8F00FF]" />
          </button>
          
          <div 
            ref={userAuthInfo} 
            className="absolute top-12 right-0 rounded-xl bg-white shadow-lg py-3 px-4 min-w-[200px] z-50 hidden opacity-0"
            style={{ boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}
          >
            {email ? (
              <div>
                <div className="flex items-center gap-2 mb-3 px-2 py-1 rounded-lg bg-[#f9f5ff] ">
                  <RiMailLine className="text-[#8F00FF]" />
                  <p className="text-sm font-medium text-gray-700 truncate">{email}</p>
                </div>
                <button 
                  onClick={handleLogout}
                  className="w-full flex items-center gap-2 text-gray-700 hover:text-[#8F00FF] px-2 py-1.5 rounded-lg hover:bg-[#f9f5ff] text-sm cursor-pointer"
                >
                  <RiLogoutCircleLine />
                  <span className="pb-[0.1rem]">Logout</span>
                </button>
              </div>
            ) : (
              <div className="">
                <NavLink to="/login">
                  <button 
                    onClick={closeDropdown}
                    className="w-full flex items-center gap-2 text-gray-700 cursor-pointer hover:text-[#8F00FF] text-sm px-2 py-1.5 rounded-lg hover:bg-[#f9f5ff]"
                  >
                    <RiUserLine />
                    <span>Login</span>
                  </button>
                </NavLink>
                <NavLink to="/signup">
                  <button 
                    onClick={closeDropdown}
                    className="w-full flex items-center gap-2 text-gray-700 cursor-pointer hover:text-[#8F00FF] text-sm px-2 py-1.5 rounded-lg hover:bg-[#f9f5ff] mt-1 "
                  >
                    <RiUserLine />
                    <span className="whitespace-nowrap">Sign Up</span>
                  </button>
                </NavLink>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div ref={mainContainer} className="fixed inset-0 z-50 hidden">
        <div 
          ref={overlay} 
          className="absolute inset-0 bg-black opacity-0 cursor-pointer"
          onClick={closeBtn}
        ></div>
        <div ref={slideMenu} className="absolute top-0 right-[-100%] w-3/4 h-full bg-white z-10 p-5 flex flex-col">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center">
              <div className="bg-gradient-to-r from-[#8F00FF] to-[#DA00FF] p-1 rounded-lg">
                <div className="bg-white rounded-md w-10 h-10 flex items-center justify-center">
                  <span className="bg-gradient-to-r from-[#8F00FF] to-[#DA00FF] bg-clip-text text-transparent font-bold text-xl">
                    DM
                  </span>
                </div>
              </div>
              <h4 className="ml-2 font-bold text-xl">Dashboard</h4>
            </div>
            <RiCloseLine 
              onClick={closeBtn}
              className="text-2xl cursor-pointer text-gray-500"
            />
          </div>
          
          <ul className="flex flex-col gap-4 flex-grow overflow-y-auto">
            {items.map((item) => (
              <li 
                key={item}
                onClick={() => {
                  itemHandler(item);
                  closeBtn();
                }}
                className={`py-3 px-4 rounded-lg cursor-pointer ${
                  ClickItem === item 
                    ? 'bg-gradient-to-r from-[#8F00FF] to-[#DA00FF] text-white' 
                    : 'text-gray-700'
                }`}
              >
                {item}
              </li>
            ))}
          </ul>
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;