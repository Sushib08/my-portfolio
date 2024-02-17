import React from "react";
import { XCircleIcon } from "@heroicons/react/24/solid";

const MyCV = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
      <div className="bg-white border border-gray-300 p-4 relative w-1/2">
        <div className="flex justify-end mb-4">
          <button onClick={onClose}>
            <XCircleIcon className="h-6 w-6 text-[#b89f59]" />
          </button>
        </div>
        {/* Contenu de votre CV ici */}
      </div>
    </div>
  );
};

export default MyCV;
