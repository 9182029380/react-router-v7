import { Outlet, NavLink } from "react-router";

export default function Dashboard() {
  return (
    <div>
      <h2> Dashboard</h2>
      <nav>
        <NavLink to="/dashboard/stats">Stats</NavLink> |{" "}
        <NavLink to="/dashboard/settings">Settings</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}
