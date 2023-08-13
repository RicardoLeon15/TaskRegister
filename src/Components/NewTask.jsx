import IconButton from "@mui/material/IconButton"
import AddTaskIcon from '@mui/icons-material/AddTask';
import TextField from '@mui/material/TextField'
import { useState } from "react";
import "../App.css"

function NewTask({addTasks}){
    const [newTask, setNewTask] = useState({task:"",time:0})
    const handleChangeTask = (e) => {
        let update ={task: e.target.value}
        setNewTask(newTask => ({
            ...newTask,
            ...update
        }))
    }
    const handleChangeDate = (e) => {
        let update = {time : e.target.valueAsNumber}
        setNewTask(newTask => ({
            ...newTask,
            ...update
        }))
    }
    const handleClick = () => {
           addTasks(newTask)
           setNewTask({task:"",time:Date.now()})
    }
    return(
        <div className="container">
            <div className="center-2">
                <TextField style={{boxShadow:"0 1px 6px rgb(0 0 0 / 0.2)"}} fullWidth id="outlined-multiline-flexible" label="Nueva Tarea..." multiline maxRows={4} onChange={(e) => handleChangeTask(e)} value={newTask.task}/>
                <label htmlFor="">Fecha limite: </label>
                <input type="datetime-local" name="LimitTime" onChange={(e) => handleChangeDate(e)} valueAsNumber={newTask.time}/>
                <IconButton className="right complete-2" onClick={handleClick}>
                    <AddTaskIcon sx={{fontSize:30}} className="complete"/>
                </IconButton>
            </div>
        </div>
    )
}

export default NewTask