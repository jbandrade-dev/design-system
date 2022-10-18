import { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";
import { Heading } from "./Heading";
import { Text } from "./Text";

export default {
  title: "Components/Card",
  component: Card,
  args: {
    children: [
      <div>
        <img src="./devdog.jpg" alt="Doguinho desenvolvedor" />
        <div className="grid p-4 gap-3">
          <Heading>Doguinho dev jr.</Heading>
          <Text className="">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </Text>
        </div>
      </div>
    ],
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    data: {
      table: {
        disable: true,
      },
    },
  },
} as Meta;

export const Default: StoryObj = {};
