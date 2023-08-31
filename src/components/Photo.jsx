const Photo = ({ type, typeImg }) => {
  return (
    <>
   <img
  className={`m-auto ${typeImg === "posteur" ? "w-150px h-150px rounded-full " : "w-150px h-150px"} object-center object-cover`}
  src={type}
  alt="affiche"
/>
    </>
  );
};

export default Photo;
