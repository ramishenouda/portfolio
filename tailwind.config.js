module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  corePlugins: {
    container: false,
  },
  theme: {
    container: {
      padding: {
        DEFAULT: '4rem',
        sm: '1rem',
        lg: '4rem',
        xl: '4rem',
        '2xl': '4rem',
      },
    },
    extend: {
      boxShadow: {
        sm: '0px 1px 3px rgba(0, 0, 0, 0.1)',
        md: '0px 4px 3px rgba(0, 0, 0, 0.1)',
        '2xl': '0px 25px 50px rgba(0, 0, 0, 0.1)',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        primary: {
          DEFAULT: '#EE7852',
          50: '#FCE4DC',
          100: '#F9D2C5',
          200: '#F7BCA9',
          300: '#F4A58C',
          400: '#F18F6F',
          500: '#EE7852',
          600: '#C66444',
          700: '#9F5037',
          800: '#773C29',
          900: '#301810',
        },
        neutral: {
          DEFAULT: '#6A7283',
          100: '#F2F2F4',
          200: '#B4B8C1',
          300: '#8F95A2',
          400: '#6A7283',
          500: '#444E64',
          600: '#1F2B45',
        },
        gray: { DEFAULT: '#5C6E74', 100: '#D9D9D9' },
        green: '#3BDF5F',
        'light-gray': '#AEB6BA',
        secondary: {
          DEFAULT: '#FFEAD9',
          100: '#FFEAD9',
          200: '#FFDCC0',
          300: '#FFCAA0',
          400: '#FFB981',
          500: '#FFA762',
          600: '#FF9642',
          700: '#D47D37',
          800: '#AA642C',
          900: '#804B21',
          1000: '#553216',
          2000: '#331E0D',
        },
        background: {
          DEFAULT: '#121212',
          50: '#B3F5E1',
          100: '#A1F3DA',
          200: '#7DEECB',
          300: '#59E9BD',
          400: '#35E4AF',
          500: '#1CD49C',
          600: '#15A278',
          700: '#0F7153',
          800: '#083F2F',
          900: '#020E0A',
        },
        danger: {
          DEFAULT: '#eb5757',
          50: '#fef2f2',
          100: '#fde3e3',
          200: '#fccccc',
          300: '#f9a8a8',
          400: '#f47575',
          500: '#eb5757',
          600: '#d62c2c',
          700: '#b42121',
          800: '#951f1f',
          900: '#7c2020',
        },
        warning: {
          DEFAULT: '#DAAE10',
          50: '#F9E7A9',
          100: '#F7E296',
          200: '#F4D870',
          300: '#F2CD4A',
          400: '#EFC324',
          500: '#DAAE10',
          600: '#A6840C',
          700: '#715B08',
          800: '#3D3104',
          900: '#090701',
        },
        info: {
          DEFAULT: '#17295c',
          50: '#2f51aa',
          100: '#B0D5FA',
          200: '#89C1F8',
          300: '#63ADF6',
          400: '#3C98F3',
          500: '#1684F1',
          600: '#0C68C3',
          700: '#094C8E',
          800: '#053059',
          900: '#021324',
        },

        'body-font': { DEFAULT: '#223b55' },
        'blue-light': { DEFAULT: '#f6f9fc' },
        'home-gradient-top': { DEFAULT: '#FAFAFA' },
        'home-gradient-bottom': { DEFAULT: '#E2EAFC' },
        'pop-light-brown': '#edebe6',
        'pop-background': '#f7f7f5',
        'pop-details-icon-background': 'rgba(238, 204, 82, 0.1)',
        'video-time-overlay': 'rgba(31, 43, 69, 0.2)',
      },
      screens: {
        'extra-small': { max: '480px' },
        small: { max: '640px' },
        medium: { max: '768px' },
        large: { max: '1024px' },
        'extra-large': { max: '1280px' },
      },
    },
  },
  variants: {
    extend: {
      visibility: ['group-hover'],
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          width: '100%',
          '@screen sm': {
            maxWidth: '640px',
          },
          '@screen md': {
            maxWidth: '768px',
          },
          '@screen lg': {
            maxWidth: '1024px',
          },
          '@screen xl': {
            maxWidth: '1280px',
          },
          '@screen 2xl': {
            maxWidth: '2560px',
          },
        },
      });
    },
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
    },
  ],
};
