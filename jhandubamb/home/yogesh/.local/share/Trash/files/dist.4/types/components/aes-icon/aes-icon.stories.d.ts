import { IconType } from '../../utils/enums';
declare const _default: {
  title: string;
  component: string;
  argTypes: {
    icon: {
      name: string;
      control: {
        type: string;
        options: typeof IconType;
      };
    };
    url: {
      control: {
        type: string;
      };
    };
  };
};
export default _default;
export declare const ProvidedIcon: any;
export declare const RemoteIcon: any;
export declare const AllIcons: () => import("lit-html").TemplateResult;
