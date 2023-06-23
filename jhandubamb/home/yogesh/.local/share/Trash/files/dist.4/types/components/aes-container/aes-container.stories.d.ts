declare const _default: {
  title: string;
  component: string;
  parameters: {
    layout: string;
  };
  argTypes: {
    isNested: {
      name: string;
      control: {
        type: string;
      };
    };
    defaultSlot: {
      name: string;
      description: string;
    };
  };
};
export default _default;
export declare const Container: ({ isNested }: {
  isNested: any;
}) => import("lit-html").TemplateResult;
