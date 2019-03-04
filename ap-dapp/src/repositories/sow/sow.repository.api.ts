export const sowDefinition = {
  swagger: '2.0',
  info: {
    title: 'AP',
    version: '1.0.0',
  },
  host: '127.0.0.1:3002',
  basePath: '/',
  schemes: ['http'],
  paths: {
    '/sow/{id}': {
      get: {
        produces: ['*/*'],
        parameters: [
          {
            description: 'Model id',
            format: 'JSON',
            in: 'path',
            name: 'id',
            required: true,
            type: 'string',
          },
          {
            description:
              'Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})',
            format: 'JSON',
            in: 'path',
            name: 'filter',
            required: false,
            type: 'string',
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
        operationId: 'findById',
        summary:
          'Find all instances of the model matched by filter from the data source.',
      },
      put: {
        produces: ['*/*'],
        consumes: ['application/json'],
        parameters: [
          {
            description: 'Model id',
            format: 'JSON',
            in: 'path',
            name: 'id',
            required: true,
            type: 'object',
          },
          {
            description: 'The sow instance to update.',
            in: 'body',
            name: 'body',
            required: true,
            schema: {
              "type": "object",
              "properties": {
                  "title": {
                      "type": "string"
                  },
              }
            },
          },
        ],
        responses: {
          '204': {
            description: 'Sow Put successful',
            schema: {
              type: 'string',
            },
          },
        },
        deprecated: false,
        operationId: 'replaceById',
        summary:
          'Update this instance of the model.',
      },
    },
    '/sow': {
        post: {
          consumes: ['application/json'],
          produces: ['*/*'],
          parameters: [
            {
              description: 'The sow instance to create.',
              in: 'body',
              name: 'body',
              required: true,
              schema: {
                "type": "object",
                "properties": {
                    "id": {
                        "type": "string"
                    },
                    "title": {
                        "type": "string"
                    },
                }
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
          operationId: 'create',
          summary: 'Create a sow instance.',
        },
      },
    },
    definitions: {

        "sow": {
          "type": "object",
          "properties": {
              "id": {
                  "type": "string"
              },
              "title": {
                  "type": "string"
              },
          }
      }

  }

};