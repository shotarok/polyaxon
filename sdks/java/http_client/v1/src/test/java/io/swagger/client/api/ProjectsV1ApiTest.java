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
import java.io.File;
import io.swagger.client.model.RuntimeError;
import io.swagger.client.model.V1ListProjectsResponse;
import io.swagger.client.model.V1Project;
import io.swagger.client.model.V1ProjectSettings;
import io.swagger.client.model.V1ProjectTeams;
import org.junit.Test;
import org.junit.Ignore;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * API tests for ProjectsV1Api
 */
@Ignore
public class ProjectsV1ApiTest {

    private final ProjectsV1Api api = new ProjectsV1Api();

    
    /**
     * Archive project
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void projectsV1ArchiveProjectTest() throws ApiException {
        String owner = null;
        String project = null;
        api.projectsV1ArchiveProject(owner, project);

        // TODO: test validations
    }
    
    /**
     * Bookmark project
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void projectsV1BookmarkProjectTest() throws ApiException {
        String owner = null;
        String project = null;
        api.projectsV1BookmarkProject(owner, project);

        // TODO: test validations
    }
    
    /**
     * Create new project
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void projectsV1CreateProjectTest() throws ApiException {
        String owner = null;
        V1Project body = null;
        V1Project response = api.projectsV1CreateProject(owner, body);

        // TODO: test validations
    }
    
    /**
     * Delete project
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void projectsV1DeleteProjectTest() throws ApiException {
        String owner = null;
        String project = null;
        api.projectsV1DeleteProject(owner, project);

        // TODO: test validations
    }
    
    /**
     * Disbale project CI
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void projectsV1DisableProjectCITest() throws ApiException {
        String owner = null;
        String project = null;
        api.projectsV1DisableProjectCI(owner, project);

        // TODO: test validations
    }
    
    /**
     * Enable project CI
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void projectsV1EnableProjectCITest() throws ApiException {
        String owner = null;
        String project = null;
        api.projectsV1EnableProjectCI(owner, project);

        // TODO: test validations
    }
    
    /**
     * Get project teams
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void projectsV1FetchProjectTeamsTest() throws ApiException {
        String owner = null;
        String project = null;
        V1ProjectTeams response = api.projectsV1FetchProjectTeams(owner, project);

        // TODO: test validations
    }
    
    /**
     * Get project
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void projectsV1GetProjectTest() throws ApiException {
        String owner = null;
        String project = null;
        V1Project response = api.projectsV1GetProject(owner, project);

        // TODO: test validations
    }
    
    /**
     * Get Project settings
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void projectsV1GetProjectSettingsTest() throws ApiException {
        String owner = null;
        String project = null;
        V1ProjectSettings response = api.projectsV1GetProjectSettings(owner, project);

        // TODO: test validations
    }
    
    /**
     * List archived projects for user
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void projectsV1ListArchivedProjectsTest() throws ApiException {
        String user = null;
        Integer offset = null;
        Integer limit = null;
        String sort = null;
        String query = null;
        V1ListProjectsResponse response = api.projectsV1ListArchivedProjects(user, offset, limit, sort, query);

        // TODO: test validations
    }
    
    /**
     * List bookmarked projects for user
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void projectsV1ListBookmarkedProjectsTest() throws ApiException {
        String user = null;
        Integer offset = null;
        Integer limit = null;
        String sort = null;
        String query = null;
        V1ListProjectsResponse response = api.projectsV1ListBookmarkedProjects(user, offset, limit, sort, query);

        // TODO: test validations
    }
    
    /**
     * List project names
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void projectsV1ListProjectNamesTest() throws ApiException {
        String owner = null;
        Integer offset = null;
        Integer limit = null;
        String sort = null;
        String query = null;
        V1ListProjectsResponse response = api.projectsV1ListProjectNames(owner, offset, limit, sort, query);

        // TODO: test validations
    }
    
    /**
     * List projects
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void projectsV1ListProjectsTest() throws ApiException {
        String owner = null;
        Integer offset = null;
        Integer limit = null;
        String sort = null;
        String query = null;
        V1ListProjectsResponse response = api.projectsV1ListProjects(owner, offset, limit, sort, query);

        // TODO: test validations
    }
    
    /**
     * Patch project
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void projectsV1PatchProjectTest() throws ApiException {
        String owner = null;
        String projectName = null;
        V1Project body = null;
        V1Project response = api.projectsV1PatchProject(owner, projectName, body);

        // TODO: test validations
    }
    
    /**
     * Patch project settings
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void projectsV1PatchProjectSettingsTest() throws ApiException {
        String owner = null;
        String project = null;
        V1ProjectSettings body = null;
        V1ProjectSettings response = api.projectsV1PatchProjectSettings(owner, project, body);

        // TODO: test validations
    }
    
    /**
     * Patch project teams
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void projectsV1PatchProjectTeamsTest() throws ApiException {
        String owner = null;
        String project = null;
        V1ProjectTeams body = null;
        V1ProjectTeams response = api.projectsV1PatchProjectTeams(owner, project, body);

        // TODO: test validations
    }
    
    /**
     * Restore project
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void projectsV1RestoreProjectTest() throws ApiException {
        String owner = null;
        String project = null;
        api.projectsV1RestoreProject(owner, project);

        // TODO: test validations
    }
    
    /**
     * Unbookmark project
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void projectsV1UnbookmarkProjectTest() throws ApiException {
        String owner = null;
        String project = null;
        api.projectsV1UnbookmarkProject(owner, project);

        // TODO: test validations
    }
    
    /**
     * Update project
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void projectsV1UpdateProjectTest() throws ApiException {
        String owner = null;
        String projectName = null;
        V1Project body = null;
        V1Project response = api.projectsV1UpdateProject(owner, projectName, body);

        // TODO: test validations
    }
    
    /**
     * Update project settings
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void projectsV1UpdateProjectSettingsTest() throws ApiException {
        String owner = null;
        String project = null;
        V1ProjectSettings body = null;
        V1ProjectSettings response = api.projectsV1UpdateProjectSettings(owner, project, body);

        // TODO: test validations
    }
    
    /**
     * Update project teams
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void projectsV1UpdateProjectTeamsTest() throws ApiException {
        String owner = null;
        String project = null;
        V1ProjectTeams body = null;
        V1ProjectTeams response = api.projectsV1UpdateProjectTeams(owner, project, body);

        // TODO: test validations
    }
    
    /**
     * Upload artifact to a store via project access
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void uploadProjectArtifactTest() throws ApiException {
        String owner = null;
        String project = null;
        String uuid = null;
        File uploadfile = null;
        String path = null;
        Boolean overwrite = null;
        api.uploadProjectArtifact(owner, project, uuid, uploadfile, path, overwrite);

        // TODO: test validations
    }
    
}
