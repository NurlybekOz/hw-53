import './Task.css';
interface Props {
    task: string;
    DeleteTaskBtn: React.MouseEventHandler;
}
const Task: React.FC<Props> = ({task, DeleteTaskBtn}) => {
     return(
         <>
             <div className="task">
                 <span>{task}</span>
                 <button onClick={DeleteTaskBtn}>Delete</button>
             </div>

         </>
     )

}
export default Task;