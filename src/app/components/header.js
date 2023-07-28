import { Button } from "@mui/material";

const navRoutes = [
  {
    name: "HOME",
    route: "/",
  },
  {
    name: "MUSIC",
    route: "/",
  },
  {
    name: "EVENTS",
    route: "/",
  },
  {
    name: "CONTACT",
    route: "/",
  },
];

export default function Header() {
  return (
    <div class="">
      <h1 class="bg-black text-center text-7xl p-6">Spectral Lines</h1>
      <nav class="flex justify-center">
        {navRoutes.map((route) => (
          <div key={route.name} class="px-2">
            <Button href={route.route}>{route.name}</Button>
          </div>
        ))}
      </nav>
    </div>
  );
}
