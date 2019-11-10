export const REQUEST_TASK_CREATION = 'REQUEST_TASK_CREATION';
export const CREATE_TASK = 'CREATE_TASK';

export const requestTaskCreation = (groupID) => ({
    type: REQUEST_TASK_CREATION,
    groupID
});

export const createTask = (taskId, groupID, ownerID) => ({
    type: CREATE_TASK,
    taskId,
    groupID,
    ownerID
});