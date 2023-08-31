import ListeFilms from "./ListeFilms";
import "../input.css";

const App = () => {
  const lesFilms = [
    {
      titre: "Interstellar",
      synopsis:
        "Le film raconte les aventures d’un groupe d’explorateurs qui utilisent une faille récemment découverte dans l’espace-temps afin de repousser les limites humaines et partir à la conquête des distances astronomiques dans un voyage interstellaire.",
      annee: 2014,
      distribution: [
        {
          prenom: "Matthew",
          nom: "McConaughey",
          photo:
            "http://fr.web.img4.acsta.net/c_162_216/pictures/16/03/02/17/16/573123.jpg",
        },
        {
          prenom: "Anne",
          nom: "Hathaway",
          photo:
            "http://fr.web.img2.acsta.net/c_162_216/pictures/14/10/30/11/11/166473.jpg",
        },
        {
          prenom: "Michael",
          nom: "Caine",
          photo:
            "http://fr.web.img5.acsta.net/c_162_216/pictures/15/05/20/14/58/214953.jpg",
        },
      ],
      realisateur: {
        prenom: "Christopher",
        nom: "Nolan",
        photo:
          "http://fr.web.img6.acsta.net/c_162_216/pictures/14/10/30/10/59/215487.jpg",
      },
      affiche:
        "http://fr.web.img4.acsta.net/r_512_288/pictures/14/09/23/10/13/267178.jpg",
    },
    {
      titre: "BLADE RUNNER 2049",
      synopsis:
        "En 2049, la société est fragilisée par les nombreuses tensions entre les humains et leurs esclaves créés par bioingénierie. L’officier K est un Blade Runner : il fait partie d’une force d’intervention d’élite chargée de trouver et d’éliminer ceux qui n’obéissent pas aux ordres des humains. Lorsqu’il découvre un secret enfoui depuis longtemps et capable de changer le monde, les plus hautes instances décident que c’est à son tour d’être traqué et éliminé. Son seul espoir est de retrouver Rick Deckard, un ancien Blade Runner qui a disparu depuis des décennies..",
      annee: 2017,
      distribution: [
        {
          prenom: "Ryan",
          nom: "Gosling",
          photo:
            "http://fr.web.img5.acsta.net/c_162_216/pictures/16/05/17/17/28/208580.jpg",
        },
        {
          prenom: "Harrison",
          nom: "Ford",
          photo:
            "http://fr.web.img6.acsta.net/c_162_216/pictures/15/10/13/11/06/006332.jpg",
        },
        {
          prenom: "Jared",
          nom: "Leto",
          photo:
            "http://fr.web.img6.acsta.net/c_162_216/pictures/16/02/29/14/37/141208.jpg",
        },
      ],
      realisateur: {
        prenom: "Denis",
        nom: "Villeneuve",
        photo:
          "http://fr.web.img4.acsta.net/c_162_216/pictures/17/08/16/14/22/169738.jpg",
      },
      affiche:
        "http://fr.web.img3.acsta.net/r_512_288/pictures/17/08/24/15/18/597734.jpg",
    },
    {
      titre: "Strange Days",
      synopsis:
        "Los Angeles 1999. Lenny Nero, flic déchu, mi-dandy, mi-gangster, s'est reconverti dans le trafic de vidéos très perfectionnées qui permettent de revivre n'importe quelle situation par procuration. Un jour, il découvre une vidéo révélant l'identité des meurtriers d'un leader noir.",
      annee: 1995,
      distribution: [
        {
          prenom: "Ralph",
          nom: "Fiennes",
          photo:
            "http://fr.web.img4.acsta.net/c_162_216/pictures/15/09/09/09/32/311995.jpg",
        },
        {
          prenom: "Angela",
          nom: "Basset",
          photo:
            "http://fr.web.img2.acsta.net/c_162_216/pictures/18/07/13/09/55/1161802.jpg",
        },
        {
          prenom: "Juliette",
          nom: "Lewis",
          photo:
            "http://fr.web.img3.acsta.net/c_162_216/pictures/15/11/12/17/06/136600.jpg",
        },
        {
          prenom: "Michael",
          nom: "Wincott",
          photo:
            "http://fr.web.img4.acsta.net/c_162_216/pictures/17/03/22/12/18/447873.jpg",
        },
      ],
      realisateur: {
        prenom: "Kathryn",
        nom: "Bigelow",
        photo:
          "http://fr.web.img6.acsta.net/c_162_216/pictures/17/10/19/15/45/5610812.jpg",
      },
      affiche:
        "http://fr.web.img2.acsta.net/r_512_288/medias/nmedia/18/74/38/22/19255613.jpg",
    },
    {
      titre: "Twelve Monkeys",
      synopsis:
        "Nous sommes en l'an 2035. Les quelques milliers d'habitants qui restent sur notre planète sont contraints de vivre sous terre. La surface du globe est devenue inhabitable à la suite d'un virus ayant décimé 99% de la population. Les survivants mettent tous leurs espoirs dans un voyage à travers le temps pour découvrir les causes de la catastrophe et la prévenir. C'est James Cole, hanté depuis des années par une image incompréhensible, qui est désigné pour cette mission.",
      annee: 1996,
      distribution: [
        {
          prenom: "Bruce",
          nom: "Willis",
          photo:
            "http://fr.web.img5.acsta.net/c_162_216/pictures/15/06/24/14/54/311963.jpg",
        },
        {
          prenom: "Madeleine",
          nom: "Stowe",
          photo:
            "http://fr.web.img5.acsta.net/c_162_216/medias/nmedia/18/35/35/69/20072132.jpg",
        },
        {
          prenom: "Christopher",
          nom: "Plummer",
          photo:
            "http://fr.web.img5.acsta.net/c_162_216/pictures/16/01/12/15/34/446863.jpg",
        },
        {
          prenom: "Brad",
          nom: "Pitt",
          photo:
            "https://fr.web.img6.acsta.net/c_162_216/pictures/20/02/10/10/37/1374948.jpg",
        },
      ],
      realisateur: {
        prenom: "Terry",
        nom: "Gilliam",
        photo:
          "http://fr.web.img6.acsta.net/c_162_216/medias/nmedia/18/35/36/83/19864837.jpg",
      },
      affiche:
        "http://fr.web.img5.acsta.net/r_512_288/medias/nmedia/18/64/75/57/18866817.jpg",
    },
    {
      titre: "Total Recall",
      synopsis:
        "2048. Doug Quaid rêve chaque nuit qu'il est sur la planète Mars à la recherche de la belle Melina. Sa femme, Lori, s'efforce de dissiper ce fantasme. Doug va bientôt s'apercevoir que son rêve était artificiel et que sa femme est une espionne chargée de veiller à son reconditionnement mental. Il se souvient d'un séjour réel sur Mars, à l'époque où il était l'agent le plus redouté du cruel Coohagen. Il décide de s'envoler sur Mars à la recherche de son énigmatique passé.",
      annee: 1990,
      distribution: [
        {
          prenom: "Arnold",
          nom: "Schwarzenegger",
          photo:
            "http://fr.web.img2.acsta.net/c_162_216/pictures/16/05/19/17/51/302269.jpg",
        },
        {
          prenom: "Rachel",
          nom: "Ticotin",
          photo:
            "http://fr.web.img3.acsta.net/c_162_216/medias/nmedia/18/35/45/31/18393412.jpg",
        },
        {
          prenom: "Sharon",
          nom: "Stone",
          photo:
            "http://fr.web.img5.acsta.net/c_162_216/pictures/15/10/21/11/07/305796.jpg",
        },
      ],
      realisateur: {
        prenom: "Paul",
        nom: "Verhoeven",
        photo:
          "http://fr.web.img4.acsta.net/c_162_216/pictures/16/05/23/11/02/224733.jpg",
      },
      affiche:
        "http://fr.web.img4.acsta.net/r_512_288/pictures/14/09/29/10/13/036721.jpg",
    },
  ];

  console.log(lesFilms);

  return (
    <>
      <h1 className="text-center text-white text-2xl pt-10 pb-10 bg-slate-700">
        Les films du T.I.M
      </h1>

      <div className="m-auto w-95vw mt-10 mb-10 grid grid-cols-3 gap-4">
        <ListeFilms films={lesFilms} />
      </div>
      <p className="text-center bg-slate-700 text-white">Application réalisée par Zachary Chandonnet</p>
    </>
  );
};

export default App;