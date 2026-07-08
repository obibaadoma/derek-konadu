import Container from "../layout/Container";
import Card from "../ui/Card";
import SectionTitle from "../ui/SectionTitle";
import { skillCategories } from "../../data/skills";

const Skills = () => {
  return (
    <section id="skills" className="bg-white py-24 dark:bg-slate-950">
      <Container>
        <SectionTitle
          title="Technical Skills"
          subtitle="Technologies and practices I use to build modern, scalable software."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skillCategories.map((category) => (
            <Card key={category.title}>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                {category.title}
              </h3>

              <div className="mt-5 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-slate-100 px-3 py-2 text-sm font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Skills;