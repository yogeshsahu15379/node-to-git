declare const _default: {
  title: string;
  component: string;
  argTypes: {
    href: {
      control: {
        type: string;
      };
    };
    rel: {
      control: {
        type: string;
      };
    };
    target: {
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
    href: string;
    slotContent: string;
  };
};
export default _default;
export declare const Link: ({ href, rel, slotContent, target }: {
  href: any;
  rel: any;
  slotContent: any;
  target: any;
}) => import("lit-html").TemplateResult;
