export const slinDefinition = {
  "swagger": "2.0",
  "info": {
    "title": "LoopBack Application",
    "version": "1.0.0"
  },
  "host": "127.0.0.1:3010",
  "basePath": "/",
  "schemes": [
    "http"
  ],
  "paths": {
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
    },
    "/slin": {
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
            "description": "Array of Slin model instances",
            "schema": {
              "items": {
                "$ref": "#/definitions/Slin"
              },
              "type": "array"
            }
          }
        },
        "tags": [
          "SlinController"
        ],
        "x-controller-name": "SlinController",
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
              "$ref": "#/definitions/Slin"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Slin PATCH success count",
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
          "SlinController"
        ],
        "x-controller-name": "SlinController",
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
              "$ref": "#/definitions/Slin"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Slin model instance",
            "schema": {
              "$ref": "#/definitions/Slin"
            }
          }
        },
        "tags": [
          "SlinController"
        ],
        "x-controller-name": "SlinController",
        "operationId": "create"
      }
    },
    "/slin/count": {
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
            "description": "Slin model count",
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
          "SlinController"
        ],
        "x-controller-name": "SlinController",
        "operationId": "count"
      }
    },
    "/slin/{id}": {
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
            "description": "Slin DELETE success"
          }
        },
        "tags": [
          "SlinController"
        ],
        "x-controller-name": "SlinController",
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
            "description": "Slin model instance",
            "schema": {
              "$ref": "#/definitions/Slin"
            }
          }
        },
        "tags": [
          "SlinController"
        ],
        "x-controller-name": "SlinController",
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
              "$ref": "#/definitions/Slin"
            },
            "x-parameter-index": 1
          }
        ],
        "responses": {
          "204": {
            "description": "Slin PATCH success"
          }
        },
        "tags": [
          "SlinController"
        ],
        "x-controller-name": "SlinController",
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
              "$ref": "#/definitions/Slin"
            },
            "x-parameter-index": 1
          }
        ],
        "responses": {
          "204": {
            "description": "Slin PUT success"
          }
        },
        "tags": [
          "SlinController"
        ],
        "x-controller-name": "SlinController",
        "operationId": "replaceById"
      }
    }
  },
  "definitions": {
    "Slin": {
      "properties": {
        "description": {
          "type": "string"
        },
        "id": {
          "type": "string"
        },
        "quantity": {
          "type": "number"
        },
        "unitForQuantity": {
          "type": "number"
        },
        "unitPrice": {
          "type": "number"
        }
      },
      "title": "Slin"
    }
  },
  "x-components": {}
}
