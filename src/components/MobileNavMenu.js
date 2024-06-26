import Image from "next/image";
import ServicesDropdown from "./ServicesDropdown";
import PackagesDropdown from "./PackagesDropdown";
import { Link } from "react-scroll";
import { NavIcons } from "./NavIcons";

const MobileNavMenu = ({ toggleMenu }) => {
  return (
    <>
      <div className="absolute top-10 right-0 flex justify-center w-[250px] md:w-[300px] py-4 px-8 md:px-10 rounded-l-md bg-white lg:hidden ">
        <div className="flex flex-col items-center gap-4">
          <ServicesDropdown toggleMenu={toggleMenu} />
          <hr class="w-40 h-0.5 mx-auto bg-secondary-color border-0 rounded md:w-48" />
          <PackagesDropdown toggleMenu={toggleMenu} />
          <hr class="w-40 h-0.5 mx-auto bg-secondary-color border-0 rounded md:w-48" />
          <button>
            <Link
              activeClass="active"
              to="aboutus"
              spy={true}
              smooth={true}
              offset={0}
              duration={200}
              className="text-sm md:text-xl font-head"
              onClick={toggleMenu}
            >
              About Us
            </Link>
          </button>
          <hr class="w-40 h-0.5 mx-auto bg-secondary-color border-0 rounded md:w-48" />
          <div className="flex justify-center items-center gap-2">
            <div className="relative w-4 h-4 lg:w-7 lg:h-7">
              <Image src="/icon-phone.png" alt={"icon-phone"} fill />
            </div>

            <p className="text-sm">087-510-7972</p>
          </div>
          <div className="flex gap-2">
            {NavIcons.map((icon) => (
              <div
                className="relative w-4 h-4 md:w-5 md:h-5 lg:w-8 lg:h-8 cursor-pointer"
                key={icon.icon}
              >
                <a href={icon.link} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={`/${icon.icon}.png`}
                    key={icon.icon}
                    alt={icon.icon}
                    fill
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNavMenu;
