import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Layout = ({ children }) => {
  return (
    <main className="my-0 mx-auto flex items-center justify-center flex-col">
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
