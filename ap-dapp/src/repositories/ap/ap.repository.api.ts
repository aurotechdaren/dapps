export const apDefinition = {
    "swagger": "2.0",
    "info": {
      "title": "LoopBack Application",
      "version": "1.0.0"
    },
    "host": "18.206.126.152:4001",
    "basePath": "/ap",
    "schemes": [
      "http"
    ],
    "paths": {
      "/ap": {
        "get": {
          "produces": [
            "application/json"
          ],
          "parameters": [
            {
              "in": "query",
              "name": "filter",
              "type": "string"
            }
          ],
          "responses": {
            "200": {
              "description": "Array of Ap model instances",
              "schema": {
                "items": {
                  "$ref": "#/definitions/Ap"
                },
                "type": "array"
              }
            }
          },
          "tags": [
            "ApController"
          ],
          "x-controller-name": "ApController",
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
                "$ref": "#/definitions/Ap"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Ap PATCH success count",
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
            "ApController"
          ],
          "x-controller-name": "ApController",
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
                "$ref": "#/definitions/Ap"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Ap model instance",
              "schema": {
                "$ref": "#/definitions/Ap"
              }
            }
          },
          "tags": [
            "ApController"
          ],
          "x-controller-name": "ApController",
          "operationId": "create"
        }
      },
      "/ap/count": {
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
              "description": "Ap model count",
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
            "ApController"
          ],
          "x-controller-name": "ApController",
          "operationId": "count"
        }
      },
      "/ap/{id}": {
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
              "description": "Ap DELETE success"
            }
          },
          "tags": [
            "ApController"
          ],
          "x-controller-name": "ApController",
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
              "description": "Ap model instance",
              "schema": {
                "$ref": "#/definitions/Ap"
              }
            }
          },
          "tags": [
            "ApController"
          ],
          "x-controller-name": "ApController",
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
                "$ref": "#/definitions/Ap"
              },
              "x-parameter-index": 1
            }
          ],
          "responses": {
            "204": {
              "description": "Ap PATCH success"
            }
          },
          "tags": [
            "ApController"
          ],
          "x-controller-name": "ApController",
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
                "$ref": "#/definitions/Ap"
              },
              "x-parameter-index": 1
            }
          ],
          "responses": {
            "204": {
              "description": "Ap PUT success"
            }
          },
          "tags": [
            "ApController"
          ],
          "x-controller-name": "ApController",
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
      "Ap": {
        "properties": {
          "acqConsideration": {
            "type": "string"
          },
          "acqMethod": {
            "type": "string"
          },
          "acquisitionConsiderations": {
            "type": "string"
          },
          "ap_no": {
            "type": "string"
          },
          "awardType": {
            "type": "string"
          },
          "baAddress": {
            "type": "string"
          },
          "baEmail": {
            "type": "string"
          },
          "baName": {
            "type": "string"
          },
          "baPhone": {
            "type": "string"
          },
          "budgetApprover": {
            "type": "string"
          },
          "bundlingDetermination": {
            "type": "string"
          },
          "capabilityPerformance": {
            "type": "string"
          },
          "catalogue": {
            "type": "string"
          },
          "coAddress": {
            "type": "string"
          },
          "coEmail": {
            "type": "string"
          },
          "coName": {
            "type": "string"
          },
          "coPhone": {
            "type": "string"
          },
          "contractNumber": {
            "type": "string"
          },
          "contractOfficer": {
            "type": "string"
          },
          "contractType": {
            "type": "string"
          },
          "contractVehicle": {
            "type": "string"
          },
          "contractingOfficer": {
            "type": "string"
          },
          "createdBy": {
            "type": "string"
          },
          "createdDate": {
            "format": "date-time",
            "type": "string"
          },
          "date": {
            "format": "date-time",
            "type": "string"
          },
          "description": {
            "type": "string"
          },
          "dsol_no": {
            "type": "string"
          },
          "endDate": {
            "type": "string"
          },
          "existingContract": {
            "type": "string"
          },
          "form_id": {
            "type": "string"
          },
          "id": {
            "type": "string"
          },
          "initaitedBy": {
            "type": "string"
          },
          "inputService": {
            "type": "string"
          },
          "itornonit": {
            "type": "string"
          },
          "performanceApproach": {
            "type": "string"
          },
          "performanceBasedApproach": {
            "type": "string"
          },
          "periodOfPerformance": {
            "format": "date-time",
            "type": "string"
          },
          "poc": {
            "type": "string"
          },
          "productorService": {
            "type": "string"
          },
          "projectTitle": {
            "type": "string"
          },
          "proposedSolicitationType": {
            "type": "string"
          },
          "rAddress": {
            "type": "string"
          },
          "rEmail": {
            "type": "string"
          },
          "rName": {
            "type": "string"
          },
          "rPhone": {
            "type": "string"
          },
          "requestor": {
            "type": "string"
          },
          "selection": {
            "type": "string"
          },
          "similarContract": {
            "type": "string"
          },
          "sol_no": {
            "type": "string"
          },
          "sowid": {
            "type": "string"
          },
          "evaluationCriteriaId": {
            "type": "string"
          },
          "startDate": {
            "type": "string"
          },
          "statementOfNeed": {
            "type": "string"
          },
          "status": {
            "type": "string"
          },
          "supplyorservice": {
            "type": "string"
          },
          "typeOfWork": {
            "type": "string"
          }
        },
        "title": "Ap"
      }
    },
    "x-components": {}
  };
  