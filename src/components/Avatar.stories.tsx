import { Meta, StoryObj } from "@storybook/react";
import { Avatar, AvatarProps } from "./Avatar";

export default {
  title: "Components/Avatar",
  component: Avatar,
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<AvatarProps>;

export const Default: StoryObj<AvatarProps> = {};

