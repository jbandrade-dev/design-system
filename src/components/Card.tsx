import { Heading } from "./Heading";
import { Text } from "./Text";

interface CardProps {
  data: {
    id: string;
    title: string;
    img: string;
    href: string;
    alt: string;
    icon: string;
  };
}

export function Card({ data }: CardProps) {
  return (
    <li className="bg-gray-100 rounded-md overflow-hidden">
      <a href={data.href}>
        <img src={data.img} alt={data.alt} />

        <div className="grid p-4 gap-3">
          <Heading size="sm" className="text-gray-900">{data.title}</Heading>
          <Text size="sm" className="text-gray-900">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </Text>
        </div>
      </a>
    </li>
  );
}
