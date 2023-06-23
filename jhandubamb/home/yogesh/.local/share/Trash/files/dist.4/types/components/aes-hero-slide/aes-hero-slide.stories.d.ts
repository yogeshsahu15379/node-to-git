declare const _default: {
  title: string;
  component: string;
  argTypes: {
    cta: {
      control: {
        type: string;
      };
    };
  };
  args: {
    cta: {
      text: string;
      url: string;
    };
    headline: string;
    eyebrow: string;
  };
};
export default _default;
export declare const HeroSlide: ({ eyebrow, headline, cta }: {
  eyebrow: any;
  headline: any;
  cta: any;
}) => import("lit-html").TemplateResult;
