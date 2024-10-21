import './dashboard.css'

export const Button = ({onClickButton, content}) => {


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
