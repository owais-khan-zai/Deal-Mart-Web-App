import React from 'react';
import { useParams } from 'react-router-dom';
import { RoutesData } from '../../routes/RoutesData';

const SideContainer = () => {
  const { page } = useParams();
  const matchItem = RoutesData.find(ele => ele.path === page) || RoutesData[0];

  return (
    <div className='flex-1 bg-gradient-to-br from-[#fdfaff] to-[#f5edff] h-full rounded-xl shadow-[0_0_25px_rgba(143,0,255,0.08)] overflow-hidden flex flex-col '>
      <div className="flex-grow p-4 overflow-auto ">
        <div className="scrollBar bg-white rounded-xl shadow-sm p-5 border border-[#eee0ff] overflow-y-scroll h-full">
          {matchItem.element}
        </div>
      </div>
      

    </div>
  );
};

export default SideContainer;