import single from "../assets/single.png";
import double from "../assets/double.png";
import triple from "../assets/triple.png";

const Pricing = () => {
  return (
    <section id="pricing" className="w-full md:py-[10rem] py-24  bg-white">
      <div className=" mx-auto max-w-[1240px] grid md:grid-cols-3 text-center items-center gap-20 md:gap:16 ">
        <div className="w-[70%] md:w-full  mx-auto flex flex-col shadow-xl hover:shadow-2xl rounded-lg p-4 hover:scale-105 duration-300 ease-in-out ">
          <img
            src={single}
            alt=""
            className=" w-20 mt-[-3rem] mx-auto bg-transparent"
          />
          <h2 className="text-2xl font-bold py-8">Single User</h2>
          <h1 className="text-4xl font-bold ">$149</h1>
          <div className="flex gap-4 flex-col font-medium py-2 mt-7">
            <p className="border-b-2 pb-2">500 GB Storage</p>
            <p className="border-b-2 pb-2">1 User Allowed</p>
            <p className="border-b-2 pb-2">Send up to 2GB</p>
          </div>
          <button className="my-6 rounded-lg bg-green-600 mx-auto px-10 py-4 text-lg font-medium  hover:text-white ease-in-out duration-200">
            Start Trial
          </button>
        </div>

        <div className="w-[70%] md:w-full mx-auto md:scale-110  flex flex-col shadow-xl hover:shadow-2xl rounded-lg p-4 hover:scale-110 md:hover:scale-[1.2] duration-300 ease-in-out bg-gray-100 ">
          <img
            src={double}
            alt=""
            className=" w-20 mt-[-3rem] mx-auto bg-transparent"
          />
          <h2 className="text-2xl font-bold py-8">Single User</h2>
          <h1 className="text-4xl font-bold ">$149</h1>
          <div className="flex gap-4 flex-col font-medium py-2 mt-7">
            <p className="border-b-2 pb-2">500 GB Storage</p>
            <p className="border-b-2 pb-2">1 User Allowed</p>
            <p className="border-b-2 pb-2">Send up to 2GB</p>
          </div>
          <button className="my-6 rounded-lg bg-black mx-auto px-10 py-4 text-lg font-medium  text-white ease-in-out duration-200 hover:border-green-600 border-2 hover:bg-white hover:text-black">
            Start Trial
          </button>
        </div>

        <div className="w-[70%] md:w-full  mx-auto flex flex-col shadow-xl hover:shadow-2xl rounded-lg p-4 hover:scale-105 duration-300 ease-in-out">
          <img
            src={triple}
            alt=""
            className=" w-20 mt-[-3rem] mx-auto bg-transparent"
          />
          <h2 className="text-2xl font-bold py-8">Single User</h2>
          <h1 className="text-4xl font-bold ">$149</h1>
          <div className="flex gap-4 flex-col font-medium py-2 mt-7">
            <p className="border-b-2 pb-2">500 GB Storage</p>
            <p className="border-b-2 pb-2">1 User Allowed</p>
            <p className="border-b-2 pb-2">Send up to 2GB</p>
          </div>
          <button className="my-6 rounded-lg bg-green-600 mx-auto px-10 py-4 text-lg font-medium  hover:text-white ease-in-out duration-200">
            Start Trial
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
