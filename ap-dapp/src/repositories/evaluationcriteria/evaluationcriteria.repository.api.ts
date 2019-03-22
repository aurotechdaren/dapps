export const evaluationCriteriaDefinition = {
  "swagger": "2.0",
  "info": {
    "title": "LoopBack Application",
    "version": "1.0.0"
  },
  "host": "18.206.126.152:3004",
  "basePath": "/",
  "schemes": [
    "http"
  ],
  "paths": {
    "/evaluation-criteria": {
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
            "description": "Array of EvaluationCriteria model instances",
            "schema": {
              "items": {
                "$ref": "#/definitions/EvaluationCriteria"
              },
              "type": "array"
            }
          }
        },
        "tags": [
          "EvaluationCriteriaController"
        ],
        "x-controller-name": "EvaluationCriteriaController",
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
              "$ref": "#/definitions/EvaluationCriteria"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "EvaluationCriteria PATCH success count",
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
          "EvaluationCriteriaController"
        ],
        "x-controller-name": "EvaluationCriteriaController",
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
              "$ref": "#/definitions/EvaluationCriteria"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "EvaluationCriteria model instance",
            "schema": {
              "$ref": "#/definitions/EvaluationCriteria"
            }
          }
        },
        "tags": [
          "EvaluationCriteriaController"
        ],
        "x-controller-name": "EvaluationCriteriaController",
        "operationId": "create"
      }
    },
    "/evaluation-criteria/count": {
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
            "description": "EvaluationCriteria model count",
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
          "EvaluationCriteriaController"
        ],
        "x-controller-name": "EvaluationCriteriaController",
        "operationId": "count"
      }
    },
    "/evaluation-criteria/{id}": {
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
            "description": "EvaluationCriteria DELETE success"
          }
        },
        "tags": [
          "EvaluationCriteriaController"
        ],
        "x-controller-name": "EvaluationCriteriaController",
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
            "description": "EvaluationCriteria model instance",
            "schema": {
              "$ref": "#/definitions/EvaluationCriteria"
            }
          }
        },
        "tags": [
          "EvaluationCriteriaController"
        ],
        "x-controller-name": "EvaluationCriteriaController",
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
              "$ref": "#/definitions/EvaluationCriteria"
            },
            "x-parameter-index": 1
          }
        ],
        "responses": {
          "204": {
            "description": "EvaluationCriteria PATCH success"
          }
        },
        "tags": [
          "EvaluationCriteriaController"
        ],
        "x-controller-name": "EvaluationCriteriaController",
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
              "$ref": "#/definitions/EvaluationCriteria"
            },
            "x-parameter-index": 1
          }
        ],
        "responses": {
          "204": {
            "description": "EvaluationCriteria PUT success"
          }
        },
        "tags": [
          "EvaluationCriteriaController"
        ],
        "x-controller-name": "EvaluationCriteriaController",
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
    "EvaluationCriteria": {
      "properties": {
        "description": {
          "type": "string"
        },
        "id": {
          "type": "string"
        },
        "mandatoryCriteria": {
          "type": "string"
        },
        "pastPerformance": {
          "type": "string"
        },
        "smallBusinessSubContractingAndDisadvantagedParticipationPlans": {
          "type": "string"
        },
        "sourceSelectionProcedures": {
          "type": "string"
        },
        "technicalEvaluationCriteria": {
          "type": "string"
        }
      },
      "required": [
        "description"
      ],
      "title": "EvaluationCriteria"
    }
  },
  "x-components": {}
}

