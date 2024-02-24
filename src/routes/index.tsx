import { A } from "@solidjs/router";

export default function Home() {
  return (
    <>
      <main class="flex gap-3 p-2">
        <A href="/about">About</A>
        <A href="/editor">Editor</A>
        <A href="/account">Account</A>
      </main>
    </>
  );
}
