import { data } from "autoprefixer";
import { useState } from "react";

export default function HeadNav() {
  const [insShopName, setinsShopName] = useState("InsShopName");
  const [shopName, setshopName] = useState("ShopName");
  const cateList = [
    { index: 1, title: "giày" },
    { index: 2, title: "nón" },
    { index: 3, title: "áo" },
    { index: 4, title: "quần" },
    { index: 5, title: "phụ kiện" },
  ];
  return (
    <header>
      <div className="bg-black text-center uppercase text-white font-sans text-sm py-2">
        follow us on instagram: {insShopName}{" "}
      </div>
      <div className="border-b">
        <h1 className="mt-10 ml-12 mb-5 text-5xl font-semibold ">{shopName}</h1>
      </div>
      <nav className="mt-8 ml-12 uppercase flex">
        {cateList.map((data) => (
          <div className="flex-auto">{data.title}</div>
        ))}
      </nav>
    </header>
  );
}
