export const blockchainDefinition = {
  swagger: '2.0',
  info: {
    version: '0.0.8',
    title: 'hhs-accelerate-auronetwork',
    description: 'Aurotech HHS Accelerate Business Network',
  },
  host: '54.89.228.74:3000',
  basePath: '/api',
  paths: {
    '/system/ping': {
      get: {
        tags: ['System'],
        summary: 'Test the connection to the business network',
        operationId: 'System.ping',
        parameters: [],
        responses: {
          '200': {
            description: 'Request was successful',
            schema: {
              $ref: '#/definitions/PingResponse',
            },
          },
        },
        deprecated: false,
      },
    },
    '/system/identities': {
      get: {
        tags: ['System'],
        summary: 'Get all identities from the identity registry',
        operationId: 'System.getAllIdentities',
        parameters: [],
        responses: {
          '200': {
            description: 'Request was successful',
            schema: {
              type: 'array',
              items: {
                type: 'object',
              },
            },
          },
        },
        deprecated: false,
      },
    },
    '/system/identities/{id}': {
      get: {
        tags: ['System'],
        summary: 'Get the specified identity from the identity registry',
        operationId: 'System.getIdentityByID',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            type: 'string',
          },
        ],
        responses: {
          '200': {
            description: 'Request was successful',
            schema: {
              type: 'object',
            },
          },
        },
        deprecated: false,
      },
    },
    '/system/identities/issue': {
      post: {
        tags: ['System'],
        summary: 'Issue an identity to the specified participant',
        operationId: 'System.issueIdentity',
        parameters: [
          {
            name: 'data',
            in: 'body',
            required: true,
            schema: {
              $ref: '#/definitions/IssueIdentityRequest',
            },
          },
        ],
        responses: {
          '200': {
            description: 'Request was successful',
            schema: {
              type: 'file',
            },
          },
        },
        deprecated: false,
      },
    },
    '/system/identities/bind': {
      post: {
        tags: ['System'],
        summary: 'Bind an identity to the specified participant',
        operationId: 'System.bindIdentity',
        parameters: [
          {
            name: 'data',
            in: 'body',
            required: true,
            schema: {
              $ref: '#/definitions/BindIdentityRequest',
            },
          },
        ],
        responses: {
          '204': {
            description: 'Request was successful',
          },
        },
        deprecated: false,
      },
    },
    '/system/identities/{id}/revoke': {
      post: {
        tags: ['System'],
        summary: 'Revoke the specified identity',
        operationId: 'System.revokeIdentity',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            type: 'string',
          },
        ],
        responses: {
          '204': {
            description: 'Request was successful',
          },
        },
        deprecated: false,
      },
    },
    '/system/historian': {
      get: {
        tags: ['System'],
        summary: 'Get all Historian Records from the Historian',
        operationId: 'System.getAllHistorianRecords',
        parameters: [],
        responses: {
          '200': {
            description: 'Request was successful',
            schema: {
              type: 'array',
              items: {
                type: 'object',
              },
            },
          },
        },
        deprecated: false,
      },
    },
    '/system/historian/{id}': {
      get: {
        tags: ['System'],
        summary: 'Get the specified Historian Record from the Historian',
        operationId: 'System.getHistorianRecordByID',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            type: 'string',
          },
        ],
        responses: {
          '200': {
            description: 'Request was successful',
            schema: {
              type: 'object',
            },
          },
        },
        deprecated: false,
      },
    },
    '/org.auro.hhsnet.AP': {
      post: {
        tags: ['org_auro_hhsnet_AP'],
        summary:
          'Create a new instance of the model and persist it into the data source.',
        operationId: 'createAP',
        parameters: [
          {
            name: 'data',
            in: 'body',
            description: 'Model instance data',
            required: false,
            schema: {
              description: 'Model instance data',
              $ref: '#/definitions/org_auro_hhsnet_AP',
            },
          },
        ],
        responses: {
          '200': {
            description: 'Request was successful',
            schema: {
              $ref: '#/definitions/org_auro_hhsnet_AP',
            },
          },
        },
        deprecated: false,
      },
      get: {
        tags: ['org_auro_hhsnet_AP'],
        summary:
          'Find all instances of the model matched by filter from the data source.',
        operationId: 'findAP',
        parameters: [
          {
            name: 'filter',
            in: 'query',
            description:
              "Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({'something':'value'})",
            required: false,
            type: 'string',
            format: 'JSON',
          },
        ],
        responses: {
          '200': {
            description: 'Request was successful',
            schema: {
              type: 'array',
              items: {
                $ref: '#/definitions/org_auro_hhsnet_AP',
              },
            },
          },
        },
        deprecated: false,
      },
    },
    '/org.auro.hhsnet.AP/{id}': {
      head: {
        tags: ['org_auro_hhsnet_AP'],
        summary: 'Check whether a model instance exists in the data source.',
        operationId: 'existsAP',
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: 'Model id',
            required: true,
            type: 'string',
            format: 'JSON',
          },
        ],
        responses: {
          '200': {
            description: 'Request was successful',
            schema: {
              type: 'object',
              properties: {
                exists: {
                  type: 'boolean',
                },
              },
            },
          },
        },
        deprecated: false,
      },
      get: {
        tags: ['org_auro_hhsnet_AP'],
        summary: 'Find a model instance by {{id}} from the data source.',
        operationId: 'findByIdAP',
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: 'Model id',
            required: true,
            type: 'string',
            format: 'JSON',
          },
          {
            name: 'filter',
            in: 'query',
            description:
              "Filter defining fields and include - must be a JSON-encoded string ({'something':'value'})",
            required: false,
            type: 'string',
            format: 'JSON',
          },
        ],
        responses: {
          '200': {
            description: 'Request was successful',
            schema: {
              $ref: '#/definitions/org_auro_hhsnet_AP',
            },
          },
        },
        deprecated: false,
      },
      put: {
        tags: ['org_auro_hhsnet_AP'],
        summary:
          'Replace attributes for a model instance and persist it into the data source.',
        operationId: 'replaceByIdAP',
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: 'Model id',
            required: true,
            type: 'string',
            format: 'JSON',
          },
          {
            name: 'data',
            in: 'body',
            description: 'Model instance data',
            required: false,
            schema: {
              description: 'Model instance data',
              $ref: '#/definitions/org_auro_hhsnet_AP',
            },
          },
        ],
        responses: {
          '200': {
            description: 'Request was successful',
            schema: {
              $ref: '#/definitions/org_auro_hhsnet_AP',
            },
          },
        },
        deprecated: false,
      },
      delete: {
        tags: ['org_auro_hhsnet_AP'],
        summary: 'Delete a model instance by {{id}} from the data source.',
        operationId: 'deleteByIdAP',
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: 'Model id',
            required: true,
            type: 'string',
            format: 'JSON',
          },
        ],
        responses: {
          '200': {
            description: 'Request was successful',
            schema: {
              type: 'object',
            },
          },
        },
        deprecated: false,
      },
    },
    '/org.auro.hhsnet.Clauses': {
      post: {
        tags: ['org_auro_hhsnet_Clauses'],
        summary:
          'Create a new instance of the model and persist it into the data source.',
        operationId: 'createClauses',
        parameters: [
          {
            name: 'data',
            in: 'body',
            description: 'Model instance data',
            required: false,
            schema: {
              description: 'Model instance data',
              $ref: '#/definitions/org_auro_hhsnet_Clauses',
            },
          },
        ],
        responses: {
          '200': {
            description: 'Request was successful',
            schema: {
              $ref: '#/definitions/org_auro_hhsnet_Clauses',
            },
          },
        },
        deprecated: false,
      },
      get: {
        tags: ['org_auro_hhsnet_Clauses'],
        summary:
          'Find all instances of the model matched by filter from the data source.',
        operationId: 'findClauses',
        parameters: [
          {
            name: 'filter',
            in: 'query',
            description:
              "Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({'something':'value'})",
            required: false,
            type: 'string',
            format: 'JSON',
          },
        ],
        responses: {
          '200': {
            description: 'Request was successful',
            schema: {
              type: 'array',
              items: {
                $ref: '#/definitions/org_auro_hhsnet_Clauses',
              },
            },
          },
        },
        deprecated: false,
      },
    },
    '/org.auro.hhsnet.Clauses/{id}': {
      head: {
        tags: ['org_auro_hhsnet_Clauses'],
        summary: 'Check whether a model instance exists in the data source.',
        operationId: 'existsClauses',
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: 'Model id',
            required: true,
            type: 'string',
            format: 'JSON',
          },
        ],
        responses: {
          '200': {
            description: 'Request was successful',
            schema: {
              type: 'object',
              properties: {
                exists: {
                  type: 'boolean',
                },
              },
            },
          },
        },
        deprecated: false,
      },
      get: {
        tags: ['org_auro_hhsnet_Clauses'],
        summary: 'Find a model instance by {{id}} from the data source.',
        operationId: 'findByIdClauses',
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: 'Model id',
            required: true,
            type: 'string',
            format: 'JSON',
          },
          {
            name: 'filter',
            in: 'query',
            description:
              "Filter defining fields and include - must be a JSON-encoded string ({'something':'value'})",
            required: false,
            type: 'string',
            format: 'JSON',
          },
        ],
        responses: {
          '200': {
            description: 'Request was successful',
            schema: {
              $ref: '#/definitions/org_auro_hhsnet_Clauses',
            },
          },
        },
        deprecated: false,
      },
      put: {
        tags: ['org_auro_hhsnet_Clauses'],
        summary:
          'Replace attributes for a model instance and persist it into the data source.',
        operationId: 'replaceByIdClauses',
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: 'Model id',
            required: true,
            type: 'string',
            format: 'JSON',
          },
          {
            name: 'data',
            in: 'body',
            description: 'Model instance data',
            required: false,
            schema: {
              description: 'Model instance data',
              $ref: '#/definitions/org_auro_hhsnet_Clauses',
            },
          },
        ],
        responses: {
          '200': {
            description: 'Request was successful',
            schema: {
              $ref: '#/definitions/org_auro_hhsnet_Clauses',
            },
          },
        },
        deprecated: false,
      },
      delete: {
        tags: ['org_auro_hhsnet_Clauses'],
        summary: 'Delete a model instance by {{id}} from the data source.',
        operationId: 'deleteByIdClauses',
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: 'Model id',
            required: true,
            type: 'string',
            format: 'JSON',
          },
        ],
        responses: {
          '200': {
            description: 'Request was successful',
            schema: {
              type: 'object',
            },
          },
        },
        deprecated: false,
      },
    },
    '/org.auro.hhsnet.Solicitation': {
      post: {
        tags: ['org_auro_hhsnet_Solicitation'],
        summary:
          'Create a new instance of the model and persist it into the data source.',
        operationId: 'createSolicitation',
        parameters: [
          {
            name: 'data',
            in: 'body',
            description: 'Model instance data',
            required: false,
            schema: {
              description: 'Model instance data',
              $ref: '#/definitions/org_auro_hhsnet_Solicitation',
            },
          },
        ],
        responses: {
          '200': {
            description: 'Request was successful',
            schema: {
              $ref: '#/definitions/org_auro_hhsnet_Solicitation',
            },
          },
        },
        deprecated: false,
      },
      get: {
        tags: ['org_auro_hhsnet_Solicitation'],
        summary:
          'Find all instances of the model matched by filter from the data source.',
        operationId: 'findSolicitation',
        parameters: [
          {
            name: 'filter',
            in: 'query',
            description:
              "Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({'something':'value'})",
            required: false,
            type: 'string',
            format: 'JSON',
          },
        ],
        responses: {
          '200': {
            description: 'Request was successful',
            schema: {
              type: 'array',
              items: {
                $ref: '#/definitions/org_auro_hhsnet_Solicitation',
              },
            },
          },
        },
        deprecated: false,
      },
    },
    '/org.auro.hhsnet.Solicitation/{id}': {
      head: {
        tags: ['org_auro_hhsnet_Solicitation'],
        summary: 'Check whether a model instance exists in the data source.',
        operationId: 'existsSolicitation',
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: 'Model id',
            required: true,
            type: 'string',
            format: 'JSON',
          },
        ],
        responses: {
          '200': {
            description: 'Request was successful',
            schema: {
              type: 'object',
              properties: {
                exists: {
                  type: 'boolean',
                },
              },
            },
          },
        },
        deprecated: false,
      },
      get: {
        tags: ['org_auro_hhsnet_Solicitation'],
        summary: 'Find a model instance by {{id}} from the data source.',
        operationId: 'findByIdSolicitation',
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: 'Model id',
            required: true,
            type: 'string',
            format: 'JSON',
          },
          {
            name: 'filter',
            in: 'query',
            description:
              "Filter defining fields and include - must be a JSON-encoded string ({'something':'value'})",
            required: false,
            type: 'string',
            format: 'JSON',
          },
        ],
        responses: {
          '200': {
            description: 'Request was successful',
            schema: {
              $ref: '#/definitions/org_auro_hhsnet_Solicitation',
            },
          },
        },
        deprecated: false,
      },
      put: {
        tags: ['org_auro_hhsnet_Solicitation'],
        summary:
          'Replace attributes for a model instance and persist it into the data source.',
        operationId: 'replaceByIdSolicitation',
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: 'Model id',
            required: true,
            type: 'string',
            format: 'JSON',
          },
          {
            name: 'data',
            in: 'body',
            description: 'Model instance data',
            required: false,
            schema: {
              description: 'Model instance data',
              $ref: '#/definitions/org_auro_hhsnet_Solicitation',
            },
          },
        ],
        responses: {
          '200': {
            description: 'Request was successful',
            schema: {
              $ref: '#/definitions/org_auro_hhsnet_Solicitation',
            },
          },
        },
        deprecated: false,
      },
      delete: {
        tags: ['org_auro_hhsnet_Solicitation'],
        summary: 'Delete a model instance by {{id}} from the data source.',
        operationId: 'deleteByIdSolicitation',
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: 'Model id',
            required: true,
            type: 'string',
            format: 'JSON',
          },
        ],
        responses: {
          '200': {
            description: 'Request was successful',
            schema: {
              type: 'object',
            },
          },
        },
        deprecated: false,
      },
    },
    '/org.auro.hhsnet.CO': {
      post: {
        tags: ['org_auro_hhsnet_CO'],
        summary:
          'Create a new instance of the model and persist it into the data source.',
        operationId: 'createCO',
        parameters: [
          {
            name: 'data',
            in: 'body',
            description: 'Model instance data',
            required: false,
            schema: {
              description: 'Model instance data',
              $ref: '#/definitions/org_auro_hhsnet_CO',
            },
          },
        ],
        responses: {
          '200': {
            description: 'Request was successful',
            schema: {
              $ref: '#/definitions/org_auro_hhsnet_CO',
            },
          },
        },
        deprecated: false,
      },
      get: {
        tags: ['org_auro_hhsnet_CO'],
        summary:
          'Find all instances of the model matched by filter from the data source.',
        operationId: 'findCO',
        parameters: [
          {
            name: 'filter',
            in: 'query',
            description:
              "Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({'something':'value'})",
            required: false,
            type: 'string',
            format: 'JSON',
          },
        ],
        responses: {
          '200': {
            description: 'Request was successful',
            schema: {
              type: 'array',
              items: {
                $ref: '#/definitions/org_auro_hhsnet_CO',
              },
            },
          },
        },
        deprecated: false,
      },
    },
    '/org.auro.hhsnet.CO/{id}': {
      head: {
        tags: ['org_auro_hhsnet_CO'],
        summary: 'Check whether a model instance exists in the data source.',
        operationId: 'existsCO',
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: 'Model id',
            required: true,
            type: 'string',
            format: 'JSON',
          },
        ],
        responses: {
          '200': {
            description: 'Request was successful',
            schema: {
              type: 'object',
              properties: {
                exists: {
                  type: 'boolean',
                },
              },
            },
          },
        },
        deprecated: false,
      },
      get: {
        tags: ['org_auro_hhsnet_CO'],
        summary: 'Find a model instance by {{id}} from the data source.',
        operationId: 'findByIdCO',
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: 'Model id',
            required: true,
            type: 'string',
            format: 'JSON',
          },
          {
            name: 'filter',
            in: 'query',
            description:
              "Filter defining fields and include - must be a JSON-encoded string ({'something':'value'})",
            required: false,
            type: 'string',
            format: 'JSON',
          },
        ],
        responses: {
          '200': {
            description: 'Request was successful',
            schema: {
              $ref: '#/definitions/org_auro_hhsnet_CO',
            },
          },
        },
        deprecated: false,
      },
      put: {
        tags: ['org_auro_hhsnet_CO'],
        summary:
          'Replace attributes for a model instance and persist it into the data source.',
        operationId: 'replaceByIdCO',
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: 'Model id',
            required: true,
            type: 'string',
            format: 'JSON',
          },
          {
            name: 'data',
            in: 'body',
            description: 'Model instance data',
            required: false,
            schema: {
              description: 'Model instance data',
              $ref: '#/definitions/org_auro_hhsnet_CO',
            },
          },
        ],
        responses: {
          '200': {
            description: 'Request was successful',
            schema: {
              $ref: '#/definitions/org_auro_hhsnet_CO',
            },
          },
        },
        deprecated: false,
      },
      delete: {
        tags: ['org_auro_hhsnet_CO'],
        summary: 'Delete a model instance by {{id}} from the data source.',
        operationId: 'deleteByIdCO',
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: 'Model id',
            required: true,
            type: 'string',
            format: 'JSON',
          },
        ],
        responses: {
          '200': {
            description: 'Request was successful',
            schema: {
              type: 'object',
            },
          },
        },
        deprecated: false,
      },
    },
    '/org.auro.hhsnet.Scraper': {
      post: {
        tags: ['org_auro_hhsnet_Scraper'],
        summary:
          'Create a new instance of the model and persist it into the data source.',
        operationId: 'createScraper',
        parameters: [
          {
            name: 'data',
            in: 'body',
            description: 'Model instance data',
            required: false,
            schema: {
              description: 'Model instance data',
              $ref: '#/definitions/org_auro_hhsnet_Scraper',
            },
          },
        ],
        responses: {
          '200': {
            description: 'Request was successful',
            schema: {
              $ref: '#/definitions/org_auro_hhsnet_Scraper',
            },
          },
        },
        deprecated: false,
      },
      get: {
        tags: ['org_auro_hhsnet_Scraper'],
        summary:
          'Find all instances of the model matched by filter from the data source.',
        operationId: 'findScraper',
        parameters: [
          {
            name: 'filter',
            in: 'query',
            description:
              "Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({'something':'value'})",
            required: false,
            type: 'string',
            format: 'JSON',
          },
        ],
        responses: {
          '200': {
            description: 'Request was successful',
            schema: {
              type: 'array',
              items: {
                $ref: '#/definitions/org_auro_hhsnet_Scraper',
              },
            },
          },
        },
        deprecated: false,
      },
    },
    '/org.auro.hhsnet.Scraper/{id}': {
      head: {
        tags: ['org_auro_hhsnet_Scraper'],
        summary: 'Check whether a model instance exists in the data source.',
        operationId: 'existsScraper',
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: 'Model id',
            required: true,
            type: 'string',
            format: 'JSON',
          },
        ],
        responses: {
          '200': {
            description: 'Request was successful',
            schema: {
              type: 'object',
              properties: {
                exists: {
                  type: 'boolean',
                },
              },
            },
          },
        },
        deprecated: false,
      },
      get: {
        tags: ['org_auro_hhsnet_Scraper'],
        summary: 'Find a model instance by {{id}} from the data source.',
        operationId: 'findByIdScraper',
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: 'Model id',
            required: true,
            type: 'string',
            format: 'JSON',
          },
          {
            name: 'filter',
            in: 'query',
            description:
              "Filter defining fields and include - must be a JSON-encoded string ({'something':'value'})",
            required: false,
            type: 'string',
            format: 'JSON',
          },
        ],
        responses: {
          '200': {
            description: 'Request was successful',
            schema: {
              $ref: '#/definitions/org_auro_hhsnet_Scraper',
            },
          },
        },
        deprecated: false,
      },
      put: {
        tags: ['org_auro_hhsnet_Scraper'],
        summary:
          'Replace attributes for a model instance and persist it into the data source.',
        operationId: 'replaceByIdScraper',
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: 'Model id',
            required: true,
            type: 'string',
            format: 'JSON',
          },
          {
            name: 'data',
            in: 'body',
            description: 'Model instance data',
            required: false,
            schema: {
              description: 'Model instance data',
              $ref: '#/definitions/org_auro_hhsnet_Scraper',
            },
          },
        ],
        responses: {
          '200': {
            description: 'Request was successful',
            schema: {
              $ref: '#/definitions/org_auro_hhsnet_Scraper',
            },
          },
        },
        deprecated: false,
      },
      delete: {
        tags: ['org_auro_hhsnet_Scraper'],
        summary: 'Delete a model instance by {{id}} from the data source.',
        operationId: 'deleteByIdScraper',
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: 'Model id',
            required: true,
            type: 'string',
            format: 'JSON',
          },
        ],
        responses: {
          '200': {
            description: 'Request was successful',
            schema: {
              type: 'object',
            },
          },
        },
        deprecated: false,
      },
    },
    '/org.auro.hhsnet.apInitiate': {
      post: {
        tags: ['org_auro_hhsnet_apInitiate'],
        summary:
          'Create a new instance of the model and persist it into the data source.',
        operationId: 'createapInitiate',
        parameters: [
          {
            name: 'data',
            in: 'body',
            description: 'Model instance data',
            required: false,
            schema: {
              description: 'Model instance data',
              $ref: '#/definitions/org_auro_hhsnet_apInitiate',
            },
          },
        ],
        responses: {
          '200': {
            description: 'Request was successful',
            schema: {
              $ref: '#/definitions/org_auro_hhsnet_apInitiate',
            },
          },
        },
        deprecated: false,
      },
      get: {
        tags: ['org_auro_hhsnet_apInitiate'],
        summary:
          'Find all instances of the model matched by filter from the data source.',
        operationId: 'findapInitiate',
        parameters: [
          {
            name: 'filter',
            in: 'query',
            description:
              "Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({'something':'value'})",
            required: false,
            type: 'string',
            format: 'JSON',
          },
        ],
        responses: {
          '200': {
            description: 'Request was successful',
            schema: {
              type: 'array',
              items: {
                $ref: '#/definitions/org_auro_hhsnet_apInitiate',
              },
            },
          },
        },
        deprecated: false,
      },
    },
    '/org.auro.hhsnet.apInitiate/{id}': {
      get: {
        tags: ['org_auro_hhsnet_apInitiate'],
        summary: 'Find a model instance by {{id}} from the data source.',
        operationId: 'findByIdapInitiate',
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: 'Model id',
            required: true,
            type: 'string',
            format: 'JSON',
          },
          {
            name: 'filter',
            in: 'query',
            description:
              "Filter defining fields and include - must be a JSON-encoded string ({'something':'value'})",
            required: false,
            type: 'string',
            format: 'JSON',
          },
        ],
        responses: {
          '200': {
            description: 'Request was successful',
            schema: {
              $ref: '#/definitions/org_auro_hhsnet_apInitiate',
            },
          },
        },
        deprecated: false,
      },
    },
    '/org.auro.hhsnet.apHash': {
      post: {
        tags: ['org_auro_hhsnet_apHash'],
        summary:
          'Create a new instance of the model and persist it into the data source.',
        operationId: 'createapHash',
        parameters: [
          {
            name: 'data',
            in: 'body',
            description: 'Model instance data',
            required: false,
            schema: {
              description: 'Model instance data',
              $ref: '#/definitions/org_auro_hhsnet_apHash',
            },
          },
        ],
        responses: {
          '200': {
            description: 'Request was successful',
            schema: {
              $ref: '#/definitions/org_auro_hhsnet_apHash',
            },
          },
        },
        deprecated: false,
      },
      get: {
        tags: ['org_auro_hhsnet_apHash'],
        summary:
          'Find all instances of the model matched by filter from the data source.',
        operationId: 'findapHash',
        parameters: [
          {
            name: 'filter',
            in: 'query',
            description:
              "Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({'something':'value'})",
            required: false,
            type: 'string',
            format: 'JSON',
          },
        ],
        responses: {
          '200': {
            description: 'Request was successful',
            schema: {
              type: 'array',
              items: {
                $ref: '#/definitions/org_auro_hhsnet_apHash',
              },
            },
          },
        },
        deprecated: false,
      },
    },
    '/org.auro.hhsnet.apHash/{id}': {
      get: {
        tags: ['org_auro_hhsnet_apHash'],
        summary: 'Find a model instance by {{id}} from the data source.',
        operationId: 'findByIdapHash',
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: 'Model id',
            required: true,
            type: 'string',
            format: 'JSON',
          },
          {
            name: 'filter',
            in: 'query',
            description:
              "Filter defining fields and include - must be a JSON-encoded string ({'something':'value'})",
            required: false,
            type: 'string',
            format: 'JSON',
          },
        ],
        responses: {
          '200': {
            description: 'Request was successful',
            schema: {
              $ref: '#/definitions/org_auro_hhsnet_apHash',
            },
          },
        },
        deprecated: false,
      },
    },
  },
  tags: [
    {
      name: 'System',
      description: 'General business network methods',
    },
    {
      name: 'org_auro_hhsnet_AP',
      description: 'An asset named AP',
    },
    {
      name: 'org_auro_hhsnet_Clauses',
      description: 'An asset named Clauses',
    },
    {
      name: 'org_auro_hhsnet_Solicitation',
      description: 'An asset named Solicitation',
    },
    {
      name: 'org_auro_hhsnet_CO',
      description: 'A participant named CO',
    },
    {
      name: 'org_auro_hhsnet_Scraper',
      description: 'A participant named Scraper',
    },
    {
      name: 'org_auro_hhsnet_apInitiate',
      description: 'A transaction named apInitiate',
    },
    {
      name: 'org_auro_hhsnet_apHash',
      description: 'A transaction named apHash',
    },
  ],
  consumes: [
    'application/json',
    'application/x-www-form-urlencoded',
    'application/xml',
    'text/xml',
  ],
  produces: [
    'application/json',
    'application/xml',
    'text/xml',
    'application/javascript',
    'text/javascript',
  ],
  definitions: {
    PingResponse: {
      description: 'The response to the ping method',
      properties: {
        participant: {
          type: 'string',
        },
        identity: {
          type: 'string',
        },
        version: {
          type: 'string',
        },
      },
      required: ['version'],
      additionalProperties: false,
    },
    IssueIdentityRequest: {
      description: 'The request to the issueIdentity method',
      properties: {
        participant: {
          type: 'string',
        },
        userID: {
          type: 'string',
        },
        options: {
          type: 'object',
        },
      },
      required: ['participant', 'userID'],
      additionalProperties: false,
    },
    BindIdentityRequest: {
      description: 'The request to the bindIdentity method',
      properties: {
        participant: {
          type: 'string',
        },
        certificate: {
          type: 'string',
        },
      },
      required: ['certificate'],
      additionalProperties: false,
    },
    org_auro_hhsnet_AP: {
      description: 'An asset named AP',
      properties: {
        $class: {
          default: 'org.auro.hhsnet.AP',
          description: 'The class identifier for this type',
          type: 'string',
        },
        apId: {
          description: 'The instance identifier for this type',
          type: 'string',
        },
        apFormId: {
          type: 'string',
        },
        apStatus: {
          type: 'string',
        },
        apName: {
          type: 'string',
        },
        apITorNonIT: {
          type: 'string',
        },
        apPoc: {
          type: 'string',
        },
        apSolNo: {
          type: 'string',
        },
        apSelection: {
          type: 'string',
        },
        apCatalogue: {
          type: 'string',
        },
        apSimilarContract: {
          type: 'string',
        },
        apProductOrService: {
          type: 'string',
        },
        apInitaitedBy: {
          type: 'string',
        },
        apHashVal: {
          type: 'string',
        },
        owner: {
          description: 'The identifier of an instance of owner',
          $ref: '#/definitions/x-any',
        },
      },
      required: [
        'apId',
        'apFormId',
        'apStatus',
        'apName',
        'apITorNonIT',
        'apPoc',
        'apSolNo',
        'apSelection',
        'apCatalogue',
        'apSimilarContract',
        'apProductOrService',
        'apInitaitedBy',
        'apHashVal',
        'owner',
      ],
      additionalProperties: false,
    },
    'x-any': {
      properties: {},
    },
    org_auro_hhsnet_Clauses: {
      description: 'An asset named Clauses',
      properties: {
        $class: {
          default: 'org.auro.hhsnet.Clauses',
          description: 'The class identifier for this type',
          type: 'string',
        },
        facNumber: {
          description: 'The instance identifier for this type',
          type: 'string',
        },
        createdAt: {
          type: 'string',
        },
        url: {
          type: 'string',
        },
        clausesHash: {
          default: [],
          type: 'array',
          items: {
            type: 'string',
          },
        },
        api: {
          type: 'string',
        },
        clauseIndex: {
          default: [],
          type: 'array',
          items: {
            type: 'string',
          },
        },
        owner: {
          description: 'The identifier of an instance of owner',
          $ref: '#/definitions/x-any',
        },
      },
      required: ['facNumber', 'createdAt', 'url', 'api', 'owner'],
      additionalProperties: false,
    },
    org_auro_hhsnet_Solicitation: {
      description: 'An asset named Solicitation',
      properties: {
        $class: {
          default: 'org.auro.hhsnet.Solicitation',
          description: 'The class identifier for this type',
          type: 'string',
        },
        soId: {
          description: 'The instance identifier for this type',
          type: 'string',
        },
        soName: {
          type: 'string',
        },
        soStatus: {
          type: 'string',
        },
        aqObj: {
          description: 'The identifier of an instance of aqObj',
          $ref: '#/definitions/x-any',
        },
      },
      required: ['soId', 'soName', 'soStatus', 'aqObj'],
      additionalProperties: false,
    },
    org_auro_hhsnet_CO: {
      description: 'A participant named CO',
      properties: {
        $class: {
          default: 'org.auro.hhsnet.CO',
          description: 'The class identifier for this type',
          type: 'string',
        },
        coId: {
          description: 'The instance identifier for this type',
          type: 'string',
        },
        firstName: {
          type: 'string',
        },
        lastName: {
          type: 'string',
        },
      },
      required: ['coId', 'firstName', 'lastName'],
      additionalProperties: false,
    },
    org_auro_hhsnet_Scraper: {
      description: 'A participant named Scraper',
      properties: {
        $class: {
          default: 'org.auro.hhsnet.Scraper',
          description: 'The class identifier for this type',
          type: 'string',
        },
        codeHash: {
          description: 'The instance identifier for this type',
          type: 'string',
        },
      },
      required: ['codeHash'],
      additionalProperties: false,
    },
    org_auro_hhsnet_apInitiate: {
      description: 'A transaction named apInitiate',
      properties: {
        $class: {
          default: 'org.auro.hhsnet.apInitiate',
          description: 'The class identifier for this type',
          type: 'string',
        },
        ap: {
          description: 'The identifier of an instance of ap',
          $ref: '#/definitions/x-any',
        },
        transactionId: {
          description: 'The instance identifier for this type',
          type: 'string',
        },
        timestamp: {
          type: 'string',
          format: 'date-time',
        },
      },
      required: ['ap'],
      additionalProperties: false,
    },
    org_auro_hhsnet_apHash: {
      description: 'A transaction named apHash',
      properties: {
        $class: {
          default: 'org.auro.hhsnet.apHash',
          description: 'The class identifier for this type',
          type: 'string',
        },
        ap: {
          description: 'The identifier of an instance of ap',
          $ref: '#/definitions/x-any',
        },
        transactionId: {
          description: 'The instance identifier for this type',
          type: 'string',
        },
        timestamp: {
          type: 'string',
          format: 'date-time',
        },
      },
      required: ['ap'],
      additionalProperties: false,
    },
  },
};
