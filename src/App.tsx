import './App.css'
import Parent from './app/Parent'
import ListDemo from './app/ListDemo'
import EffectDemo from './app/EffectDemo'

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
      <div className="card">
        <h2>Task 3: Effect Demo</h2>
        <EffectDemo />
      </div>
    </>
  )
}

export default App
