import heartIcon from "@/assets/icons/heart.svg";
import globeIcon from "@/assets/icons/globe.svg";
import HardIcon from "@/assets/icons/Hard.svg";
import user from "@/assets/user/user.png";
import ovalIcon from "@/assets/icons/oval.svg";
function Header() {
  return (
    <div className=" flex md:items-center items-end   justify-between md:mt-[31px] md:mb-[18px] mb-[10px] mt-[20px] md:mx-[30px] mx-[16px] ">
      <div className=" grid md:items-center  md:gap-5 gap-2 md:flex  ">
        <h1 className=" md:text-[26px] text-[16px]  ">Brackets</h1>
        <div className=" flex items-center gap-2">
          <img src={heartIcon} alt="" />
          <div className=" flex gap-1 border-l h-[35px] pl-2 border-gray-200  items-center">
            <img src={globeIcon} alt="" />
            <h1 className=" text-gray-300 text-lg">Public</h1>
          </div>
          <img src={HardIcon} alt="" className=" w-[30px] h-[35px]" />
        </div>
      </div>
      <div className=" flex items-center justify-between md:gap-5 gap-3">
        <div className="relative flex items-center    ">
          <img
            src={user}
            alt="Profile 1"
            className=" md:h-[40px] md:w-[40px] h-[30px] w-[30px] rounded-full border-2  border-white -ml-4"
          />
          <img
            src={user}
            alt="Profile 2"
            className=" md:h-[40px] md:w-[40px] h-[30px] w-[30px] rounded-full border-2 border-white -ml-4"
          />
          <img
            src={user}
            alt="Profile 2"
            className=" md:h-[40px] md:w-[40px] h-[30px] w-[30px] rounded-full border-2 border-white -ml-4"
          />
          <img
            src={user}
            alt="Profile 2"
            className=" md:h-[40px] md:w-[40px] h-[30px] w-[30px] rounded-full border-2 border-white -ml-4"
          />
          <img
            src={ovalIcon}
            alt="Profile 2"
            className=" md:h-[40px] md:w-[40px] h-[30px] w-[30px] rounded-full border-2 border-white -ml-4"
          />
          <h1 className=" text-white md:-ml-8 -ml-7 text-[10px] md:text-[12px]">
            +44
          </h1>
        </div>

        <h1 className=" md:text-[26px] text-[16px]">Menu</h1>
      </div>
    </div>
  );
}

export default Header;
