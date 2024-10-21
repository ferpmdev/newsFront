import { useModalStore } from '../../hooks/useModalStore'
import './createButton.css'

export const CreateButton = () => {

  const { openCreateModal } = useModalStore()


  return (
    <>
      <div className='cb' onClick={openCreateModal} >
        <h5 className='cb-h5' >+</h5>
      </div>
    </>
  )
}
