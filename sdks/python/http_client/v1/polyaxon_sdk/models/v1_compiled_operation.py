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


class V1CompiledOperation(object):
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
        "version": "float",
        "kind": "str",
        "name": "str",
        "tag": "str",
        "description": "str",
        "tags": "list[str]",
        "profile": "str",
        "queue": "str",
        "cache": "V1Cache",
        "schedule": "object",
        "parallel": "object",
        "dependencies": "list[str]",
        "trigger": "V1TriggerPolicy",
        "conditions": "list[object]",
        "skip_on_upstream_skip": "bool",
        "termination": "V1Termination",
        "plugins": "V1Plugins",
        "inputs": "list[V1IO]",
        "outputs": "list[V1IO]",
        "run": "object",
    }

    attribute_map = {
        "version": "version",
        "kind": "kind",
        "name": "name",
        "tag": "tag",
        "description": "description",
        "tags": "tags",
        "profile": "profile",
        "queue": "queue",
        "cache": "cache",
        "schedule": "schedule",
        "parallel": "parallel",
        "dependencies": "dependencies",
        "trigger": "trigger",
        "conditions": "conditions",
        "skip_on_upstream_skip": "skip_on_upstream_skip",
        "termination": "termination",
        "plugins": "plugins",
        "inputs": "inputs",
        "outputs": "outputs",
        "run": "run",
    }

    def __init__(
        self,
        version=None,
        kind=None,
        name=None,
        tag=None,
        description=None,
        tags=None,
        profile=None,
        queue=None,
        cache=None,
        schedule=None,
        parallel=None,
        dependencies=None,
        trigger=None,
        conditions=None,
        skip_on_upstream_skip=None,
        termination=None,
        plugins=None,
        inputs=None,
        outputs=None,
        run=None,
    ):  # noqa: E501
        """V1CompiledOperation - a model defined in Swagger"""  # noqa: E501

        self._version = None
        self._kind = None
        self._name = None
        self._tag = None
        self._description = None
        self._tags = None
        self._profile = None
        self._queue = None
        self._cache = None
        self._schedule = None
        self._parallel = None
        self._dependencies = None
        self._trigger = None
        self._conditions = None
        self._skip_on_upstream_skip = None
        self._termination = None
        self._plugins = None
        self._inputs = None
        self._outputs = None
        self._run = None
        self.discriminator = None

        if version is not None:
            self.version = version
        if kind is not None:
            self.kind = kind
        if name is not None:
            self.name = name
        if tag is not None:
            self.tag = tag
        if description is not None:
            self.description = description
        if tags is not None:
            self.tags = tags
        if profile is not None:
            self.profile = profile
        if queue is not None:
            self.queue = queue
        if cache is not None:
            self.cache = cache
        if schedule is not None:
            self.schedule = schedule
        if parallel is not None:
            self.parallel = parallel
        if dependencies is not None:
            self.dependencies = dependencies
        if trigger is not None:
            self.trigger = trigger
        if conditions is not None:
            self.conditions = conditions
        if skip_on_upstream_skip is not None:
            self.skip_on_upstream_skip = skip_on_upstream_skip
        if termination is not None:
            self.termination = termination
        if plugins is not None:
            self.plugins = plugins
        if inputs is not None:
            self.inputs = inputs
        if outputs is not None:
            self.outputs = outputs
        if run is not None:
            self.run = run

    @property
    def version(self):
        """Gets the version of this V1CompiledOperation.  # noqa: E501


        :return: The version of this V1CompiledOperation.  # noqa: E501
        :rtype: float
        """
        return self._version

    @version.setter
    def version(self, version):
        """Sets the version of this V1CompiledOperation.


        :param version: The version of this V1CompiledOperation.  # noqa: E501
        :type: float
        """

        self._version = version

    @property
    def kind(self):
        """Gets the kind of this V1CompiledOperation.  # noqa: E501


        :return: The kind of this V1CompiledOperation.  # noqa: E501
        :rtype: str
        """
        return self._kind

    @kind.setter
    def kind(self, kind):
        """Sets the kind of this V1CompiledOperation.


        :param kind: The kind of this V1CompiledOperation.  # noqa: E501
        :type: str
        """

        self._kind = kind

    @property
    def name(self):
        """Gets the name of this V1CompiledOperation.  # noqa: E501


        :return: The name of this V1CompiledOperation.  # noqa: E501
        :rtype: str
        """
        return self._name

    @name.setter
    def name(self, name):
        """Sets the name of this V1CompiledOperation.


        :param name: The name of this V1CompiledOperation.  # noqa: E501
        :type: str
        """

        self._name = name

    @property
    def tag(self):
        """Gets the tag of this V1CompiledOperation.  # noqa: E501


        :return: The tag of this V1CompiledOperation.  # noqa: E501
        :rtype: str
        """
        return self._tag

    @tag.setter
    def tag(self, tag):
        """Sets the tag of this V1CompiledOperation.


        :param tag: The tag of this V1CompiledOperation.  # noqa: E501
        :type: str
        """

        self._tag = tag

    @property
    def description(self):
        """Gets the description of this V1CompiledOperation.  # noqa: E501


        :return: The description of this V1CompiledOperation.  # noqa: E501
        :rtype: str
        """
        return self._description

    @description.setter
    def description(self, description):
        """Sets the description of this V1CompiledOperation.


        :param description: The description of this V1CompiledOperation.  # noqa: E501
        :type: str
        """

        self._description = description

    @property
    def tags(self):
        """Gets the tags of this V1CompiledOperation.  # noqa: E501


        :return: The tags of this V1CompiledOperation.  # noqa: E501
        :rtype: list[str]
        """
        return self._tags

    @tags.setter
    def tags(self, tags):
        """Sets the tags of this V1CompiledOperation.


        :param tags: The tags of this V1CompiledOperation.  # noqa: E501
        :type: list[str]
        """

        self._tags = tags

    @property
    def profile(self):
        """Gets the profile of this V1CompiledOperation.  # noqa: E501


        :return: The profile of this V1CompiledOperation.  # noqa: E501
        :rtype: str
        """
        return self._profile

    @profile.setter
    def profile(self, profile):
        """Sets the profile of this V1CompiledOperation.


        :param profile: The profile of this V1CompiledOperation.  # noqa: E501
        :type: str
        """

        self._profile = profile

    @property
    def queue(self):
        """Gets the queue of this V1CompiledOperation.  # noqa: E501


        :return: The queue of this V1CompiledOperation.  # noqa: E501
        :rtype: str
        """
        return self._queue

    @queue.setter
    def queue(self, queue):
        """Sets the queue of this V1CompiledOperation.


        :param queue: The queue of this V1CompiledOperation.  # noqa: E501
        :type: str
        """

        self._queue = queue

    @property
    def cache(self):
        """Gets the cache of this V1CompiledOperation.  # noqa: E501


        :return: The cache of this V1CompiledOperation.  # noqa: E501
        :rtype: V1Cache
        """
        return self._cache

    @cache.setter
    def cache(self, cache):
        """Sets the cache of this V1CompiledOperation.


        :param cache: The cache of this V1CompiledOperation.  # noqa: E501
        :type: V1Cache
        """

        self._cache = cache

    @property
    def schedule(self):
        """Gets the schedule of this V1CompiledOperation.  # noqa: E501


        :return: The schedule of this V1CompiledOperation.  # noqa: E501
        :rtype: object
        """
        return self._schedule

    @schedule.setter
    def schedule(self, schedule):
        """Sets the schedule of this V1CompiledOperation.


        :param schedule: The schedule of this V1CompiledOperation.  # noqa: E501
        :type: object
        """

        self._schedule = schedule

    @property
    def parallel(self):
        """Gets the parallel of this V1CompiledOperation.  # noqa: E501


        :return: The parallel of this V1CompiledOperation.  # noqa: E501
        :rtype: object
        """
        return self._parallel

    @parallel.setter
    def parallel(self, parallel):
        """Sets the parallel of this V1CompiledOperation.


        :param parallel: The parallel of this V1CompiledOperation.  # noqa: E501
        :type: object
        """

        self._parallel = parallel

    @property
    def dependencies(self):
        """Gets the dependencies of this V1CompiledOperation.  # noqa: E501


        :return: The dependencies of this V1CompiledOperation.  # noqa: E501
        :rtype: list[str]
        """
        return self._dependencies

    @dependencies.setter
    def dependencies(self, dependencies):
        """Sets the dependencies of this V1CompiledOperation.


        :param dependencies: The dependencies of this V1CompiledOperation.  # noqa: E501
        :type: list[str]
        """

        self._dependencies = dependencies

    @property
    def trigger(self):
        """Gets the trigger of this V1CompiledOperation.  # noqa: E501


        :return: The trigger of this V1CompiledOperation.  # noqa: E501
        :rtype: V1TriggerPolicy
        """
        return self._trigger

    @trigger.setter
    def trigger(self, trigger):
        """Sets the trigger of this V1CompiledOperation.


        :param trigger: The trigger of this V1CompiledOperation.  # noqa: E501
        :type: V1TriggerPolicy
        """

        self._trigger = trigger

    @property
    def conditions(self):
        """Gets the conditions of this V1CompiledOperation.  # noqa: E501


        :return: The conditions of this V1CompiledOperation.  # noqa: E501
        :rtype: list[object]
        """
        return self._conditions

    @conditions.setter
    def conditions(self, conditions):
        """Sets the conditions of this V1CompiledOperation.


        :param conditions: The conditions of this V1CompiledOperation.  # noqa: E501
        :type: list[object]
        """

        self._conditions = conditions

    @property
    def skip_on_upstream_skip(self):
        """Gets the skip_on_upstream_skip of this V1CompiledOperation.  # noqa: E501


        :return: The skip_on_upstream_skip of this V1CompiledOperation.  # noqa: E501
        :rtype: bool
        """
        return self._skip_on_upstream_skip

    @skip_on_upstream_skip.setter
    def skip_on_upstream_skip(self, skip_on_upstream_skip):
        """Sets the skip_on_upstream_skip of this V1CompiledOperation.


        :param skip_on_upstream_skip: The skip_on_upstream_skip of this V1CompiledOperation.  # noqa: E501
        :type: bool
        """

        self._skip_on_upstream_skip = skip_on_upstream_skip

    @property
    def termination(self):
        """Gets the termination of this V1CompiledOperation.  # noqa: E501


        :return: The termination of this V1CompiledOperation.  # noqa: E501
        :rtype: V1Termination
        """
        return self._termination

    @termination.setter
    def termination(self, termination):
        """Sets the termination of this V1CompiledOperation.


        :param termination: The termination of this V1CompiledOperation.  # noqa: E501
        :type: V1Termination
        """

        self._termination = termination

    @property
    def plugins(self):
        """Gets the plugins of this V1CompiledOperation.  # noqa: E501


        :return: The plugins of this V1CompiledOperation.  # noqa: E501
        :rtype: V1Plugins
        """
        return self._plugins

    @plugins.setter
    def plugins(self, plugins):
        """Sets the plugins of this V1CompiledOperation.


        :param plugins: The plugins of this V1CompiledOperation.  # noqa: E501
        :type: V1Plugins
        """

        self._plugins = plugins

    @property
    def inputs(self):
        """Gets the inputs of this V1CompiledOperation.  # noqa: E501


        :return: The inputs of this V1CompiledOperation.  # noqa: E501
        :rtype: list[V1IO]
        """
        return self._inputs

    @inputs.setter
    def inputs(self, inputs):
        """Sets the inputs of this V1CompiledOperation.


        :param inputs: The inputs of this V1CompiledOperation.  # noqa: E501
        :type: list[V1IO]
        """

        self._inputs = inputs

    @property
    def outputs(self):
        """Gets the outputs of this V1CompiledOperation.  # noqa: E501


        :return: The outputs of this V1CompiledOperation.  # noqa: E501
        :rtype: list[V1IO]
        """
        return self._outputs

    @outputs.setter
    def outputs(self, outputs):
        """Sets the outputs of this V1CompiledOperation.


        :param outputs: The outputs of this V1CompiledOperation.  # noqa: E501
        :type: list[V1IO]
        """

        self._outputs = outputs

    @property
    def run(self):
        """Gets the run of this V1CompiledOperation.  # noqa: E501


        :return: The run of this V1CompiledOperation.  # noqa: E501
        :rtype: object
        """
        return self._run

    @run.setter
    def run(self, run):
        """Sets the run of this V1CompiledOperation.


        :param run: The run of this V1CompiledOperation.  # noqa: E501
        :type: object
        """

        self._run = run

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
        if issubclass(V1CompiledOperation, dict):
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
        if not isinstance(other, V1CompiledOperation):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
