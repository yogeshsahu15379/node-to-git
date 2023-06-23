declare const _default: {
  title: string;
  component: string;
  argTypes: {
    fieldType: {
      control: {
        type: string;
        options: readonly ["text", "search", "password", "email", "tel", "number", "url"];
      };
    };
    hideLabel: {
      control: {
        type: string;
      };
    };
    required: {
      control: {
        type: string;
      };
    };
    disabled: {
      control: {
        type: string;
      };
    };
  };
  args: {
    labelText: string;
    fieldName: string;
    fieldType: string;
    hideLabel: boolean;
    required: boolean;
    disabled: boolean;
  };
};
export default _default;
export declare const Default: any;
export declare const Placeholder: any;
