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

package runs_v1

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
)

// NewGetRunDashboardParams creates a new GetRunDashboardParams object
// with the default values initialized.
func NewGetRunDashboardParams() *GetRunDashboardParams {
	var ()
	return &GetRunDashboardParams{

		timeout: cr.DefaultTimeout,
	}
}

// NewGetRunDashboardParamsWithTimeout creates a new GetRunDashboardParams object
// with the default values initialized, and the ability to set a timeout on a request
func NewGetRunDashboardParamsWithTimeout(timeout time.Duration) *GetRunDashboardParams {
	var ()
	return &GetRunDashboardParams{

		timeout: timeout,
	}
}

// NewGetRunDashboardParamsWithContext creates a new GetRunDashboardParams object
// with the default values initialized, and the ability to set a context for a request
func NewGetRunDashboardParamsWithContext(ctx context.Context) *GetRunDashboardParams {
	var ()
	return &GetRunDashboardParams{

		Context: ctx,
	}
}

// NewGetRunDashboardParamsWithHTTPClient creates a new GetRunDashboardParams object
// with the default values initialized, and the ability to set a custom HTTPClient for a request
func NewGetRunDashboardParamsWithHTTPClient(client *http.Client) *GetRunDashboardParams {
	var ()
	return &GetRunDashboardParams{
		HTTPClient: client,
	}
}

/*GetRunDashboardParams contains all the parameters to send to the API endpoint
for the get run dashboard operation typically these are written to a http.Request
*/
type GetRunDashboardParams struct {

	/*Owner
	  Owner of the namespace

	*/
	Owner string
	/*Project
	  Project

	*/
	Project string
	/*Run
	  Run

	*/
	Run string
	/*UUID
	  Uuid identifier of the entity

	*/
	UUID string

	timeout    time.Duration
	Context    context.Context
	HTTPClient *http.Client
}

// WithTimeout adds the timeout to the get run dashboard params
func (o *GetRunDashboardParams) WithTimeout(timeout time.Duration) *GetRunDashboardParams {
	o.SetTimeout(timeout)
	return o
}

// SetTimeout adds the timeout to the get run dashboard params
func (o *GetRunDashboardParams) SetTimeout(timeout time.Duration) {
	o.timeout = timeout
}

// WithContext adds the context to the get run dashboard params
func (o *GetRunDashboardParams) WithContext(ctx context.Context) *GetRunDashboardParams {
	o.SetContext(ctx)
	return o
}

// SetContext adds the context to the get run dashboard params
func (o *GetRunDashboardParams) SetContext(ctx context.Context) {
	o.Context = ctx
}

// WithHTTPClient adds the HTTPClient to the get run dashboard params
func (o *GetRunDashboardParams) WithHTTPClient(client *http.Client) *GetRunDashboardParams {
	o.SetHTTPClient(client)
	return o
}

// SetHTTPClient adds the HTTPClient to the get run dashboard params
func (o *GetRunDashboardParams) SetHTTPClient(client *http.Client) {
	o.HTTPClient = client
}

// WithOwner adds the owner to the get run dashboard params
func (o *GetRunDashboardParams) WithOwner(owner string) *GetRunDashboardParams {
	o.SetOwner(owner)
	return o
}

// SetOwner adds the owner to the get run dashboard params
func (o *GetRunDashboardParams) SetOwner(owner string) {
	o.Owner = owner
}

// WithProject adds the project to the get run dashboard params
func (o *GetRunDashboardParams) WithProject(project string) *GetRunDashboardParams {
	o.SetProject(project)
	return o
}

// SetProject adds the project to the get run dashboard params
func (o *GetRunDashboardParams) SetProject(project string) {
	o.Project = project
}

// WithRun adds the run to the get run dashboard params
func (o *GetRunDashboardParams) WithRun(run string) *GetRunDashboardParams {
	o.SetRun(run)
	return o
}

// SetRun adds the run to the get run dashboard params
func (o *GetRunDashboardParams) SetRun(run string) {
	o.Run = run
}

// WithUUID adds the uuid to the get run dashboard params
func (o *GetRunDashboardParams) WithUUID(uuid string) *GetRunDashboardParams {
	o.SetUUID(uuid)
	return o
}

// SetUUID adds the uuid to the get run dashboard params
func (o *GetRunDashboardParams) SetUUID(uuid string) {
	o.UUID = uuid
}

// WriteToRequest writes these params to a swagger request
func (o *GetRunDashboardParams) WriteToRequest(r runtime.ClientRequest, reg strfmt.Registry) error {

	if err := r.SetTimeout(o.timeout); err != nil {
		return err
	}
	var res []error

	// path param owner
	if err := r.SetPathParam("owner", o.Owner); err != nil {
		return err
	}

	// path param project
	if err := r.SetPathParam("project", o.Project); err != nil {
		return err
	}

	// path param run
	if err := r.SetPathParam("run", o.Run); err != nil {
		return err
	}

	// path param uuid
	if err := r.SetPathParam("uuid", o.UUID); err != nil {
		return err
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}