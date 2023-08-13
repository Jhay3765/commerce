import Image from "next/image";
import Stripe from "stripe";
import { FaShoppingCart } from "react-icons/fa";
import ProductCard from "../components/ProductCard";
async function getStripeProducts() {
  const stripe = new Stripe(process.env.STRIPE_SECRET ?? "", {
    apiVersion: "2022-11-15",
  });
  const res = await stripe.prices.list({
    expand: ["data.product"],
  });
  const prices = res.data;
  return prices;
}
export default async function Home() {
  const products = await getStripeProducts();
  console.log(products);
  return (
    <div className="text-4xl font-valorant p-24 ">SHOP COMING SOON </div>
    // <main>
    //   <nav className="flex justify-around border-b border-white py-8">
    //     <h3 className="text-4xl font-bold">MY SHOP </h3>
    //     <FaShoppingCart size={40} />
    //   </nav>
    //   {/* Products */}
    //   <div className="max-w-[1000px] w-full mx-auto p-4 gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-9 ">
    //     {products.map((product, index) => {
    //       return <ProductCard key={index} product={product} />;
    //     })}
    //   </div>
    // </main>
  );
}
