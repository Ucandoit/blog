export type Theme = {
  colors: {
    text: string;
    background: string;
    primary: string;
    secondary: string;
  };
  spacing: {
    xs: string;
    md: string;
  };
  layout: {
    maxWidth: string;
  };
};

const theme = {
  spacing: {
    xs: '0.5rem',
    md: '1rem',
  },
  layout: {
    maxWidth: '1080px',
  },
};

/**
 * One half dark: https://github.com/sonph/onehalf
 */
export const darkTheme: Theme = {
  ...theme,
  colors: {
    text: '#dcdfe4',
    background: '#282c34',
    primary: '#61afef',
    secondary: '#98c379',
  },
};

/**
 * One half light: https://github.com/sonph/onehalf
 */
export const lightTheme: Theme = {
  ...theme,
  colors: {
    text: '#383a42',
    background: '#fafafa',
    primary: '#0184bc',
    secondary: '#50a14f',
  },
};
