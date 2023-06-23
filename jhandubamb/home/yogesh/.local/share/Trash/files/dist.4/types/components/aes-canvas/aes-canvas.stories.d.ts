declare const _default: {
  title: string;
  component: string;
  argTypes: {
    bodyContent: {
      table: {
        disable: boolean;
      };
    };
    bgColor: {
      name: string;
      control: {
        type: string;
        options: import("../../resolved-tailwind-config").NeutralColor[];
      };
    };
    bgHoverImage: {
      name: string;
    };
    bgVimeoVideo: {
      name: string;
    };
    isControls: {
      name: string;
      control: {
        type: string;
      };
    };
    isAutoplay: {
      name: string;
      control: {
        type: string;
      };
    };
    displayBorder: {
      name: string;
      control: {
        type: string;
      };
    };
    borderColor: {
      name: string;
      control: {
        type: string;
        options: import("../../resolved-tailwind-config").Color[];
      };
    };
    displayDropShadow: {
      name: string;
      control: {
        type: string;
      };
    };
    cta: {
      name: string;
    };
    ctaData: {
      table: {
        disable: boolean;
      };
    };
    image: {
      name: string;
      description: string;
      control: {
        type: string;
      };
    };
    outerPaddingTop: {
      name: string;
      control: {
        type: string;
        options: ("0" | "1" | "2" | "3" | "4" | "5" | "6" | "8" | "10" | "12" | "20" | "40" | "16" | "24" | "32" | "48" | "56" | "64" | "72" | "84" | "96" | "px")[];
      };
    };
    outerPaddingBottom: {
      name: string;
      control: {
        type: string;
        options: ("0" | "1" | "2" | "3" | "4" | "5" | "6" | "8" | "10" | "12" | "20" | "40" | "16" | "24" | "32" | "48" | "56" | "64" | "72" | "84" | "96" | "px")[];
      };
    };
    outerPaddingLeft: {
      name: string;
      control: {
        type: string;
        options: ("0" | "1" | "2" | "3" | "4" | "5" | "6" | "8" | "10" | "12" | "20" | "40" | "16" | "24" | "32" | "48" | "56" | "64" | "72" | "84" | "96" | "px")[];
      };
    };
    outerPaddingRight: {
      name: string;
      control: {
        type: string;
        options: ("0" | "1" | "2" | "3" | "4" | "5" | "6" | "8" | "10" | "12" | "20" | "40" | "16" | "24" | "32" | "48" | "56" | "64" | "72" | "84" | "96" | "px")[];
      };
    };
    paddingTop: {
      name: string;
      control: {
        type: string;
        options: ("0" | "1" | "2" | "3" | "4" | "5" | "6" | "8" | "10" | "12" | "20" | "40" | "16" | "24" | "32" | "48" | "56" | "64" | "72" | "84" | "96" | "px")[];
      };
    };
    paddingBottom: {
      name: string;
      control: {
        type: string;
        options: ("0" | "1" | "2" | "3" | "4" | "5" | "6" | "8" | "10" | "12" | "20" | "40" | "16" | "24" | "32" | "48" | "56" | "64" | "72" | "84" | "96" | "px")[];
      };
    };
    paddingLeft: {
      name: string;
      control: {
        type: string;
        options: ("0" | "1" | "2" | "3" | "4" | "5" | "6" | "8" | "10" | "12" | "20" | "40" | "16" | "24" | "32" | "48" | "56" | "64" | "72" | "84" | "96" | "px")[];
      };
    };
    paddingRight: {
      name: string;
      control: {
        type: string;
        options: ("0" | "1" | "2" | "3" | "4" | "5" | "6" | "8" | "10" | "12" | "20" | "40" | "16" | "24" | "32" | "48" | "56" | "64" | "72" | "84" | "96" | "px")[];
      };
    };
  };
  args: {
    outerPaddingTop: string;
    outerPaddingBottom: string;
    outerPaddingLeft: string;
    outerPaddingRight: string;
    paddingTop: string;
    paddingBottom: string;
    paddingLeft: string;
    paddingRight: string;
    displayBorder: boolean;
  };
};
export default _default;
export declare const CanvasWithCta: any;
export declare const CanvasWithHoverImage: any;
export declare const CanvasWithImage: any;
export declare const CanvasWithDonut: () => import("lit-html").TemplateResult;
export declare const CanvasWithPerson: () => import("lit-html").TemplateResult;
export declare const CanvasWithSliderCard: any;
export declare const CanvasFromConsumer: any;
