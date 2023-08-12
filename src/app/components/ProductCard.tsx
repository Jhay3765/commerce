import React from "react";
type Props = {
  product?: any;
};
export default function ProductCard(props: Props) {
  return (
    <div className="py-24 px-24 font-valorant text-6xl">SHOP COMING SOON</div>
  );
  // const { product } = props;
  // const { id: price_id, unit_amount: cost, product: productInfo } = product;
  // const { name } = productInfo;
  // return (
  //   <div className="flex text-black flex-col shadow bg-white hover:shadow-lg cursor-pointer">
  //     <img
  //       src={productInfo.images[0]}
  //       alt={name}
  //       className="w-full h-full object-cover"
  //     />
  //     <div className="flex flex-col gap-2 p-4">
  //       <div className="flex items-center justify-between">
  //         <h3>{name}</h3>
  //         <p>${cost / 100}</p>
  //       </div>
  //     </div>
  //   </div>
}
