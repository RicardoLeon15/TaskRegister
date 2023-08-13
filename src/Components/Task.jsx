import IconButton from "@mui/material/IconButton"
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from '@mui/icons-material/Check';
import ButtonGroup from "@mui/material/ButtonGroup";
import { month } from "../Resource/month";

function Task({data}){
    const removeTask = data.remove
    const completeTask = data.complete 
    let task = data.task
    let date = new Date(task.time)
    let time = date.getUTCDate() + "-" + month[date.getUTCMonth()] +"-"+ date.getUTCFullYear() + " " + date.getUTCHours()
    time += date.getUTCMinutes() < 1 ? ":0" + date.getUTCMinutes() : ":" + date.getUTCMinutes()
    let late = task.time>Date.now()
    return(
        <div className={late ? "tasks":"taskslate"} id={task.id}>
            <div className="task">
                {task.task}
            </div>
            <div className="time">
                {time}
            </div>
            <div className="buttons">
                <ButtonGroup variant="text" aria-label="text button group">
                    <IconButton aria-label="delete" color="primary" onClick={(e) => removeTask(task.id)}>
                        <DeleteIcon sx={{"&:hover":{color:"red"}}}/>
                    </IconButton>
                    <IconButton aria-label="check" color="primary" onClick={(e) => completeTask(task.id)}>
                        <CheckIcon sx={{"&:hover":{color:"green"}}}/>
                    </IconButton>
                </ButtonGroup>
            </div>
        
        </div>
    )
}

function ListTask({data}){
    let listTask = data.list
    const hasTask = listTask?.length > 0
    const remove = data.deleteTask
    const complete = data.completeTask
    listTask.sort((a,b) => a.time - b.time)
    return(
        <div>
        {
        hasTask
        ? listTask.map(task => (
               <Task key={task.id} data={{task,remove,complete}}/>
           ))
        :<p>No hay tareas pendientes 😃😃</p>
        }
        </div>
    )
}

export default ListTask