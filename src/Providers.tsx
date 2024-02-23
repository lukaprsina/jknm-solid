import { MetaProvider } from "@solidjs/meta";
import type { ParentComponent } from "solid-js";

const Providers: ParentComponent = (props) => {
  return <MetaProvider>{props.children}</MetaProvider>;
};

export default Providers;
