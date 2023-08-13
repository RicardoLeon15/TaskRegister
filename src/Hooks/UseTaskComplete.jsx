import { useState, useEffect } from "react";

export function useTaskComplete(){
    const [taskComplete,setTaskComplete] = useState([])
    const [initial, setInitial] = useState(true)

    useEffect(() => {
        let complete = []
        complete = JSON.parse(localStorage.getItem("CompleteTask"))
        if(!complete){
            complete = []
        }
        setTaskComplete(complete)
        setInitial(false)
    },[])

    useEffect(()=>{
        if(!initial){
            localStorage.setItem("CompleteTask",JSON.stringify(taskComplete))
        }
    },[taskComplete])

    const addTaskComplete = (newTask) => {
        let date = new Date(Date.now())
        const task = {
            ...newTask,
            id:taskComplete.length,
            time: date
        }
        setTaskComplete(oldList => [...oldList,task])
    }

    const deleteTaskComplete = (id) => {
        let list = taskComplete
        list = list.filter(task => task.id != id)
        list.map((task,index)=>{
            task.id = index
        })
        setTaskComplete(list)
    }

    return {complete: taskComplete, addTaskComplete, deleteTaskComplete}
}