import Image from "next/image";
import CustomCarousel from "./CustomCarousel";

const Client = () => {
  return (
    <div className="bg-black h-auto flex flex-col items-center w-full">
      <h1 className="text-4xl mt-5 md:text-5xl lg:text-6xl xl:text-7xl text-center text-white font-bold font-head lg:text-left">
        TRUSTED BY
      </h1>
      <hr className="w-32 h-1 mx-auto mt-3 bg-white border-0 rounded md:mt-10 md:w-40 lg:w-48" />
      <div className="mx-auto h-[100px] lg:h-[200px] w-full flex">
        <CustomCarousel>
          <div className="grid grid-cols-4">
            <div className="flex justify-center items-center">
              <Image src="/cerave.png" alt="." width={250} height={250} />
            </div>
            <div className="flex justify-center items-center">
              <Image
                src="/la-roche-posay.png"
                alt="."
                width={250}
                height={250}
              />
            </div>
            <div className="flex justify-center items-center">
              <Image src="/loreal.png" alt="." width={250} height={250} />
            </div>
            <div className="flex justify-center items-center">
              <Image src="/vichy.png" alt="." width={250} height={250} />
            </div>
          </div>

          <div className="grid grid-cols-4">
            <div className="flex justify-center items-center">
              <Image src="/cgsi.png" alt="." width={250} height={250} />
            </div>
            <div className="flex justify-center items-center">
              <Image src="/irplus.png" alt="." width={250} height={250} />
            </div>
          </div>
        </CustomCarousel>
      </div>
      <hr class="w-32 h-1 mx-auto mt-5 bg-white border-0 rounded md:mt-10 md:w-40 lg:w-48 mb-5" />
    </div>
  );
};

export default Client;
