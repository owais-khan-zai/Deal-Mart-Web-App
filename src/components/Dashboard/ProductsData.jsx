import React from 'react';

const ProductsData = ({ icon, name, value, flex, text, marginX, graph }) => {
  return (
    <div className={`
      flex flex-col bg-white p-5 rounded-xl shadow-lg border border-purple-100
      hover:shadow-xl transition-all duration-300
    `}>
      {/* Top Row: Icon and Text */}
      <div className="flex items-start gap-4">
        <div className={`flex items-center justify-center 
          w-14 h-14 rounded-full bg-gradient-to-br from-purple-100 to-indigo-100
          text-purple-600 text-xl ${marginX ? `mx-${marginX}` : ''}`}>
          {icon}
        </div>
        
        <div className="flex-1 ">
          <h5 className="text-sm font-medium text-gray-500 mb-1">{name}</h5>
          <h3 className="text-2xl font-bold text-gray-800">{value}</h3>
        </div>
      </div>
      
      {/* Graph - positioned below the text */}
      {graph && <div className="mt-4 flex justify-end">{graph}</div>}
    </div>
  );
};

export default ProductsData;