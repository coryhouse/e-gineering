import { Link } from "react-router-dom";
import { useUserContext } from "./UserContext";

export function Nav() {
  const { name } = useUserContext();
  return (
    <nav>
      <p>Hello {name}!</p>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}
