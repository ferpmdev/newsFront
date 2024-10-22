import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NewsModule1 } from './components/NewsModule1/NewsModule1';
import { Button } from './components/Button/Button';
import { Alert } from './components/Alert/Alert';
import './App.css'
import { CreateModal } from './components/CreateModal/CreateModal';
import { useModalStore } from './hooks/useModalStore';
import { EditModal } from './components/EditModal/EditModal';
import { CreateButton } from './components/CreateButton/CreateButton';

function App() {
  const [showAlert, setShowAlert] = useState(false)


  const handleAlert = () => {
    setShowAlert(!showAlert)
  }

  const { notes } = useSelector((state) => state.news)
  const { openEditModal, openCreateModal } = useModalStore()

  console.log(notes)

  return (
    <>

        <div className='parent' >
          <CreateModal/>
          <EditModal/>
          <hr />
          <h1>Mis noticias</h1>
          <main className="container">
            {
              notes && notes.map(item => (
                <NewsModule1 key={item.id} title={item.title} summary={item.summary} />
              ))
            }
          </main>
          <nav className='sb'>
            <CreateButton />
            {/* <Button content={'+'} onClickButton={openCreateModal} /> */}
          </nav>
        </div>
    </>
  )
}

export default App
