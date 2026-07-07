import Container from "../layout/Container";
import SectionTitle from "../ui/SectionTitle";
import TimelineItem from "../ui/TimelineItem";
import { experiences } from "../../data";

const Experience = () => {
  return (
    <section id="experience" className="bg-white py-24">
      <Container>
        <SectionTitle
          title="Professional Experience"
          subtitle="A background spanning full-stack software engineering, enterprise integrations, telecom billing systems, and production support for transaction-driven platforms."
        />

        <div className="space-y-12">
          {experiences.map((experience) => (
            <TimelineItem
              key={`${experience.company}-${experience.period}`}
              {...experience}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Experience;