export default function InfoCardEveryone({title, description}) {
  return (
    <>
      <h5 className="text-xl font-medium mt-5">{title}</h5>
      <p className="text-base text-primary/80 mt-[10px]">{description}</p>
    </>
  );
}
