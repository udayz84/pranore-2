import coreWebVitals from "eslint-config-next/core-web-vitals";
import typescript from "eslint-config-next/typescript";

const eslintConfig = [
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "components/ui/**",
      "hooks/**",
      "styles/**",
    ],
  },
  ...coreWebVitals,
  ...typescript,
];

export default eslintConfig;
