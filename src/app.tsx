// @refresh reload
import { Title } from "@solidjs/meta";
import { Route, Router } from "@solidjs/router";
import { Suspense, lazy } from "solid-js";
import "./app.css";
import "@park-ui/tailwind-plugin/preset.css";
import Providers from "./Providers";
import Index from "./routes/index";
import About from "./routes/about";
import NotFound from "./routes/404";

const Editor = lazy(() => import("./routes/editor"));

export default function App() {
  return (
    <Router
      root={(props) => (
        <Providers>
          <Title>Jamarski klub Novo mesto</Title>
          <Suspense>{props.children}</Suspense>
        </Providers>
      )}
    >
      <Route path="/" component={Index} />
      <Route path="/about" component={About} />
      <Route path="/editor" component={Editor} />
      <Route path="*404" component={NotFound} />
    </Router>
  );
}
