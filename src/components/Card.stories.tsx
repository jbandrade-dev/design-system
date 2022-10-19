import { Meta, StoryObj } from "@storybook/react";
import { Card, Devdog } from "./Card";

export default {
  title: "Components/Card",
  component: Card,
  args: {
    children: [
      <Devdog />
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
