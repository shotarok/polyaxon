// Copyright 2018-2020 Polyaxon, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/*
 * Polyaxon SDKs and REST API specification.
 * Polyaxon SDKs and REST API specification.
 *
 * OpenAPI spec version: 1.0.72
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.10
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/RuntimeError', 'model/V1Agent', 'model/V1ListQueuesResponse', 'model/V1Queue'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/RuntimeError'), require('../model/V1Agent'), require('../model/V1ListQueuesResponse'), require('../model/V1Queue'));
  } else {
    // Browser globals (root is window)
    if (!root.PolyaxonSdk) {
      root.PolyaxonSdk = {};
    }
    root.PolyaxonSdk.QueuesV1Api = factory(root.PolyaxonSdk.ApiClient, root.PolyaxonSdk.RuntimeError, root.PolyaxonSdk.V1Agent, root.PolyaxonSdk.V1ListQueuesResponse, root.PolyaxonSdk.V1Queue);
  }
}(this, function(ApiClient, RuntimeError, V1Agent, V1ListQueuesResponse, V1Queue) {
  'use strict';

  /**
   * QueuesV1 service.
   * @module api/QueuesV1Api
   * @version 1.0.72
   */

  /**
   * Constructs a new QueuesV1Api. 
   * @alias module:api/QueuesV1Api
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the queuesV1CreateQueue operation.
     * @callback module:api/QueuesV1Api~queuesV1CreateQueueCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1Agent} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update agent
     * @param {String} owner Owner of the namespace
     * @param {String} agent Agent that consumes the queue
     * @param {module:model/V1Queue} body Queue body
     * @param {module:api/QueuesV1Api~queuesV1CreateQueueCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1Agent}
     */
    this.queuesV1CreateQueue = function(owner, agent, body, callback) {
      var postBody = body;

      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling queuesV1CreateQueue");
      }

      // verify the required parameter 'agent' is set
      if (agent === undefined || agent === null) {
        throw new Error("Missing the required parameter 'agent' when calling queuesV1CreateQueue");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling queuesV1CreateQueue");
      }


      var pathParams = {
        'owner': owner,
        'agent': agent
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = V1Agent;

      return this.apiClient.callApi(
        '/api/v1/orgs/{owner}/agents/{agent}/queues', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the queuesV1DeleteQueue operation.
     * @callback module:api/QueuesV1Api~queuesV1DeleteQueueCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Sync agent
     * @param {String} owner Owner of the namespace
     * @param {String} agent Agent managing the resource
     * @param {String} uuid Uuid identifier of the entity
     * @param {module:api/QueuesV1Api~queuesV1DeleteQueueCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.queuesV1DeleteQueue = function(owner, agent, uuid, callback) {
      var postBody = null;

      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling queuesV1DeleteQueue");
      }

      // verify the required parameter 'agent' is set
      if (agent === undefined || agent === null) {
        throw new Error("Missing the required parameter 'agent' when calling queuesV1DeleteQueue");
      }

      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling queuesV1DeleteQueue");
      }


      var pathParams = {
        'owner': owner,
        'agent': agent,
        'uuid': uuid
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/api/v1/orgs/{owner}/agents/{agent}/queues/{uuid}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the queuesV1GetQueue operation.
     * @callback module:api/QueuesV1Api~queuesV1GetQueueCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1Queue} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Patch agent
     * @param {String} owner Owner of the namespace
     * @param {String} agent Agent managing the resource
     * @param {String} uuid Uuid identifier of the entity
     * @param {module:api/QueuesV1Api~queuesV1GetQueueCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1Queue}
     */
    this.queuesV1GetQueue = function(owner, agent, uuid, callback) {
      var postBody = null;

      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling queuesV1GetQueue");
      }

      // verify the required parameter 'agent' is set
      if (agent === undefined || agent === null) {
        throw new Error("Missing the required parameter 'agent' when calling queuesV1GetQueue");
      }

      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling queuesV1GetQueue");
      }


      var pathParams = {
        'owner': owner,
        'agent': agent,
        'uuid': uuid
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = V1Queue;

      return this.apiClient.callApi(
        '/api/v1/orgs/{owner}/agents/{agent}/queues/{uuid}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the queuesV1ListOrganizationQueueNames operation.
     * @callback module:api/QueuesV1Api~queuesV1ListOrganizationQueueNamesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1ListQueuesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List agents names
     * @param {String} owner Owner of the namespace
     * @param {Object} opts Optional parameters
     * @param {Number} opts.offset Pagination offset.
     * @param {Number} opts.limit Limit size.
     * @param {String} opts.sort Sort to order the search.
     * @param {String} opts.query Query filter the search search.
     * @param {module:api/QueuesV1Api~queuesV1ListOrganizationQueueNamesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1ListQueuesResponse}
     */
    this.queuesV1ListOrganizationQueueNames = function(owner, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling queuesV1ListOrganizationQueueNames");
      }


      var pathParams = {
        'owner': owner
      };
      var queryParams = {
        'offset': opts['offset'],
        'limit': opts['limit'],
        'sort': opts['sort'],
        'query': opts['query'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = V1ListQueuesResponse;

      return this.apiClient.callApi(
        '/api/v1/orgs/{owner}/queues/names', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the queuesV1ListOrganizationQueues operation.
     * @callback module:api/QueuesV1Api~queuesV1ListOrganizationQueuesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1ListQueuesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List agents
     * @param {String} owner Owner of the namespace
     * @param {Object} opts Optional parameters
     * @param {Number} opts.offset Pagination offset.
     * @param {Number} opts.limit Limit size.
     * @param {String} opts.sort Sort to order the search.
     * @param {String} opts.query Query filter the search search.
     * @param {module:api/QueuesV1Api~queuesV1ListOrganizationQueuesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1ListQueuesResponse}
     */
    this.queuesV1ListOrganizationQueues = function(owner, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling queuesV1ListOrganizationQueues");
      }


      var pathParams = {
        'owner': owner
      };
      var queryParams = {
        'offset': opts['offset'],
        'limit': opts['limit'],
        'sort': opts['sort'],
        'query': opts['query'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = V1ListQueuesResponse;

      return this.apiClient.callApi(
        '/api/v1/orgs/{owner}/queues', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the queuesV1ListQueueNames operation.
     * @callback module:api/QueuesV1Api~queuesV1ListQueueNamesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1ListQueuesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create agent
     * @param {String} owner Owner of the namespace
     * @param {String} agent Agent man managing the resource
     * @param {Object} opts Optional parameters
     * @param {Number} opts.offset Pagination offset.
     * @param {Number} opts.limit Limit size.
     * @param {String} opts.sort Sort to order the search.
     * @param {String} opts.query Query filter the search search.
     * @param {module:api/QueuesV1Api~queuesV1ListQueueNamesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1ListQueuesResponse}
     */
    this.queuesV1ListQueueNames = function(owner, agent, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling queuesV1ListQueueNames");
      }

      // verify the required parameter 'agent' is set
      if (agent === undefined || agent === null) {
        throw new Error("Missing the required parameter 'agent' when calling queuesV1ListQueueNames");
      }


      var pathParams = {
        'owner': owner,
        'agent': agent
      };
      var queryParams = {
        'offset': opts['offset'],
        'limit': opts['limit'],
        'sort': opts['sort'],
        'query': opts['query'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = V1ListQueuesResponse;

      return this.apiClient.callApi(
        '/api/v1/orgs/{owner}/agents/{agent}/queues/names', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the queuesV1ListQueues operation.
     * @callback module:api/QueuesV1Api~queuesV1ListQueuesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1ListQueuesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get agent
     * @param {String} owner Owner of the namespace
     * @param {String} agent Agent man managing the resource
     * @param {Object} opts Optional parameters
     * @param {Number} opts.offset Pagination offset.
     * @param {Number} opts.limit Limit size.
     * @param {String} opts.sort Sort to order the search.
     * @param {String} opts.query Query filter the search search.
     * @param {module:api/QueuesV1Api~queuesV1ListQueuesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1ListQueuesResponse}
     */
    this.queuesV1ListQueues = function(owner, agent, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling queuesV1ListQueues");
      }

      // verify the required parameter 'agent' is set
      if (agent === undefined || agent === null) {
        throw new Error("Missing the required parameter 'agent' when calling queuesV1ListQueues");
      }


      var pathParams = {
        'owner': owner,
        'agent': agent
      };
      var queryParams = {
        'offset': opts['offset'],
        'limit': opts['limit'],
        'sort': opts['sort'],
        'query': opts['query'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = V1ListQueuesResponse;

      return this.apiClient.callApi(
        '/api/v1/orgs/{owner}/agents/{agent}/queues', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the queuesV1PatchQueue operation.
     * @callback module:api/QueuesV1Api~queuesV1PatchQueueCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1Queue} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get State (queues/runs)
     * @param {String} owner Owner of the namespace
     * @param {String} queue_agent Agent
     * @param {String} queue_uuid UUID
     * @param {module:model/V1Queue} body Queue body
     * @param {module:api/QueuesV1Api~queuesV1PatchQueueCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1Queue}
     */
    this.queuesV1PatchQueue = function(owner, queue_agent, queue_uuid, body, callback) {
      var postBody = body;

      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling queuesV1PatchQueue");
      }

      // verify the required parameter 'queue_agent' is set
      if (queue_agent === undefined || queue_agent === null) {
        throw new Error("Missing the required parameter 'queue_agent' when calling queuesV1PatchQueue");
      }

      // verify the required parameter 'queue_uuid' is set
      if (queue_uuid === undefined || queue_uuid === null) {
        throw new Error("Missing the required parameter 'queue_uuid' when calling queuesV1PatchQueue");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling queuesV1PatchQueue");
      }


      var pathParams = {
        'owner': owner,
        'queue.agent': queue_agent,
        'queue.uuid': queue_uuid
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = V1Queue;

      return this.apiClient.callApi(
        '/api/v1/orgs/{owner}/agents/{queue.agent}/queues/{queue.uuid}', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the queuesV1UpdateQueue operation.
     * @callback module:api/QueuesV1Api~queuesV1UpdateQueueCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1Queue} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete agent
     * @param {String} owner Owner of the namespace
     * @param {String} queue_agent Agent
     * @param {String} queue_uuid UUID
     * @param {module:model/V1Queue} body Queue body
     * @param {module:api/QueuesV1Api~queuesV1UpdateQueueCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1Queue}
     */
    this.queuesV1UpdateQueue = function(owner, queue_agent, queue_uuid, body, callback) {
      var postBody = body;

      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling queuesV1UpdateQueue");
      }

      // verify the required parameter 'queue_agent' is set
      if (queue_agent === undefined || queue_agent === null) {
        throw new Error("Missing the required parameter 'queue_agent' when calling queuesV1UpdateQueue");
      }

      // verify the required parameter 'queue_uuid' is set
      if (queue_uuid === undefined || queue_uuid === null) {
        throw new Error("Missing the required parameter 'queue_uuid' when calling queuesV1UpdateQueue");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling queuesV1UpdateQueue");
      }


      var pathParams = {
        'owner': owner,
        'queue.agent': queue_agent,
        'queue.uuid': queue_uuid
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = V1Queue;

      return this.apiClient.callApi(
        '/api/v1/orgs/{owner}/agents/{queue.agent}/queues/{queue.uuid}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
