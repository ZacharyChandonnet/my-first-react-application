import Films from "./Films";

const ListeFilms = ({ films }) => {
  const { titre, synopsis, annee, distribution, realisateur, affiche } = films;

  console.log(films);

  return (
    <>
      {films.map((film, index) => {
        return (
          <div className="mt-2 rounded-xl text-center">
            <Films
              key={film.titre}
              titre={film.titre}
              synopsis={film.synopsis}
              annee={film.annee}
              distribution={film.distribution}
              realisateur={film.realisateur}
              affiche={film.affiche}
            />
          </div>
        );
      })}
    </>
  );
};

export default ListeFilms;
