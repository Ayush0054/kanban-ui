import logo from "/home/yus-vengeance/Desktop/trello/src/assets/logo/Logo.png";
import user from "/home/yus-vengeance/Desktop/trello/src/assets/user/user.png";
import bar from "/home/yus-vengeance/Desktop/trello/src/assets/logo/bar.png";
import mobileBar from "/home/yus-vengeance/Desktop/trello/src/assets/icons/bar-mobile.png";
import icons from "/home/yus-vengeance/Desktop/trello/src/assets/icons/Icons.png";
import search from "/home/yus-vengeance/Desktop/trello/src/assets/icons/search.png";
import LightSearch from "/home/yus-vengeance/Desktop/trello/src/assets/icons/search-gray.png";
function Navbar() {
  return (
    <div className=" py-[15px] border-b-2 border-gray-200 px-[30px]">
      <div className="  flex items-center justify-between">
        <div className=" flex items-center gap-5 ">
          <img src={logo} className=" hidden md:flex" alt="" />
          <div className=" hidden md:flex justify-center items-center gap-1 border-x-2 border-gray-200 mx-2 px-6 ">
            <img src={bar} alt="." />
            <h1>Boards</h1>
          </div>
          <img className="md:hidden flex " src={mobileBar} alt="" />
          <div className=" hidden md:flex  w-[500px]  bg-[#F4F4F4] rounded-full p-1 px-3 items-center">
            <input
              type="text"
              className=" outline-none  bg-[#F4F4F4] m-1  w-full"
            />
            <img src={search} alt="" />
          </div>
          <div className="flex md:hidden       items-center">
            <img src={LightSearch} alt="" />
          </div>
        </div>
        <div className=" flex items-center gap-[30px] ">
          <img src={icons} alt="" />
          <img
            src={user}
            className=" h-[30px] w-[30px] md:h-[40px] md:w-[40px]"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
