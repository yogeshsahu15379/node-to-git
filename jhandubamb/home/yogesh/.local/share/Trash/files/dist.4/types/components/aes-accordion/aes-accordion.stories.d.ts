declare const _default: {
  title: string;
  component: string;
  argTypes: {
    summaryContent: {
      table: {
        disable: boolean;
      };
    };
    bodyContent: {
      table: {
        disable: boolean;
      };
    };
    isOpen: {
      name: string;
      control: {
        type: string;
      };
    };
  };
  args: {
    summaryContent: import("lit-html").TemplateResult;
    bodyContent: import("lit-html").TemplateResult;
    isOpen: boolean;
  };
};
export default _default;
export declare const Default: any;
export declare const Open: any;
export declare const AccordionsGroup: () => import("lit-html").TemplateResult;
