export const formsDefinition = {
  "swagger": "2.0",
  "info": {
    "title": "LoopBack Application",
    "version": "1.0.0"
  },
  "host": "127.0.0.1:3005",
  "basePath": "/",
  "schemes": [
    "http"
  ],
  "paths": {
    "/forms": {
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
            "description": "Array of Forms model instances",
            "schema": {
              "items": {
                "$ref": "#/definitions/Forms"
              },
              "type": "array"
            }
          }
        },
        "tags": [
          "FormsController"
        ],
        "x-controller-name": "FormsController",
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
              "$ref": "#/definitions/Forms"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Forms PATCH success count",
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
          "FormsController"
        ],
        "x-controller-name": "FormsController",
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
              "$ref": "#/definitions/Forms"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Forms model instance",
            "schema": {
              "$ref": "#/definitions/Forms"
            }
          }
        },
        "tags": [
          "FormsController"
        ],
        "x-controller-name": "FormsController",
        "operationId": "create"
      }
    },
    "/forms/count": {
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
            "description": "Forms model count",
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
          "FormsController"
        ],
        "x-controller-name": "FormsController",
        "operationId": "count"
      }
    },
    "/forms/{id}": {
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
            "description": "Forms DELETE success"
          }
        },
        "tags": [
          "FormsController"
        ],
        "x-controller-name": "FormsController",
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
            "description": "Forms model instance",
            "schema": {
              "$ref": "#/definitions/Forms"
            }
          }
        },
        "tags": [
          "FormsController"
        ],
        "x-controller-name": "FormsController",
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
              "$ref": "#/definitions/Forms"
            },
            "x-parameter-index": 1
          }
        ],
        "responses": {
          "204": {
            "description": "Forms PATCH success"
          }
        },
        "tags": [
          "FormsController"
        ],
        "x-controller-name": "FormsController",
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
              "$ref": "#/definitions/Forms"
            },
            "x-parameter-index": 1
          }
        ],
        "responses": {
          "204": {
            "description": "Forms PUT success"
          }
        },
        "tags": [
          "FormsController"
        ],
        "x-controller-name": "FormsController",
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
    "Forms": {
      "properties": {
        "Sections": {
          "type": "object"
        },
        "acquisitionMember": {
          "type": "string"
        },
        "applied": {
          "items": {
            "type": "string"
          },
          "type": "array"
        },
        "clauses": {
          "type": "object"
        },
        "contractOrder": {
          "type": "object"
        },
        "excludeClauses": {
          "items": {
            "type": "string"
          },
          "type": "array"
        },
        "id": {
          "type": "string"
        },
        "locationforServices": {
          "type": "object"
        },
        "method_of_solicitation": {
          "type": "string"
        },
        "naicscode": {
          "type": "string"
        },
        "optinal": {
          "items": {
            "type": "object"
          },
          "type": "array"
        },
        "paymentTerms": {
          "type": "object"
        },
        "paymentsBy": {
          "type": "object"
        },
        "requisitionNumber": {
          "type": "string"
        },
        "setAside": {
          "type": "string"
        },
        "setAsideFor": {
          "type": "object"
        },
        "solicitationIncorporates": {
          "type": "string"
        },
        "solicitationNumber": {
          "type": "string"
        },
        "standard_size": {
          "type": "string"
        },
        "to_schedule": {
          "items": {
            "type": "object"
          },
          "type": "array"
        },
        "userDefined": {
          "items": {
            "type": "object"
          },
          "type": "array"
        }
      },
      "required": [
        "clauses"
      ],
      "title": "Forms"
    }
  },
  "x-components": {}
}

