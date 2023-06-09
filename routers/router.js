const express = require("express")
const router = express.Router()
const TaskController = require("../controllers/taskController")


router.get("/", TaskController.MainController)
router.post('/CreateTask', TaskController.CreateTask)
router.get("/CreateTask", TaskController.CreateTaskPage)
router.get('/findAll/tasks', TaskController.FindTaskAll)
router.post("/Delete/task/:id", TaskController.DeleteOneTask)
router.get('/edit/task/:id', TaskController.EditOneTask)
router.post("/update/task/:id", TaskController.UpdateOneTask)
router.post("/toggle/task/:id", TaskController.ToggleOneTask)


module.exports = router
