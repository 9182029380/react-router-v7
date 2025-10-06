import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  // Home page
  index("routes/home.tsx"),

  // Static pages
  route("about", "routes/about.tsx"),
  route("contact", "routes/contact.tsx"),

  // Dynamic route
  route("user/:id", "routes/user.$id.tsx"),

  // Nested routes under /dashboard
  route("dashboard", "routes/dashboard.tsx", [
    route("stats", "routes/dashboard.stats.tsx"),
    route("settings", "routes/dashboard.settings.tsx"),
  ]),

  // 404 fallback
  route("*", "routes/not-found.tsx"),
] satisfies RouteConfig;

