import React, { useEffect, useState } from 'react';
import Loader from '../../ui/Loader';
import useFetch from '../../hooks/useFetch';
import { profileTab } from '../../api/DashboardApiUrl';

const Setting = () => {
  const { Data, Loading, Error } = useFetch(profileTab, "get");

  const profileData = Data?.profile;

  const [Active, setActive] = useState(() => {
  return localStorage.getItem("activeTab") || "Personal";
  });


  const item = ["Personal", "Password"]

  const btnHandler = (ele) => {
  const selected = ele.target.innerText;
  setActive(selected);
  localStorage.setItem("activeTab", selected);
};

//  yha nichy ka code form data  ky lie takay user edit kr sakay apni input field ko 
 const [formData, setFormData] = useState({
  first_name: "",
  last_name: "",
  email: "",
  address: ""
});

useEffect(() => {
  if (profileData) {
    setFormData({
      first_name: profileData.first_name || "",
      last_name: profileData.last_name || "",
      email: profileData.email || "",
      address: profileData.address || ""
    });
  }
}, [profileData]);


  return (
    <div>
      <div className='flex flex-col gap-2 md:flex-row'>
        {item.map((i)=>{
          return <button  onClick={(e)=>{btnHandler(e)}} className={`${ Active == i ? "bg-gradient-to-r from-[#8F00FF] to-[#DA00FF] text-white" : "bg-zinc-300 text-zinc-700" } w-full md:w-fit md:px-15 py-2 font-semibold rounded-sm cursor-pointer`}>{i}</button>
        })}
      </div>
      {Loading && <Loader />}

      {!Loading && Error && <div>{Error.message}</div>}

      {!Loading && !Error && (
      <div className="flex flex-col mt-6  text-zinc-700 text-[1.05rem]">
        {Active === "Personal" ? (

          
          <form className='flex flex-col gap-2'>
            <div className='relative w-fit h-fit '>

              <div className="relative overflow-hidden mx-auto md:mx-0 rounded-full border-2 w-42 h-42 flex-shrink-0">
                <img
                  src={
                    profileData.profile !== null
                      ? profileData.profile
                      : "https://static.vecteezy.com/system/resources/thumbnails/020/765/399/small_2x/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg"
                  }
                  alt="Profile"
                  className="w-40 h-40 object-cover"
                />
              </div>
              <div className='absolute bottom-4 right-2 bg-white w-8 cursor-pointer h-8 rounded-full shadow-[0_4px_10px_rgba(0,0,0,0.2)] flex justify-center items-center '>
                <i className="ri-edit-line"></i>
              </div>

            </div>
            <div className='flex flex-col gap-2 md:flex-row md:justify-between md:gap-6'>
              <div className='flex flex-col gap-2 w-full md:gap-4'>
                  <div className='flex flex-col items-start w-full gap-1'>
                    <label className='font-semibold text-zinc-700'>First Name</label>
                    <input
                      name="first_name"
                      value={formData.first_name}
                      onChange={(e) =>
                        setFormData({ ...formData, [e.target.name]: e.target.value })
                        //  yaha input field mn ye ho rha hy on change mn e sy jo eleemnt araha hy target name means wo fieldd or value means oski value cahnge krdengy onchange par ...formdata jo likha hy wo is lie likha hy takay ak field update ho baki gayab na hon wahi rahen
                      }
                      className="border-1 border-zinc-400 p-2 rounded-sm w-full outline-none"
                    />
                  </div>

                  <div className='flex flex-col items-start w-full gap-1'>
                    <label className='font-semibold text-zinc-700'>Last Name</label>
                    <input
                      name="last_name"
                      value={formData.last_name}
                      onChange={(e) =>
                        setFormData({ ...formData, [e.target.name]: e.target.value })
                      }
                      className="border-1 border-zinc-400 p-2 rounded-sm w-full outline-none"
                    />
                  </div>
                </div>

                <div className='flex flex-col gap-2 w-full md:gap-4'>
                    <div className='flex flex-col items-start w-full gap-1'>
                      <label className='font-semibold text-zinc-700'>Email</label>
                      <input
                        name="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, [e.target.name]: e.target.value })
                        }
                        className="border-1 border-zinc-400 p-2 rounded-sm w-full outline-none"
                      />
                    </div>

                    <div className='flex flex-col items-start w-full gap-1'>
                      <label className='font-semibold text-zinc-700'>Address</label>
                      <input
                        name="address"
                        value={formData.address}
                        onChange={(e) =>
                          setFormData({ ...formData, [e.target.name]: e.target.value })
                        }
                        className="border-1 border-zinc-400 p-2 rounded-sm w-full outline-none"
                      />
                    </div>  
                  </div>
            </div>
            <div className='w-full md:text-end'>
              <button type="submit" className='bg-gradient-to-r mx-auto md:mx-0 w-full md:w-fit cursor-pointer from-[#8F00FF] to-[#DA00FF] px-8 py-2 font-semibold text-white rounded-sm mt-4 md:mt-20'>
                Update <i className="ri-edit-line"></i>
              </button>
            </div>
          </form>
        ) : (
          // PASSWORD FORM
         <form className='flex flex-col gap-2'>
        <div className='flex flex-col items-start w-full gap-1'>
          <label className='font-semibold text-zinc-700'>Old Password</label>
          <input
            type="password"
            name="old_password"
            className="border-1 border-zinc-400 p-2 rounded-sm w-full outline-none"
          />
        </div>

        <div className='md:flex md:gap-4 '>
          <div className='flex flex-col items-start w-full gap-1'>
            <label className='font-semibold text-zinc-700'>New Password</label>
            <input
              type="password"
              name="new_password"
              value=""
              className="border-1 border-zinc-400 p-2 rounded-sm w-full outline-none"
            />
          </div>
          <div className='flex flex-col items-start w-full gap-1'>
            <label className='font-semibold text-zinc-700'>Confirm Password</label>
            <input
              type="password"
              name="confirm_password"
              value=""
              className="border-1 border-zinc-400 p-2 rounded-sm w-full outline-none"
            />
          </div>
        </div>
        <button type="submit" className='bg-gradient-to-r mx-auto md:mx-0 w-full md:w-fit md:px-12 cursor-pointer from-[#8F00FF] to-[#DA00FF] px-8 py-2 font-semibold text-white rounded-sm mt-4 md:mt-10'>
          Change Password <i className="ri-lock-password-line"></i>
        </button>
      </form>

        )}
      </div>

      )}
    </div>
  );
};

export default Setting;
