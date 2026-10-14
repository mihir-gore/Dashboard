function Category({category}){
    
    const activeWidgets=category.widgets.filter((widget)=>widget.active);

    return(
        <section className="mb-6">
            <h2 className="mb-2 text-sm font-bold text-slate-800">{category.name}</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                {activeWidgets.map((widget)=>(
                    <div key={widget.id} className="rounded-lg bg-white p-4 shadow-sm">
                        {widget.name}
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Category;