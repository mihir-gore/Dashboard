import { useDashboard } from "../context/DashboardContext";

function Category({category,onAddClick}){
    
    const activeWidgets=category.widgets.filter((widget)=>widget.active);
    const {toggleWidget}=useDashboard();
    return(
        <section className="mb-6">
            <h2 className="mb-2 text-sm font-bold text-slate-800">{category.name}</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                {activeWidgets.map((widget)=>(
                    <div key={widget.id} className="relative min-h-32 rounded-lg bg-white p-4 shadow-sm">
                        <button onClick={()=>toggleWidget(category.id,widget.id)} aria-label={'Remove ' + widget.name} className="absolute right-2 top-2 text-slate-400 hover:text-red-600">  
                            ✕
                        </button>
                        <h3 className="pr-6 text-sm font-semibold text-slate-800 wrap-break-word">{widget.name}</h3>
                        <p className="mt-2 text-sm text-slate-600 wrap-break-word">{widget.text}</p>                  
                    </div>
                ))}
                <button onClick={()=>onAddClick(category.id)} className="flex min-h-32 items-center justify-center rounded-lg border-2 border-dashed border-slate-300 bg-slate-50 text-sm text-slate-500 hover:border-blue-900 hover:text-blue-900">
                 Add Widget +
                </button>
            </div>
        </section>
    )
}

export default Category;