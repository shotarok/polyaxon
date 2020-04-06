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


class V1PolyaxonInitContainer(object):
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
        "image": "str",
        "image_tag": "str",
        "image_pull_policy": "str",
        "resources": "V1ResourceRequirements",
    }

    attribute_map = {
        "image": "image",
        "image_tag": "image_tag",
        "image_pull_policy": "image_pull_policy",
        "resources": "resources",
    }

    def __init__(
        self, image=None, image_tag=None, image_pull_policy=None, resources=None
    ):  # noqa: E501
        """V1PolyaxonInitContainer - a model defined in Swagger"""  # noqa: E501

        self._image = None
        self._image_tag = None
        self._image_pull_policy = None
        self._resources = None
        self.discriminator = None

        if image is not None:
            self.image = image
        if image_tag is not None:
            self.image_tag = image_tag
        if image_pull_policy is not None:
            self.image_pull_policy = image_pull_policy
        if resources is not None:
            self.resources = resources

    @property
    def image(self):
        """Gets the image of this V1PolyaxonInitContainer.  # noqa: E501


        :return: The image of this V1PolyaxonInitContainer.  # noqa: E501
        :rtype: str
        """
        return self._image

    @image.setter
    def image(self, image):
        """Sets the image of this V1PolyaxonInitContainer.


        :param image: The image of this V1PolyaxonInitContainer.  # noqa: E501
        :type: str
        """

        self._image = image

    @property
    def image_tag(self):
        """Gets the image_tag of this V1PolyaxonInitContainer.  # noqa: E501


        :return: The image_tag of this V1PolyaxonInitContainer.  # noqa: E501
        :rtype: str
        """
        return self._image_tag

    @image_tag.setter
    def image_tag(self, image_tag):
        """Sets the image_tag of this V1PolyaxonInitContainer.


        :param image_tag: The image_tag of this V1PolyaxonInitContainer.  # noqa: E501
        :type: str
        """

        self._image_tag = image_tag

    @property
    def image_pull_policy(self):
        """Gets the image_pull_policy of this V1PolyaxonInitContainer.  # noqa: E501


        :return: The image_pull_policy of this V1PolyaxonInitContainer.  # noqa: E501
        :rtype: str
        """
        return self._image_pull_policy

    @image_pull_policy.setter
    def image_pull_policy(self, image_pull_policy):
        """Sets the image_pull_policy of this V1PolyaxonInitContainer.


        :param image_pull_policy: The image_pull_policy of this V1PolyaxonInitContainer.  # noqa: E501
        :type: str
        """

        self._image_pull_policy = image_pull_policy

    @property
    def resources(self):
        """Gets the resources of this V1PolyaxonInitContainer.  # noqa: E501


        :return: The resources of this V1PolyaxonInitContainer.  # noqa: E501
        :rtype: V1ResourceRequirements
        """
        return self._resources

    @resources.setter
    def resources(self, resources):
        """Sets the resources of this V1PolyaxonInitContainer.


        :param resources: The resources of this V1PolyaxonInitContainer.  # noqa: E501
        :type: V1ResourceRequirements
        """

        self._resources = resources

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
        if issubclass(V1PolyaxonInitContainer, dict):
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
        if not isinstance(other, V1PolyaxonInitContainer):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
