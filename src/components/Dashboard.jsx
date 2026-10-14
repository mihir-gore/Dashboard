import {useDashboard} from "../context/DashboardContext"
import Category from "./Category"

function Dashboard(){
    const {categories}=useDashboard();

    return(
        <div className="min-h-screen bg-slate-100">
          <header className=" flex items-center justify-between border-b border-slate-200 bg-white px-6 py-3">
            <p className="text-sm text-slate-500">
                Home &gt; <span className=" font-semibold text-blue-900 ">Dashboard V2</span>
            </p>
            <input type="text" placeholder="Search Here..." className="w-72 rounded border border-slate-300 bg-slate-50 px-3 py-1 text-sm outline-none focus:border-blue-900"/>
          </header>
          <div className="p-6">
            <div className="mb-4 flex items-center justify-between">
                <h1 className="text-lg font-bold text-slate-900"> CNAPP Dashboard</h1>
                <button className="rounded border border-slate-300 bg-white px-3 py-1 text-sm text-slate-700"> 
                     Add Widget +
                    </button>
            </div>
            {categories.map((category)=>(
                <Category key={category.id} category={category}/>
            ))}
          </div>
        </div>
    )
}

export default Dashboard;