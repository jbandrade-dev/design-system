import { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";

export default {
  title: "Components/Card",
  component: Card,
  args: {
    children: [
      <div>
        <img src="./devdog.jpg" alt="Doguinho desenvolvedor" />
        <div className="grid p-4 gap-3">
          <h3>Doguinho dev jr.</h3>
          <span className="">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </span>
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
