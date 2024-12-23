import React, { useState} from "react";
import { useNavigate } from "react-router-dom";





function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);


  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const navigate = useNavigate();

  const navigateToLogin = (role) => {
    navigate(`/login?role=${role}`);
  
 
    // Replace this alert with navigation logic, e.g., using React Router:
    // navigate(`/${role.toLowerCase()}-login`);
  };
  

  return (
    <div className="bg-gray-100 h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow p-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="/img/clg.png"
            alt="Logo"
            className="rounded-full w-12 h-12"
          />
          <span className="text-lg font-bold text-gray-700">
            Attendance System
          </span>
        </div>
        {/* Login Button */}
        <button
          onClick={toggleModal}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Log In
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center">
        <h1 className="text-4xl font-bold text-gray-700">
          Welcome to the Attendance Dashboard
        </h1>
      </main>

      {/* Login Options Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg space-y-4">
            <h2 className="text-2xl font-bold text-gray-700">Log In As:</h2>
            <div className="space-y-3">
              {["Admin", "HOD", "Staff", "Student"].map((role) => { 

                // Define role-based images
   const roleImages = {
    Admin: "/img/admin.png",
    Hod: "/img/hod.png",
    Staff: "/img/teacher.jpg",
    Student: "/img/student-girl.jpg"
  };
                
                return(
                <button
                  key={role}
                  onClick={() => navigateToLogin(role)}
                  className="flex items-center space-x-3 w-full p-3 bg-gray-100 hover:bg-gray-200 rounded-lg"
                >
                  <img
                    src={roleImages[role]}
                    alt={role}
                    className="w-10 h-10 rounded-full"
                  />
                  <span>{role}</span>
                </button>
              );
                })}
            </div>
            <button
              onClick={toggleModal}
              className="mt-4 text-blue-500 hover:underline"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
