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
    define(['ApiClient', 'model/V1HyperoptAlgorithms'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./V1HyperoptAlgorithms'));
  } else {
    // Browser globals (root is window)
    if (!root.PolyaxonSdk) {
      root.PolyaxonSdk = {};
    }
    root.PolyaxonSdk.V1Hyperopt = factory(root.PolyaxonSdk.ApiClient, root.PolyaxonSdk.V1HyperoptAlgorithms);
  }
}(this, function(ApiClient, V1HyperoptAlgorithms) {
  'use strict';

  /**
   * The V1Hyperopt model module.
   * @module model/V1Hyperopt
   * @version 1.0.72
   */

  /**
   * Constructs a new <code>V1Hyperopt</code>.
   * @alias module:model/V1Hyperopt
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>V1Hyperopt</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V1Hyperopt} obj Optional instance to populate.
   * @return {module:model/V1Hyperopt} The populated <code>V1Hyperopt</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('kind'))
        obj.kind = ApiClient.convertToType(data['kind'], 'String');
      if (data.hasOwnProperty('algorithm'))
        obj.algorithm = V1HyperoptAlgorithms.constructFromObject(data['algorithm']);
      if (data.hasOwnProperty('params'))
        obj.params = ApiClient.convertToType(data['params'], {'String': Object});
      if (data.hasOwnProperty('num_runs'))
        obj.num_runs = ApiClient.convertToType(data['num_runs'], 'Number');
      if (data.hasOwnProperty('seed'))
        obj.seed = ApiClient.convertToType(data['seed'], 'Number');
      if (data.hasOwnProperty('concurrency'))
        obj.concurrency = ApiClient.convertToType(data['concurrency'], 'Number');
      if (data.hasOwnProperty('early_stopping'))
        obj.early_stopping = ApiClient.convertToType(data['early_stopping'], [Object]);
    }
    return obj;
  }

  /**
   * @member {String} kind
   * @default 'hyperopt'
   */
  exports.prototype.kind = 'hyperopt';

  /**
   * @member {module:model/V1HyperoptAlgorithms} algorithm
   */
  exports.prototype.algorithm = undefined;

  /**
   * @member {Object.<String, Object>} params
   */
  exports.prototype.params = undefined;

  /**
   * @member {Number} num_runs
   */
  exports.prototype.num_runs = undefined;

  /**
   * @member {Number} seed
   */
  exports.prototype.seed = undefined;

  /**
   * @member {Number} concurrency
   */
  exports.prototype.concurrency = undefined;

  /**
   * @member {Array.<Object>} early_stopping
   */
  exports.prototype.early_stopping = undefined;

  return exports;

}));
