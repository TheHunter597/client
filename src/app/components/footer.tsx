import Image from "next/image";
import FooterNav from "./footerNav";

interface FooterProps {}

const Footer = () => {
  let footerNavs = [
    {
      header: "LUXESTATE",
      elements: ["Agents", "Hunters"],
    },
    {
      header: "COMPANY",
      elements: ["About", "FAQ", "Contact", "Social"],
    },
    {
      header: "PRODUCT",
      elements: ["Appartments", "How It Works"],
    },
    {
      header: "SERVICES",
      elements: ["Renting", "Selling", "Building"],
    },
  ];
  let firstNav = footerNavs.map((nav) => {
    return (
      <>
        <div className="col-span-1"></div>
        <div
          key={nav.header}
          className="col-span-1 flex flex-col items-center justify-center
        
        "
        >
          <FooterNav data={nav} />
        </div>
      </>
    );
  });
  return (
    <footer className="bg-primary mt-24 pb-20" id="contact-us">
      <div className="container mx-auto">
        <div
          className="border-b border-b-white pt-16 pb-14 flex flex-col lg:flex-row gap-20
        px-4
        "
        >
          <h3
            className="text-white text-4xl leading-relaxed font-semibold 
          tracking-wider lg:w-footerHeader text-center lg:text-start"
          >
            <span className="block tracking-wide">luxestate</span>
            <span className=" tracking-wide">Explore Real Estate</span>
          </h3>
          <div className="self-center lg:w-1/2">
            <div className="flex flex-row items-center gap-8 pl-4 bg-white">
              <input
                placeholder="Subscribe To Our Newsletter"
                className=" w-80 py-3 outline-none text-primary text-lg "
              />
              <button
                className="bg-white  w-3/12 hover:bg-yellow-400 h-full py-8 
              flex flex-row place-content-center duration-300
              "
              >
                <Image
                  src="/images/arrow-right.svg"
                  height={20}
                  width={30}
                  alt="right arrow"
                />
              </button>
            </div>
          </div>
        </div>
        <div
          className="mt-16 px-4 text-white md:grid md:grid-cols-12 flex flex-col
         items-center md:items-start justify-center md:justify-start"
        >
          <div className="lg:col-span-3 flex flex-row justify-between w-10/12 lg:w-full	">
            <h5 className="text-2xl font-semibold mb-10">luxestate</h5>
            <p className="text-tiny leading-loose">
              <span className="block">© 2019 - luxestate,</span>
              <span> All Right Reserved</span>
            </p>
          </div>
          <div className="col-span-1"></div>
          {firstNav}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
