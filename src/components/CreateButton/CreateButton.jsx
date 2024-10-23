import { useArticleStore } from '../../hooks/useArticleStore'
import { useModalStore } from '../../hooks/useModalStore'
import './createButton.css'

export const CreateButton = () => {

  const { openCreateModal,  } = useModalStore()
  const { startEditArticle } = useArticleStore()

  const handleClickNew = () => {
    startEditArticle({
        title: '',
        summary: '',
        imageUrl: '',
        onEditArticle: true,
    });
    openCreateModal();
}


  return (
    <>
      <div className='cb' onClick={handleClickNew} >
      <i className='fas fa-plus' ></i>

        {/* <h5 className='cb-h5' >+</h5> */}
      </div>
    </>
  )
}
