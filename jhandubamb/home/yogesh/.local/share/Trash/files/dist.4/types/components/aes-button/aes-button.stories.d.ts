import { ButtonVariant } from './aes-button';
declare const _default: {
  title: string;
  component: string;
  argTypes: {
    disabled: {
      control: {
        type: string;
      };
    };
    shouldDisplayArrow: {
      name: string;
      control: {
        type: string;
      };
    };
    url: {
      control: {
        type: string;
      };
    };
    variant: {
      control: {
        type: string;
        options: ButtonVariant[];
      };
    };
    target: {
      name: string;
      control: {
        type: string;
        options: string[];
      };
    };
    defaultSlot: {
      name: string;
      description: string;
    };
  };
  args: {
    shouldDisplayArrow: boolean;
    variant: string;
  };
};
export default _default;
export declare const Link: any;
export declare const ArrowLink: any;
export declare const Button: any;
