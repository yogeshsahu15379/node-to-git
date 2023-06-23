import { IconType } from '../../utils/enums';
declare const _default: {
  title: string;
  component: string;
  argTypes: {
    text: {
      name: string;
      description: string;
      type: string;
    };
    icon: {
      name: string;
      control: {
        type: string;
        options: typeof IconType;
      };
    };
  };
  args: {
    text: string;
    icon: IconType;
  };
};
export default _default;
export declare const SubmenuTitle: ({ text, icon }: {
  text: any;
  icon: any;
}) => import("lit-html").TemplateResult;
