import IconButton from "@mui/material/IconButton"
import DeleteIcon from "@mui/icons-material/Delete";
import { month } from "../Resource/month";

function CompleteList({data}){
    const removeTask = data.deleteTaskComplete
    let task = data.task
    let date = new Date(task.time)
    let time = date.getUTCDate() + "-" + month[date.getUTCMonth()] +"-"+ date.getUTCFullYear() + " " + date.getUTCHours()
    time += date.getUTCMinutes() < 1 ? ":0" + date.getUTCMinutes() : ":" + date.getUTCMinutes()
    return(
        <div className="taskscomplete">
            <div>
                {task.task}
            </div>
            <div className="time">
                {time}
            </div>
            <div>
                <IconButton className="right" aria-label="delete" color="primary" onClick={(e) => removeTask(task.id)}>
                    <DeleteIcon sx={{"&:hover":{color:"red"}}}/>
                </IconButton>
            </div>
        </div>
    )
}

export default CompleteList