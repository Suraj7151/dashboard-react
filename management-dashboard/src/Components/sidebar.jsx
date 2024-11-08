import logo from '../assets/logoipsum-225 1.png'
import {links} from '../data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Sidebar = () =>{

    return(
        <>
            <aside className='bg-[#FFFFFF] min-w-28 flex flex-col justify-normal items-center space-y-14 h-screen border-[#F3F3F3] border-2 border-t-0 border-b-0'>
                <div className='pt-10'>
                    <img src={logo} alt="" className='w-12 h-12'/>
                </div>
                <div>
                    <ul className='flex flex-col items-center  gap-10'>
                        {links.map((link)=>(
                            <li key={link.id} className='text-[#ACACAC]'>
                                <img src={link.icon} alt="" />
                                <p className=''><FontAwesomeIcon icon={link.icon} className='w-[21px] h-[21px] cursor-pointer'/></p>
                            </li>
                        ))}
                    </ul>
                </div>
            </aside>
        </>
    );
}
export default Sidebar