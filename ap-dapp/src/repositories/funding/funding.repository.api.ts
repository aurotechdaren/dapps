export const fundingDefinition = {
  "swagger": "2.0",
  "info": {
    "title": "LoopBack Application",
    "version": "1.0.0"
  },
  "host": "localhost:3006",
  "basePath": "/",
  "schemes": [
    "http"
  ],
  "paths": {
    "/funding": {
      "get": {
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "in": "query",
            "name": "filter",
            "type": "object"
          }
        ],
        "responses": {
          "200": {
            "description": "Array of Funding model instances",
            "schema": {
              "items": {
                "$ref": "#/definitions/Funding"
              },
              "type": "array"
            }
          }
        },
        "tags": [
          "FundingController"
        ],
        "x-controller-name": "FundingController",
        "operationId": "find"
      },
      "patch": {
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "in": "query",
            "name": "where",
            "type": "object"
          },
          {
            "in": "body",
            "name": "body",
            "schema": {
              "$ref": "#/definitions/Funding"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Funding PATCH success count",
            "schema": {
              "properties": {
                "count": {
                  "type": "number"
                }
              },
              "type": "object"
            }
          }
        },
        "tags": [
          "FundingController"
        ],
        "x-controller-name": "FundingController",
        "operationId": "updateAll"
      },
      "post": {
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "body",
            "schema": {
              "$ref": "#/definitions/Funding"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Funding model instance",
            "schema": {
              "$ref": "#/definitions/Funding"
            }
          }
        },
        "tags": [
          "FundingController"
        ],
        "x-controller-name": "FundingController",
        "operationId": "create"
      }
    },
    "/funding/count": {
      "get": {
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "in": "query",
            "name": "where",
            "type": "object"
          }
        ],
        "responses": {
          "200": {
            "description": "Funding model count",
            "schema": {
              "properties": {
                "count": {
                  "type": "number"
                }
              },
              "type": "object"
            }
          }
        },
        "tags": [
          "FundingController"
        ],
        "x-controller-name": "FundingController",
        "operationId": "count"
      }
    },
    "/funding/{id}": {
      "delete": {
        "parameters": [
          {
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "204": {
            "description": "Funding DELETE success"
          }
        },
        "tags": [
          "FundingController"
        ],
        "x-controller-name": "FundingController",
        "operationId": "deleteById"
      },
      "get": {
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "Funding model instance",
            "schema": {
              "$ref": "#/definitions/Funding"
            }
          }
        },
        "tags": [
          "FundingController"
        ],
        "x-controller-name": "FundingController",
        "operationId": "findById"
      },
      "patch": {
        "consumes": [
          "application/json"
        ],
        "parameters": [
          {
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "in": "body",
            "name": "body",
            "schema": {
              "$ref": "#/definitions/Funding"
            },
            "x-parameter-index": 1
          }
        ],
        "responses": {
          "204": {
            "description": "Funding PATCH success"
          }
        },
        "tags": [
          "FundingController"
        ],
        "x-controller-name": "FundingController",
        "operationId": "updateById"
      },
      "put": {
        "consumes": [
          "application/json"
        ],
        "parameters": [
          {
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "in": "body",
            "name": "body",
            "schema": {
              "$ref": "#/definitions/Funding"
            },
            "x-parameter-index": 1
          }
        ],
        "responses": {
          "204": {
            "description": "Funding PUT success"
          }
        },
        "tags": [
          "FundingController"
        ],
        "x-controller-name": "FundingController",
        "operationId": "replaceById"
      }
    },
    "/ping": {
      "get": {
        "produces": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "Ping Response",
            "schema": {
              "properties": {
                "date": {
                  "type": "string"
                },
                "greeting": {
                  "type": "string"
                },
                "headers": {
                  "additionalProperties": true,
                  "properties": {
                    "Content-Type": {
                      "type": "string"
                    }
                  },
                  "type": "object"
                },
                "url": {
                  "type": "string"
                }
              },
              "type": "object"
            }
          }
        },
        "tags": [
          "PingController"
        ],
        "x-controller-name": "PingController",
        "operationId": "ping"
      }
    }
  },
  "definitions": {
    "Funding": {
      "properties": {
        "budgetingAndFunding": {
          "type": "string"
        },
        "compatibility": {
          "type": "string"
        },
        "constraints": {
          "type": "string"
        },
        "cost": {
          "type": "string"
        },
        "estimateCurrentYearFunding": {
          "type": "string"
        },
        "id": {
          "type": "string"
        },
        "isCompetitive": {
          "type": "string"
        },
        "name": {
          "type": "string"
        },
        "priceTechnicalTradeOffAnalysis": {
          "type": "string"
        },
        "tradeOffs": {
          "type": "string"
        }
      },
      "required": [
        "name"
      ],
      "title": "Funding"
    }
  },
  "x-components": {}
}


