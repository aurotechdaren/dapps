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
    '/ap': {
        post: {
          consumes: ['application/json'],
          produces: ['*/*'],
          parameters: [
            {
              description: 'The ap instance to create.',
              in: 'body',
              name: 'body',
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
                    },
                    "sowid": {
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
        get: {
          produces: ['*/*'],
          consumes: ['application/json'],
          parameters: [
          {
              in: 'query',
              name: 'filter',
              required: true,
              format: 'json',
              schema: {
              type: 'string'
              }
          }
          ],
          responses: {
          "200": {
              "content": {
              "application/json": {
                  "schema": {
                  "items": {
                      "$ref": "#/components/schemas/Ap"
                  },
                  "type": "array"
                  }
              }
              },
              "description": "Array of Ap model instances"
          }
          },
          tags: [
          "ApController"
          ],
          operationId: "find"
      }
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