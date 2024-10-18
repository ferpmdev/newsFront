import { useContext, useState } from 'react'
import { ModNews1 } from './components/ModNews1/ModNews1';
import { Dashboard } from './components/Dashboard/Dashboard';
import { Alert } from './components/Alert/Alert';
import './App.css'
import { EditContext } from './context/EditContext';

function App() {
  const { initialState } = useContext(EditContext)
  const [showAlert, setShowAlert] = useState(false)
  console.log(initialState)

  const handleAlert = () => {
    setShowAlert(!showAlert)
  }

  return (
    <>

        <div className='parent' >
          {showAlert && <Alert />}
          <h1>news</h1>
          <main className="container">
            {
              initialState && initialState.map(item => (
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
