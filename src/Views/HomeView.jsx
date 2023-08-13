import NewTask from '../Components/NewTask'
import ListTask from '../Components/Task'
import '../App.css'
import { useTaskList } from '../Hooks/UseTaskList'

function HomeView(){
    const { list, addTasks, deleteTask, completeTask } = useTaskList()
    return (
        <main>
            <NewTask addTasks={addTasks}/>
            <div className='container'>
                <h2>Tareas Pendientes ⏱</h2>
            </div>
            <div className='container'>
                <ListTask data={{list,deleteTask,completeTask}} />
            </div>
        </main>
    )
}

export default HomeView