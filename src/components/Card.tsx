import { Heading } from "./Heading";
import { Text } from "./Text";

export function Card() {
  return (
    <div className="bg-gray-100 rounded overflow-hidden">
      <img className="w-full" src="./devdog.jpg" alt="DevDog" />

      <div className="grid p-4 gap-3">
        <Heading size="sm" className="text-gray-900">
          Doguinho Dev Jr.
        </Heading>
        <Text size="sm" className="text-gray-900">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </Text>
      </div>
    </div>
  );
}
