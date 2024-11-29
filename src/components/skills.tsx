import SkillCard from "./skill-card";
import "@/scripts/animation";

export default function Skills() {
  return (
    <section
      id="skills"
      className="flex flex-col gap-14 items-center justify-center p-10 mt-10 min-h-screen"
    >
      <h2 className="title">Skills</h2>
      <div className="flex overflow-hidden place-items-center w-full">
        <div className="flex gap-8 ps-8 pe-8 skills-animation select-none">
          <SkillCard title="HTML" image="assets/html.svg" alt="html" />
          <SkillCard title="CSS" image="assets/css.svg" alt="css" />
          <SkillCard title="JavaScript" image="assets/js.svg" alt="js" />
          <SkillCard title="PHP" image="assets/php.svg" alt="php" />
          <SkillCard title="MySQL" image="assets/mysql.svg" alt="mysql" />
          <SkillCard title="React" image="assets/react.svg" alt="react" />
          <SkillCard title="Angular" image="assets/angular.svg" alt="angular" />
          <SkillCard title="NodeJS" image="assets/nodejs.svg" alt="nodejs" />
          <SkillCard title="Figma" image="assets/figma.svg" alt="figma" />
          <SkillCard title="Java" image="assets/java.svg" alt="java" />
          <SkillCard title="C#" image="assets/csharp.svg" alt="c-sharp" />
          <SkillCard title="HTML" image="assets/html.svg" alt="html" />
          <SkillCard title="CSS" image="assets/css.svg" alt="css" />
          <SkillCard title="JavaScript" image="assets/js.svg" alt="js" />
          <SkillCard title="PHP" image="assets/php.svg" alt="php" />
          <SkillCard title="MySQL" image="assets/mysql.svg" alt="mysql" />
          <SkillCard title="React" image="assets/react.svg" alt="react" />
          <SkillCard title="Angular" image="assets/angular.svg" alt="angular" />
          <SkillCard title="NodeJS" image="assets/nodejs.svg" alt="nodejs" />
          <SkillCard title="Figma" image="assets/figma.svg" alt="figma" />
          <SkillCard title="Java" image="assets/java.svg" alt="java" />
          <SkillCard title="C#" image="assets/csharp.svg" alt="c-sharp" />
        </div>
      </div>
    </section>
  );
}
