import { ThemeShadow } from "src/common/types/theme";

export const shadow: ThemeShadow = {
  ClickableActive: `
  box-shadow: 0 2px 4px rgba(138, 150, 168, 0.4), 0px -2px 2px rgba(138, 150, 168, 0.08);
`,
  ClickableDefault: `
  box-shadow: 0 4px 8px rgba(138, 150, 168, 0.4), 0px -2px 4px rgba(138, 150, 168, 0.08);
`,
  ClickableHover: `
  box-shadow: 0 8px 16px rgba(138, 150, 168, 0.4), 0px -2px 8px rgba(138, 150, 168, 0.08);
`,
  NonClickable: `
  box-shadow: 0 4px 16px rgba(138, 150, 168, 0.4), 0 0 6px rgba(138, 150, 168, 0.08);
`,
};
