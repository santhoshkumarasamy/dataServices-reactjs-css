import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaDribbble,
} from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="w-full text-white   ">
      <div className="max-w-[1240px] mx-auto w-full px-4 py-12 grid grid-cols-1 md:grid-cols-3">
        
        <div className="w-full flex flex-col">
          <h1  className='uppercase font-bold text-3xl py-4 text-green-600'>react.</h1>
          <p className="text-md ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum a
            quod unde pariatur aperiam aliquid aspernatur non placeat eos
            assumenda.
          </p>
          <div className="flex  justify-between md:gap-6 md:justify-start mt-6 text-2xl ">
            <FaFacebook  className="hover:text-[#4267B2] "/>
            <FaInstagram className="hover:text-[#C13584]" />
            <FaTwitter className="hover:text-[#00ACEE]"/>
            <FaGithub className=""/>
            <FaDribbble className="hover:text-[#EA4C89]" />
          </div>
        </div>

        <div className=" col-span-2 my-8 flex justify-between">
            <div>
                <h2 className="text-lg text-gray-400 mb-1">Solutions</h2>
                <ul className=" text-gray-500 flex flex-col gap-1 text-md">
                    <li>Analytics</li>
                    <li>Marketing</li>
                    <li>Commerce</li>
                    <li>Insights</li>
                </ul>
            </div>
            <div>
                <h2 className="text-lg text-gray-400 mb-1">Support</h2>
                <ul className=" text-gray-500 flex flex-col gap-1 text-md">
                    <li>Pricing</li>
                    <li>Documentation</li>
                    <li>Guides</li>
                    <li>API Status</li>
                </ul>
            </div>
            <div>
                <h2 className="text-lg text-gray-400 mb-1">Company</h2>
                <ul className=" text-gray-500 flex flex-col gap-1 text-md">
                    <li>About</li>
                    <li>Blog</li>
                    <li>Jobs</li>
                    <li>Press</li>
                    <li>Partners</li>
                </ul>
            </div>
            <div>
                <h2 className="text-lg text-gray-400 mb-1">Legal</h2>
                <ul className=" text-gray-500 flex flex-col gap-1 text-md">
                    <li>Claim</li>
                    <li>Policy</li>
                    <li>Terms</li>
                </ul>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
