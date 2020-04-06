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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.PolyaxonSdk) {
      root.PolyaxonSdk = {};
    }
    root.PolyaxonSdk.V1IO = factory(root.PolyaxonSdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The V1IO model module.
   * @module model/V1IO
   * @version 1.0.72
   */

  /**
   * Constructs a new <code>V1IO</code>.
   * @alias module:model/V1IO
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>V1IO</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V1IO} obj Optional instance to populate.
   * @return {module:model/V1IO} The populated <code>V1IO</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('iotype'))
        obj.iotype = ApiClient.convertToType(data['iotype'], 'String');
      if (data.hasOwnProperty('value'))
        obj.value = ApiClient.convertToType(data['value'], Object);
      if (data.hasOwnProperty('is_optional'))
        obj.is_optional = ApiClient.convertToType(data['is_optional'], 'Boolean');
      if (data.hasOwnProperty('is_list'))
        obj.is_list = ApiClient.convertToType(data['is_list'], 'Boolean');
      if (data.hasOwnProperty('is_flag'))
        obj.is_flag = ApiClient.convertToType(data['is_flag'], 'Boolean');
      if (data.hasOwnProperty('delay_validation'))
        obj.delay_validation = ApiClient.convertToType(data['delay_validation'], 'Boolean');
      if (data.hasOwnProperty('options'))
        obj.options = ApiClient.convertToType(data['options'], [Object]);
    }
    return obj;
  }

  /**
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * @member {String} description
   */
  exports.prototype.description = undefined;

  /**
   * @member {String} iotype
   */
  exports.prototype.iotype = undefined;

  /**
   * @member {Object} value
   */
  exports.prototype.value = undefined;

  /**
   * @member {Boolean} is_optional
   */
  exports.prototype.is_optional = undefined;

  /**
   * @member {Boolean} is_list
   */
  exports.prototype.is_list = undefined;

  /**
   * @member {Boolean} is_flag
   */
  exports.prototype.is_flag = undefined;

  /**
   * @member {Boolean} delay_validation
   */
  exports.prototype.delay_validation = undefined;

  /**
   * @member {Array.<Object>} options
   */
  exports.prototype.options = undefined;

  return exports;

}));
