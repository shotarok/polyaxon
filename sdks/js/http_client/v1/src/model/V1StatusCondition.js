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
    define(['ApiClient', 'model/V1Statuses'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./V1Statuses'));
  } else {
    // Browser globals (root is window)
    if (!root.PolyaxonSdk) {
      root.PolyaxonSdk = {};
    }
    root.PolyaxonSdk.V1StatusCondition = factory(root.PolyaxonSdk.ApiClient, root.PolyaxonSdk.V1Statuses);
  }
}(this, function(ApiClient, V1Statuses) {
  'use strict';

  /**
   * The V1StatusCondition model module.
   * @module model/V1StatusCondition
   * @version 1.0.72
   */

  /**
   * Constructs a new <code>V1StatusCondition</code>.
   * @alias module:model/V1StatusCondition
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>V1StatusCondition</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V1StatusCondition} obj Optional instance to populate.
   * @return {module:model/V1StatusCondition} The populated <code>V1StatusCondition</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('type'))
        obj.type = V1Statuses.constructFromObject(data['type']);
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'String');
      if (data.hasOwnProperty('reason'))
        obj.reason = ApiClient.convertToType(data['reason'], 'String');
      if (data.hasOwnProperty('message'))
        obj.message = ApiClient.convertToType(data['message'], 'String');
      if (data.hasOwnProperty('last_update_time'))
        obj.last_update_time = ApiClient.convertToType(data['last_update_time'], 'Date');
      if (data.hasOwnProperty('last_transition_time'))
        obj.last_transition_time = ApiClient.convertToType(data['last_transition_time'], 'Date');
    }
    return obj;
  }

  /**
   * @member {module:model/V1Statuses} type
   */
  exports.prototype.type = undefined;

  /**
   * @member {String} status
   */
  exports.prototype.status = undefined;

  /**
   * @member {String} reason
   */
  exports.prototype.reason = undefined;

  /**
   * @member {String} message
   */
  exports.prototype.message = undefined;

  /**
   * @member {Date} last_update_time
   */
  exports.prototype.last_update_time = undefined;

  /**
   * @member {Date} last_transition_time
   */
  exports.prototype.last_transition_time = undefined;

  return exports;

}));
