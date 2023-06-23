declare const _default: {
  title: string;
  component: string;
  parameters: {
    layout: string;
  };
  argTypes: {
    bgColor: {
      name: string;
      control: {
        type: string;
        options: import("../../resolved-tailwind-config").NeutralColor[];
      };
    };
    titleText: {
      name: string;
      description: string;
      type: string;
    };
  };
};
export default _default;
export declare const MediaLinkContainerSingle: {
  ({ bgColor, titleText }: {
    bgColor: any;
    titleText: any;
  }): import("lit-html").TemplateResult;
  args: {
    titleText: string;
  };
};
export declare const MediaLinkContainerMultiple: {
  ({ bgColor, titleText }: {
    bgColor: any;
    titleText: any;
  }): import("lit-html").TemplateResult;
  args: {
    titleText: string;
  };
};
