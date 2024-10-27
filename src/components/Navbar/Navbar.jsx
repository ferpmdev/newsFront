import { useLoginStore } from "../../hooks";
import './navbar.css'


export const Navbar = () => {

  const { startLogout, user } = useLoginStore();

  return (
    <div className="nc">
      <span className="navbar-brand">
        Usuario:
        &nbsp;
        {user.name}
      </span>

      <button
        className="btn btn-outline-danger"
        onClick={startLogout}
      >
        <i className="fas fa-sign-out-alt"></i>
        &nbsp;
        <span>Salir</span>
      </button>
    </div>
  )
}
