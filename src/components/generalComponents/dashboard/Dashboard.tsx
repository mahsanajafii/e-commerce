import TopBox from "./topBox/TopBox";
import SpecialProducts from "./specialProducts/SpecialProducts";
import photo from "./topBox/Link → refurb-iphone-14-pro-spaceblack-202404.png";

const products = [
  {
    productImg: photo,
    productTitle: "Apple iPad Pro 12.9-inch",
    productPrice: "۱۰,۰۰۰ تومان",
  },
  {
    productImg: photo,
    productTitle: "Apple iPad Pro 12.9-inch",
    productPrice: "۱۰,۰۰۰ تومان",
  },
  {
    productImg: photo,
    productTitle: "Apple iPad Pro 12.9-inch",
    productPrice: "۱۰,۰۰۰ تومان",
  },
  {
    productImg: photo,
    productTitle: "Apple iPad Pro 12.9-inch",
    productPrice: "۱۰,۰۰۰ تومان",
  },
  {
    productImg: photo,
    productTitle: "Apple iPad Pro 12.9-inch",
    productPrice: "۱۰,۰۰۰ تومان",
  },
  {
    productImg: photo,
    productTitle: "Apple iPad Pro 12.9-inch",
    productPrice: "۱۰,۰۰۰ تومان",
  },
  {
    productImg: photo,
    productTitle: "Apple iPad Pro 12.9-inch",
    productPrice: "۱۰,۰۰۰ تومان",
  },
];

const Dashboard = () => {
  return (
    <div className="px-24 w-full flex flex-col gap-[4.8rem]">
      <TopBox></TopBox>
      <SpecialProducts SpecialProducts={products} />
    </div>
  );
};

export default Dashboard;
