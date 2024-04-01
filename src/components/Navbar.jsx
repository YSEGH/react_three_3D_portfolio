import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header">
      <NavLink to="/">
        <h1>Accueil</h1>
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "text-blue-600" : "text-black"
          }
        >
          Projets
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
