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


package io.swagger.client.model;

import java.util.Objects;
import java.util.Arrays;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import io.swagger.client.model.V1OptimizationMetric;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * V1Bayes
 */

public class V1Bayes {
  @SerializedName("kind")
  private String kind = "bayes";

  @SerializedName("params")
  private Map<String, Object> params = null;

  @SerializedName("num_initial_runs")
  private Integer numInitialRuns = null;

  @SerializedName("num_iterations")
  private Integer numIterations = null;

  @SerializedName("utility_function")
  private Object utilityFunction = null;

  @SerializedName("metric")
  private V1OptimizationMetric metric = null;

  @SerializedName("seed")
  private Integer seed = null;

  @SerializedName("concurrency")
  private Integer concurrency = null;

  @SerializedName("early_stopping")
  private List<Object> earlyStopping = null;

  public V1Bayes kind(String kind) {
    this.kind = kind;
    return this;
  }

   /**
   * Get kind
   * @return kind
  **/
  @ApiModelProperty(value = "")
  public String getKind() {
    return kind;
  }

  public void setKind(String kind) {
    this.kind = kind;
  }

  public V1Bayes params(Map<String, Object> params) {
    this.params = params;
    return this;
  }

  public V1Bayes putParamsItem(String key, Object paramsItem) {
    if (this.params == null) {
      this.params = new HashMap<String, Object>();
    }
    this.params.put(key, paramsItem);
    return this;
  }

   /**
   * Get params
   * @return params
  **/
  @ApiModelProperty(value = "")
  public Map<String, Object> getParams() {
    return params;
  }

  public void setParams(Map<String, Object> params) {
    this.params = params;
  }

  public V1Bayes numInitialRuns(Integer numInitialRuns) {
    this.numInitialRuns = numInitialRuns;
    return this;
  }

   /**
   * Get numInitialRuns
   * @return numInitialRuns
  **/
  @ApiModelProperty(value = "")
  public Integer getNumInitialRuns() {
    return numInitialRuns;
  }

  public void setNumInitialRuns(Integer numInitialRuns) {
    this.numInitialRuns = numInitialRuns;
  }

  public V1Bayes numIterations(Integer numIterations) {
    this.numIterations = numIterations;
    return this;
  }

   /**
   * Get numIterations
   * @return numIterations
  **/
  @ApiModelProperty(value = "")
  public Integer getNumIterations() {
    return numIterations;
  }

  public void setNumIterations(Integer numIterations) {
    this.numIterations = numIterations;
  }

  public V1Bayes utilityFunction(Object utilityFunction) {
    this.utilityFunction = utilityFunction;
    return this;
  }

   /**
   * Get utilityFunction
   * @return utilityFunction
  **/
  @ApiModelProperty(value = "")
  public Object getUtilityFunction() {
    return utilityFunction;
  }

  public void setUtilityFunction(Object utilityFunction) {
    this.utilityFunction = utilityFunction;
  }

  public V1Bayes metric(V1OptimizationMetric metric) {
    this.metric = metric;
    return this;
  }

   /**
   * Get metric
   * @return metric
  **/
  @ApiModelProperty(value = "")
  public V1OptimizationMetric getMetric() {
    return metric;
  }

  public void setMetric(V1OptimizationMetric metric) {
    this.metric = metric;
  }

  public V1Bayes seed(Integer seed) {
    this.seed = seed;
    return this;
  }

   /**
   * Get seed
   * @return seed
  **/
  @ApiModelProperty(value = "")
  public Integer getSeed() {
    return seed;
  }

  public void setSeed(Integer seed) {
    this.seed = seed;
  }

  public V1Bayes concurrency(Integer concurrency) {
    this.concurrency = concurrency;
    return this;
  }

   /**
   * Get concurrency
   * @return concurrency
  **/
  @ApiModelProperty(value = "")
  public Integer getConcurrency() {
    return concurrency;
  }

  public void setConcurrency(Integer concurrency) {
    this.concurrency = concurrency;
  }

  public V1Bayes earlyStopping(List<Object> earlyStopping) {
    this.earlyStopping = earlyStopping;
    return this;
  }

  public V1Bayes addEarlyStoppingItem(Object earlyStoppingItem) {
    if (this.earlyStopping == null) {
      this.earlyStopping = new ArrayList<Object>();
    }
    this.earlyStopping.add(earlyStoppingItem);
    return this;
  }

   /**
   * Get earlyStopping
   * @return earlyStopping
  **/
  @ApiModelProperty(value = "")
  public List<Object> getEarlyStopping() {
    return earlyStopping;
  }

  public void setEarlyStopping(List<Object> earlyStopping) {
    this.earlyStopping = earlyStopping;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    V1Bayes v1Bayes = (V1Bayes) o;
    return Objects.equals(this.kind, v1Bayes.kind) &&
        Objects.equals(this.params, v1Bayes.params) &&
        Objects.equals(this.numInitialRuns, v1Bayes.numInitialRuns) &&
        Objects.equals(this.numIterations, v1Bayes.numIterations) &&
        Objects.equals(this.utilityFunction, v1Bayes.utilityFunction) &&
        Objects.equals(this.metric, v1Bayes.metric) &&
        Objects.equals(this.seed, v1Bayes.seed) &&
        Objects.equals(this.concurrency, v1Bayes.concurrency) &&
        Objects.equals(this.earlyStopping, v1Bayes.earlyStopping);
  }

  @Override
  public int hashCode() {
    return Objects.hash(kind, params, numInitialRuns, numIterations, utilityFunction, metric, seed, concurrency, earlyStopping);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class V1Bayes {\n");
    
    sb.append("    kind: ").append(toIndentedString(kind)).append("\n");
    sb.append("    params: ").append(toIndentedString(params)).append("\n");
    sb.append("    numInitialRuns: ").append(toIndentedString(numInitialRuns)).append("\n");
    sb.append("    numIterations: ").append(toIndentedString(numIterations)).append("\n");
    sb.append("    utilityFunction: ").append(toIndentedString(utilityFunction)).append("\n");
    sb.append("    metric: ").append(toIndentedString(metric)).append("\n");
    sb.append("    seed: ").append(toIndentedString(seed)).append("\n");
    sb.append("    concurrency: ").append(toIndentedString(concurrency)).append("\n");
    sb.append("    earlyStopping: ").append(toIndentedString(earlyStopping)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(java.lang.Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }

}

