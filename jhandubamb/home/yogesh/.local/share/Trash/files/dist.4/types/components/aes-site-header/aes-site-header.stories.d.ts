import { LogoType } from '../../utils/enums';
declare const _default: {
  title: string;
  component: string;
  parameters: {
    layout: string;
  };
  argTypes: {
    logoVersion: {
      name: string;
      control: {
        type: string;
        options: typeof LogoType;
      };
    };
    logoUrl: {
      control: {
        type: string;
      };
    };
    languageselector: {
      title: StringConstructor;
      value: StringConstructor;
    }[];
  };
  args: {
    logoUrl: string;
    logoVersion: LogoType;
    languageselector: {
      title: string;
      value: string;
    }[];
  };
};
export default _default;
export declare const SiteHeader: ({ logoVersion, logoUrl, languageselector }: {
  logoVersion: any;
  logoUrl: any;
  languageselector: any;
}) => import("lit-html").TemplateResult;
