import ProjectCard from "./project-card";

export default function Projects() {
  const nightwaveImgs = [
    "assets/logoNightwave.jpeg",
    "assets/nightwave1.png",
    "assets/nightwave2.png",
    "assets/nightwave4.png",
    "assets/nightwave5.png",
  ];
  const stagepassImgs = [
    "assets/logoStagePass.jpeg",
    "assets/stagepass1.png",
    "assets/stagepass2.png",
    "assets/stagepass3.png",
    "assets/stagepass4.png",
    "assets/stagepass5.png",
  ];
  const bikewinImgs = [
    "assets/logoBikeWin.jpeg",
    "assets/bikewin1.png",
    "assets/bikewin2.png",
    "assets/bikewin3.png",
  ];
  const scalognaquestImgs = ["assets/scalogna-quest.png"];

  return (
    <section
      id="projects"
      className="flex flex-col gap-14 items-center justify-center mt-10 min-h-screen"
    >
      <h2 className="title">Projects</h2>
      <div className="w-full flex flex-wrap gap-5 items-center justify-around p-3">
        <ProjectCard
          name="Nightwave"
          images={nightwaveImgs}
          dex="Management software for a nightclub where the administrator can add/modify events and tickets, the latter can be purchased by registered users and a unique QR Code will be generated which can be scanned with the integrated camera to verify the purchase."
          languages={["html", "css", "js", "php", "mysql"]}
        />

        <ProjectCard
          name="StagePass"
          images={stagepassImgs}
          dex="Social Network for sharing live events of music, theatre, shows and much more, where the registered user can directly add them by specifying name, artists involved, location, date and attaching a significant image. They will also be able to rate the events displayed from 1 to 5 and leave a comment."
          languages={["html", "css", "js", "php", "mysql"]}
        />

        <ProjectCard
          name="BikeWin"
          images={bikewinImgs}
          dex="Landing page for a school project regarding sustainable mobility which contains all the information about the school, the project and the ranking in real time, updated with the data collected by the external application. The Canvas divides the challengers based on the kilometers traveled further or further back."
          languages={["html", "css", "js", "php", "mysql", "figma"]}
        />

        <ProjectCard
          name="Scalogna Quest"
          images={scalognaquestImgs}
          dex="Terminal game developed in C, remake of Hero-Quest: 4 players compete in a map made up of randomly generated dungeons, in which the objective is to reach the end without dying, taking treasures, cures but also risking poisoning and fighting with the inhabitants of the dungeons."
          languages={["c-lang"]}
        />
      </div>
    </section>
  );
}
