import './AddTaskForm.css';

interface Props {
    addTaskBtn: React.MouseEventHandler;
    onTaskInputChange: React.ChangeEventHandler<HTMLInputElement>;
}
const  AddTaskForm: React.FC<Props> = ({addTaskBtn, onTaskInputChange}) => {
    return(
        <form className="AddTaskForm">
            <input className='inputTask' type="text" onChange={onTaskInputChange}/>
            <button onClick={addTaskBtn} type='button'>Add</button>
        </form>
    )
}
export default AddTaskForm;