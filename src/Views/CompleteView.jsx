import { useTaskComplete } from "../Hooks/UseTaskComplete"
import  CompleteList from "../Components/CompleteTask"

function CompleteView(){
    const { complete, deleteTaskComplete } = useTaskComplete()
    const hasTask = complete?.length > 0
    return(
        <>
            <div className="container">
                <h2>Tareas completadas ✅</h2>    
            </div>
            <div className="container">
            {
            hasTask
            ? complete.map(task => (
                <CompleteList key={task.id} data={{task,deleteTaskComplete}}/>
            ))
            :<p>No hay tareas completadas 🤔🤔</p> 
            }
            </div>
        </>
    )
}

export default CompleteView