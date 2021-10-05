export type Theme = {
  colors: {
    text: string;
    background: string;
    primary: string;
  };
  spacing: {
    xs: string;
  };
};

const theme = {
  spacing: {
    xs: '0.5rem',
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
  },
};
