import { VictoryLabel, VictoryPie } from "victory";
import { Heading } from "./Heading";

interface ChartPieProps {
  data: {
    name: string;
    value: number;
  }[];
}

export function ChartPie({ data }: ChartPieProps) {
  const values = data.map((item) => {
    return item.value;
  });
  const names = data.map((item) => {
    return item.name;
  });
  const total = values.reduce(function (total, i) {
    return total + i;
  });
  const porcento = total / 100;
  const porcentagens = values.map((value) => {
    return Math.round(value / porcento);
  });

  return (
    <section>
      <Heading className="text-gray-200 rounded-md mb-1 font-semibold text-lg mt-10">
        Charts:
      </Heading>
      <svg className="max-h-[350px]" viewBox="0 0 400 400">
        <VictoryPie
          colorScale={["blue", "purple", "pink", "orange", "gray"]}
          standalone={false}
          width={400}
          height={400}
          data={[
            {
              x: `${names[0]}-${porcentagens[0]}%`,
              y: porcentagens[0],
            },
            {
              x: `${names[1]}-${porcentagens[1]}%`,
              y: porcentagens[1],
              fill: "purple",
            },
            {
              x: `${names[2]}-${porcentagens[2]}%`,
              y: porcentagens[2],
              fill: "red",
            },
            {
              x: `${names[3]}-${porcentagens[3]}%`,
              y: porcentagens[3],
              fill: "orange",
            },
            {
              x: `${names[4]}-${porcentagens[4]}%`,
              y: porcentagens[4],
              fill: "gray",
            },
          ]}
          innerRadius={50}
          labelRadius={90}
          style={{
            data: { fillOpacity: 1, stroke: "black", strokeWidth: 2 },
            labels: { fontSize: 15, fill: "white" },
          }}
        />
        <circle
          cx="200"
          cy="200"
          r="47.5"
          fill="none"
          stroke="white"
          strokeWidth={1}
        />
        <circle
          cx="200"
          cy="200"
          r="152.5"
          fill="none"
          stroke="white"
          strokeWidth={1}
        />
        <VictoryLabel
          textAnchor="middle"
          verticalAnchor="middle"
          x={200}
          y={200}
          style={{ fontSize: 22, fill: "white" }}
          text="%"
        />
      </svg>
    </section>
  );
}
