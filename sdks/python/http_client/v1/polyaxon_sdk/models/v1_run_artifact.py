#!/usr/bin/python
#
# Copyright 2018-2020 Polyaxon, Inc.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

# coding: utf-8

"""
    Polyaxon SDKs and REST API specification.

    Polyaxon SDKs and REST API specification.  # noqa: E501

    OpenAPI spec version: 1.0.72
    Contact: contact@polyaxon.com
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""


import pprint
import re  # noqa: F401

import six


class V1RunArtifact(object):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    """

    """
    Attributes:
      swagger_types (dict): The key is attribute name
                            and the value is attribute type.
      attribute_map (dict): The key is attribute name
                            and the value is json key in definition.
    """
    swagger_types = {
        "name": "str",
        "state": "str",
        "kind": "V1ArtifactKind",
        "path": "str",
        "connection": "str",
        "summary": "object",
        "is_input": "bool",
    }

    attribute_map = {
        "name": "name",
        "state": "state",
        "kind": "kind",
        "path": "path",
        "connection": "connection",
        "summary": "summary",
        "is_input": "is_input",
    }

    def __init__(
        self,
        name=None,
        state=None,
        kind=None,
        path=None,
        connection=None,
        summary=None,
        is_input=None,
    ):  # noqa: E501
        """V1RunArtifact - a model defined in Swagger"""  # noqa: E501

        self._name = None
        self._state = None
        self._kind = None
        self._path = None
        self._connection = None
        self._summary = None
        self._is_input = None
        self.discriminator = None

        if name is not None:
            self.name = name
        if state is not None:
            self.state = state
        if kind is not None:
            self.kind = kind
        if path is not None:
            self.path = path
        if connection is not None:
            self.connection = connection
        if summary is not None:
            self.summary = summary
        if is_input is not None:
            self.is_input = is_input

    @property
    def name(self):
        """Gets the name of this V1RunArtifact.  # noqa: E501


        :return: The name of this V1RunArtifact.  # noqa: E501
        :rtype: str
        """
        return self._name

    @name.setter
    def name(self, name):
        """Sets the name of this V1RunArtifact.


        :param name: The name of this V1RunArtifact.  # noqa: E501
        :type: str
        """

        self._name = name

    @property
    def state(self):
        """Gets the state of this V1RunArtifact.  # noqa: E501


        :return: The state of this V1RunArtifact.  # noqa: E501
        :rtype: str
        """
        return self._state

    @state.setter
    def state(self, state):
        """Sets the state of this V1RunArtifact.


        :param state: The state of this V1RunArtifact.  # noqa: E501
        :type: str
        """

        self._state = state

    @property
    def kind(self):
        """Gets the kind of this V1RunArtifact.  # noqa: E501


        :return: The kind of this V1RunArtifact.  # noqa: E501
        :rtype: V1ArtifactKind
        """
        return self._kind

    @kind.setter
    def kind(self, kind):
        """Sets the kind of this V1RunArtifact.


        :param kind: The kind of this V1RunArtifact.  # noqa: E501
        :type: V1ArtifactKind
        """

        self._kind = kind

    @property
    def path(self):
        """Gets the path of this V1RunArtifact.  # noqa: E501


        :return: The path of this V1RunArtifact.  # noqa: E501
        :rtype: str
        """
        return self._path

    @path.setter
    def path(self, path):
        """Sets the path of this V1RunArtifact.


        :param path: The path of this V1RunArtifact.  # noqa: E501
        :type: str
        """

        self._path = path

    @property
    def connection(self):
        """Gets the connection of this V1RunArtifact.  # noqa: E501


        :return: The connection of this V1RunArtifact.  # noqa: E501
        :rtype: str
        """
        return self._connection

    @connection.setter
    def connection(self, connection):
        """Sets the connection of this V1RunArtifact.


        :param connection: The connection of this V1RunArtifact.  # noqa: E501
        :type: str
        """

        self._connection = connection

    @property
    def summary(self):
        """Gets the summary of this V1RunArtifact.  # noqa: E501


        :return: The summary of this V1RunArtifact.  # noqa: E501
        :rtype: object
        """
        return self._summary

    @summary.setter
    def summary(self, summary):
        """Sets the summary of this V1RunArtifact.


        :param summary: The summary of this V1RunArtifact.  # noqa: E501
        :type: object
        """

        self._summary = summary

    @property
    def is_input(self):
        """Gets the is_input of this V1RunArtifact.  # noqa: E501


        :return: The is_input of this V1RunArtifact.  # noqa: E501
        :rtype: bool
        """
        return self._is_input

    @is_input.setter
    def is_input(self, is_input):
        """Sets the is_input of this V1RunArtifact.


        :param is_input: The is_input of this V1RunArtifact.  # noqa: E501
        :type: bool
        """

        self._is_input = is_input

    def to_dict(self):
        """Returns the model properties as a dict"""
        result = {}

        for attr, _ in six.iteritems(self.swagger_types):
            value = getattr(self, attr)
            if isinstance(value, list):
                result[attr] = list(
                    map(lambda x: x.to_dict() if hasattr(x, "to_dict") else x, value)
                )
            elif hasattr(value, "to_dict"):
                result[attr] = value.to_dict()
            elif isinstance(value, dict):
                result[attr] = dict(
                    map(
                        lambda item: (item[0], item[1].to_dict())
                        if hasattr(item[1], "to_dict")
                        else item,
                        value.items(),
                    )
                )
            else:
                result[attr] = value
        if issubclass(V1RunArtifact, dict):
            for key, value in self.items():
                result[key] = value

        return result

    def to_str(self):
        """Returns the string representation of the model"""
        return pprint.pformat(self.to_dict())

    def __repr__(self):
        """For `print` and `pprint`"""
        return self.to_str()

    def __eq__(self, other):
        """Returns true if both objects are equal"""
        if not isinstance(other, V1RunArtifact):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
