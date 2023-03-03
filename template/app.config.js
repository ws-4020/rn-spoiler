
module.exports = ({config}) => {
  const defaultAppConfig = {
    ...config,
    name: 'HelloWorld',
    version: '1.0',
    android: {
      package: 'com.helloworld',
    },
    ios: {
      bundleIdentifier: 'org.name.HelloWorld',
    },
  };
  return defaultAppConfig;
};
