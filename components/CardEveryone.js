import InfoCardEveryone from "./InfoCardEveryone";
export default function CardEveryone({ image, ...InfoEv }) {
  return (
    <>
      <img src={image} alt="thumbnail" className="w-full" /> 
      <InfoCardEveryone {...InfoEv} />
    </>
  );
}
