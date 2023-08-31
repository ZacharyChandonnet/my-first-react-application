const Entete = ({titre, synopsis, annee}) => {
  return (
    <>
      <h1 className="text-2xl  pt-5">{titre}</h1>
      <p className="italic m-auto	pt-2">{synopsis}</p>
      <h2 className=" text-lg pt-4 pb-4 "> Date de sortie : {annee}</h2>
    </>
  );
};

export default Entete;
