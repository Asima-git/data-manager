import { createContext, useState } from "react";
export const UserContext = createContext()
import axios from "axios";


const UserContextProvider = (props) => {
    const host = import.meta.env.VITE_BACKEND_URL;
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const [usersList, setUsersList] = useState(null);
    const [userData, setUserData] = useState(null);

    // Register user function
    const registerUser = async (userData) => {
        try {
            const response = await axios.post(`${host}/api/auth/register`, userData);
            if (response.status === 201) {
                setUser(response.data);
                return response.data
            } else {
                return response.data
            }
        } catch (err) {
            setError("Error registering user. Please try again.");
            console.error(err);
        }
    };


    const loginUser = async (userData) => {
        try {
            const response = await axios.post(`${host}/api/auth/login`, userData);
            if (response.status === 200) {
                const { token, message, role } = response.data;

                localStorage.setItem("authToken", token);
                localStorage.setItem("role", role);
                setUser({ ...response.data, token });
                return { success: true, message,role};
            }
            return { success: false, message: "Unexpected response status." };
        } catch (err) {
            console.error("Error logging in:", err);
            return { success: false, message: "Login failed. Please try again." };
        }
    };

    const getAllUsers = async () => {
        try {
          const token = localStorage.getItem("authToken");
          if (!token) {
            console.error("Token not found in localStorage.");
            return { success: false, message: "Authentication token is missing." };
          }
      
          const response = await axios.get(`${host}/api/auth/list`, {
            headers: {
              token: token, 
              "Content-Type": "application/json",
            },
          });
      
          if (response.status === 200) {
            setUsersList(response.data.data); 
            return { success: true, data: response.data.data };
          } else {
            console.error("Failed to fetch users. Status:", response.status);
            return { success: false, message: "Failed to fetch users" };
          }
        } catch (err) {
          console.error("Error fetching users:", err);
      
          // Check for an HTTP error response
          if (err.response) {
            return {
              success: false,
              message: err.response.data?.message || "Failed to fetch users",
              status: err.response.status,
            };
          }
      
          // Handle network or other errors
          return { success: false, message: "A network error occurred. Please try again." };
        }
      };
      
      const fetchUser = async () => {
        try {
          const token = localStorage.getItem("authToken");
          const response = await axios.get(`${host}/api/auth/get-user`, {
            headers: {
              token: `${token}`,
              "Content-Type": "application/json",
            },
          });
      
          if (response.status === 200) {
            setUserData(response.data.user);
          }
        } catch (err) {
          console.error("Error fetching logged-in user data:", err.response?.data?.message || err.message);
        }
      };
      

    const value = {
        user,
        error,
        registerUser,
        loginUser,
        getAllUsers,
        usersList,
        fetchUser,
        userData
    };

    return (
        <UserContext.Provider value={value}>
            {props.children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;
