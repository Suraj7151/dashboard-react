import { tasks } from "../data";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListCheck, faPaperclip, faMessage } from '@fortawesome/free-solid-svg-icons';
import assigned from '../assets/Assigned.png'

const Tasks = () => {

    return (
        <>
            <section className="p-4  bg-white my-6 rounded-xl">
                <div className="flex justify-between items-center px-2">
                    <h2 className="font-semibold text-xl">Tasks</h2>
                    <a href="" className="font-light text-xs">See all</a>
                </div>
                <div className="flex justify-around space-x-2 pt-4">
                    {tasks.map((task)=>(
                        <div key={task.id} className="rounded-xl w-[315px] h-[220px] p-6"
                        style={{ backgroundColor: task.bgColor, color: task.color}}
                        >
                            <div className={`flex justify-between font-semibold text-lg`}
                            style={{ color:task.headingColor}}
                            >
                                <h2>{task.heading}</h2>
                                <FontAwesomeIcon className='h-6 w-6 text-black' icon={task.option} />
                            </div>
                            <div className="py-3 w-[300px]">
                                <p className="text-xs font-normal">
                                    {task.para}
                                </p>
                            </div>

                            <div className="flex items-center space-x-3 pt-0 pb-2">
                                <FontAwesomeIcon icon={faListCheck} />
                                <p>{task.completed}</p>
                            </div>


                            <div className="flex justify-between items-center pt-6">
                                <img src={assigned} alt="" />
                                <div className="flex justify-center items-center space-x-4">
                                    <div className="flex items-center space-x-1">
                                        <FontAwesomeIcon className='' icon={faMessage} />
                                        <p>3</p>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                        <FontAwesomeIcon className='' icon={faPaperclip} />
                                        <p>3</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </section>
        </>
    );
}
export default Tasks