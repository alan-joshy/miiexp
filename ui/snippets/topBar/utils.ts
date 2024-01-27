import type { IconName } from 'ui/shared/IconSvg';

export const COLOR_THEMES = [
  {
    name: 'Light',
    colorMode: 'dark',
    icon: 'moon' as IconName,
    colors: [
      { hex: '#101112', sampleBg: 'linear-gradient(161deg, #000 9.37%, #383838 92.52%)' },
    ],
  },
  {
    name: 'Dim',
    colorMode: 'dark',
    icon: 'moon' as IconName,
    colors: [
      { hex: '#101112', sampleBg: 'linear-gradient(161deg, #000 9.37%, #383838 92.52%)' },
    ],
  },
  {
    name: 'Dark',
    colorMode: 'dark',
    icon: 'moon' as IconName,
    colors: [
      { hex: '#101112', sampleBg: 'linear-gradient(161deg, #000 9.37%, #383838 92.52%)' },
    ],
  },
];

export type ColorTheme = typeof COLOR_THEMES[number];

export type ColorThemeColor = ColorTheme['colors'][number];
