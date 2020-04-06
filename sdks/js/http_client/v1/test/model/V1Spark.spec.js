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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.PolyaxonSdk);
  }
}(this, function(expect, PolyaxonSdk) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('V1Spark', function() {
      beforeEach(function() {
        instance = new PolyaxonSdk.V1Spark();
      });

      it('should create an instance of V1Spark', function() {
        // TODO: update the code to test V1Spark
        expect(instance).to.be.a(PolyaxonSdk.V1Spark);
      });

      it('should have the property kind (base name: "kind")', function() {
        // TODO: update the code to test the property kind
        expect(instance).to.have.property('kind');
        // expect(instance.kind).to.be(expectedValueLiteral);
      });

      it('should have the property connections (base name: "connections")', function() {
        // TODO: update the code to test the property connections
        expect(instance).to.have.property('connections');
        // expect(instance.connections).to.be(expectedValueLiteral);
      });

      it('should have the property volumes (base name: "volumes")', function() {
        // TODO: update the code to test the property volumes
        expect(instance).to.have.property('volumes');
        // expect(instance.volumes).to.be(expectedValueLiteral);
      });

      it('should have the property type (base name: "type")', function() {
        // TODO: update the code to test the property type
        expect(instance).to.have.property('type');
        // expect(instance.type).to.be(expectedValueLiteral);
      });

      it('should have the property spark_version (base name: "spark_version")', function() {
        // TODO: update the code to test the property spark_version
        expect(instance).to.have.property('spark_version');
        // expect(instance.spark_version).to.be(expectedValueLiteral);
      });

      it('should have the property python_version (base name: "python_version")', function() {
        // TODO: update the code to test the property python_version
        expect(instance).to.have.property('python_version');
        // expect(instance.python_version).to.be(expectedValueLiteral);
      });

      it('should have the property deploy_mode (base name: "deploy_mode")', function() {
        // TODO: update the code to test the property deploy_mode
        expect(instance).to.have.property('deploy_mode');
        // expect(instance.deploy_mode).to.be(expectedValueLiteral);
      });

      it('should have the property main_class (base name: "main_class")', function() {
        // TODO: update the code to test the property main_class
        expect(instance).to.have.property('main_class');
        // expect(instance.main_class).to.be(expectedValueLiteral);
      });

      it('should have the property main_application_file (base name: "main_application_file")', function() {
        // TODO: update the code to test the property main_application_file
        expect(instance).to.have.property('main_application_file');
        // expect(instance.main_application_file).to.be(expectedValueLiteral);
      });

      it('should have the property _arguments (base name: "arguments")', function() {
        // TODO: update the code to test the property _arguments
        expect(instance).to.have.property('_arguments');
        // expect(instance._arguments).to.be(expectedValueLiteral);
      });

      it('should have the property hadoop_conf (base name: "hadoop_conf")', function() {
        // TODO: update the code to test the property hadoop_conf
        expect(instance).to.have.property('hadoop_conf');
        // expect(instance.hadoop_conf).to.be(expectedValueLiteral);
      });

      it('should have the property spark_conf (base name: "spark_conf")', function() {
        // TODO: update the code to test the property spark_conf
        expect(instance).to.have.property('spark_conf');
        // expect(instance.spark_conf).to.be(expectedValueLiteral);
      });

      it('should have the property spark_config_map (base name: "spark_config_map")', function() {
        // TODO: update the code to test the property spark_config_map
        expect(instance).to.have.property('spark_config_map');
        // expect(instance.spark_config_map).to.be(expectedValueLiteral);
      });

      it('should have the property hadoop_config_map (base name: "hadoop_config_map")', function() {
        // TODO: update the code to test the property hadoop_config_map
        expect(instance).to.have.property('hadoop_config_map');
        // expect(instance.hadoop_config_map).to.be(expectedValueLiteral);
      });

      it('should have the property executor (base name: "executor")', function() {
        // TODO: update the code to test the property executor
        expect(instance).to.have.property('executor');
        // expect(instance.executor).to.be(expectedValueLiteral);
      });

      it('should have the property driver (base name: "driver")', function() {
        // TODO: update the code to test the property driver
        expect(instance).to.have.property('driver');
        // expect(instance.driver).to.be(expectedValueLiteral);
      });

    });
  });

}));
