import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NewsModule1 } from './components/NewsModule1/NewsModule1';
import './App.css'
import { CreateModal } from './components/CreateModal/CreateModal';
import { useModalStore } from './hooks/useModalStore';
import { EditModal } from './components/EditModal/EditModal';
import { CreateButton } from './components/CreateButton/CreateButton';
import { useArticleStore } from './hooks/useArticleStore';

function App() {
  const [showAlert, setShowAlert] = useState(false)


  const handleStartEditArticle = (article) => {
    console.log(article)
    starEditArticle(article)
  }

  // const {articles} = useSelector((state) => state.article)
  const { openEditModal, openCreateModal } = useModalStore()

  const {starEditArticle, articles } = useArticleStore()

  return (
    <>

        <div className='parent' >
          <CreateModal/>
          <EditModal handleStartEditArticle={handleStartEditArticle}/>
          <hr />
          <h1>Mis noticias</h1>
          <main className="container">
            {
              articles && articles.map(item => (
                <NewsModule1 key={item._id} title={item.title} summary={item.summary} _id={item._id}/>
              ))
            }
          </main>
          {/* <nav className='sb'> */}
            <CreateButton />
          {/* </nav> */}
        </div>
    </>
  )
}

export default App
