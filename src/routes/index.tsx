import { Title } from "@solidjs/meta";
import { A } from "@solidjs/router";
import Counter from "~/components/Counter";
import { Button } from "~/components/button";

export default function Home() {
  return (
    <>
      <main class="p-2 flex gap-3">
        <A href="/about">About</A>
        <A href="/editor">Editor</A>
      </main>
    </>
  );
}
