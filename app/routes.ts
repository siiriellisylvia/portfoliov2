import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("projects/:id", "routes/project-detail.tsx"),
] satisfies RouteConfig;
