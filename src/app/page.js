import AboutMe from "@/component/aboutMe";
import Header from "../component/header";
import Projects from "@/component/projects";
import Blogs from "@/component/blogs";
import Contact from "@/component/contact";
import Footer from "@/component/footer";

export default function Home() {
  return (
    <div>
      <Header />
      <AboutMe />
      <Projects />
      <Blogs />
      <Contact />
      <Footer />
    </div>
  );
}
