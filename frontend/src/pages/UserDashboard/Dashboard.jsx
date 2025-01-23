import React, { useContext, useEffect } from 'react';
import ChartBars from '../../components/Common/Chart';
import { UserContext } from '../../context/UserContex';

const UserDashboard = () => {
  const { userData, fetchUser } = useContext(UserContext);

  useEffect(() => {
    const fetchData = async () => {
      await fetchUser();
    };
    fetchData();
  }, []);

  // If userData is null or empty, you can show a loading state
  if (!userData) {
    return <div>Loading...</div>;
  }

  // Data for the fields that you want to display in your dashboard
  const userInfo = [
    { label: 'Name', value: `${userData.first_name} ${userData.last_name}` },
    { label: 'Reference No.', value: userData.reference_no || 'N/A' },
    { label: 'Business Promoters', value: userData.promoter_name || 'N/A' },
    { label: 'Business Income', value: `$${userData.business_income || '0'}` },
    { label: 'Business Partners', value: userData.partner_name || 'N/A' },
  ];

  return (
    <div className="w-full">
      <h2 className="text-[#262A41] text-4xl leading-[50px] font-semibold">Dashboard</h2>
      <p className="text-[#101010] text-base opacity-50 mt-1">01 - 25 March, 2020</p>
      <ChartBars />

      <div className="w-full mx-auto bg-[#f6f6f6] shadow-2xl rounded-lg p-6 mt-12">
        {userInfo.map((info, index) => (
          <div key={index} className="flex justify-between py-2 border-b border-[#E3E3E3]">
            <span className="font-medium text-black text-xl">{info.label}</span>
            <span className="text-black font-light">{info.value}</span>
          </div>
        ))}
      </div>

      <div className="flex justify-between bg-[#E7E7E7] py-7 px-6 rounded-xl mb-9 mt-9">
        <h3 className="text-black text-2xl leading-9 font-semibold">Reference Link</h3>
        <div className="flex gap-3">
          <p>virton.in/#/register/640389ab394ee</p>
          <button className="bg-primary text-white py-2 px-4 rounded-md">Copy</button>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
