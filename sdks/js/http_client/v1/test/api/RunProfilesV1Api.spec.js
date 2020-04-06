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

  beforeEach(function() {
    instance = new PolyaxonSdk.RunProfilesV1Api();
  });

  describe('(package)', function() {
    describe('RunProfilesV1Api', function() {
      describe('runProfilesV1CreateRunProfile', function() {
        it('should call runProfilesV1CreateRunProfile successfully', function(done) {
          // TODO: uncomment, update parameter values for runProfilesV1CreateRunProfile call and complete the assertions
          /*
          var owner = "owner_example";
          var body = new PolyaxonSdk.V1RunProfile();
          body.uuid = "";
          body.name = "";
          body.description = "";
          body.tags = [""];
          body.created_at = new Date();
          body.updated_at = new Date();
          body.frozen = false;
          body.disabled = false;
          body.agent = "";
          body.queue = "";
          body.namespace = "";
          body.termination = ;
          body.environment = ;

          instance.runProfilesV1CreateRunProfile(owner, body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(PolyaxonSdk.V1RunProfile);
            expect(data.uuid).to.be.a('string');
            expect(data.uuid).to.be("");
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("");
            expect(data.description).to.be.a('string');
            expect(data.description).to.be("");
            {
              let dataCtr = data.tags;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a('string');
                expect(data).to.be("");
              }
            }
            expect(data.created_at).to.be.a(Date);
            expect(data.created_at).to.be(new Date());
            expect(data.updated_at).to.be.a(Date);
            expect(data.updated_at).to.be(new Date());
            expect(data.frozen).to.be.a('boolean');
            expect(data.frozen).to.be(false);
            expect(data.disabled).to.be.a('boolean');
            expect(data.disabled).to.be(false);
            expect(data.agent).to.be.a('string');
            expect(data.agent).to.be("");
            expect(data.queue).to.be.a('string');
            expect(data.queue).to.be("");
            expect(data.namespace).to.be.a('string');
            expect(data.namespace).to.be("");
            expect(data.termination).to.be.a(Object);
            expect(data.termination).to.be();
            expect(data.environment).to.be.a(Object);
            expect(data.environment).to.be();

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('runProfilesV1DeleteRunProfile', function() {
        it('should call runProfilesV1DeleteRunProfile successfully', function(done) {
          // TODO: uncomment, update parameter values for runProfilesV1DeleteRunProfile call
          /*
          var owner = "owner_example";
          var uuid = "uuid_example";

          instance.runProfilesV1DeleteRunProfile(owner, uuid, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('runProfilesV1GetRunProfile', function() {
        it('should call runProfilesV1GetRunProfile successfully', function(done) {
          // TODO: uncomment, update parameter values for runProfilesV1GetRunProfile call and complete the assertions
          /*
          var owner = "owner_example";
          var uuid = "uuid_example";

          instance.runProfilesV1GetRunProfile(owner, uuid, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(PolyaxonSdk.V1RunProfile);
            expect(data.uuid).to.be.a('string');
            expect(data.uuid).to.be("");
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("");
            expect(data.description).to.be.a('string');
            expect(data.description).to.be("");
            {
              let dataCtr = data.tags;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a('string');
                expect(data).to.be("");
              }
            }
            expect(data.created_at).to.be.a(Date);
            expect(data.created_at).to.be(new Date());
            expect(data.updated_at).to.be.a(Date);
            expect(data.updated_at).to.be(new Date());
            expect(data.frozen).to.be.a('boolean');
            expect(data.frozen).to.be(false);
            expect(data.disabled).to.be.a('boolean');
            expect(data.disabled).to.be(false);
            expect(data.agent).to.be.a('string');
            expect(data.agent).to.be("");
            expect(data.queue).to.be.a('string');
            expect(data.queue).to.be("");
            expect(data.namespace).to.be.a('string');
            expect(data.namespace).to.be("");
            expect(data.termination).to.be.a(Object);
            expect(data.termination).to.be();
            expect(data.environment).to.be.a(Object);
            expect(data.environment).to.be();

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('runProfilesV1ListRunProfileNames', function() {
        it('should call runProfilesV1ListRunProfileNames successfully', function(done) {
          // TODO: uncomment, update parameter values for runProfilesV1ListRunProfileNames call and complete the assertions
          /*
          var owner = "owner_example";
          var opts = {};
          opts.offset = 56;
          opts.limit = 56;
          opts.sort = "sort_example";
          opts.query = "query_example";

          instance.runProfilesV1ListRunProfileNames(owner, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(PolyaxonSdk.V1ListRunProfilesResponse);
            expect(data.count).to.be.a('number');
            expect(data.count).to.be(0);
            {
              let dataCtr = data.results;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(PolyaxonSdk.V1RunProfile);
                expect(data.uuid).to.be.a('string');
                expect(data.uuid).to.be("");
                expect(data.name).to.be.a('string');
                expect(data.name).to.be("");
                expect(data.description).to.be.a('string');
                expect(data.description).to.be("");
                {
                  let dataCtr = data.tags;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a('string');
                    expect(data).to.be("");
                  }
                }
                expect(data.created_at).to.be.a(Date);
                expect(data.created_at).to.be(new Date());
                expect(data.updated_at).to.be.a(Date);
                expect(data.updated_at).to.be(new Date());
                expect(data.frozen).to.be.a('boolean');
                expect(data.frozen).to.be(false);
                expect(data.disabled).to.be.a('boolean');
                expect(data.disabled).to.be(false);
                expect(data.agent).to.be.a('string');
                expect(data.agent).to.be("");
                expect(data.queue).to.be.a('string');
                expect(data.queue).to.be("");
                expect(data.namespace).to.be.a('string');
                expect(data.namespace).to.be("");
                expect(data.termination).to.be.a(Object);
                expect(data.termination).to.be();
                expect(data.environment).to.be.a(Object);
                expect(data.environment).to.be();
              }
            }
            expect(data.previous).to.be.a('string');
            expect(data.previous).to.be("");
            expect(data.next).to.be.a('string');
            expect(data.next).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('runProfilesV1ListRunProfiles', function() {
        it('should call runProfilesV1ListRunProfiles successfully', function(done) {
          // TODO: uncomment, update parameter values for runProfilesV1ListRunProfiles call and complete the assertions
          /*
          var owner = "owner_example";
          var opts = {};
          opts.offset = 56;
          opts.limit = 56;
          opts.sort = "sort_example";
          opts.query = "query_example";

          instance.runProfilesV1ListRunProfiles(owner, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(PolyaxonSdk.V1ListRunProfilesResponse);
            expect(data.count).to.be.a('number');
            expect(data.count).to.be(0);
            {
              let dataCtr = data.results;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(PolyaxonSdk.V1RunProfile);
                expect(data.uuid).to.be.a('string');
                expect(data.uuid).to.be("");
                expect(data.name).to.be.a('string');
                expect(data.name).to.be("");
                expect(data.description).to.be.a('string');
                expect(data.description).to.be("");
                {
                  let dataCtr = data.tags;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a('string');
                    expect(data).to.be("");
                  }
                }
                expect(data.created_at).to.be.a(Date);
                expect(data.created_at).to.be(new Date());
                expect(data.updated_at).to.be.a(Date);
                expect(data.updated_at).to.be(new Date());
                expect(data.frozen).to.be.a('boolean');
                expect(data.frozen).to.be(false);
                expect(data.disabled).to.be.a('boolean');
                expect(data.disabled).to.be(false);
                expect(data.agent).to.be.a('string');
                expect(data.agent).to.be("");
                expect(data.queue).to.be.a('string');
                expect(data.queue).to.be("");
                expect(data.namespace).to.be.a('string');
                expect(data.namespace).to.be("");
                expect(data.termination).to.be.a(Object);
                expect(data.termination).to.be();
                expect(data.environment).to.be.a(Object);
                expect(data.environment).to.be();
              }
            }
            expect(data.previous).to.be.a('string');
            expect(data.previous).to.be("");
            expect(data.next).to.be.a('string');
            expect(data.next).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('runProfilesV1PatchRunProfile', function() {
        it('should call runProfilesV1PatchRunProfile successfully', function(done) {
          // TODO: uncomment, update parameter values for runProfilesV1PatchRunProfile call and complete the assertions
          /*
          var owner = "owner_example";
          var run_profile_uuid = "run_profile_uuid_example";
          var body = new PolyaxonSdk.V1RunProfile();
          body.uuid = "";
          body.name = "";
          body.description = "";
          body.tags = [""];
          body.created_at = new Date();
          body.updated_at = new Date();
          body.frozen = false;
          body.disabled = false;
          body.agent = "";
          body.queue = "";
          body.namespace = "";
          body.termination = ;
          body.environment = ;

          instance.runProfilesV1PatchRunProfile(owner, run_profile_uuid, body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(PolyaxonSdk.V1RunProfile);
            expect(data.uuid).to.be.a('string');
            expect(data.uuid).to.be("");
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("");
            expect(data.description).to.be.a('string');
            expect(data.description).to.be("");
            {
              let dataCtr = data.tags;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a('string');
                expect(data).to.be("");
              }
            }
            expect(data.created_at).to.be.a(Date);
            expect(data.created_at).to.be(new Date());
            expect(data.updated_at).to.be.a(Date);
            expect(data.updated_at).to.be(new Date());
            expect(data.frozen).to.be.a('boolean');
            expect(data.frozen).to.be(false);
            expect(data.disabled).to.be.a('boolean');
            expect(data.disabled).to.be(false);
            expect(data.agent).to.be.a('string');
            expect(data.agent).to.be("");
            expect(data.queue).to.be.a('string');
            expect(data.queue).to.be("");
            expect(data.namespace).to.be.a('string');
            expect(data.namespace).to.be("");
            expect(data.termination).to.be.a(Object);
            expect(data.termination).to.be();
            expect(data.environment).to.be.a(Object);
            expect(data.environment).to.be();

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('runProfilesV1UpdateRunProfile', function() {
        it('should call runProfilesV1UpdateRunProfile successfully', function(done) {
          // TODO: uncomment, update parameter values for runProfilesV1UpdateRunProfile call and complete the assertions
          /*
          var owner = "owner_example";
          var run_profile_uuid = "run_profile_uuid_example";
          var body = new PolyaxonSdk.V1RunProfile();
          body.uuid = "";
          body.name = "";
          body.description = "";
          body.tags = [""];
          body.created_at = new Date();
          body.updated_at = new Date();
          body.frozen = false;
          body.disabled = false;
          body.agent = "";
          body.queue = "";
          body.namespace = "";
          body.termination = ;
          body.environment = ;

          instance.runProfilesV1UpdateRunProfile(owner, run_profile_uuid, body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(PolyaxonSdk.V1RunProfile);
            expect(data.uuid).to.be.a('string');
            expect(data.uuid).to.be("");
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("");
            expect(data.description).to.be.a('string');
            expect(data.description).to.be("");
            {
              let dataCtr = data.tags;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a('string');
                expect(data).to.be("");
              }
            }
            expect(data.created_at).to.be.a(Date);
            expect(data.created_at).to.be(new Date());
            expect(data.updated_at).to.be.a(Date);
            expect(data.updated_at).to.be(new Date());
            expect(data.frozen).to.be.a('boolean');
            expect(data.frozen).to.be(false);
            expect(data.disabled).to.be.a('boolean');
            expect(data.disabled).to.be(false);
            expect(data.agent).to.be.a('string');
            expect(data.agent).to.be("");
            expect(data.queue).to.be.a('string');
            expect(data.queue).to.be("");
            expect(data.namespace).to.be.a('string');
            expect(data.namespace).to.be("");
            expect(data.termination).to.be.a(Object);
            expect(data.termination).to.be();
            expect(data.environment).to.be.a(Object);
            expect(data.environment).to.be();

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
