import search from '../assets/search.png'
import { notifications } from '../data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Navbar = () =>{

    return(
        <>
            <nav className="h-24 pt-6 px-4 flex justify-around border-grey border-2 border-l-0 border-t-0 border-r-0 max-w-[1415px]">
                <div className="bg-[#F3F3F3] relative h-12 rounded-xl w-[88%]">
                    <div className='absolute right-6 top-3 border-[#858585a6] border-l-2 pl-5'><img src={search} alt="" /></div>
                </div>
                <div className='pl-4'>
                    <ul className='flex justify-between items-center space-x-4'>
                        {notifications.map((notification)=>(
                            <li key={notification.id} ><FontAwesomeIcon className='h-6 w-6 text-[grey]' icon={notification.icon} />
                                <img src={notification.icon} alt="" />
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar