const application = require('./dist');

module.exports = application;

if (require.main === module) {
  // Run the application
  const config = {
    rest: {
      port: +(process.env.PORT || 4001),
      host: process.env.HOST,
      openApiSpec: {
        // useful when used with OASGraph to locate your application
        setServersFromRequest: true,
        endpointMapping: {
          '/openapi-ap.json': {version: '3.0.0', format: 'json'},
          '/openapi-ap.yaml': {version: '3.0.0', format: 'yaml'},
        },
      },
    },
  };
  application.main(config).catch(err => {
    console.error('Cannot start the application.', err);
    process.exit(1);
  });
}
