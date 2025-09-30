import React, { useEffect, useState } from 'react';
import { NavLink, useParams, useNavigate } from 'react-router-dom';
import { 
  RiDashboardLine, RiPieChartLine, RiSettingsLine,
  RiUserLine, RiHeartLine,
} from 'react-icons/ri';

const Sidebar = () => {
  const navigate = useNavigate();
  const { page } = useParams();

   const menuItems = [
    { name: 'Analytics', icon: <RiPieChartLine className="text-xl" /> },
    { name: 'Profile', icon: <RiUserLine className="text-xl" /> },
    { name: 'Wishlist', icon: <RiHeartLine className="text-xl" /> },
    { name: 'Setting', icon: <RiSettingsLine className="text-xl" /> },
  ];

  const [activeItem, setActiveItem] = useState(menuItems[0].name);

  const handleClick = (itemName) => {
    setActiveItem(itemName);
    const formattedPath = itemName.split(" ").join("-").toLowerCase();
    navigate(`/dashboard/${formattedPath}`);
  };

  useEffect(() => {
    if (page) {
      const formattedPage = page.replace(/-/g, ' ').toLowerCase();
      const matchedItem = menuItems.find(item => 
        item.name.toLowerCase() === formattedPage
      );
      if (matchedItem) setActiveItem(matchedItem.name);
    } else {
      setActiveItem(menuItems[0].name);
    }
  }, [page]);

  return (
    <div className='w-[25%] lg:w-[22%] bg-gradient-to-b from-white to-[#f9f5ff]  py-6 shadow-[0_0_25px_rgba(143,0,255,0.1)] h-full hidden md:flex flex-col rounded-xl'>
      <NavLink to="/" className="px-6 pb-6 border-b border-[#eee0ff]">
        <h4 className='bg-gradient-to-r from-[#8F00FF] to-[#DA00FF] bg-clip-text text-transparent font-bold text-2xl flex items-center'>
          <RiDashboardLine className="mr-2" />
          Dashboard
        </h4>
      </NavLink>
      
      <div className='flex-grow mt-6 overflow-y-auto custom-scrollbar px-3'>
        <ul className='flex flex-col gap-2'>
          {menuItems.map((item) => (
            <li 
              key={item.name}
              onClick={() => handleClick(item.name)}
              className={`
                transition-all duration-300 rounded-lg py-3 px-4 cursor-pointer
                ${activeItem === item.name 
                  ? 'bg-gradient-to-r from-[#8F00FF] to-[#DA00FF] text-white shadow-lg' 
                  : 'text-[#5c5c7b] hover:bg-[#f1e5ff] hover:text-[#8F00FF]'}
              `}
            >
              <div className="flex items-center gap-3">
                <div className={`${activeItem === item.name ? 'text-white' : 'text-[#8F00FF]'}`}>
                  {item.icon}
                </div>
                <span className='font-medium'>{item.name}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="px-6 pt-4 border-t border-[#eee0ff] text-center">
        <div className="bg-gradient-to-r from-[#8F00FF] to-[#DA00FF] p-0.5 rounded-lg">
          <div className="bg-white rounded-md py-2">
            <p className="text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#8F00FF] to-[#DA00FF]">
              Premium Plan
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;