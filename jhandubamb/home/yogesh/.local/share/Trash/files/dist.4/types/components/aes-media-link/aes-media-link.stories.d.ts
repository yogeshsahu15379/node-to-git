declare const _default: {
  title: string;
  component: string;
  argTypes: {
    target: {
      name: string;
      control: {
        type: string;
        options: string[];
      };
    };
    text: {
      name: string;
      description: string;
      type: string;
    };
    url: {
      name: string;
      description: string;
      type: string;
    };
  };
  args: {
    text: string;
    url: string;
    target: string;
  };
};
export default _default;
export declare const MediaLink: ({ text, url, target }: {
  text: any;
  url: any;
  target: any;
}) => import("lit-html").TemplateResult;
