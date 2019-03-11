export const igceDefinition = {
  "swagger": "2.0",
  "info": {
    "title": "LoopBack Application",
    "version": "1.0.0"
  },
  "host": "127.0.0.1:3007",
  "basePath": "/",
  "schemes": [
    "http"
  ],
  "paths": {
    "/igce": {
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
            "description": "Array of Igce model instances",
            "schema": {
              "items": {
                "$ref": "#/definitions/Igce"
              },
              "type": "array"
            }
          }
        },
        "tags": [
          "IgceController"
        ],
        "x-controller-name": "IgceController",
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
              "$ref": "#/definitions/Igce"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Igce PATCH success count",
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
          "IgceController"
        ],
        "x-controller-name": "IgceController",
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
              "$ref": "#/definitions/Igce"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Igce model instance",
            "schema": {
              "$ref": "#/definitions/Igce"
            }
          }
        },
        "tags": [
          "IgceController"
        ],
        "x-controller-name": "IgceController",
        "operationId": "create"
      }
    },
    "/igce/count": {
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
            "description": "Igce model count",
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
          "IgceController"
        ],
        "x-controller-name": "IgceController",
        "operationId": "count"
      }
    },
    "/igce/{id}": {
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
            "description": "Igce DELETE success"
          }
        },
        "tags": [
          "IgceController"
        ],
        "x-controller-name": "IgceController",
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
            "description": "Igce model instance",
            "schema": {
              "$ref": "#/definitions/Igce"
            }
          }
        },
        "tags": [
          "IgceController"
        ],
        "x-controller-name": "IgceController",
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
              "$ref": "#/definitions/Igce"
            },
            "x-parameter-index": 1
          }
        ],
        "responses": {
          "204": {
            "description": "Igce PATCH success"
          }
        },
        "tags": [
          "IgceController"
        ],
        "x-controller-name": "IgceController",
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
              "$ref": "#/definitions/Igce"
            },
            "x-parameter-index": 1
          }
        ],
        "responses": {
          "204": {
            "description": "Igce PUT success"
          }
        },
        "tags": [
          "IgceController"
        ],
        "x-controller-name": "IgceController",
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
    "Igce": {
      "properties": {
        "basePeriodCost": {
          "type": "string"
        },
        "basePeriodDate": {
          "format": "date-time",
          "type": "string"
        },
        "id": {
          "type": "string"
        },
        "optionPeriodCost": {
          "type": "string"
        },
        "otherDirectCosts": {
          "type": "string"
        },
        "periodOfPerformance": {
          "format": "date-time",
          "type": "string"
        },
        "slinDescription": {
          "type": "string"
        },
        "slinQuantity": {
          "type": "string"
        },
        "slinTotalCost": {
          "type": "string"
        },
        "slinUnitOfMeasure": {
          "type": "string"
        },
        "slinUnitPrice": {
          "type": "string"
        },
        "totalCost": {
          "type": "string"
        },
        "travel": {
          "type": "string"
        }
      },
      "title": "Igce"
    }
  },
  "x-components": {}
}

