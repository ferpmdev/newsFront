import { useModalStore } from '../../hooks/useModalStore'
import './dashboard.css'

export const EditButton = () => {

    const { openEditModal } = useModalStore()


  return (
    <>
    <div className='pd' >
        <button className='bd' onClick={openEditModal}>
            Editar!!!
        </button>
    </div>
    </>
  )
}
