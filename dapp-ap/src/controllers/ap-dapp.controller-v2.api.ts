export const apDappDefinition = {
  swagger: '2.0',
  info: {
    title: 'AP',
    version: '1.0.0',
  },
  host: '127.0.0.1:3001',
  basePath: '/',
  schemes: ['http'],
  paths: {
    '/dapp-ap/create': {
      post: {
        consumes: ['application/x-www-form-urlencoded'],
        produces: ['*/*'],
        parameters: [
          {
            description: 'The ap instance to create.',
            // in: 'body',
            name: 'body',
            required: true,
            schema: {
              $ref: '#/components/schemas/Ap',
            },
          },
        ],
        responses: {
          '200': {
            description: 'Request was successful',
            schema: {
              type: 'string',
            },
          },
        },
        deprecated: false,
        'x-operation-name': 'createAp',
        summary: 'Create an AP instance.',
      },
    },
  }
}