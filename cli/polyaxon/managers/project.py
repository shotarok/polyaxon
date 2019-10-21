# -*- coding: utf-8 -*-
from __future__ import absolute_import, division, print_function

import sys

from polyaxon_sdk import V1Project

from polyaxon.managers.base import BaseConfigManager
from polyaxon.utils import constants
from polyaxon.utils.formatting import Printer


class ProjectManager(BaseConfigManager):
    """Manages project configuration .polyaxonproject file."""

    IS_GLOBAL = False
    IS_POLYAXON_DIR = True
    CONFIG_FILE_NAME = ".polyaxonproject"
    CONFIG = V1Project

    @classmethod
    def get_config_or_raise(cls):
        project = cls.get_config()
        if not project:
            Printer.print_error(
                "Please initialize your project before uploading any code."
                " {}".format(constants.INIT_COMMAND)
            )
            sys.exit(1)

        return project