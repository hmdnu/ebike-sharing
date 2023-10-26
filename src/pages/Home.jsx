import { useEffect } from "react";
import { Card, Navbar } from "../components";

export default function App() {
  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <div>
      <Navbar />
      <section className="w-[80%] m-auto flex justify-center items-center pt-20">
        <Card />
      </section>
    </div>
  );
}
