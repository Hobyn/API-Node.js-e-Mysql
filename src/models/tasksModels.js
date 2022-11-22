const connection = require("./connection.js");

const getAll = async () => {
  const [tasks] = await connection.execute("SELECT* FROM tasks");
  return tasks;
};

const createTask = async(task) => {
  const { title } = task;

  const dataUTC = new Date(Date.now()).toUTCString();

  const query = 'INSERT INTO tasks(title,status, created_at) VALUES (?,?,?)';

  const [createdTask] = await connection.execute(query,[title, 'pendente', dataUTC ]);

  return {insertId: createdTask.insertId};
};

const deleteTask = async (id) => {
    const removeTask = await connection.execute('DELETE FROM tasks WHERE id = ?', [id]);
    return removeTask;
}

const updateTask = async (id, task) => {

    const {title, status} = task;
    const[updateTask] = await connection.execute('UPDATE tasks SET title =?, status = ? WHERE ID = ?', [title, status, id]);
    return updateTask;
}

module.exports = {
  getAll,
  createTask,
  deleteTask,
  updateTask
};
