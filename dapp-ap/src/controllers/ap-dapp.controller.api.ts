export const apDappDefinition = {
  openapi: '3.0.0',
  servers: [
    {
      url: 'http://127.0.0.1:3101/',
    },
  ],
  info: {
    version: '1.0.0',
    title: 'AP Dapp management api',
    description:
      'This is the top-level service that serves the AP Dapp management/facade API, and is dependent on the following services: ap',
  },
  paths: {
    '/dapp-ap/ap/{apid}/updateSow': {
      put: {
        'x-controller-name': 'SowController',
        'x-operation-name': 'replaceById',
        tags: ['SowController'],
        responses: {
          '204': {
            description: 'Sow PUT success',
          },
        },
        parameters: [
          {
            name: 'ap_no',
            description:
              'The apId to use when retrieving data from the underlying microservices.',
            in: 'path',
            schema: {
              type: 'string',
            },
            required: true,
          },
        ],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/Sow',
              },
            },
          },
          'x-parameter-index': 1,
        },
      },
    },
    '/dapp-ap/ap': {
      get: {
        'x-operation-name': 'getAp',
        parameters: [
          {
            name: 'apId',
            in: 'query',
            description:
              'The apId to use when retrieving data from the underlying microservices.',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        responses: {
          '200': {
            description: 'success response with the ap',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/ap',
                },
              },
            },
          },
        },
      },
    },
    '/dapp-ap/create': {
      post: {
        'x-operation-name': 'createAp',
        'x-codegen-request-body-name': 'Ap',
        responses: {
          '200': {
            description: 'ok',
            content: {
              '*/*': {
                schema: {
                  $ref: '#/components/schemas/Ap',
                },
              },
            },
          },
        },
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/Ap',
                'x-body-name': 'Ap',
              },
            },
          },
          description: 'The ap instance.',
          required: true,
        },
      },
    },
  },
  components: {
    schemas: {
      Ap: {
        type: 'object',
        properties: {
          apid: {
            type: 'string',
            description: 'The ap id.',
          },
          projectTitle: {
            type: 'string',
            description: 'The project title.',
          },
          typeOfWork: {
            type: 'string',
            description: 'The type of work.',
          },
          statementOfNeed: {
            type: 'string',
            description: 'The statement of need',
          },
          sowid: {
            type: 'string',
            description: 'The ID of the SOW attached to this AP',
          },
        },
      },
      Sow: {
        title: 'Sow',
        properties: {
          id: {
            type: 'string',
          },
          title: {
            type: 'string',
          },
        },
      },
    },
  },
};
