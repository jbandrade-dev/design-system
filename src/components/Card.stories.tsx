import { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";
import { Heading } from "./Heading";
import { Text } from "./Text";

export default {
  title: "Components/Card",
  component: Card,
  args: {
    children: [
      <a href="#">
        <img src="./devdog.jpg" alt="Doguinho desenvolvedor" />
        <div className="grid p-4 gap-3">
          <Heading className="">Doguinho dev jr.</Heading>
          <Text className="">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </Text>
        </div>
      </a>,
    ],
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
} as Meta;

export const Default: StoryObj = {};
