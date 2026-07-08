import Container from "../layout/Container";
import SectionTitle from "../ui/SectionTitle";
import TimelineItem from "../ui/TimelineItem";
import { FadeIn, SlideUp } from "../ui/animations";
import { experiences } from "../../data";

const Experience = () => {
  return (
    <section id="experience" className="bg-white py-24 dark:bg-slate-950">
      <Container>
        <FadeIn>
          <SectionTitle
            title="Professional Experience"
            subtitle="A career journey spanning full-stack software engineering, enterprise integrations, telecom billing systems, and production support for transaction-driven platforms."
          />
        </FadeIn>

        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <SlideUp key={`${experience.company}-${experience.period}`} delay={index * 0.1}>
              <TimelineItem {...experience} />
            </SlideUp>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Experience;