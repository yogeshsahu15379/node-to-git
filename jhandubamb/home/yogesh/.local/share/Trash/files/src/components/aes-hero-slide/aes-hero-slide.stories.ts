import { html } from 'lit-html'
import { ifDefined } from 'lit-html/directives/if-defined'

export default {
  title: 'Molecules/Hero Slide',
  component: 'aes-hero-slide',
  argTypes: {
    cta: {
      control: {
        type: 'object',
      },
    },
  },
  args: {
    cta: {
      text: 'Learn more',
      url: 'https://www.google.com',
    },
    headline:
      'Turn your sustainable vision into a reality with new clean energy',
    eyebrow: 'Explore our product offerings',
  },
}

export const HeroSlide = ({ eyebrow, headline, cta }) => html`
  <aes-hero-slide
    headline="${ifDefined(headline)}"
    eyebrow="${ifDefined(eyebrow)}"
    cta="${ifDefined(JSON.stringify(cta))}"
  ></aes-hero-slide>
`
