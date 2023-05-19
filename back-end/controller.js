const TaskModel = require("./taskModel");

exports.postTask = async (request, response) => {
  try {
    const { text,isDone } = request.body;
    const newTask = await TaskModel.create({
      text: text,
      isDone: isDone,
    });
    return response.status(200).json({
      message: "new task",
      data: newTask,
    });
  } catch (error) {
    return response.status(400).json({ message: error, data: null });
  }
};
