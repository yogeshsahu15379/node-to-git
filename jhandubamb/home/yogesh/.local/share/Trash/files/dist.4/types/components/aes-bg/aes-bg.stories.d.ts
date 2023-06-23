declare const _default: {
  title: string;
  component: string;
  parameters: {
    layout: string;
  };
  argTypes: {
    verticalPadding: {
      name: string;
      control: {
        type: string;
        options: readonly ["small", "medium", "large", "none"];
      };
    };
    defaultSlot: {
      name: string;
      description: string;
    };
  };
};
export default _default;
export declare const BackgroundColor: {
  ({ verticalPadding }: {
    verticalPadding: any;
  }): import("lit-html").TemplateResult;
  args: {
    verticalPadding: string;
  };
};
export declare const BackgroundImageTopRight: {
  ({ verticalPadding }: {
    verticalPadding: any;
  }): import("lit-html").TemplateResult;
  args: {
    verticalPadding: string;
  };
};
export declare const BackgroundImageBottom: {
  ({ verticalPadding }: {
    verticalPadding: any;
  }): import("lit-html").TemplateResult;
  args: {
    verticalPadding: string;
  };
};
