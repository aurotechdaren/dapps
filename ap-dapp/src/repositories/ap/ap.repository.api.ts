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
          "parameters": [
          {
              "in": "query",
              "name": "filter",
              "schema": {
              "properties": {
                  "fields": {
                  "properties": {
                      "apid": {
                      "type": "boolean"
                      },
                      "id": {
                      "type": "boolean"
                      },
                      "projectTitle": {
                      "type": "boolean"
                      },
                      "sowid": {
                      "type": "boolean"
                      },
                      "statementOfNeed": {
                      "type": "boolean"
                      },
                      "typeOfWork": {
                      "type": "boolean"
                      }
                  },
                  "type": "object"
                  },
                  "limit": {
                  "minimum": 0,
                  "type": "integer"
                  },
                  "offset": {
                  "minimum": 0,
                  "type": "integer"
                  },
                  "order": {
                  "items": {
                      "type": "string"
                  },
                  "type": "array"
                  },
                  "skip": {
                  "minimum": 0,
                  "type": "integer"
                  },
                  "where": {
                  "type": "object"
                  }
              },
              "type": "object"
              },
              "style": "deepObject"
          }
          ],
          "responses": {
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