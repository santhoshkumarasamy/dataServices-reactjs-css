import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false)
    const handleNavClick = ()=> setIsNavOpen((prev) => !prev)
  return (
    <nav className=" text-white fixed top-0 w-full px-4  h-24  z-10 bg-black">
      <div className="max-w-[1240px] mx-auto w-full h-full flex justify-between items-center">

      
      <div className=" text-3xl font-bold text-green-500 ">REACT.</div>
      <ul className="hidden md:flex items-center">
        <a href="#home"><li className=" p-4 cursor-pointer">Home</li></a>
        <a href="#analytics"> <li className=" p-4 cursor-pointer">Analytics</li></a>
        <a href="#pricing"> <li className=" p-4 cursor-pointer">Pricing</li></a>
        <li className="mr-4"><button className="px-6 py-2 font-bold text-green-600 rounded-md hover:bg-white  border border-black pointer-events-auto duration-500">Sign In</button></li>
        <li className=" "><button className="px-6 py-2 rounded-md bg-green-600 border-green-600  ease-in-out duration-500 font-bold hover:text-green-600 hover:bg-white">Sign Up</button></li>
      </ul>


      <div className=" block cursor-pointer md:hidden text-3xl" onClick={handleNavClick}>
        {
            !isNavOpen? <AiOutlineMenu  /> : <AiOutlineClose  />
        }
      </div>
      <div className={isNavOpen ? 'fixed left-0 top-0 w-[60%] border-r h-full border-r-gray-900 ease-in-out duration-500 bg-[#000] md:hidden ' : "fixed left-[-100%]"}>
      <div className=" flex text-3xl font-bold text-green-500 px-4 h-24 items-center ">REACT.</div>
        <ul className=' uppercase ' >
          <a href="#home"><li className=" p-4 border-b border-gray-600 ml-4 cursor-pointer" >Home</li></a>
          <a href="#analytics"><li className=" p-4 border-b border-gray-600 ml-4 cursor-pointer" >Analytics</li></a>
          <a href="#pricing"><li className=" p-4 border-b border-gray-600 ml-4 cursor-pointer" >Pricing</li></a>
          <li className=" pt-4 ml-4 w-100% flex"><button className="px-6 py-2 mx-auto w-[70%] font-bold text-green-600 rounded-md hover:bg-white  border border-black pointer-events-auto duration-500">Sign In</button></li>
          <li className=" pt-4 ml-4 flex "><button className="px-6 py-2 mx-auto w-[70%] rounded-md bg-green-600 border-green-600  ease-in-out duration-500 font-bold hover:text-green-600 hover:bg-white">Sign Up</button></li>
        </ul>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;
