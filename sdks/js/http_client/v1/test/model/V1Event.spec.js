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
    describe('V1Event', function() {
      beforeEach(function() {
        instance = new PolyaxonSdk.V1Event();
      });

      it('should create an instance of V1Event', function() {
        // TODO: update the code to test V1Event
        expect(instance).to.be.a(PolyaxonSdk.V1Event);
      });

      it('should have the property timestamp (base name: "timestamp")', function() {
        // TODO: update the code to test the property timestamp
        expect(instance).to.have.property('timestamp');
        // expect(instance.timestamp).to.be(expectedValueLiteral);
      });

      it('should have the property step (base name: "step")', function() {
        // TODO: update the code to test the property step
        expect(instance).to.have.property('step');
        // expect(instance.step).to.be(expectedValueLiteral);
      });

      it('should have the property metric (base name: "metric")', function() {
        // TODO: update the code to test the property metric
        expect(instance).to.have.property('metric');
        // expect(instance.metric).to.be(expectedValueLiteral);
      });

      it('should have the property image (base name: "image")', function() {
        // TODO: update the code to test the property image
        expect(instance).to.have.property('image');
        // expect(instance.image).to.be(expectedValueLiteral);
      });

      it('should have the property histogram (base name: "histogram")', function() {
        // TODO: update the code to test the property histogram
        expect(instance).to.have.property('histogram');
        // expect(instance.histogram).to.be(expectedValueLiteral);
      });

      it('should have the property audio (base name: "audio")', function() {
        // TODO: update the code to test the property audio
        expect(instance).to.have.property('audio');
        // expect(instance.audio).to.be(expectedValueLiteral);
      });

      it('should have the property video (base name: "video")', function() {
        // TODO: update the code to test the property video
        expect(instance).to.have.property('video');
        // expect(instance.video).to.be(expectedValueLiteral);
      });

      it('should have the property html (base name: "html")', function() {
        // TODO: update the code to test the property html
        expect(instance).to.have.property('html');
        // expect(instance.html).to.be(expectedValueLiteral);
      });

      it('should have the property text (base name: "text")', function() {
        // TODO: update the code to test the property text
        expect(instance).to.have.property('text');
        // expect(instance.text).to.be(expectedValueLiteral);
      });

      it('should have the property chart (base name: "chart")', function() {
        // TODO: update the code to test the property chart
        expect(instance).to.have.property('chart');
        // expect(instance.chart).to.be(expectedValueLiteral);
      });

      it('should have the property model (base name: "model")', function() {
        // TODO: update the code to test the property model
        expect(instance).to.have.property('model');
        // expect(instance.model).to.be(expectedValueLiteral);
      });

      it('should have the property artifact (base name: "artifact")', function() {
        // TODO: update the code to test the property artifact
        expect(instance).to.have.property('artifact');
        // expect(instance.artifact).to.be(expectedValueLiteral);
      });

      it('should have the property dataframe (base name: "dataframe")', function() {
        // TODO: update the code to test the property dataframe
        expect(instance).to.have.property('dataframe');
        // expect(instance.dataframe).to.be(expectedValueLiteral);
      });

    });
  });

}));
