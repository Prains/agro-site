import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <main className="w-[87%] my-0 mx-auto flex items-center justify-center flex-col">
      <Component {...pageProps} />
    </main>
  );
}
