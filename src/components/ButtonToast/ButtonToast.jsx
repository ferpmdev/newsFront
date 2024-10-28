import './buttonToast.css';

export const ButtonToast = ({ closeToast }) => {
  return (
    <section className="bt-c">
      <i className="fa-solid fa-xmark" onClick={closeToast} />
      <p className='bt-p' >Entendido</p>
    </section>
  )
}
