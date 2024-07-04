import { FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi";
import Matlab from "../../assets/images/Matlab.png";
import Watson from "../../assets/images/Watson@3.png";
import Smith from "../../assets/images/Smith@3.png";

export const AboutAuthor = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap text-center justify-center space-y-7 md:space-y-0 md:space-x-7">
        <div className="w-full md:w-auto">
          <div className="w-full max-w-[370px] h-[430px] mx-auto md:mx-0 rounded bg-secondary object-cover">
            <img src={Matlab} alt="Matlab" className=" w-full h-full " />
          </div>
          <h2 className="text-3xl/8 font-medium text-left pt-2 pb-1">
            Yesifu Matlab
          </h2>
          <p className="text-base text-left ">Founder & Chairman</p>
          <div className="flex md:justify-start gap-4 py-1">
            <FiTwitter className="w-6 h-6" />
            <FiInstagram className="w-6 h-6" />
            <FiLinkedin className="w-6 h-6" />
          </div>
        </div>
        <div className="w-full md:w-auto">
          <div className="w-full max-w-[370px] h-[430px] mx-auto md:mx-0 rounded bg-secondary object-cover">
            <img src={Watson} alt="Watson" className="w-full h-full " />
          </div>
          <h2 className="text-3xl/8 font-medium text-left pt-2 pb-1">
            Emma Watson
          </h2>
          <p className="text-base text-left">Managing Director</p>
          <div className="flex md:justify-start gap-4 py-1">
            <FiTwitter className="w-6 h-6" />
            <FiInstagram className="w-6 h-6" />
            <FiLinkedin className="w-6 h-6" />
          </div>
        </div>
        <div className="w-full md:w-auto">
          <div className="w-full max-w-[370px] h-[430px] mx-auto md:mx-0 rounded bg-secondary object-cover">
            <img
              src={Smith}
              alt="Smith"
              className="w-full h-full"
            />
          </div>
          <h2 className="text-3xl/8 font-medium text-left pt-2 pb-1">
            Will Smith
          </h2>
          <p className="text-base text-left">Product Designer</p>
          <div className="flex md:justify-start gap-4 py-1">
            <FiTwitter className="w-6 h-6" />
            <FiInstagram className="w-6 h-6" />
            <FiLinkedin className="w-6 h-6" />
          </div>
        </div>
      </div>
    </div>
  );
};
