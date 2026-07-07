import Container from "../layout/Container";
import Card from "../ui/Card";
import SectionTitle from "../ui/SectionTitle";
import { philosophy } from "../../data";

const Philosophy = () => {
  return (
    <section id="philosophy" className="bg-slate-50 py-24">
      <Container>
        <SectionTitle title={philosophy.title} subtitle={philosophy.intro} />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {philosophy.principles.map((principle) => (
            <Card key={principle.title}>
              <h3 className="text-xl font-bold text-slate-900">
                {principle.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {principle.description}
              </p>
            </Card>
          ))}
        </div>
        <div className="mt-12 rounded-3xl border border-blue-100 bg-blue-50/60 p-8">
  <h3 className="text-xl font-bold text-slate-900">
    Currently Exploring
  </h3>

  <p className="mt-3 max-w-3xl text-slate-600">
    Areas I am actively strengthening through hands-on learning,
    projects, and continuous professional development.
  </p>

  <div className="mt-6 flex flex-wrap gap-3">
    {philosophy.currentlyExploring.map((item) => (
      <span
        key={item}
        className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm"
      >
        {item}
      </span>
    ))}
  </div>
</div>
      </Container>
    </section>
  );
};

export default Philosophy;