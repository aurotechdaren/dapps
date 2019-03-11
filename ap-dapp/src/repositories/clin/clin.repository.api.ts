export const clinDefinition = {
  "swagger": "2.0",
  "info": {
    "title": "LoopBack Application",
    "version": "1.0.0"
  },
  "host": "127.0.0.1:3003",
  "basePath": "/",
  "schemes": [
    "http"
  ],
  "paths": {
    "/clin": {
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
            "description": "Array of Clin model instances",
            "schema": {
              "items": {
                "$ref": "#/definitions/Clin"
              },
              "type": "array"
            }
          }
        },
        "tags": [
          "ClinController"
        ],
        "x-controller-name": "ClinController",
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
              "$ref": "#/definitions/Clin"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Clin PATCH success count",
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
          "ClinController"
        ],
        "x-controller-name": "ClinController",
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
              "$ref": "#/definitions/Clin"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Clin model instance",
            "schema": {
              "$ref": "#/definitions/Clin"
            }
          }
        },
        "tags": [
          "ClinController"
        ],
        "x-controller-name": "ClinController",
        "operationId": "create"
      }
    },
    "/clin/count": {
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
            "description": "Clin model count",
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
          "ClinController"
        ],
        "x-controller-name": "ClinController",
        "operationId": "count"
      }
    },
    "/clin/{id}": {
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
            "description": "Clin DELETE success"
          }
        },
        "tags": [
          "ClinController"
        ],
        "x-controller-name": "ClinController",
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
            "description": "Clin model instance",
            "schema": {
              "$ref": "#/definitions/Clin"
            }
          }
        },
        "tags": [
          "ClinController"
        ],
        "x-controller-name": "ClinController",
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
              "$ref": "#/definitions/Clin"
            },
            "x-parameter-index": 1
          }
        ],
        "responses": {
          "204": {
            "description": "Clin PATCH success"
          }
        },
        "tags": [
          "ClinController"
        ],
        "x-controller-name": "ClinController",
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
              "$ref": "#/definitions/Clin"
            },
            "x-parameter-index": 1
          }
        ],
        "responses": {
          "204": {
            "description": "Clin PUT success"
          }
        },
        "tags": [
          "ClinController"
        ],
        "x-controller-name": "ClinController",
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
    "Clin": {
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
      "title": "Clin"
    }
  },
  "x-components": {}
}

