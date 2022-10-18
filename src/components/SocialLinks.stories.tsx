import { Meta, StoryObj } from "@storybook/react";
import { SocialLinks } from "./SocialLinks";


export default {
  title: "Components/SocialLinks",
  component: SocialLinks,
  args: {
    size: '32',
    tailwind: 'flex gap-1'
  },
  argTypes: {},
} as Meta;

export const Default: StoryObj = {};
