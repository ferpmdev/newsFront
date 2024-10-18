import './dashboard.css'

export const Dashboard = ({showAlert, handleAlert, content}) => {


  return (
    <>
    <div className='pd' >
        <button className='bd' onClick={handleAlert}>
            {content}
        </button>
    </div>
    </>
  )
}
