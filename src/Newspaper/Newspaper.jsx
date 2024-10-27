import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './newspaper.css'
import { CreateModal } from '../components/Modals/CreateModal/CreateModal';
import { useModalStore } from '../hooks/useModalStore';
import { EditModal } from '../components/Modals/EditModal/EditModal';
import { CreateButton } from '../components/CreateButton/CreateButton';
import { useArticleStore } from '../hooks/useArticleStore';
import { ArticleModule1 } from '../components/ArticleModule1/ArticleModule1';
import { getEnvVariables } from '../helpers/getEnvVariables';
import { Navbar } from '../components/Navbar/Navbar';

export const Newspaper = () => {
  const [showAlert, setShowAlert] = useState(false)

  const handleStartEditArticle = (article) => {
    console.log(article)
    starEditArticle(article)
  }

  const { articles } = useSelector((state) => state.article)
  const { openEditModal, openCreateModal } = useModalStore()
  const { starEditArticle } = useArticleStore()

  return (
    <>
      <div className='parent' >
        <CreateModal />
        <EditModal handleStartEditArticle={handleStartEditArticle} />
        <Navbar />
        <hr />
        <h1 className='pt-serif-bold '>The Last News</h1>
        <hr className='custom-hr' />
        <main className="container">
          {
            articles && articles.map(item => (
              <ArticleModule1 key={item._id} title={item.title} summary={item.summary} _id={item._id} imageUrl={item.imageUrl} />
            ))
          }
        </main>
        <CreateButton />
      </div>
    </>
  )
}