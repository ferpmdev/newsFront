import './dashboard.css'

export const Button = ({showAlert, onClickButton, content}) => {


  return (
    <>
    <div className='pd' >
        <button className='bd' onClick={onClickButton}>
            {content}
        </button>
    </div>
    </>
  )
}
