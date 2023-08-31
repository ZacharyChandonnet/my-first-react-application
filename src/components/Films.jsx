import Entete from "./Entete";
import Distribution from "./Distribution";
import Photo from "./Photo";

const Films = ({
  titre,
  synopsis,
  annee,
  distribution,
  realisateur,
  affiche,
}) => {
  const filmsRecent = annee < 2000;

  return (
    <div className={`mt-10 p-4 lg:p-8 rounded-lg shadow-xl ${filmsRecent ? "bg-gray-100" : "bg-white"}`}>
      <div className={`flex justify-center mb-4 lg:mb-6 ${filmsRecent ? "filter grayscale transition duration-300" : ""}`}>
        <Photo typeImg="posteur" type={affiche} className="w-80 h-auto rounded-lg" />
      </div>
      <div className="text-center lg:text-left">
        <Entete titre={titre} annee={annee} synopsis={synopsis} />
        <Distribution personne={realisateur} distribution={distribution} />
      </div>
    </div>
  );
};

export default Films;