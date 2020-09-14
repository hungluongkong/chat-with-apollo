const config = {
  PORT: 4001,
  TOKEN_KEY: 'be_secret',
  TOKEN_CONFIG: {
    algorithm: 'HS256',
    expiresIn: '1d',
  },
};

export default config;
