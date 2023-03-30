const TaskModel = require('../model/Task.model')

module.exports = class TaskControllers{
    static MainController(req,res){
        res.render("home")
    }

    static async UpdateOneTask(req,res){
        const id = req.body.id
        const task = req.body.task
        const description = req.body.description
        
        const taskUpdate = {
            task,
            description
        }

        await TaskModel.update(taskUpdate, {raw:true,where:{id:id}})
        res.redirect('/findAll/tasks/')
    }

    static async EditOneTask(req,res){
        const id = req.params.id

        const task = await TaskModel.findOne({raw:true, where:{
            id:id
        }})
        res.render('editTask', {task})
    }

    static async DeleteOneTask(req,res){
        const id = req.params.id
        await TaskModel.destroy({where:{id:id}})
        res.redirect('/findAll/tasks/')
    }

    static async FindTaskAll(req,res){
        const tasksAll = await TaskModel.findAll({raw:true})
        res.render('tasksAll', {tasksAll})
    }

    static async CreateTask(req,res){
        const task = req.body.task
        const description = req.body.description

        const tasksInfo = {
            task,
            description,
        }

        await TaskModel.create(tasksInfo)
        
        res.redirect('/findAll/tasks/')
    }

    static CreateTaskPage(req,res){
        res.render('createTask')
    }
}