import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { CreateModal } from '../components/Modals/CreateModal/CreateModal';
import { useModalStore } from '../hooks/useModalStore';
import { EditModal } from '../components/Modals/EditModal/EditModal';
import { CreateButton } from '../components/CreateButton/CreateButton';
import { useArticleStore } from '../hooks/useArticleStore';
import { ArticleModule1 } from '../components/ArticleModule1/ArticleModule1';
import { Header } from '../components/Header/Header';
import { Bounce, toast, ToastContainer } from 'react-toastify';
import { ButtonToast } from '../components/ButtonToast/ButtonToast';

import 'react-toastify/dist/ReactToastify.css';
import './newspaper.css'


export const Newspaper = () => {

  const handleStartEditArticle = (article) => {
    starEditArticle(article)
  }

  const { articles } = useSelector((state) => state.article)
  const { openEditModal, openCreateModal } = useModalStore()
  const { starEditArticle, startLodingsArticles } = useArticleStore()

  useEffect(() => {
    startLodingsArticles()
    toast("¡Haz clic en una nota para editarla o eliminarla!", {
      position: "bottom-left",
      className: 'msg-t'
    });
  }, []);

  return (
    <>
      <div className='parent' >
        <CreateModal />
        <EditModal handleStartEditArticle={handleStartEditArticle} />
        <Header />

        <ToastContainer limit={1}
          autoClose={false}
          hideProgressBar={true}
          closeButton={ButtonToast} 
          transition={Bounce}
        />
        <main className="container">
          {
            articles && articles.slice().reverse().map(item => (
              <ArticleModule1 key={item.id} title={item.title} summary={item.summary} id={item.id} imageUrl={item.imageUrl} />
            ))
          }
        </main>
        <CreateButton />
      </div>
    </>
  )
}