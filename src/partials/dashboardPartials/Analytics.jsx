import React, { useState } from "react";
import { analyticsTab } from "../../api/DashboardApiUrl/";
import useFetch from "../../hooks/useFetch";
import ProductsData from "../../components/Dashboard/productsData";
import Loader from "../../ui/Loader";
import { useDashboardDataFetch } from "../../hooks/useDashboardDatafetch";

const Analytics = () => {

  const { Data, Error, Loading } = useFetch(analyticsTab, "get");

  const productCount = Data?.data?.ProductCount || {};
  const vehicleCount = Data?.data?.VehicleCount || {};
  const propertyCount = Data?.data?.PropertyCount || {};

  const productIcons = [
    {
      icon: <i className="ri-product-hunt-line"></i>,
    },
    {
      icon: <i className="ri-shopping-cart-line"></i>,
    },
    {
      icon: <i className="ri-user-line"></i>,
    },
    {
      icon: <i className="ri-store-2-line"></i>,
    },
    {
      icon: <i className="ri-box-3-line"></i>,
    },
    {
      icon: <i className="ri-money-dollar-circle-line"></i>,
    },
    {
      icon: <i className="ri-product-hunt-line"></i>,
    },
    {
      icon: <i className="ri-shopping-cart-line"></i>,
    },
  ];

  const vehicleIcons = [
    { icon: <i className="ri-car-line"></i> },
    { icon: <i className="ri-motorbike-line"></i> },
    { icon: <i className="ri-truck-line"></i> },
    { icon: <i className="ri-bus-line"></i> },
    { icon: <i className="ri-parking-box-line"></i> },
    { icon: <i className="ri-gas-station-line"></i> },
    { icon: <i className="ri-roadster-line"></i> },
    { icon: <i className="ri-taxi-line"></i> },
  ];

  const propertyIcons = [
    { icon: <i className="ri-home-3-line"></i> },
    { icon: <i className="ri-building-line"></i> },
    { icon: <i className="ri-hotel-line"></i> },
    { icon: <i className="ri-community-line"></i> },
    { icon: <i className="ri-map-pin-line"></i> },
    { icon: <i className="ri-door-line"></i> },
    { icon: <i className="ri-landscape-line"></i> },
    { icon: <i className="ri-home-heart-line"></i> },
  ];


const mainProductData = useDashboardDataFetch(productCount, productIcons);
const mainVehicleData = useDashboardDataFetch(vehicleCount, vehicleIcons);
const mainPropertyData = useDashboardDataFetch(propertyCount, propertyIcons);

  // yaha ye tarika end ho rha hy property wala 


  // upper product data sy related cheezy hain

  const hireBox = [
    {
      icon: (
        <div className="p-1 px-2 bg-white rounded-full">
          <i className="ri-user-add-line"></i>
        </div>
      ),
    },
    {
      icon: (
        <div className="p-1 px-2 bg-white rounded-full">
          <i className="ri-time-line"></i>
        </div>
      ),
    },
    {
      icon: (
        <div className="p-1 px-2 bg-white rounded-full">
          <i className="ri-checkbox-circle-line"></i>
        </div>
      ),
    },
    {
      icon: (
        <div className="p-1 px-2 bg-white rounded-full">
          <i className="ri-file-add-line"></i>
        </div>
      ),
    },
  ];

  const HiringCount = Data?.data?.hireCount || {};

  const mainHiringData = Object.entries(HiringCount || {})
    .filter(([key, val]) => typeof val !== "object") // hamari api mn data aysy araha tha like hiring os ky andar multiple cheezy thi sath aak or aysi key thi jis mn nested elements thy or to wo hum aysy ni ly sakhty is lie osko filter kr rhy hain takay wo error na day
    .map(([key, val], index) => {
      let cleanName = key;

      // Remove "total_" for all except first item
      if (index !== 0) {
        cleanName = key.replace(/^total_?/i, "");
      }

      // Replace underscore with space & capitalize first letter
      cleanName = cleanName
        .replace(/_/g, " ")
        .replace(/\b\w/g, (c) => c.toUpperCase());

      return {
        name: cleanName,
        value: val,
        icon: hireBox[index]?.icon,
      };
    });

  // yaha upper hiring [2] box container ka code hy

  const hireTypesGraph = [
    {
      stroke: "#6366f1", // blue
      points: "0,20 20,15 40,25 60,10 80,20",
    },
    {
      stroke: "#10b981", // green
      points: "0,25 20,10 40,20 60,15 80,18",
    },
    {
      stroke: "#f59e0b", // orange
      points: "0,15 20,20 40,10 60,18 80,12",
    },
  ];

  const hireTypes = Data?.data?.hireCount?.hireTypes || {};

  const mainHireTypesData = Object.entries(hireTypes || {}).map(
    ([key, val], index) => {
      let cleanName = key.replace(/\b\w/g, (c) => c.toUpperCase());

      return {
        name: cleanName,
        value: val,
        icon: <i className="ri-briefcase-4-line"></i>,
        graph: (
          <svg width="80" height="30">
            <polyline
              fill="none"
              stroke={hireTypesGraph[index]?.stroke}
              strokeWidth="2"
              points={hireTypesGraph[index]?.points}
            />
          </svg>
        ),
      };
    }
  );

  // yhaa upper myry request box [3] ka data dekh rha hy


  // yaha nichy simple logic hy upper top ky product or vehicle type buttons ki 
  const [Active, setActive] = useState("Product");

  const items = ["Product", "Vehicle", "Property"]
  
  const activeHandler = (ele) => {
    setActive(`${ele.target.innerText}`)
  }

  // yha nichy wo variable hy jo identify kryga ksi ka data show krana hy 

let dataContainer;

switch (Active) {
  case "Product":
    dataContainer = mainProductData;
    break;
  case "Vehicle":
    dataContainer = mainVehicleData;
    break;
  case "Property":
    dataContainer = mainPropertyData;
    break;
  default:
    dataContainer = mainProductData;
}

  
 return (
  <div className="p-2 sm:p-4">
    {Loading && <Loader />}

    {!Loading && Error && (
      <div>{Error.message}</div>
    )}

    {!Loading && !Error && (
      <>
        {/* Header and Filter Buttons */}
        <div className="flex flex-col gap-3 sm:gap-4 sm:flex-row justify-between items-start sm:items-center w-full mb-4 sm:mb-6">
          <h3 className="font-bold text-xl sm:text-2xl text-purple-700 mb-2 sm:mb-0">{Active} Overview</h3>
          <div className="flex gap-2 overflow-x-auto w-full sm:w-auto">
            <ul className="flex gap-2 sm:gap-3 min-w-max">
              {items.map((item, index) => {
                const isActive = Active === item;
                return (
                  <li
                    onClick={activeHandler}
                    key={index}
                    className={`${
                      isActive
                        ? "bg-gradient-to-r from-[#8F00FF] to-[#DA00FF] text-white"
                        : "text-black bg-zinc-300"
                    } px-3 py-2 sm:px-4 sm:py-2 text-sm sm:text-base font-medium rounded-lg cursor-pointer whitespace-nowrap`}
                  >
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
          {dataContainer.map((item, index) => (
            <ProductsData
              key={index}
              name={item.name}
              icon={item.icon}
              value={item.value}
              marginX="0"
            />
          ))}
        </div>

        {/* Hiring Overview Section */}
        <h3 className="font-bold text-xl sm:text-2xl text-purple-700 mt-6 sm:mt-8 mb-4 sm:mb-6">
          Hiring Overview
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
          {mainHiringData.map((item, index) => (
            <ProductsData
              key={index}
              name={item.name}
              icon={item.icon}
              value={item.value}
              marginX="auto"
            />
          ))}
        </div>

        {/* Hire Types Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {mainHireTypesData.map((item, index) => (
            <ProductsData
              key={index}
              name={item.name}
              icon={item.icon}
              value={item.value == null ? 0 : item.value}
              graph={item.graph}
              marginX="0"
            />
          ))}
        </div>
      </>
    )}
  </div>
);
}

// yaha sy component start ho rhy hain jo ishi file mn use hongy

export default Analytics;