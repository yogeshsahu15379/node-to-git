declare const _default: {
  title: string;
  component: string;
  parameters: {
    layout: string;
  };
  argTypes: {
    colSpanDefault: {
      name: string;
      defaultValue: number;
      control: {
        type: string;
        min: number;
        max: number;
        step: number;
      };
    };
    colSpanSm: {
      name: string;
      control: {
        type: string;
        min: number;
        max: number;
        step: number;
      };
    };
    colSpanMd: {
      name: string;
      control: {
        type: string;
        min: number;
        max: number;
        step: number;
      };
    };
    colSpanLg: {
      name: string;
      control: {
        type: string;
        min: number;
        max: number;
        step: number;
      };
    };
    colSpanXl: {
      name: string;
      control: {
        type: string;
        min: number;
        max: number;
        step: number;
      };
    };
    colSpanXxl: {
      name: string;
      control: {
        type: string;
        min: number;
        max: number;
        step: number;
      };
    };
    numContentCols: {
      name: string;
      description: string;
      defaultValue: number;
      control: {
        type: string;
        min: number;
        max: number;
        step: number;
      };
    };
    verticalAlignment: {
      name: string;
      control: {
        type: string;
        options: readonly ["top", "middle", "bottom"];
      };
    };
    defaultSlot: {
      name: string;
      description: string;
    };
  };
  decorators: ((Story: any) => import("lit-html").TemplateResult)[];
};
export default _default;
export declare const ResponsiveColumns: any;
