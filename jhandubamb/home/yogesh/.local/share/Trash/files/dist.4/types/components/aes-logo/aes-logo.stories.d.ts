import { LogoType } from '../../utils/enums';
declare const _default: {
  title: string;
  component: string;
  argTypes: {
    logo: {
      name: string;
      control: {
        type: string;
        options: typeof LogoType;
      };
    };
    market: {
      name: string;
      control: {
        type: string;
        options: typeof import("../../utils/enums").Markets;
      };
    };
    variant: {
      name: string;
      control: {
        type: string;
        options: typeof import("../../utils/enums").LogoVariants;
      };
    };
  };
};
export default _default;
export declare const GlobalRGB: any;
export declare const MarketRGBIndiana: any;
export declare const MarketMiamiValleyLighting: any;
export declare const AllLogos: () => import("lit-html").TemplateResult;
