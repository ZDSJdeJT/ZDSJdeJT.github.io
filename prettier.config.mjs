/** @type {import("prettier").Config} */
export default {
  singleQuote: true,
  trailingComma: 'all',
  semi: true,
  bracketSpacing: true,
  tabWidth: 2,
  printWidth: 80,
  plugins: [
    'prettier-plugin-astro',
    'prettier-plugin-tailwindcss',
    'prettier-plugin-astro-organize-imports',
  ],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
};
