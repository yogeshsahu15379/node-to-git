import { AllowedHeadingLevels } from './aes-heading';
declare const _default: {
  title: string;
  component: string;
  argTypes: {
    level: {
      control: {
        type: string;
        options: AllowedHeadingLevels[];
      };
    };
    levelStyle: {
      control: {
        type: string;
        options: AllowedHeadingLevels[];
      };
    };
    sub: {
      control: {
        type: string;
      };
    };
    defaultSlot: {
      name: string;
      description: string;
    };
  };
  args: {
    defaultSlot: string;
  };
};
export default _default;
export declare const Heading: any;
