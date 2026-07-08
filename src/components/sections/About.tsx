import Container from "../layout/Container";
import Card from "../ui/Card";
import SectionTitle from "../ui/SectionTitle";
import { personalInfo } from "../../data/personal";

const About = () => {
  return (
    <section id="about" className="bg-white py-24 dark:bg-slate-950">
      <Container>
        <SectionTitle
          title="About Me"
          subtitle="A software engineer focused on building practical, scalable, and business-driven applications."
        />

        <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <p className="text-lg leading-8 text-slate-600 dark:text-slate-300">
              {personalInfo.about}
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
              I enjoy working across the full stack, from designing clean user
              interfaces to building secure APIs, relational database models,
              and workflows that support real operational needs.
            </p>
          </div>

          <Card>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
              Core Strengths
            </h3>

            <ul className="mt-5 space-y-3">
              {personalInfo.strengths.map((strength) => (
                <li key={strength} className="flex gap-3 text-slate-600 dark:text-slate-300">
                  <span className="mt-2 h-2 w-2 rounded-full bg-slate-900" />
                  <span>{strength}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Container>
    </section>
  );
};

export default About;