import { useLoginStore } from "../../hooks";
import './header.css'


export const Header = () => {

  const { startLogout, user } = useLoginStore();

  return (
    <div className="hp">
      <header className="hc">
        <h1 className='pt-serif-regular ls'>LastNewsApp</h1>
        <nav className="nc">
          {/* <span className="navbar-brand">
            Usuario:
            &nbsp;
            {user.name}
          </span> */}

          <button
            className="btn btn-outline-success h-btn"
          >
            <i className="fa fa-user" aria-hidden="true"></i>
            &nbsp;
            <span>{user.name}</span>
          </button>


          <button
            className="btn btn-outline-danger"
            onClick={startLogout}
          >
            <i className="fas fa-sign-out-alt"></i>
            &nbsp;
            <span>Salir</span>
          </button>
        </nav>
      </header>
      <hr className='custom-hr' />
    </div>
  )
}
