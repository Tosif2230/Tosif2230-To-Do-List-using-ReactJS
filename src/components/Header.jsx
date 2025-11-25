import React from "react";
import ToDo_Icon from "../assets/list.png" 
import { MdFormatListBulletedAdd } from "react-icons/md";


function Header() {
  return (
    <div className="flex flex-col items-center bg-gray-200 rounded-2xl my-5">
      <div className="flex gap-2">
        <h1>To-Do App </h1>
      <img src={ToDo_Icon} alt="icon" width={"25px"}/>
      </div>
        <div >
      <input type="text" placeholder="Enter a Task" className="bg-stone-500 rounded-md text-center m-1.5 p-0.3"/>
      <button className="bg-blue-900 text-white rounded-md p-1 m-2"><MdFormatListBulletedAdd /></button>
      </div>
    </div>
    
  );
}

export default Header;
