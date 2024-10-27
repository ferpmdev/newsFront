import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import './newspaper.css'
import { CreateModal } from '../components/Modals/CreateModal/CreateModal';
import { useModalStore } from '../hooks/useModalStore';
import { EditModal } from '../components/Modals/EditModal/EditModal';
import { CreateButton } from '../components/CreateButton/CreateButton';
import { useArticleStore } from '../hooks/useArticleStore';
import { ArticleModule1 } from '../components/ArticleModule1/ArticleModule1';
import { Navbar } from '../components/Navbar/Navbar';

export const Newspaper = () => {

  const handleStartEditArticle = (article) => {
    starEditArticle(article)
  }

  const { articles } = useSelector((state) => state.article)
  const { openEditModal, openCreateModal } = useModalStore()
  const { starEditArticle, startLodingsArticles } = useArticleStore()

  useEffect(() => {
    startLodingsArticles()
  }, [])


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
              <ArticleModule1 key={item.id} title={item.title} summary={item.summary} id={item.id} imageUrl={item.imageUrl} />
            ))
          }
        </main>
        <CreateButton />
      </div>
    </>
  )
}