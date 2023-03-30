const {DataTypes} = require("sequelize")
const conn = require("../config/conection")

const Task = conn.define("Task",{
    task:{
       type: DataTypes.STRING,
       require:true
    },
    description:{
        type: DataTypes.STRING,
        require:true
    },
    done:{
        type:DataTypes.BOOLEAN,
    }
})



module.exports = Task