export default () => {
  return {
    name: process.env.APP_ENV === 'production' ? 'tongdoc_app' : 'tongdoc_app(DEV)',
    ios: {
      bundleIdentifier: process.env.APP_ENV === 'production' ? 'com.dreamfreedom.tongdoc' : 'com.dreamfreedom.tongdoc-dev',
    },
    
  };
};