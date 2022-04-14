const baseUrl = "https://623d57ac7efb5abea68cf7da.mockapi.io/api/v1/tasks"

export const createTask = (taskData) => {
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(taskData),
  }).then(response => {
    if (!response.ok) {
      throw new Error('Fail to creat task')
    } 
  });
};

export const fetchTasksList = () => {
  return fetch(baseUrl)
    .then(res => {
      if(res.ok) {
        return res.json()
      }
    })
    .then(tasksList => tasksList);
};

export const updateTask = (taskId, TaskData) => {
  return fetch(`${baseUrl}/${taskId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(TaskData),
  }).then(response => {
    if (!response.ok) {
      throw new Error('Fail to creat task')
    }
  });
};

export const deleteTask = (taskId) => {
  return fetch(`${baseUrl}/${taskId}`, {
    method: "DELETE",
  }).then(response => {
    if (!response.ok) {
      throw new Error('Failed to delete task')
    } 
  });
}