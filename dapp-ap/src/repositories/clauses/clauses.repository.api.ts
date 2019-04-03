export const clausesDefinition = {
  swagger: '2.0',
  info: {
    title: 'Clauses',
    version: '1.0.0',
  },
  host: '18.206.126.152:8000',
  basePath: '/',
  schemes: ['http'],
  paths: {
    '/clauses': {
      get: {
        produces: ['application/json'],
        parameters: [
          {
            in: 'query',
            name: 'filter',
            type: 'object',
          },
        ],
        responses: {
          '200': {
            description: 'Array of Clauses model instances',
            schema: {
              items: {
                $ref: '#/definitions/Clauses',
              },
              type: 'array',
            },
          },
        },
        tags: ['ClausesController'],
        'x-controller-name': 'ClausesController',
        operationId: 'find',
      },
      patch: {
        consumes: ['application/json'],
        produces: ['application/json'],
        parameters: [
          {
            in: 'query',
            name: 'where',
            type: 'object',
          },
          {
            in: 'body',
            name: 'body',
            schema: {
              $ref: '#/definitions/Clauses',
            },
          },
        ],
        responses: {
          '200': {
            description: 'Clauses PATCH success count',
            schema: {
              properties: {
                count: {
                  type: 'number',
                },
              },
              type: 'object',
            },
          },
        },
        tags: ['ClausesController'],
        'x-controller-name': 'ClausesController',
        operationId: 'updateAll',
      },
      post: {
        consumes: ['application/json'],
        produces: ['application/json'],
        parameters: [
          {
            in: 'body',
            name: 'body',
            schema: {
              $ref: '#/definitions/Clauses',
            },
          },
        ],
        responses: {
          '200': {
            description: 'Clauses model instance',
            schema: {
              $ref: '#/definitions/Clauses',
            },
          },
        },
        tags: ['ClausesController'],
        'x-controller-name': 'ClausesController',
        operationId: 'create',
      },
    },
    '/clauses/count': {
      get: {
        produces: ['application/json'],
        parameters: [
          {
            in: 'query',
            name: 'where',
            type: 'object',
          },
        ],
        responses: {
          '200': {
            description: 'Clauses model count',
            schema: {
              properties: {
                count: {
                  type: 'number',
                },
              },
              type: 'object',
            },
          },
        },
        tags: ['ClausesController'],
        'x-controller-name': 'ClausesController',
        operationId: 'count',
      },
    },
    '/clauses/{id}': {
      delete: {
        parameters: [
          {
            in: 'path',
            name: 'id',
            required: true,
            type: 'string',
          },
        ],
        responses: {
          '204': {
            description: 'Clauses DELETE success',
          },
        },
        tags: ['ClausesController'],
        'x-controller-name': 'ClausesController',
        operationId: 'deleteById',
      },
      get: {
        produces: ['application/json'],
        parameters: [
          {
            in: 'path',
            name: 'id',
            required: true,
            type: 'string',
          },
        ],
        responses: {
          '200': {
            description: 'Clauses model instance',
            schema: {
              $ref: '#/definitions/Clauses',
            },
          },
        },
        tags: ['ClausesController'],
        'x-controller-name': 'ClausesController',
        operationId: 'findById',
      },
      patch: {
        consumes: ['application/json'],
        parameters: [
          {
            in: 'path',
            name: 'id',
            required: true,
            type: 'string',
          },
          {
            in: 'body',
            name: 'body',
            schema: {
              $ref: '#/definitions/Clauses',
            },
            'x-parameter-index': 1,
          },
        ],
        responses: {
          '204': {
            description: 'Clauses PATCH success',
          },
        },
        tags: ['ClausesController'],
        'x-controller-name': 'ClausesController',
        operationId: 'updateById',
      },
      put: {
        consumes: ['application/json'],
        parameters: [
          {
            in: 'path',
            name: 'id',
            required: true,
            type: 'string',
          },
          {
            in: 'body',
            name: 'body',
            schema: {
              $ref: '#/definitions/Clauses',
            },
            'x-parameter-index': 1,
          },
        ],
        responses: {
          '204': {
            description: 'Clauses PUT success',
          },
        },
        tags: ['ClausesController'],
        'x-controller-name': 'ClausesController',
        operationId: 'replaceById',
      },
    },
    '/ping': {
      get: {
        produces: ['application/json'],
        parameters: [],
        responses: {
          '200': {
            description: 'Ping Response',
            schema: {
              properties: {
                date: {
                  type: 'string',
                },
                greeting: {
                  type: 'string',
                },
                headers: {
                  additionalProperties: true,
                  properties: {
                    'Content-Type': {
                      type: 'string',
                    },
                  },
                  type: 'object',
                },
                url: {
                  type: 'string',
                },
              },
              type: 'object',
            },
          },
        },
        tags: ['PingController'],
        'x-controller-name': 'PingController',
        operationId: 'ping',
      },
    },
  },
  definitions: {
    Clauses: {
      properties: {
        ForH: {
          type: 'string',
        },
        IBR: {
          type: 'string',
        },
        PorC: {
          type: 'string',
        },
        UCF: {
          type: 'string',
        },
        clauseNo: {
          type: 'string',
        },
        commSVC: {
          type: 'string',
        },
        date: {
          type: 'string',
        },
        id: {
          type: 'string',
        },
        inclusionF: {
          type: 'string',
        },
        p48CFR: {
          type: 'string',
        },
        prescription: {
          type: 'string',
        },
        sno: {
          type: 'string',
        },
        thresholdAmt: {
          type: 'string',
        },
        title: {
          type: 'string',
        },
        useCause: {
          type: 'string',
        },
        useClause: {
          type: 'string',
        },
      },
      title: 'Clauses',
    },
  },
  'x-components': {},
};
