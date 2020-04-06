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
import io.swagger.client.model.V1ListOrganizationMembersResponse;
import io.swagger.client.model.V1ListOrganizationsResponse;
import io.swagger.client.model.V1Organization;
import io.swagger.client.model.V1OrganizationMember;
import org.junit.Test;
import org.junit.Ignore;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * API tests for OrganizationsV1Api
 */
@Ignore
public class OrganizationsV1ApiTest {

    private final OrganizationsV1Api api = new OrganizationsV1Api();

    
    /**
     * 
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void organizationsV1CreateOrganizationTest() throws ApiException {
        V1Organization body = null;
        V1Organization response = api.organizationsV1CreateOrganization(body);

        // TODO: test validations
    }
    
    /**
     * 
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void organizationsV1CreateOrganizationMemberTest() throws ApiException {
        String owner = null;
        V1OrganizationMember body = null;
        V1OrganizationMember response = api.organizationsV1CreateOrganizationMember(owner, body);

        // TODO: test validations
    }
    
    /**
     * 
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void organizationsV1DeleteOrganizationTest() throws ApiException {
        String owner = null;
        api.organizationsV1DeleteOrganization(owner);

        // TODO: test validations
    }
    
    /**
     * 
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void organizationsV1DeleteOrganizationMemberTest() throws ApiException {
        String owner = null;
        String user = null;
        api.organizationsV1DeleteOrganizationMember(owner, user);

        // TODO: test validations
    }
    
    /**
     * 
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void organizationsV1GetOrganizationTest() throws ApiException {
        String owner = null;
        V1Organization response = api.organizationsV1GetOrganization(owner);

        // TODO: test validations
    }
    
    /**
     * 
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void organizationsV1GetOrganizationMemberTest() throws ApiException {
        String owner = null;
        String user = null;
        V1OrganizationMember response = api.organizationsV1GetOrganizationMember(owner, user);

        // TODO: test validations
    }
    
    /**
     * 
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void organizationsV1ListOrganizationMembersTest() throws ApiException {
        String owner = null;
        Integer offset = null;
        Integer limit = null;
        String sort = null;
        String query = null;
        V1ListOrganizationMembersResponse response = api.organizationsV1ListOrganizationMembers(owner, offset, limit, sort, query);

        // TODO: test validations
    }
    
    /**
     * Get versions
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void organizationsV1ListOrganizationNamesTest() throws ApiException {
        V1ListOrganizationsResponse response = api.organizationsV1ListOrganizationNames();

        // TODO: test validations
    }
    
    /**
     * Get log handler
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void organizationsV1ListOrganizationsTest() throws ApiException {
        V1ListOrganizationsResponse response = api.organizationsV1ListOrganizations();

        // TODO: test validations
    }
    
    /**
     * 
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void organizationsV1PatchOrganizationTest() throws ApiException {
        String owner = null;
        V1Organization body = null;
        V1Organization response = api.organizationsV1PatchOrganization(owner, body);

        // TODO: test validations
    }
    
    /**
     * 
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void organizationsV1PatchOrganizationMemberTest() throws ApiException {
        String owner = null;
        String memberUser = null;
        V1OrganizationMember body = null;
        V1OrganizationMember response = api.organizationsV1PatchOrganizationMember(owner, memberUser, body);

        // TODO: test validations
    }
    
    /**
     * 
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void organizationsV1UpdateOrganizationTest() throws ApiException {
        String owner = null;
        V1Organization body = null;
        V1Organization response = api.organizationsV1UpdateOrganization(owner, body);

        // TODO: test validations
    }
    
    /**
     * 
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void organizationsV1UpdateOrganizationMemberTest() throws ApiException {
        String owner = null;
        String memberUser = null;
        V1OrganizationMember body = null;
        V1OrganizationMember response = api.organizationsV1UpdateOrganizationMember(owner, memberUser, body);

        // TODO: test validations
    }
    
}
