/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
      './app/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        colors: {
          'dark-pink': '#8e2249',
          'medium-pink': '#b92e62',
          'light-pink': '#e65c8a',
          'very-light-pink': '#f7d0dd',
          'darkest-bg': '#1a0e12',
          'dark-bg': '#2d1a21',
        },
        typography: (theme) => ({
          DEFAULT: {
            css: {
              color: theme('colors.gray.300'),
              h1: {
                color: theme('colors.gray.200'),
              },
              h2: {
                color: theme('colors.gray.200'),
              },
              h3: {
                color: theme('colors.gray.200'),
              },
              h4: {
                color: theme('colors.gray.200'),
              },
              a: {
                color: theme('colors.medium-pink'),
                '&:hover': {
                  color: theme('colors.light-pink'),
                },
              },
              strong: {
                color: theme('colors.gray.200'),
              },
              code: {
                color: theme('colors.gray.200'),
                backgroundColor: theme('colors.gray.800'),
                padding: '0.25rem',
                borderRadius: '0.25rem',
                fontWeight: '400',
              },
              pre: {
                backgroundColor: '#1E293B',
                color: theme('colors.gray.200'),
                padding: '1rem',
                borderRadius: '0.5rem',
                overflow: 'auto',
              },
              blockquote: {
                color: theme('colors.gray.400'),
                borderLeftColor: theme('colors.medium-pink'),
              },
              ul: {
                listStyleType: 'disc',
              },
              ol: {
                listStyleType: 'decimal',
              },
              li: {
                marginTop: '0.5rem',
                marginBottom: '0.5rem',
              },
            },
          },
          invert: {
            css: {
              color: theme('colors.gray.300'),
              a: {
                color: theme('colors.medium-pink'),
                '&:hover': {
                  color: theme('colors.light-pink'),
                },
              },
            },
          },
          pink: {
            css: {
              '--tw-prose-links': theme('colors.medium-pink'),
              '--tw-prose-invert-links': theme('colors.medium-pink'),
            },
          },
        }),
      },
    },
    plugins: [
      require('@tailwindcss/typography'),
    ],
  }