import { useNavigate, useLocation } from "react-router-dom";
import { AiOutlinePlus, AiOutlineSearch } from "react-icons/ai";

export const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname.split("/");

  return (
    <nav className="bg-gray-300 shadow-md py-4 fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Website Name */}
        <div
          onClick={() => navigate("/")}
          className="text-gray-800 text-2xl font-bold cursor-pointer hover:text-gray-600 
          transition duration-200"
        >
          ImageAI
        </div>

        {/* Conditional Navigation Buttons */}
        {path[1] === "post" ? (
          <button
            onClick={() => navigate("/")}
            className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-md
             hover:bg-blue-600 transition duration-200"
          >
            {/* Explore Icon */}
            <AiOutlineSearch className="h-5 w-5 mr-2" />
            Explore Posts
          </button>
        ) : (
          <button
            onClick={() => navigate("/post")}
            className="flex items-center bg-green-500 text-white px-4 py-2 rounded-md
             hover:bg-green-600 transition duration-200"
          >
            {/* Plus Icon */}
            <AiOutlinePlus className="h-5 w-5 mr-2" />
            Create Post
          </button>
        )}
      </div>
    </nav>
  );
};
