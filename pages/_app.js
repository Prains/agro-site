import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <main className="w-[87%]">
      <Component {...pageProps} />
    </main>
  );
}
