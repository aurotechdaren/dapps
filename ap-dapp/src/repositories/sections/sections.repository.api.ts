export const sectionsDefinition = {
  "swagger": "2.0",
  "info": {
    "title": "LoopBack Application",
    "version": "1.0.0"
  },
  "host": "127.0.0.1:3009",
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
    "/sections": {
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
            "description": "Array of Sections model instances",
            "schema": {
              "items": {
                "$ref": "#/definitions/Sections"
              },
              "type": "array"
            }
          }
        },
        "tags": [
          "SectionsController"
        ],
        "x-controller-name": "SectionsController",
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
              "$ref": "#/definitions/Sections"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Sections PATCH success count",
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
          "SectionsController"
        ],
        "x-controller-name": "SectionsController",
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
              "$ref": "#/definitions/Sections"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Sections model instance",
            "schema": {
              "$ref": "#/definitions/Sections"
            }
          }
        },
        "tags": [
          "SectionsController"
        ],
        "x-controller-name": "SectionsController",
        "operationId": "create"
      }
    },
    "/sections/count": {
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
            "description": "Sections model count",
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
          "SectionsController"
        ],
        "x-controller-name": "SectionsController",
        "operationId": "count"
      }
    },
    "/sections/{id}": {
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
            "description": "Sections DELETE success"
          }
        },
        "tags": [
          "SectionsController"
        ],
        "x-controller-name": "SectionsController",
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
            "description": "Sections model instance",
            "schema": {
              "$ref": "#/definitions/Sections"
            }
          }
        },
        "tags": [
          "SectionsController"
        ],
        "x-controller-name": "SectionsController",
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
              "$ref": "#/definitions/Sections"
            },
            "x-parameter-index": 1
          }
        ],
        "responses": {
          "204": {
            "description": "Sections PATCH success"
          }
        },
        "tags": [
          "SectionsController"
        ],
        "x-controller-name": "SectionsController",
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
              "$ref": "#/definitions/Sections"
            },
            "x-parameter-index": 1
          }
        ],
        "responses": {
          "204": {
            "description": "Sections PUT success"
          }
        },
        "tags": [
          "SectionsController"
        ],
        "x-controller-name": "SectionsController",
        "operationId": "replaceById"
      }
    }
  },
  "definitions": {
    "Sections": {
      "properties": {
        "Section": {
          "type": "string"
        },
        "SectionText": {
          "type": "string"
        },
        "clauses": {
          "items": {
            "type": "string"
          },
          "type": "array"
        },
        "formid": {
          "type": "string"
        },
        "id": {
          "type": "string"
        }
      },
      "title": "Sections"
    }
  },
  "x-components": {}
}

