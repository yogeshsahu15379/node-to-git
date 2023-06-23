declare const _default: {
  title: string;
  component: string;
  argTypes: {
    displayLinkArrow: {
      type: string;
    };
    linkText: {
      type: string;
    };
    linkUrl: {
      type: string;
    };
    defaultSlot: {
      name: string;
      description: string;
    };
  };
  args: {
    displayLinkArrow: boolean;
    slotContent: string;
    linkText: string;
    linkUrl: string;
  };
};
export default _default;
export declare const CTA: ({ displayLinkArrow, linkText, linkUrl, slotContent }: {
  displayLinkArrow: any;
  linkText: any;
  linkUrl: any;
  slotContent: any;
}) => import("lit-html").TemplateResult;
