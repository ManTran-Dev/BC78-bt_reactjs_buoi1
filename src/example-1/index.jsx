import Header from "./header";
import Content from "./content";
import Footer from "./footer";
import Navbar from "./navbar";

function Examble1() {
  return (
    <div>
      <Header />
      <div style={{ display: "flex" }}>
        <Navbar />
        <Content />
      </div>
      <Footer />
    </div>
  );
}

export default Examble1;
