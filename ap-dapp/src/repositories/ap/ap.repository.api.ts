export const apDefinition = {
  swagger: '2.0',
  info: {
    title: 'AP',
    version: '1.0.0',
  },
  host: '127.0.0.1:3000',
  basePath: '/',
  schemes: ['http'],
  paths: {
    '/ap/{id}': {
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
            in: 'query',
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
    },
    '/ap': {
        post: {
          consumes: ['application/json'],
          produces: ['*/*'],
          parameters: [
            {
              description: 'The ap instance to create.',
              in: 'body',
              name: 'ap',
              required: true,
              schema: {
                "type": "object",
                "properties": {
                    "id": {
                        "type": "number"
                    },
                    "projectTitle": {
                        "type": "string"
                    },
                    "typeOfWork": {
                        "type": "string"
                    },
                    "statementOfNeed": {
                        "type": "string"
                    }
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
          summary: 'Create an account instance.',
        },
      },
    },
    definitions: {

        "Ap": {
          "type": "object",
          "properties": {
              "id": {
                  "type": "number"
              },
              "projectTitle": {
                  "type": "string"
              },
              "typeOfWork": {
                  "type": "string"
              },
              "statementOfNeed": {
                  "type": "string"
              }
          }
      }

  }

};