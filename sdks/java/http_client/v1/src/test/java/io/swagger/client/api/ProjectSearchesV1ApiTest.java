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
 * Do not edit the class manually.
 */


package io.swagger.client.api;

import io.swagger.client.ApiException;
import io.swagger.client.model.RuntimeError;
import io.swagger.client.model.V1ListSearchesResponse;
import io.swagger.client.model.V1Search;
import org.junit.Test;
import org.junit.Ignore;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * API tests for ProjectSearchesV1Api
 */
@Ignore
public class ProjectSearchesV1ApiTest {

    private final ProjectSearchesV1Api api = new ProjectSearchesV1Api();

    
    /**
     * Create project search
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void projectSearchesV1CreateProjectSearchTest() throws ApiException {
        String owner = null;
        String project = null;
        V1Search body = null;
        V1Search response = api.projectSearchesV1CreateProjectSearch(owner, project, body);

        // TODO: test validations
    }
    
    /**
     * Delete project search
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void projectSearchesV1DeleteProjectSearchTest() throws ApiException {
        String owner = null;
        String project = null;
        String uuid = null;
        api.projectSearchesV1DeleteProjectSearch(owner, project, uuid);

        // TODO: test validations
    }
    
    /**
     * Get project search
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void projectSearchesV1GetProjectSearchTest() throws ApiException {
        String owner = null;
        String project = null;
        String uuid = null;
        V1Search response = api.projectSearchesV1GetProjectSearch(owner, project, uuid);

        // TODO: test validations
    }
    
    /**
     * List project search names
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void projectSearchesV1ListProjectSearchNamesTest() throws ApiException {
        String owner = null;
        String project = null;
        Integer offset = null;
        Integer limit = null;
        String sort = null;
        String query = null;
        V1ListSearchesResponse response = api.projectSearchesV1ListProjectSearchNames(owner, project, offset, limit, sort, query);

        // TODO: test validations
    }
    
    /**
     * List project searches
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void projectSearchesV1ListProjectSearchesTest() throws ApiException {
        String owner = null;
        String project = null;
        Integer offset = null;
        Integer limit = null;
        String sort = null;
        String query = null;
        V1ListSearchesResponse response = api.projectSearchesV1ListProjectSearches(owner, project, offset, limit, sort, query);

        // TODO: test validations
    }
    
    /**
     * Patch project search
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void projectSearchesV1PatchProjectSearchTest() throws ApiException {
        String owner = null;
        String project = null;
        String searchUuid = null;
        V1Search body = null;
        V1Search response = api.projectSearchesV1PatchProjectSearch(owner, project, searchUuid, body);

        // TODO: test validations
    }
    
    /**
     * Promote project search
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void projectSearchesV1PromoteProjectSearchTest() throws ApiException {
        String owner = null;
        String project = null;
        String uuid = null;
        api.projectSearchesV1PromoteProjectSearch(owner, project, uuid);

        // TODO: test validations
    }
    
    /**
     * Update project search
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void projectSearchesV1UpdateProjectSearchTest() throws ApiException {
        String owner = null;
        String project = null;
        String searchUuid = null;
        V1Search body = null;
        V1Search response = api.projectSearchesV1UpdateProjectSearch(owner, project, searchUuid, body);

        // TODO: test validations
    }
    
}
