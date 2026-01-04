import './App.css'
import Parent from './app/Parent'
import Child from './app/Child'

function App() {
  return (
    <>
      <div className="card">
        <Parent />
      </div>
      <div className="card">
        <Child />
      </div>
    </>
  )
}

export default App
