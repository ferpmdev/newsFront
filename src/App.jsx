import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ModNews1 } from './components/ModNews1/ModNews1';
import { Dashboard } from './components/Dashboard/Dashboard';
import { Alert } from './components/Alert/Alert';
import './App.css'

function App() {
  const [showAlert, setShowAlert] = useState(false)

  const handleAlert = () => {
    setShowAlert(!showAlert)
  }

  const { notes } = useSelector((state) => state.news)
  console.log(notes)

  return (
    <>

        <div className='parent' >
          {showAlert && <Alert />}
          <h1>news</h1>
          <main className="container">
            {
              notes && notes.map(item => (
                <ModNews1 key={item.id} title={item.title} summary={item.summary} />
              ))
            }
          </main>
          <nav className='sb'>
            <Dashboard content={'+'} showAlert={showAlert} handleAlert={handleAlert} />
            <Dashboard content={'edit'} showAlert={showAlert} handleAlert={handleAlert} />
          </nav>
        </div>
    </>
  )
}

export default App
