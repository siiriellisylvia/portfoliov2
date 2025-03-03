import type { Route } from "./+types/home";
import Welcome from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Siiri Lietu Portfolio" },
    { name: "description", content: "Welcome to my portfolio!" },
  ];
}

export default function Home() {
  return <Welcome />;
}
