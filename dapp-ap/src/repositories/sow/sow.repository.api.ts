export const sowDefinition = {
  "swagger": "2.0",
  "info": {
    "title": "LoopBack Application",
    "version": "1.0.0"
  },
  "host": "18.206.126.152:8000",
  "basePath": "/sow",
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
    "/sow": {
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
            "description": "Array of Sow model instances",
            "schema": {
              "items": {
                "$ref": "#/definitions/Sow"
              },
              "type": "array"
            }
          }
        },
        "tags": [
          "SowController"
        ],
        "x-controller-name": "SowController",
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
              "$ref": "#/definitions/Sow"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Sow PATCH success count",
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
          "SowController"
        ],
        "x-controller-name": "SowController",
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
              "$ref": "#/definitions/Sow"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Sow model instance",
            "schema": {
              "$ref": "#/definitions/Sow"
            }
          }
        },
        "tags": [
          "SowController"
        ],
        "x-controller-name": "SowController",
        "operationId": "create"
      }
    },
    "/sow/count": {
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
            "description": "Sow model count",
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
          "SowController"
        ],
        "x-controller-name": "SowController",
        "operationId": "count"
      }
    },
    "/sow/{id}": {
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
            "description": "Sow DELETE success"
          }
        },
        "tags": [
          "SowController"
        ],
        "x-controller-name": "SowController",
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
            "description": "Sow model instance",
            "schema": {
              "$ref": "#/definitions/Sow"
            }
          }
        },
        "tags": [
          "SowController"
        ],
        "x-controller-name": "SowController",
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
              "$ref": "#/definitions/Sow"
            },
            "x-parameter-index": 1
          }
        ],
        "responses": {
          "204": {
            "description": "Sow PATCH success"
          }
        },
        "tags": [
          "SowController"
        ],
        "x-controller-name": "SowController",
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
              "$ref": "#/definitions/Sow"
            },
            "x-parameter-index": 1
          }
        ],
        "responses": {
          "204": {
            "description": "Sow PUT success"
          }
        },
        "tags": [
          "SowController"
        ],
        "x-controller-name": "SowController",
        "operationId": "replaceById"
      }
    }
  },
  "definitions": {
    "Sow": {
      "properties": {
        "backgroundStatement": {
          "type": "string"
        },
        "contractAdministration": {
          "type": "string"
        },
        "id": {
          "type": "string"
        },
        "performanceWorkStatement": {
          "type": "string"
        }
      },
      "title": "Sow"
    }
  },
  "x-components": {}
}