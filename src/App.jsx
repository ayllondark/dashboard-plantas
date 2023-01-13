import { useState } from 'react'
import Sidebar from './components/SideBar/Sidebar'
import Body from './components/Body/Body'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <Sidebar />
      <Body />
    </div>
  )
}

export default App
