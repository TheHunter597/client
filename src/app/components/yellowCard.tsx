import Image from "next/image";
import { FunctionComponent } from "react";

interface YellowCardProps {
  data: {
    image: string;
    content: string;
  };
}

const YellowCard: FunctionComponent<YellowCardProps> = ({ data }) => {
  let { image, content } = data;
  return (
    <div className="flex flex-row items-center gap-5 bg-yellow-400  ">
      <Image src={image} height={20} width={25} alt="call icon" />
      <span>{content}</span>
    </div>
  );
};

export default YellowCard;
