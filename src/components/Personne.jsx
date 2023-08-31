import Photo from "./Photo";

const Personne = ({ distribution, personne }) => {
  console.log(distribution);

  return (
    <>
      <div className="pt-7 pb-7">
        <p className="pb-2">
          {personne.prenom} {personne.nom}
          <span> (réalisateur)</span>
        </p>{" "}
        <Photo typeImg="realisateur" type={personne.photo} />
      </div>
      <div className="flex justify-center gap-5">
        {distribution.map((acteurs, index) => (
          <p key={index}>
            <Photo  typeImg="acteur" type={acteurs.photo} /> {acteurs.prenom}{" "}
            {acteurs.nom}
          </p>
        ))}
      </div>
    </>
  );
};

export default Personne;
