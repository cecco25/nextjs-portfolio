import ProjectCard from "./project-card";

export default function Projects() {

    const nightwaveImgs = [
        "/assets/logoNightwave.jpeg",
        "/assets/nightwave1.png",
        "/assets/nightwave2.png",
        "/assets/nightwave4.png",
        "/assets/nightwave5.png"
    ];
    const stagepassImgs = [
        "/assets/logoStagePass.jpeg",
        "/assets/stagepass1.png",
        "/assets/stagepass2.png",
        "/assets/stagepass3.png",
        "/assets/stagepass4.png",
        "/assets/stagepass5.png"
    ];
    const bikewinImgs = [
        "/assets/logoBikeWin.jpeg",
        "/assets/bikewin1.png",
        "/assets/bikewin2.png",
        "/assets/bikewin3.png",
    ];
    const scalognaquestImgs = [
        "/assets/scalogna-quest.png",
    ];

    return (
        <section id="projects" className="flex flex-col gap-14 items-center justify-center mt-10">
            <h2 className="title">Projects</h2>
            <div className="w-full flex flex-wrap gap-5 items-center justify-around p-3">
                <ProjectCard name="Nightwave" images={nightwaveImgs} dex="Gestionale per una discoteca in cui l'amministratore può aggiungere/modificare gli eventi ed i biglietti, quest'ultimi potranno essere acquistati dagli utenti registrati e verrà generato un QR Code univoco da poter essere scannerizzato con la fotocamera integrata per verificare l'acquisto." languages={["html", "css", "js", "php", "mysql"]} />
                <ProjectCard name="StagePass" images={stagepassImgs} dex="Social Network per condividere eventi live di musica, teatro, spettacoli e tanto altro, in cui l'utente registrato può direttamente aggiungerli specificando nome, artisti coinvolti, luogo, data e allegando un'immagine significativa. Essi potranno inoltre mettere un voto da 1 a 5 agli eventi visualizzati e lasciare un commento." languages={["html", "css", "js", "php", "mysql"]} />
                <ProjectCard name="BikeWin" images={bikewinImgs} dex="Landing page per un progetto scolastico riguardante la mobilità sostenibile in cui sono presenti
                            tutte le informazioni della scuola, del progetto e della classifica in tempo reale, aggiornata con i dati
                            raccolti dall'applicazione esterna. Il Canvas divide gli sfidanti in base ai kilometri percorsi più avanti
                            o più indietro." languages={["html", "css", "js", "php", "mysql", "figma"]} />
                <ProjectCard name="Scalogna Quest" images={scalognaquestImgs} dex="Gioco da terminale sviluppato in C, remake di Hero-Quest: 4 player si sfidano in una mappa fatta di segrete generata randomicamente, in cui l'obbiettivo è arrivare alla fine senza morire, prendendo tesori, cure ma anche rischiando di avvelenarsi e combattere con gli abitanti delle segrete." languages={["c-lang"]} />
            </div>
        </section>

    );
}
