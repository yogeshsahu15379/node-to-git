import { html } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined';
// import sampleVideo1 from '../../../.storybook/static/media/AES-Hero-web.mp4'
export default {
  title: 'Organisms/Hero Interactive',
  component: 'aes-hero-interactive',
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    defaultSlot: {
      name: 'Default Slot',
      description: 'The default slot. Anything placed in this slot becomes the slides in the slideshow, though using a Hero Slide is recommended.',
    },
    el: {
      table: {
        disable: true,
      },
    },
    current: {
      table: {
        disable: true,
      },
    },
    count: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    // bgVideo: sampleVideo1,
    bgVideo: 'https://player.vimeo.com/progressive_redirect/playback/724873019/rendition/1080p/file.mp4?loc=external&signature=8bda55b5e7a9df148ecb4c3a4ec1939729443dd271ae3cd4504de29ddbb15a38',
  },
};
const Template = ({ bgVideo, duration, progress }) => html `
    <aes-hero-interactive
      bg-video="${bgVideo}"
      duration="${ifDefined(duration)}"
      progress="${ifDefined(progress)}"
    >
      <picture slot="bg-image">
        <source
          media="(min-width: 1440px)"
          srcset="https://picsum.photos/1440/477?blur=2"
        />
        <source
          media="(min-width: 1280px)"
          srcset="https://picsum.photos/1280/670?blur=2"
        />
        <source
          media="(min-width: 1024px)"
          srcset="https://picsum.photos/1024/596?blur=2"
        />
        <source
          media="(min-width: 768px)"
          srcset="https://picsum.photos/768/477?blur=2"
        />
        <source
          media="(min-width: 640px)"
          srcset="https://picsum.photos/640/354?blur=2"
        />
        <img src="https://picsum.photos/1024/477?blur=2" alt="" />
      </picture>

      <aes-hero-slide
        slot="slides"
        headline="Turn your sustainable vision into a reality with new clean energy"
        eyebrow="Explore our product offerings"
        cta="${JSON.stringify({
  text: 'Learn more',
  url: 'http://www.google.com',
})}"
      ></aes-hero-slide>
      <aes-hero-slide
        slot="slides"
        headline="Drive impact through access & insights with advanced energy networks"
        eyebrow="Explore our product offerings"
        cta="${JSON.stringify({
  text: 'Learn more',
  url: 'http://www.google.com',
})}"
      ></aes-hero-slide>
      <aes-hero-slide
        slot="slides"
        headline="Secure your sustainable future with AES' cleaner energy portfolio"
        eyebrow="Explore our product offerings"
        cta="${JSON.stringify({
  text: 'Learn more',
  url: 'http://www.google.com',
})}"
      ></aes-hero-slide>
    </aes-hero-interactive>
  `;
export const Defaults = Template.bind({});
export const Pips = Template.bind({});
Pips.args = {
  progress: 'pips',
};
