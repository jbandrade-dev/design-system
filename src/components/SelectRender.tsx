import { useEffect, useState } from "react";

interface Data {
  category: string;
  src: string;
  name: string;
  img: string;
}
[];

interface SelectRenderProps {
  selected: string;
}

export function SelectRender({ selected }: SelectRenderProps) {
  const [data, setData] = useState<Data[]>([]);

  useEffect(() => {
    fetch(`https://backend-reimont.vercel.app/downloads/cards`)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <ul className="grid pc:grid-cols-3 tablet:grid-cols-2 mob:grid-cols-1 gap-4">
      {data
        .filter((item) => {
          return item.category === selected;
        })
        .map((selected) => (
          <li key={selected.name}>
            <a href="http://" target="_blank" rel="noopener"></a>
          </li>
        ))}
    </ul>
  );
}
