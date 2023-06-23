import { AllowedHeadingLevels } from '../aes-heading/aes-heading';
declare const _default: {
  title: string;
  component: string;
  parameters: {
    layout: string;
  };
  argTypes: {
    imageUrls: {
      name: string;
      sm: {
        name: string;
        description: string;
        control: {
          type: string;
        };
      };
      md: {
        name: string;
        description: string;
        control: {
          type: string;
        };
      };
      lg: {
        name: string;
        description: string;
        control: {
          type: string;
        };
      };
      xl: {
        name: string;
        description: string;
        control: {
          type: string;
        };
      };
      xxl: {
        name: string;
        description: string;
        control: {
          type: string;
        };
      };
    };
    titleText: {
      name: string;
      description: string;
    };
    titleLevel: {
      name: string;
      description: string;
      control: {
        type: string;
        options: AllowedHeadingLevels[];
      };
    };
    overlay: {
      name: string;
    };
  };
  args: {
    titleText: string;
    titleLevel: number;
    imageUrls: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    };
    overlay: boolean;
  };
};
export default _default;
export declare const Hero: ({ titleText, titleLevel, overlay, imageUrls: { sm, md, lg, xl, xxl }, }: {
  titleText: any;
  titleLevel: any;
  overlay: any;
  imageUrls: {
    sm: any;
    md: any;
    lg: any;
    xl: any;
    xxl: any;
  };
}) => import("lit-html").TemplateResult;
