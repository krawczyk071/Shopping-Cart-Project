import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function Layout(props) {
  return (
    <div className="App">
      <header>
        <Navbar data={props.data} />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>Szymon Krawczyk 2023 | Odin project</footer>
    </div>
  );
}
