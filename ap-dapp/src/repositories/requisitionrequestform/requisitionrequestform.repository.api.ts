export const requisitionRequestFormDefinition = {
  "swagger": "2.0",
  "info": {
    "title": "LoopBack Application",
    "version": "1.0.0"
  },
  "host": "127.0.0.1:3008",
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
    "/requisition-request-form": {
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
            "description": "Array of RequisitionRequestForm model instances",
            "schema": {
              "items": {
                "$ref": "#/definitions/RequisitionRequestForm"
              },
              "type": "array"
            }
          }
        },
        "tags": [
          "RequisitionRequestFormController"
        ],
        "x-controller-name": "RequisitionRequestFormController",
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
              "$ref": "#/definitions/RequisitionRequestForm"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "RequisitionRequestForm PATCH success count",
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
          "RequisitionRequestFormController"
        ],
        "x-controller-name": "RequisitionRequestFormController",
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
              "$ref": "#/definitions/RequisitionRequestForm"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "RequisitionRequestForm model instance",
            "schema": {
              "$ref": "#/definitions/RequisitionRequestForm"
            }
          }
        },
        "tags": [
          "RequisitionRequestFormController"
        ],
        "x-controller-name": "RequisitionRequestFormController",
        "operationId": "create"
      }
    },
    "/requisition-request-form/count": {
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
            "description": "RequisitionRequestForm model count",
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
          "RequisitionRequestFormController"
        ],
        "x-controller-name": "RequisitionRequestFormController",
        "operationId": "count"
      }
    },
    "/requisition-request-form/{id}": {
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
            "description": "RequisitionRequestForm DELETE success"
          }
        },
        "tags": [
          "RequisitionRequestFormController"
        ],
        "x-controller-name": "RequisitionRequestFormController",
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
            "description": "RequisitionRequestForm model instance",
            "schema": {
              "$ref": "#/definitions/RequisitionRequestForm"
            }
          }
        },
        "tags": [
          "RequisitionRequestFormController"
        ],
        "x-controller-name": "RequisitionRequestFormController",
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
              "$ref": "#/definitions/RequisitionRequestForm"
            },
            "x-parameter-index": 1
          }
        ],
        "responses": {
          "204": {
            "description": "RequisitionRequestForm PATCH success"
          }
        },
        "tags": [
          "RequisitionRequestFormController"
        ],
        "x-controller-name": "RequisitionRequestFormController",
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
              "$ref": "#/definitions/RequisitionRequestForm"
            },
            "x-parameter-index": 1
          }
        ],
        "responses": {
          "204": {
            "description": "RequisitionRequestForm PUT success"
          }
        },
        "tags": [
          "RequisitionRequestFormController"
        ],
        "x-controller-name": "RequisitionRequestFormController",
        "operationId": "replaceById"
      }
    }
  },
  "definitions": {
    "RequisitionRequestForm": {
      "properties": {
        "budgetAnalystDateSigned": {
          "format": "date-time",
          "type": "string"
        },
        "budgetAnalystName": {
          "type": "string"
        },
        "budgetAnalystReceivedDate": {
          "format": "date-time",
          "type": "string"
        },
        "budgetAnalystSignature": {
          "type": "string"
        },
        "directorDateReceived": {
          "format": "date-time",
          "type": "string"
        },
        "directorDateSigned": {
          "format": "date-time",
          "type": "string"
        },
        "directorName": {
          "type": "string"
        },
        "directorSignature": {
          "type": "string"
        },
        "id": {
          "type": "string"
        },
        "remarks": {
          "type": "string"
        },
        "requestDate": {
          "type": "string"
        },
        "requestorInformation": {
          "type": "string"
        },
        "requestorName": {
          "type": "string"
        },
        "requestorOfficeCode": {
          "type": "string"
        },
        "requestorTelephoneNumber": {
          "type": "string"
        },
        "requisitionNumber": {
          "type": "string"
        },
        "vendorSuggestionInformation": {
          "type": "string"
        }
      },
      "title": "RequisitionRequestForm"
    }
  },
  "x-components": {}
}
