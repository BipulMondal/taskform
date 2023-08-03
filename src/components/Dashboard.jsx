import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-pink-200">
      <div>
        <h1 className="text-4xl font-bold">Welcome to the dashboard</h1>
      </div>
      <div className="flex flex-col">
        <button onClick={() => navigate("/login")} className='h-12 w-28 bg-black mt-6 text-white rounded-full'>Login</button>
        <button onClick={() => navigate("/registration")} className='h-12 w-28 bg-black mt-6 text-white rounded-full'>Registration</button>
      </div>
    </div>
  );
};

export default Dashboard;
