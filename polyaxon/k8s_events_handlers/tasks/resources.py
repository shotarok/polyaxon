from typing import Dict

import workers

from k8s_events_handlers.tasks.logger import logger
from polyaxon.settings import K8SEventsCeleryTasks


@workers.app.task(name=K8SEventsCeleryTasks.K8S_EVENTS_HANDLE_RESOURCES, ignore_result=True)
def k8s_handle_events_resources(payload: Dict, persist: bool) -> None:
    # here we must persist resources if requested
    logger.info('handling events resources with persist:%s', persist)
    logger.info(payload)
