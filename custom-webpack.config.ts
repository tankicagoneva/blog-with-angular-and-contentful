import { EnvironmentPlugin } from 'webpack';
import { config } from 'dotenv';

config();

module.exports = {
  plugins: [new EnvironmentPlugin(['SPACE_ID', 'ACCESS_TOKEN'])],
};
