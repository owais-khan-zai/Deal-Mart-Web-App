import React from 'react';
import Loader from '../../ui/Loader';
import useFetch from '../../hooks/useFetch';
import { profileTab } from '../../api/DashboardApiUrl';

const Employee = () => {
  const { Data, Loading, Error } = useFetch(profileTab, "get");

  const profileData = Data?.profile;

  return (
    <div>
      {Loading && <Loader />}

      {!Loading && Error && <div>{Error.message}</div>}

      {!Loading && !Error && (
        <div className="mt-4 ">
          <div className="md:flex  text-center md:text-start items-center gap-10 bg-white shadow-md rounded-lg p-6">
            {/* Image Section */}
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

            {/* Info Section */}
            <div className="flex flex-col mt-6 md:mt-0 text-zinc-700 text-[1.05rem]">
              <h2 className="font-semibold text-2xl mb-3 text-purple-700">
                Profile Information
              </h2>
              <div className='flex flex-col gap-2 lg:flex-row lg:gap-20'>
                <div className='flex flex-col gap-2'>
                  <h4>{`First Name: ${profileData.first_name}`}</h4>
                  <h4>{`Last Name: ${profileData.last_name}`}</h4>
                  <h4>{`Email: ${profileData.email}`}</h4>
                </div>  
                <div className='flex flex-col gap-2'  >
                  <h4>
                    {`Address: ${
                      profileData.address !== null ? profileData.address : 'No Address'
                    }`}
                  </h4>
                  <button className='bg-gradient-to-r mx-auto md:mx-0 cursor-pointer from-[#8F00FF] to-[#DA00FF] px-8 w-fit py-1 font-semibold text-white rounded-sm mt-2 lg:mt-0'>Edit <i className="ri-edit-line"></i></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Employee;
