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
import io.swagger.client.model.V1ConnectionKind;
import io.swagger.client.model.V1K8sResourceSchema;
import java.io.IOException;

/**
 * V1ConnectionType
 */

public class V1ConnectionType {
  @SerializedName("name")
  private String name = null;

  @SerializedName("kind")
  private V1ConnectionKind kind = null;

  @SerializedName("schema")
  private Object schema = null;

  @SerializedName("secret")
  private V1K8sResourceSchema secret = null;

  @SerializedName("config_map")
  private V1K8sResourceSchema configMap = null;

  public V1ConnectionType name(String name) {
    this.name = name;
    return this;
  }

   /**
   * Get name
   * @return name
  **/
  @ApiModelProperty(value = "")
  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public V1ConnectionType kind(V1ConnectionKind kind) {
    this.kind = kind;
    return this;
  }

   /**
   * Get kind
   * @return kind
  **/
  @ApiModelProperty(value = "")
  public V1ConnectionKind getKind() {
    return kind;
  }

  public void setKind(V1ConnectionKind kind) {
    this.kind = kind;
  }

  public V1ConnectionType schema(Object schema) {
    this.schema = schema;
    return this;
  }

   /**
   * Get schema
   * @return schema
  **/
  @ApiModelProperty(value = "")
  public Object getSchema() {
    return schema;
  }

  public void setSchema(Object schema) {
    this.schema = schema;
  }

  public V1ConnectionType secret(V1K8sResourceSchema secret) {
    this.secret = secret;
    return this;
  }

   /**
   * Get secret
   * @return secret
  **/
  @ApiModelProperty(value = "")
  public V1K8sResourceSchema getSecret() {
    return secret;
  }

  public void setSecret(V1K8sResourceSchema secret) {
    this.secret = secret;
  }

  public V1ConnectionType configMap(V1K8sResourceSchema configMap) {
    this.configMap = configMap;
    return this;
  }

   /**
   * Get configMap
   * @return configMap
  **/
  @ApiModelProperty(value = "")
  public V1K8sResourceSchema getConfigMap() {
    return configMap;
  }

  public void setConfigMap(V1K8sResourceSchema configMap) {
    this.configMap = configMap;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    V1ConnectionType v1ConnectionType = (V1ConnectionType) o;
    return Objects.equals(this.name, v1ConnectionType.name) &&
        Objects.equals(this.kind, v1ConnectionType.kind) &&
        Objects.equals(this.schema, v1ConnectionType.schema) &&
        Objects.equals(this.secret, v1ConnectionType.secret) &&
        Objects.equals(this.configMap, v1ConnectionType.configMap);
  }

  @Override
  public int hashCode() {
    return Objects.hash(name, kind, schema, secret, configMap);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class V1ConnectionType {\n");
    
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    kind: ").append(toIndentedString(kind)).append("\n");
    sb.append("    schema: ").append(toIndentedString(schema)).append("\n");
    sb.append("    secret: ").append(toIndentedString(secret)).append("\n");
    sb.append("    configMap: ").append(toIndentedString(configMap)).append("\n");
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

