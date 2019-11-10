import { addNewTask, updateTask } from "./server";

(async function serverSpec() {
  await addNewTask({
    name: "My test task from node server",
    id: "12346"
  });

  await updateTask({
    id:"12346",
    name: "Task has been updated"
  })
})()
