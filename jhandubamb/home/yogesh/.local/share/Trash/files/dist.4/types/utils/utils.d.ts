import { IconType, LogoType, Markets, LogoVariants } from './enums';
export declare function format(first: string, middle: string | undefined, last: string | undefined): string;
/**
 * Merge into argTypes in stories for a repeatable slot content type
 * This is for a control to dump in arbitrary strings which are NOT properties
 * of a component.
 */
export declare const argTypeSlotContent: {
  defaultSlot: {
    name: string;
    description: string;
  };
};
export declare const argTypeOrientation: {
  orientation: {
    name: string;
    control: {
      type: string;
      options: readonly ["vertical", "horizontal"];
    };
  };
};
export declare const argTypeColSpan: {
  name: string;
  control: {
    type: string;
    min: number;
    max: number;
    step: number;
  };
};
export declare const argTypeGapSize: {
  name: string;
  control: {
    type: string;
    options: string[];
  };
};
export declare const argTypeVerticalAlign: {
  name: string;
  control: {
    type: string;
    options: readonly ["top", "middle", "bottom"];
  };
};
export declare const argTypeSize: {
  name: string;
  control: {
    type: string;
    options: readonly ["small", "medium", "large", "none"];
  };
};
export declare const argTypeColor: {
  name: string;
  control: {
    type: string;
    options: import("./types").Color[];
  };
};
export declare const argTypeNeutralColor: {
  name: string;
  control: {
    type: string;
    options: import("./types").NeutralColor[];
  };
};
export declare const argTypeSpacing: {
  name: string;
  control: {
    type: string;
    options: ("0" | "1" | "2" | "3" | "4" | "5" | "6" | "8" | "10" | "12" | "20" | "40" | "16" | "24" | "32" | "48" | "56" | "64" | "72" | "84" | "96" | "px")[];
  };
};
export declare const argTypeWidth: {
  name: string;
  control: {
    type: string;
    options: ("0" | "1" | "2" | "3" | "4" | "5" | "6" | "8" | "10" | "12" | "20" | "40" | "16" | "24" | "32" | "48" | "56" | "64" | "72" | "84" | "96" | "px")[];
  };
};
export declare const argTypeImageUrl: {
  name: string;
  description: string;
  control: {
    type: string;
  };
};
export declare const argTypeIcon: {
  name: string;
  control: {
    type: string;
    options: typeof IconType;
  };
};
export declare const argTypeMarket: {
  name: string;
  control: {
    type: string;
    options: typeof Markets;
  };
};
export declare const argTypeLogoVariant: {
  name: string;
  control: {
    type: string;
    options: typeof LogoVariants;
  };
};
export declare const argTypeLogo: {
  name: string;
  control: {
    type: string;
    options: typeof LogoType;
  };
};
export declare const argTypeHidden: {
  table: {
    disable: boolean;
  };
};
export declare const argTypeTarget: {
  target: {
    name: string;
    control: {
      type: string;
      options: string[];
    };
  };
};
/**
 * Turn a rem string like `4rem` into a px string like `64px`
 * @param {string} remVal
 */
export declare const extractPx: (remVal: string) => string;
