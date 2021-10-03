export type Theme = {
  colors: {
    text: string;
    background: string;
  };
};

/**
 * One half dark: https://github.com/sonph/onehalf
 */
export const darkTheme: Theme = {
  colors: {
    text: '#dcdfe4',
    background: '#282c34',
  },
};

/**
 * One half light: https://github.com/sonph/onehalf
 */
export const lightTheme: Theme = {
  colors: {
    text: '#383a42',
    background: '#fafafa',
  },
};
