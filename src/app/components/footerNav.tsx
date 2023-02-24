import { FunctionComponent } from "react";

interface FooterNavProps {
  data: {
    header: string;
    elements: string[];
  };
}

const FooterNav: FunctionComponent<FooterNavProps> = ({ data }) => {
  let { header, elements } = data;
  let res = elements.map((element) => {
    return (
      <li key={`footer navbar element ${element}`} className="cursor-pointer">
        {element}
      </li>
    );
  });
  return (
    <>
      <h5 className="text-footerNavHeader my-5 lg:mb-10 text-tiny tracking-wider">
        {header}
      </h5>
      <ul className="flex flex-col gap-4 text-tiny tracking-wider">{res}</ul>
    </>
  );
};

export default FooterNav;
