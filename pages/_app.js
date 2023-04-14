import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <main className="w-[87%] my-0 mx-auto">
      <Component {...pageProps} />
    </main>
  );
}
