import AddOnsCol1 from "./AddOnsCol1";
import AddOnsCol2 from "./AddonsCol2";
import AddOnsCol3 from "./AddOnsCol3";
import AddOnsTablet1 from "./AddOnsTablet1";
import AddOnsTablet2 from "./AddOnsTablet2";

const AddOns = () => {
  return (
    <div className="pt-20">
      <div className="flex justify-center">
        <h1 className="xs:text-2xl ss:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-black font-bold font-head">
          ADD - ONS
        </h1>
      </div>
      <hr class="w-32 h-1 mx-auto my-6 bg-primary-color border-0 rounded md:my-16 md:w-40 lg:w-48" />
      <div
        data-aos="fade-up"
        data-aos-delay={200}
        data-aos-duration="500"
        className="flex flex-col mx-14 lg:mx-32 2xl:mx-80 gap-4 md:flex-row md:justify-between"
      >
        <AddOnsCol1 />
        <AddOnsCol2 />
        <AddOnsCol3 />
        <AddOnsTablet1 />
        <AddOnsTablet2 />
      </div>
      <hr class="w-32 h-1 mx-auto mt-10 bg-primary-color border-0 rounded md:mt-20 md:w-40 lg:w-48" />
      <div className="bg-customBottomGradient h-[200px]"></div>
    </div>
  );
};

export default AddOns;

