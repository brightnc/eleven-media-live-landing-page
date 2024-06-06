import Image from "next/image";
import CustomCarousel from "./CustomCarousel";

const Client = () => {
  return (
    <div className="bg-black h-auto flex flex-col items-center w-full">
      <h1 className=" mt-5 text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-white font-bold font-head lg:text-left">
        TRUSTED BY
      </h1>
      <hr className="w-32 h-1 mx-auto mt-3 bg-white border-0 rounded md:mt-10 md:w-40 lg:w-48" />
      <div className="mx-auto h-[100px] lg:h-[200px] w-full flex md:mt-4">
        <CustomCarousel>
          <div className="grid grid-cols-3">
            <div className="flex justify-center items-center">
              <Image
                className="w-20 h-10 md:w-44 md:h-20 lg:w-60 lg:h-30"
                src="/cerave.png"
                alt="."
                width={250}
                height={250}
              />
            </div>
            <div className="flex justify-center items-center">
              <Image
                className="w-20 h-10 md:w-44 md:h-20 lg:w-60 lg:h-30"
                src="/la-roche-posay.png"
                alt="."
                width={250}
                height={250}
              />
            </div>
            <div className="flex justify-center items-center">
              <Image
                className="w-20 h-10 md:w-44 md:h-20 lg:w-60 lg:h-30"
                src="/loreal.png"
                alt="."
                width={250}
                height={250}
              />
            </div>
          </div>

          <div className="grid grid-cols-3">
            <div className="flex justify-center items-center">
              <Image
                className="w-20 h-10 md:w-44 md:h-20 lg:w-60 lg:h-30"
                src="/vichy.png"
                alt="."
                width={250}
                height={250}
              />
            </div>
            <div className="flex justify-center items-center">
              <Image
                className="w-20 h-10 md:w-44 md:h-20 lg:w-60 lg:h-30"
                src="/cgsi.png"
                alt="."
                width={250}
                height={250}
              />
            </div>
            <div className="flex justify-center items-center">
              <Image
                className="w-20 h-10 md:w-44 md:h-20 lg:w-60 lg:h-30"
                src="/irplus.png"
                alt="."
                width={250}
                height={250}
              />
            </div>
          </div>
        </CustomCarousel>
      </div>
      <hr class="w-32 h-1 mx-auto mt-5 bg-white border-0 rounded md:mt-10 md:w-40 lg:w-48 mb-5" />
    </div>
  );
};

export default Client;
