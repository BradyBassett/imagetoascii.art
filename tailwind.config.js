module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  safelist: [
    'delay-250',
    'delay-500',
    'delay-750',
    'delay-1000',
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '820px',
        '4xl': '912px',
        '5xl': '1024px',
        '6xl': '1280px',
        '7xl': '1440px',
        '8xl': '1536px',
        '9xl': '1700px',
        '10xl': '1920px'
      },
      fontFamily: {
        title: ['PatrickHandSC'],
        body: ['BalsamiqSans']
      },
      transitionProperty: {
        'opacity': 'opacity',
        'underline': 'textUnderlineOffset'
      },
      transitionDelay: {
        '250': '250ms',
        '750': '750ms',
      },
    },
    screens: {
      'sm': '360px',
      'md': '414px',
      'lg': '540px',
      'xl': '650px',
      '2xl': '768px',
    },
    dropShadow: {
        'container': '8px 8px 32px rgba(0, 0, 0, 0.2)',
      }
  },
  plugins: [],
}
