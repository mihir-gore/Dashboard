import {useState} from "react";
import {useDashboard} from "../context/DashboardContext.jsx";

function getActiveWidgets(categories){
    const result={};
    categories.forEach((category)=>{
        category.widgets.forEach((widget)=>{
            result[widget.id]=widget.active;
        })
    })
    return result;
}

function WidgetPanel({onStartCategoryId,onClose}){
    const {categories,activateWidgets,addWidget}=useDashboard();
    const [tabId,setTabId]=useState(onStartCategoryId);
    const [draft,setDraft]=useState(getActiveWidgets(categories));
    const [newName,setNewName]=useState("");
    const [newText,setNewText]=useState("");
    const [error,setError]=useState("");
    const [panelSearch,setPanelSearch] =useState("");
    const query=panelSearch.trim().toLowerCase();

    function handleCheck(widgetId){
        setDraft({...draft,[widgetId]: !draft[widgetId]});
    }

    function handleConfirm(){
        activateWidgets(draft);
        onClose();
    }

    function handleAdd(event){
        event.preventDefault();
        if(newName.trim()==="" || newText.trim()===""){
            setError("Please enter both a widget name and widget text.");
            return;
    }

        const newId=addWidget(tabId,newName.trim(),newText.trim());
        setDraft({...draft,[newId]:true});
        setNewName("");
        setNewText("");
        setError("");
        
    }
    
    const currentCategory = categories.find((category) => category.id === tabId);

    const listItems = [];
    categories.forEach((category) => {
        if (query === "" && category.id !== tabId) {
            return;
        }
        category.widgets.forEach((widget) => {
            if (widget.name.toLowerCase().includes(query)) {
                listItems.push({ widget: widget, categoryLabel: category.tabLabel });
            }
        });
    });

     return (
    <div className="fixed inset-0 z-10 flex justify-end bg-black/40">
      <aside className="flex h-full w-full max-w-md flex-col bg-white shadow-xl">
        <div className="flex items-center justify-between bg-blue-900 px-4 py-3 text-white">
          <h2 className="text-sm font-semibold">Add Widget</h2>
          <button onClick={onClose} aria-label="Close panel">
            ✕
          </button>
        </div>

        <p className="px-4 pt-3 text-sm text-slate-600">
          Personalise your dashboard by adding the following widget
        </p>
         
         <div className="px-4 pt-3">
       <input type="text" value={panelSearch}  placeholder="Search widgets..." className="w-full rounded border border-slate-300 px-3 py-1 text-sm outline-none focus:border-blue-900"
          onChange={(e) => setPanelSearch(e.target.value)}
       />
        </div>

        <div className="mt-3 flex gap-4 border-b border-slate-200 px-4">
          {categories.map((category) => (
            <button key={category.id} onClick={() => setTabId(category.id)} 
            className={'pb-2 text-sm ' + (category.id === tabId ? 'border-b-2 border-blue-900 font-semibold text-blue-900' : 'text-slate-500')}>
              {category.tabLabel}
            </button>
          ))}
        </div>

        <div className="flex-1 overflow-y-auto p-4">
        {
        listItems.length ===0 && (
            <p className="text-sm text-slate-400">
                {query===""?"No widgets in this category yet.": "No widgets matches your search"}
            </p>
        )
        }
        {
            listItems.map(({widget,categoryLabel})=>(
                <label key={widget.id} className="mb-2 flex cursor-pointer items-center gap-3 rounded border border-slate-200 px-3 py-2 text-sm">
                    <input type="checkbox" checked={draft[widget.id]} onChange={()=> handleCheck(widget.id)}/>
                    {widget.name}
                    {query!=="" && ( <span className="ml-auto text-xs text-slate-400">{categoryLabel}</span>)}
                </label>
            ))
        }
    
        </div>

          <form onSubmit={handleAdd} className="border-t border-slate-200 p-4">
          
          <p className="mb-2 text-sm font-semibold text-slate-700">
            Create a new widget in {currentCategory.tabLabel}
          </p>
          <input type="text" value={newName}  placeholder="Widget name" className="mb-2 w-full rounded border border-slate-300 px-3 py-1 text-sm outline-none focus:border-blue-900" 
             onChange={(event) => setNewName(event.target.value)} />

          <input type="text" value={newText}  placeholder="Widget text" className="mb-2 w-full rounded border border-slate-300 px-3 py-1 text-sm outline-none focus:border-blue-900"
             onChange={(event) => setNewText(event.target.value)} />

          {error && <p className="mb-2 text-sm text-red-600">{error}</p>}

          <button type="submit" className="rounded border border-blue-900 px-3 py-1 text-sm text-blue-900 hover:bg-blue-50" >
            Add Widget
          </button>
        </form>

        <div className="flex justify-end gap-2 border-t border-slate-200 p-4">
          
          <button onClick={onClose} className="rounded border border-slate-300 px-4 py-1 text-sm">
            Cancel
          </button>
          <button onClick={handleConfirm} className="rounded bg-blue-900 px-4 py-1 text-sm text-white">
            Confirm
          </button>
        </div>
      </aside>
    </div>
  );

}
export default WidgetPanel;