import { useDashboard } from './context/DashboardContext';

function App() {
  const { categories, toggleWidget, addWidget } = useDashboard();

  return (
    <div className="min-h-screen bg-slate-100 p-6">
      <h1 className="text-2xl font-bold text-blue-900">CNAPP Dashboard</h1>
      <button className="mt-3 rounded bg-blue-900 px-3 py-1 text-white" onClick={() => addWidget('ticket', 'Test Widget', 'Test text')}>
        Add Widget to Ticket
      </button>

      {categories.map((category) => (
        <div key={category.id} className="mt-2">
          <h2 className="font-semibold">{category.name}</h2>

          {category.widgets.map((widget) => (
            <p key={widget.id} >
              {widget.name} -[ {widget.active ? 'shown' : 'hidden'} ]
              
              <button className="ml-3 rounded-2xl border px-2 bg-blue-300" onClick={() => toggleWidget(category.id, widget.id)}>
                toggle
              </button>
            </p>
          ))}
        </div>
      ))}
    </div>
  );
}

export default App;