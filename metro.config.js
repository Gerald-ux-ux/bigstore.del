const { getDefaultConfig } = require("metro-config");
const defaultConfig = getDefaultConfig(__dirname);

module.exports = {
  ...defaultConfig,
  resolver: {
    ...defaultConfig.resolver,
    extraNodeModules: {
      "tailwind-react-native-classnames":
        __dirname + "/node_modules/tailwind-react-native-classnames",
    },
  },
};
