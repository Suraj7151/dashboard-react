// import rectangle from '../assets/Rectangle 5973.png'
import { sellers } from '../data';
const Seller = () => {

    return(
        <>
            <section className="w-[350px] bg-white p-4 rounded-xl -mx-2">
                <div className="flex justify-between">
                    <h2>Best Seller</h2>
                    <a href="">See all</a>
                </div>

                <ul>
                    {sellers.map((seller)=>(
                        <li key={seller.id} className="flex justify-between pt-3">
                        <img src={seller.image} alt="" className='w-[70px] h-14'/>
                        <div className='flex flex-col justify-center items-start space-y-2'>
                            <p className='font-medium text-[13px]'>{seller.name}</p>
                            <p className='text-[9px] font-normal'>{seller.para}</p>
                        </div>

                        <div className='flex flex-col space-y-2'>
                            <p className='text-[16px] text-[#FF4329] font-semibold'>{seller.amount}</p>
                            <p className='font-light text-[10px]'>{seller.duration}</p>
                        </div>
                    </li>
                    ))}
                </ul>

            </section>
        </>
    );
}
export default Seller