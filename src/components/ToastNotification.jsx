import { useState, useEffect } from "react";

const Toast = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(); // This will close the toast after 3 seconds
    }, 3000);
    
    return () => clearTimeout(timer); // Cleanup timeout on unmount or message change
  }, [message, onClose]);

return (
    <div className="fixed top-20 right-10 bg-green-500 text-white p-4 rounded-md shadow-lg opacity-100 transition-opacity duration-500 ease-in-out">
         
        {message}
    </div>
);
};

export default Toast;
