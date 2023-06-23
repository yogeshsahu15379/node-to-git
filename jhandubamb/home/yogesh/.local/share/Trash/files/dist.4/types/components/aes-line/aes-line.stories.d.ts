declare const _default: {
  title: string;
  component: string;
  argTypes: {
    animDuration: {
      name: string;
      control: {
        type: string;
        description: string;
      };
    };
    animObserver: {
      table: {
        disable: boolean;
      };
    };
    animThreshold: {
      name: string;
    };
    direction: {
      name: string;
      control: {
        type: string;
        options: string[];
      };
    };
    displayAnimated: {
      name: string;
      control: {
        type: string;
      };
    };
    el: {
      table: {
        disable: boolean;
      };
    };
  };
  args: {
    direction: string;
  };
};
export default _default;
export declare const Line: ({ animDuration, animThreshold, direction, displayAnimated, }: {
  animDuration: any;
  animThreshold: any;
  direction: any;
  displayAnimated: any;
}) => import("lit-html").TemplateResult;
