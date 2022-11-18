import { useState } from "react";

export default function InfoCardPricing({fitur}) {
  const [icon, setIcon] = useState();
  return (
    <ul>
      <li className="text-fivety flex space-x-5 pb-3"> <div><img src="/images/check.png" alt="check"/></div> <span> {fitur.value1}</span></li>
      <li className="text-fivety flex space-x-5 pb-3"> <div><img src="/images/check.png" alt="check"/></div> <span> {fitur.value2} </span></li>
      <li className="text-fivety flex space-x-5 pb-3"> <div><img src="/images/check.png" alt="check"/></div> <span> {fitur.value3} </span></li>
      <li className="text-fivety flex space-x-5 pb-3"> <div><img src="/images/check.png" alt="check"/></div> <span> {fitur.value4} </span></li>
      <li className="text-fivety flex space-x-5 pb-3"> <div><img src="/images/check.png" alt="check"/></div> <span> {fitur.value5} </span></li>
      <li className="text-fivety flex space-x-5 pb-3"> <div><img src="/images/check.png" alt="check"/></div> <span> {fitur.value6} </span></li>
    </ul>
  );
}
