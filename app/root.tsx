import { Outlet, NavLink } from "react-router";

export function Root() {
  return (
    <div>
      <header>
        <h1>🚀 React Router v7 Framework Mode</h1>
        <nav>
          <NavLink to="/">Home</NavLink> |{" "}
          <NavLink to="/about">About</NavLink> |{" "}
          <NavLink to="/contact">Contact</NavLink> |{" "}
          <NavLink to="/dashboard">Dashboard</NavLink> |{" "}
          <NavLink to="/user/101">User 101</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
