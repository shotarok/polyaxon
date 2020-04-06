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
    define(['ApiClient', 'model/V1Affinity', 'model/V1HostAlias', 'model/V1PodDNSConfig', 'model/V1PodSecurityContext', 'model/V1Toleration'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./V1Affinity'), require('./V1HostAlias'), require('./V1PodDNSConfig'), require('./V1PodSecurityContext'), require('./V1Toleration'));
  } else {
    // Browser globals (root is window)
    if (!root.PolyaxonSdk) {
      root.PolyaxonSdk = {};
    }
    root.PolyaxonSdk.V1Environment = factory(root.PolyaxonSdk.ApiClient, root.PolyaxonSdk.V1Affinity, root.PolyaxonSdk.V1HostAlias, root.PolyaxonSdk.V1PodDNSConfig, root.PolyaxonSdk.V1PodSecurityContext, root.PolyaxonSdk.V1Toleration);
  }
}(this, function(ApiClient, V1Affinity, V1HostAlias, V1PodDNSConfig, V1PodSecurityContext, V1Toleration) {
  'use strict';

  /**
   * The V1Environment model module.
   * @module model/V1Environment
   * @version 1.0.72
   */

  /**
   * Constructs a new <code>V1Environment</code>.
   * @alias module:model/V1Environment
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>V1Environment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V1Environment} obj Optional instance to populate.
   * @return {module:model/V1Environment} The populated <code>V1Environment</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('labels'))
        obj.labels = ApiClient.convertToType(data['labels'], {'String': 'String'});
      if (data.hasOwnProperty('annotations'))
        obj.annotations = ApiClient.convertToType(data['annotations'], {'String': 'String'});
      if (data.hasOwnProperty('node_selector'))
        obj.node_selector = ApiClient.convertToType(data['node_selector'], {'String': 'String'});
      if (data.hasOwnProperty('affinity'))
        obj.affinity = V1Affinity.constructFromObject(data['affinity']);
      if (data.hasOwnProperty('tolerations'))
        obj.tolerations = ApiClient.convertToType(data['tolerations'], [V1Toleration]);
      if (data.hasOwnProperty('node_name'))
        obj.node_name = ApiClient.convertToType(data['node_name'], 'String');
      if (data.hasOwnProperty('service_account_name'))
        obj.service_account_name = ApiClient.convertToType(data['service_account_name'], 'String');
      if (data.hasOwnProperty('host_aliases'))
        obj.host_aliases = ApiClient.convertToType(data['host_aliases'], [V1HostAlias]);
      if (data.hasOwnProperty('security_context'))
        obj.security_context = V1PodSecurityContext.constructFromObject(data['security_context']);
      if (data.hasOwnProperty('image_pull_secrets'))
        obj.image_pull_secrets = ApiClient.convertToType(data['image_pull_secrets'], ['String']);
      if (data.hasOwnProperty('host_network'))
        obj.host_network = ApiClient.convertToType(data['host_network'], 'Boolean');
      if (data.hasOwnProperty('dns_policy'))
        obj.dns_policy = ApiClient.convertToType(data['dns_policy'], 'String');
      if (data.hasOwnProperty('dns_config'))
        obj.dns_config = V1PodDNSConfig.constructFromObject(data['dns_config']);
      if (data.hasOwnProperty('scheduler_name'))
        obj.scheduler_name = ApiClient.convertToType(data['scheduler_name'], 'String');
      if (data.hasOwnProperty('priority_class_name'))
        obj.priority_class_name = ApiClient.convertToType(data['priority_class_name'], 'String');
      if (data.hasOwnProperty('priority'))
        obj.priority = ApiClient.convertToType(data['priority'], 'Number');
      if (data.hasOwnProperty('restart_policy'))
        obj.restart_policy = ApiClient.convertToType(data['restart_policy'], 'String');
    }
    return obj;
  }

  /**
   * @member {Object.<String, String>} labels
   */
  exports.prototype.labels = undefined;

  /**
   * @member {Object.<String, String>} annotations
   */
  exports.prototype.annotations = undefined;

  /**
   * @member {Object.<String, String>} node_selector
   */
  exports.prototype.node_selector = undefined;

  /**
   * Optional Affinity sets the scheduling constraints.
   * @member {module:model/V1Affinity} affinity
   */
  exports.prototype.affinity = undefined;

  /**
   * Optional Tolerations to apply.
   * @member {Array.<module:model/V1Toleration>} tolerations
   */
  exports.prototype.tolerations = undefined;

  /**
   * Optional NodeName is a request to schedule this pod onto a specific node. If it is non-empty, the scheduler simply schedules this pod onto that node, assuming that it fits resource requirements.
   * @member {String} node_name
   */
  exports.prototype.node_name = undefined;

  /**
   * @member {String} service_account_name
   */
  exports.prototype.service_account_name = undefined;

  /**
   * Optional HostAliases is an optional list of hosts and IPs that will be injected into the pod spec.
   * @member {Array.<module:model/V1HostAlias>} host_aliases
   */
  exports.prototype.host_aliases = undefined;

  /**
   * PodSecurityContext holds pod-level security attributes and common container settings. Some fields are also present in container.securityContext.  Field values of container.securityContext take precedence over field values of PodSecurityContext.
   * @member {module:model/V1PodSecurityContext} security_context
   */
  exports.prototype.security_context = undefined;

  /**
   * @member {Array.<String>} image_pull_secrets
   */
  exports.prototype.image_pull_secrets = undefined;

  /**
   * Host networking requested for this workflow pod. Default to false.
   * @member {Boolean} host_network
   */
  exports.prototype.host_network = undefined;

  /**
   * Set DNS policy for the pod. Defaults to \"ClusterFirst\". Valid values are 'ClusterFirstWithHostNet', 'ClusterFirst', 'Default' or 'None'. DNS parameters given in DNSConfig will be merged with the policy selected with DNSPolicy. To have DNS options set along with hostNetwork, you have to specify DNS policy explicitly to 'ClusterFirstWithHostNet'.
   * @member {String} dns_policy
   */
  exports.prototype.dns_policy = undefined;

  /**
   * PodDNSConfig defines the DNS parameters of a pod in addition to those generated from DNSPolicy.
   * @member {module:model/V1PodDNSConfig} dns_config
   */
  exports.prototype.dns_config = undefined;

  /**
   * @member {String} scheduler_name
   */
  exports.prototype.scheduler_name = undefined;

  /**
   * If specified, indicates the pod's priority. \"system-node-critical\" and \"system-cluster-critical\" are two special keywords which indicate the highest priorities with the former being the highest priority. Any other name must be defined by creating a PriorityClass object with that name. If not specified, the pod priority will be default or zero if there is no default.
   * @member {String} priority_class_name
   */
  exports.prototype.priority_class_name = undefined;

  /**
   * The priority value. Various system components use this field to find the priority of the pod. When Priority Admission Controller is enabled, it prevents users from setting this field. The admission controller populates this field from PriorityClassName. The higher the value, the higher the priority.
   * @member {Number} priority
   */
  exports.prototype.priority = undefined;

  /**
   * @member {String} restart_policy
   */
  exports.prototype.restart_policy = undefined;

  return exports;

}));
