import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router'
import { assets } from '../assets/assets';
import CommonForm from '../components/Common/Form';
import { loginFormControls, signFormControls } from '../config';
import { useContext } from 'react';
import { UserContext } from '../context/UserContex';
import { toast } from 'react-toastify';

const LoginSignup = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isLogin = location.pathname.includes("login");
  const [formData,setFormData] = useState([]);
  const {registerUser,loginUser} = useContext(UserContext);
  
  const onSubmit = async (e) => {
    e.preventDefault();
    if (!isLogin) {
      // Register user
      const result = await registerUser(formData);
      if (result.success) {
        toast.success(result.message || "Registration successful!");
        setFormData({});
        navigate("/login");
      } else {
        toast.error(result.message || "Registration failed. Please try again.");
      }
    } else {
      // Login user
      const result = await loginUser(formData);
    
      if (result.success) {
        toast.success(result.message || "Login successful!");
        setFormData({});
        
        // Check role and navigate
        if (result.role === "User") {
          navigate("/user/dashboard");
        } else if (result.role === "Admin") {
          navigate("/admin/user-list");
        } else {
          console.error("Unexpected role:", result.role);
          toast.error("Invalid role. Please contact support.");
        }
      } else {
        toast.error(result.message || "Login failed. Please try again.");
      }
    }
  };
  
  return (
    <>
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100 rounded-3xl overflow-hidden shadow-lg">
      {/* Left Side: Image */}
      {isLogin ?    <div className="md:w-1/2 bg-cover bg-center" style={{ backgroundImage: `url('${assets.login_img}')` }}>
      </div> :
      <div className="md:w-1/2 bg-cover bg-center" style={{ backgroundImage: `url('${assets.register_img}')` }}>
      </div>}
   

      {/* Right Side: Form */}
      <div className={`md:w-1/2 flex items-center justify-center  bg-primary ${isLogin ? 'py-4':'py-14 px-6'}`}>
        <div className="w-full max-w-md">
          <h2 className="text-5xl font-bold mb-6 text-center text-white">
            {isLogin ? "Login" : "Sign up"}
          </h2>
          <p className='text-white text-xs text-center mb-16'> {isLogin ? "Fill in your credentials and click on the the Login button" : "Fill in your credentials and click on the the Sign up button"}</p>

          {!isLogin ? (
          <CommonForm formControls={signFormControls} formData={formData} buttonText={'Register'} setFormData={setFormData}
       onSubmit={onSubmit} isLogin={isLogin}
      />):(
        <CommonForm formControls={loginFormControls} formData={formData} buttonText={'Login'} setFormData={setFormData}
     onSubmit={onSubmit} isLogin={isLogin}
    />
  )
    }
        </div>
      </div>
    </div>
    </>
  )
}

export default LoginSignup
