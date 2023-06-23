var screenSizes = {
  'full-screen-w': '100vw',
  'half-screen-w': '50vw',
  'quarter-screen-w': '25vw',
  'full-screen-h': '100vh',
  'half-screen-h': '50vh',
  'quarter-screen-h': '25vh',
}

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: false,
  theme: {
    colors: {
      neutrals: {
        white: 'rgb(255, 255, 255)',
        gray1: 'rgb(245, 245, 245)',
        gray2: 'rgb(229, 229, 229)',
        gray3: 'rgb(191, 191, 191)',
        gray4: 'rgb(102, 102, 102)',
        gray5: 'rgb(118, 118, 118)',
        black: 'rgb(0, 0, 0)',
      },
      signature: {
        blue1: 'rgb(33, 74, 222)',
        blue2: 'rgb(88, 119, 230)',
        blue3: 'rgb(144, 164, 238)',
        blue4: 'rgb(199, 210, 247)',
        purple1: 'rgb(140, 92, 242)',
        purple2: 'rgb(169, 133, 245)',
        purple3: 'rgb(197, 173, 248)',
        purple4: 'rgb(226, 214, 252)',
        aqua1: 'rgb(0, 162, 199)',
        aqua2: 'rgb(64, 185, 213)',
        aqua3: 'rgb(128, 208, 227)',
        aqua4: 'rgb(191, 232, 241)',
        green1: 'rgb(22, 168, 55)',
        green2: 'rgb(80, 190, 105)',
        green3: 'rgb(138, 211, 155)',
        green4: 'rgb(197, 233, 205)',
      },
      ui: {
        error: 'rgb(225, 9, 9)',
      },
      transparent: 'transparent',
    },
    extend: {
      screens: {
        xxl: '1440px',
      },
      spacing: {
        72: '18rem',
        84: '21rem',
        96: '24rem',
      },
      // Tailwind provides gradient utility classes, but *only up to 3 stops*.
      // We need 4 stops, so this is a quick way to create one.
      backgroundImage: {
        'rainbow-gradient-x': `linear-gradient(to right, rgb(50, 80, 252), rgb(158, 112, 255), rgb(42, 206, 235), rgb(44, 191, 56))`,
        'rainbow-gradient-y': `linear-gradient(to bottom, rgb(50, 80, 252), rgb(158, 112, 255), rgb(42, 206, 235), rgb(44, 191, 56))`,
      },
      boxShadow: {
        'aes-lg': '0px 8px 32px rgba(0, 0, 0, 0.06)',
        'focus': '0 0 0 1px rgb(33, 74, 222)',
        'focus-2': '0 0 0 2px rgb(33, 74, 222)',
        'focus-error': '0 0 0 1px rgb(225, 9, 9)',
      },
      gridTemplateColumns: {
        '1-2': '4fr 8fr',
        '2-1': '8fr 4fr',
      },
      fontFamily: {
        display: [
          'neue-haas-grotesk-display',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
        body: ['neue-haas-grotesk-text', 'Helvetica', 'Arial', 'sans-serif'],
      },
      fontSize: {
        // Override 3xl from 1.875 to 2
        '3xl': '2rem',
        // Override 4xl from 2.25 to 2.5
        '4xl': '2.5rem',
        '5xl': '3.5rem',
        '6xl': '4.5rem',
        '7xl': '5.5rem',
        '8xl': '6.5rem',
      },
      height: {
        ...screenSizes,
      },
      maxHeight: {
        ...screenSizes,
      },
      width: {
        ...screenSizes,
      },
      maxWidth: {
        ...screenSizes,
      },
      opacity: {
        40: '0.4',
      },
    },
  },

  variants: {},
  plugins: [],
}
