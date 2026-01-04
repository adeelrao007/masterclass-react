import './App.css'
import Parent from './app/Parent'
import ListDemo from './app/ListDemo'

function App() {
  return (
    <>
      <div className="card">
        <Parent />
      </div>
      <div className="card">
        <h2>Task 2: List Demo</h2>
        <ListDemo />
      </div>
    </>
  )
}

export default App
