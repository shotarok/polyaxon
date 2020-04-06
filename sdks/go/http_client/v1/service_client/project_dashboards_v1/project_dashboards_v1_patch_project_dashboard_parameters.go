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

// Code generated by go-swagger; DO NOT EDIT.

package project_dashboards_v1

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"context"
	"net/http"
	"time"

	"github.com/go-openapi/errors"
	"github.com/go-openapi/runtime"
	cr "github.com/go-openapi/runtime/client"
	"github.com/go-openapi/strfmt"

	"github.com/polyaxon/polyaxon/sdks/go/http_client/v1/service_model"
)

// NewProjectDashboardsV1PatchProjectDashboardParams creates a new ProjectDashboardsV1PatchProjectDashboardParams object
// with the default values initialized.
func NewProjectDashboardsV1PatchProjectDashboardParams() *ProjectDashboardsV1PatchProjectDashboardParams {
	var ()
	return &ProjectDashboardsV1PatchProjectDashboardParams{

		timeout: cr.DefaultTimeout,
	}
}

// NewProjectDashboardsV1PatchProjectDashboardParamsWithTimeout creates a new ProjectDashboardsV1PatchProjectDashboardParams object
// with the default values initialized, and the ability to set a timeout on a request
func NewProjectDashboardsV1PatchProjectDashboardParamsWithTimeout(timeout time.Duration) *ProjectDashboardsV1PatchProjectDashboardParams {
	var ()
	return &ProjectDashboardsV1PatchProjectDashboardParams{

		timeout: timeout,
	}
}

// NewProjectDashboardsV1PatchProjectDashboardParamsWithContext creates a new ProjectDashboardsV1PatchProjectDashboardParams object
// with the default values initialized, and the ability to set a context for a request
func NewProjectDashboardsV1PatchProjectDashboardParamsWithContext(ctx context.Context) *ProjectDashboardsV1PatchProjectDashboardParams {
	var ()
	return &ProjectDashboardsV1PatchProjectDashboardParams{

		Context: ctx,
	}
}

// NewProjectDashboardsV1PatchProjectDashboardParamsWithHTTPClient creates a new ProjectDashboardsV1PatchProjectDashboardParams object
// with the default values initialized, and the ability to set a custom HTTPClient for a request
func NewProjectDashboardsV1PatchProjectDashboardParamsWithHTTPClient(client *http.Client) *ProjectDashboardsV1PatchProjectDashboardParams {
	var ()
	return &ProjectDashboardsV1PatchProjectDashboardParams{
		HTTPClient: client,
	}
}

/*ProjectDashboardsV1PatchProjectDashboardParams contains all the parameters to send to the API endpoint
for the project dashboards v1 patch project dashboard operation typically these are written to a http.Request
*/
type ProjectDashboardsV1PatchProjectDashboardParams struct {

	/*Body
	  Dashboard body

	*/
	Body *service_model.V1Dashboard
	/*DashboardUUID
	  UUID

	*/
	DashboardUUID string
	/*Owner
	  Owner of the namespace

	*/
	Owner string
	/*Project
	  Project under namesapce

	*/
	Project string

	timeout    time.Duration
	Context    context.Context
	HTTPClient *http.Client
}

// WithTimeout adds the timeout to the project dashboards v1 patch project dashboard params
func (o *ProjectDashboardsV1PatchProjectDashboardParams) WithTimeout(timeout time.Duration) *ProjectDashboardsV1PatchProjectDashboardParams {
	o.SetTimeout(timeout)
	return o
}

// SetTimeout adds the timeout to the project dashboards v1 patch project dashboard params
func (o *ProjectDashboardsV1PatchProjectDashboardParams) SetTimeout(timeout time.Duration) {
	o.timeout = timeout
}

// WithContext adds the context to the project dashboards v1 patch project dashboard params
func (o *ProjectDashboardsV1PatchProjectDashboardParams) WithContext(ctx context.Context) *ProjectDashboardsV1PatchProjectDashboardParams {
	o.SetContext(ctx)
	return o
}

// SetContext adds the context to the project dashboards v1 patch project dashboard params
func (o *ProjectDashboardsV1PatchProjectDashboardParams) SetContext(ctx context.Context) {
	o.Context = ctx
}

// WithHTTPClient adds the HTTPClient to the project dashboards v1 patch project dashboard params
func (o *ProjectDashboardsV1PatchProjectDashboardParams) WithHTTPClient(client *http.Client) *ProjectDashboardsV1PatchProjectDashboardParams {
	o.SetHTTPClient(client)
	return o
}

// SetHTTPClient adds the HTTPClient to the project dashboards v1 patch project dashboard params
func (o *ProjectDashboardsV1PatchProjectDashboardParams) SetHTTPClient(client *http.Client) {
	o.HTTPClient = client
}

// WithBody adds the body to the project dashboards v1 patch project dashboard params
func (o *ProjectDashboardsV1PatchProjectDashboardParams) WithBody(body *service_model.V1Dashboard) *ProjectDashboardsV1PatchProjectDashboardParams {
	o.SetBody(body)
	return o
}

// SetBody adds the body to the project dashboards v1 patch project dashboard params
func (o *ProjectDashboardsV1PatchProjectDashboardParams) SetBody(body *service_model.V1Dashboard) {
	o.Body = body
}

// WithDashboardUUID adds the dashboardUUID to the project dashboards v1 patch project dashboard params
func (o *ProjectDashboardsV1PatchProjectDashboardParams) WithDashboardUUID(dashboardUUID string) *ProjectDashboardsV1PatchProjectDashboardParams {
	o.SetDashboardUUID(dashboardUUID)
	return o
}

// SetDashboardUUID adds the dashboardUuid to the project dashboards v1 patch project dashboard params
func (o *ProjectDashboardsV1PatchProjectDashboardParams) SetDashboardUUID(dashboardUUID string) {
	o.DashboardUUID = dashboardUUID
}

// WithOwner adds the owner to the project dashboards v1 patch project dashboard params
func (o *ProjectDashboardsV1PatchProjectDashboardParams) WithOwner(owner string) *ProjectDashboardsV1PatchProjectDashboardParams {
	o.SetOwner(owner)
	return o
}

// SetOwner adds the owner to the project dashboards v1 patch project dashboard params
func (o *ProjectDashboardsV1PatchProjectDashboardParams) SetOwner(owner string) {
	o.Owner = owner
}

// WithProject adds the project to the project dashboards v1 patch project dashboard params
func (o *ProjectDashboardsV1PatchProjectDashboardParams) WithProject(project string) *ProjectDashboardsV1PatchProjectDashboardParams {
	o.SetProject(project)
	return o
}

// SetProject adds the project to the project dashboards v1 patch project dashboard params
func (o *ProjectDashboardsV1PatchProjectDashboardParams) SetProject(project string) {
	o.Project = project
}

// WriteToRequest writes these params to a swagger request
func (o *ProjectDashboardsV1PatchProjectDashboardParams) WriteToRequest(r runtime.ClientRequest, reg strfmt.Registry) error {

	if err := r.SetTimeout(o.timeout); err != nil {
		return err
	}
	var res []error

	if o.Body != nil {
		if err := r.SetBodyParam(o.Body); err != nil {
			return err
		}
	}

	// path param dashboard.uuid
	if err := r.SetPathParam("dashboard.uuid", o.DashboardUUID); err != nil {
		return err
	}

	// path param owner
	if err := r.SetPathParam("owner", o.Owner); err != nil {
		return err
	}

	// path param project
	if err := r.SetPathParam("project", o.Project); err != nil {
		return err
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}