import React, { useContext, useEffect, useState } from 'react';
import { assets } from '../../assets/assets';
import ChartBars from '../../components/Common/Chart';
import { UserContext } from '../../context/UserContex';

const UserList = () => {
  const { usersList = [], getAllUsers } = useContext(UserContext); // Set default value as []
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await getAllUsers(); // Fetch the user list
      setLoading(false);
    };
    fetchData();
  }, [getAllUsers]);

  useEffect(() => {
    if (usersList) {
      const filtered = usersList.filter((user) =>
        `${user.first_name} ${user.last_name}`
          .toLowerCase()
          .includes(searchQuery.toLowerCase()) ||
        user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.contact_no.toString().includes(searchQuery)
      );
      setFilteredUsers(filtered);
    }
  }, [searchQuery, usersList]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="w-full">
      <h2 className="text-[#262A41] text-4xl leading-[50px] font-semibold">Dashboard</h2>
      <p className="text-[#101010] text-base opacity-50 mt-1">01 - 25 March, 2020</p>
      <ChartBars />

      <div className="mt-6 mb-10">
        <h2 className="text-black text-4xl leading-[50px] font-medium mb-5">User List</h2>
        <div className="flex items-center border border-black rounded-md w-2/3 gap-0">
          <input
            type="text"
            placeholder="Search"
            className="flex-grow pl-4 py-2 text-gray-700 outline-none rounded-md"
            value={searchQuery}
            onChange={handleSearch}
          />
          <button className="bg-primary p-3 text-green-50">
            <img src={assets.search_logo} alt="search" className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="w-full mx-auto bg-[#f6f6f6] shadow-2xl rounded-lg p-6 mt-12">
        {loading ? (
          <div className="animate-pulse space-y-4">
            {[...Array(5)].map((_, index) => (
              <div
                key={index}
                className="h-4 bg-gray-300 rounded w-3/4 mx-auto"
              ></div>
            ))}
          </div>
        ) : (
          <table className="table-auto w-full border-collapse">
            <thead>
              <tr className="border-b border-[#E3E3E3]">
                <th className="px-4 py-2 text-left text-black font-medium text-lg">Name</th>
                <th className="px-4 py-2 text-left text-black font-medium text-lg">Email</th>
                <th className="px-4 py-2 text-left text-black font-medium text-lg">Phone</th>
                <th className="px-4 py-2 text-left text-black font-medium text-lg">Status</th>
                <th className="px-4 py-2 text-left text-black font-medium text-lg">View</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.length > 0 ? (
                filteredUsers.map((user) => (
                  <tr key={user._id} className="border-b border-[#E3E3E3]">
                    <td className="px-4 py-2 text-black font-light">
                      {user.first_name} {user.last_name}
                    </td>
                    <td className="px-4 py-2 text-black font-light">{user.email}</td>
                    <td className="px-4 py-2 text-black font-light">+91-{user.contact_no}</td>
                    <td className="px-4 py-2 text-black font-light">Active</td>
                    <td className="px-4 py-2 text-black font-light">
                      <button className="bg-primary text-white px-4 py-2 rounded">View</button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center py-4 text-gray-500">
                    No users found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default UserList;
