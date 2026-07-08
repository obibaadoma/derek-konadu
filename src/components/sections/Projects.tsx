import Container from "../layout/Container";
import Card from "../ui/Card";
import SectionTitle from "../ui/SectionTitle";
import { projects } from "../../data/projects";

const Projects = () => {
  return (
    <section id="projects" className="bg-slate-50 py-24 dark:bg-slate-950">
      <Container>
        <SectionTitle
          title="Featured Projects"
          subtitle="Selected projects that demonstrate full-stack development, backend architecture, database design, and business problem solving."
        />

        <div className="grid gap-8">
          {projects.map((project) => (
            <Card key={project.title}>
              <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr]">
                <div className="rounded-2xl bg-slate-100 p-8">
                  <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                    {project.type}
                  </p>

                  <h3 className="mt-3 text-2xl font-bold text-slate-900">
                    {project.title}
                  </h3>

                  <p className="mt-4 text-slate-600">{project.description}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900">
                    Problem Solved
                  </h4>
                  <p className="mt-2 text-slate-600">{project.problem}</p>

                  <h4 className="mt-6 font-semibold text-slate-900">
                    Key Features
                  </h4>

                  <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                    {project.features.map((feature) => (
                      <li key={feature} className="text-sm text-slate-600">
                        • {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-slate-900 px-3 py-1 text-xs font-medium text-white"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Projects;