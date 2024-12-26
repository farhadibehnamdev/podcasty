import { ProgressTracking } from "../_components/progress-tracking";
import CourseMaterial from "./_components/course-materials";

const Home = () => {
  return (
    <section className="container max-w-[60rem] flex-col">
      <ProgressTracking />
      <CourseMaterial />
    </section>
  );
};

export default Home;
