import { useState, useEffect } from "react"
import { useTaskComplete } from "./UseTaskComplete"

export function useTaskList(){
    const [listTask,setListTask] = useState([])
    const [initial,setInitial] = useState(true)
    const { addTaskComplete } = useTaskComplete()

    useEffect(()=>{
        let list = []
        list = JSON.parse(localStorage.getItem("ListTask"))
        if(!list){
            list = []
        }
        setListTask(list)
        setInitial(false)
    },[])
    useEffect(() => {
        if(!initial){
            localStorage.setItem("ListTask",JSON.stringify(listTask))
        }    
    }, [listTask])

    const addTasks = (newTask) =>{
        const task = {
            ...newTask,
            id:listTask.length
        }
        setListTask(oldList => [...oldList, task])
    }
 
    const deleteTask = (id) => {
        let newList = listTask
        newList = newList.filter(task => task.id != id)
        newList.map((task,index)=>{
            task.id = index
        })
        setListTask(newList)
    }

    const completeTask = (id) => {
        let newList = listTask
        const taskComplete = { 
            ...newList[id],
            complete: Date.now()
        }
        addTaskComplete(taskComplete)
        newList = newList.filter(task => task.id != id)
        newList.map((task,index)=>{
            task.id = index
        })
        setListTask(newList)
    }

    return {list: listTask, addTasks, deleteTask, completeTask}
}