import Button from "./Button";
import InfoCardPricing from "./InfoCardPricing";

export default function CardPricing({ title, price, ...infoPricing }) {
  return (
    <div className="p-[60px]">
      <p className="text-base text-secondary font-medium mb-[10px]">{title}</p>
      <h5 className="text-[32px] text-fivety font-medium mb-[30px]">{price}</h5>
      <InfoCardPricing {...infoPricing} />
      <Button className="bg-secondary shadow-lg shadow-secondary/50 text-white rounded-lg mt-10 px-7 py-3">
        Beli Sekarang
      </Button>
    </div>
  );
}
