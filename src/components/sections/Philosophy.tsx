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
      </Container>
    </section>
  );
};

export default Philosophy;