import Navbar from "./Components/navbar"
import Products from "./Components/Products"
import SalesChart from "./Components/SalesChart"
import Seller from "./Components/Seller"
import Sidebar from "./Components/sidebar"
import StatisticChart from "./Components/StastisticChart"
import Tasks from "./Components/Tasks"


function App() {

  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col flex-grow ">
          <Navbar/>
         <div className="bg-[#F3F3F3] grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_365px] gap-4 ">
          <div className="flex flex-col mx-4 ml-5">
            <StatisticChart/>
            <Tasks/>
            <Products/>
          </div>
          <div className="flex flex-col">
            <SalesChart/>
            <Seller/>
          </div>
         </div>
        </div>
      </div>
      
    </>
  )
}

export default App
