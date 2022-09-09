import LaptopImg from "../assets/laptop.jpg";

const Analytics = () => {
  return (
    <section id="analytics" className=" w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 ">
        <img className="mx-auto w-[25rem] my-4" src={LaptopImg} alt="Laptop" />
        <div className="md:my-auto h-full w-full flex flex-col justify-center">
          <h3 className=" uppercase text-green-400 font-bold my-2">
            Data analytics Dashboard
          </h3>
          <h1 className=" text-2xl font-bold mb-2">
            Manage Data Analytics Centrally
          </h1>
          <p className=" mb-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro
            corporis vel architecto fugit doloremque quaerat fuga excepturi
            natus, magnam eos aliquid eveniet omnis. Cumque odio facere aliquam
            quas laudantium? Quam?
          </p>
          <button className=" items-center text-center mx-auto md:ml-0 px-8 py-3 text-green-600 rounded-md bg-black hover:text-white border border-black pointer-events-auto duration-300">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Analytics;
