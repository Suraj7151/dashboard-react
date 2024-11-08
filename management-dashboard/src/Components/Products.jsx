import { products } from "../data";
const Products = () => {

    return(
        <>
            <section className="p-6 max-h-[330px] bg-white rounded-xl">
                <div className="flex justify-between items-center pb-6">
                    <h1 className="font-semibold text-xl">Top Products</h1>
                    <a href="" className="font-light text-xs">See all</a>
                </div>

                <table className="table-auto w-full ">
                    <thead>
                        <tr className=" text-left text-[#858585] font-semibold text-[12px]">
                            <th className="p-2">#</th>
                            <th className="p-2">IMAGE</th>
                            <th className="p-2">PRODUCT NAME</th>
                            <th className="p-2">SOCIAL PLATFORM</th>
                            <th className="p-2">ORDER TIME</th>
                            <th className="p-2">VIEWS</th>
                            <th className="p-2">STATUS</th>
                        </tr>
                    </thead>

                    <tbody>
                        {products.map((product, index)=>(
                            <tr key={product.id} className="border-2 border-grey border-t-0 border-l-0 border-r-0 pb-10">
                                <td className="p-2 py-5">{index+1}</td>
                                <td className="items-center"><img src={product.image} alt="" /></td>
                                <td className="p-2 font-medium text-sm">{product.name}</td>
                                <td className="p-2"><img src={product.social} alt="" /></td>
                                <td className="p-2 text-xs text-[#6A6A6A]">{product.orderTime}</td>
                                <td className="p-2 font-semibold text-sm">{product.views}</td>
                                <td className="p-2 font-medium text-sm" style={{color: product.statusColor}}>{product.status}</td>
                            </tr>
                            
                        ))}
                        
                    </tbody>
                    
                </table>
            </section>
        </>
    );
}

export default Products