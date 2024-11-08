import ProductListSec from "@/components/common/ProductListSec";
import Brands from "@/components/homepage/Brands";
import DressStyle from "@/components/homepage/DressStyle";
import Header from "@/components/homepage/Header";
import Reviews from "@/components/homepage/Reviews";
import { Product } from "@/types/product.types";
import { Review } from "@/types/review.types";

export const newArrivalsData: Product[] = [
  {
    id: 1,
    title: "Kaos dengan Detail Pita",
    srcUrl: "/images/pic1.png",
    gallery: ["/images/pic1.png", "/images/pic10.png", "/images/pic11.png"],
    price: 120000, 
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.5,
  },
  {
    id: 2,
    title: "Jeans Skinny Fit",
    srcUrl: "/images/pic2.png",
    gallery: ["/images/pic2.png"],
    price: 260000, 
    discount: {
      amount: 0,
      percentage: 20,
    },
    rating: 3.5,
  },
  {
    id: 3,
    title: "Kemeja Kotak-kotak",
    srcUrl: "/images/pic3.png",
    gallery: ["/images/pic3.png"],
    price: 180000, 
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.5,
  },
  {
    id: 4,
    title: "Kaos Lengan Bergaris",
    srcUrl: "/images/pic4.png",
    gallery: ["/images/pic4.png", "/images/pic10.png", "/images/pic11.png"],
    price: 160000, 
    discount: {
      amount: 0,
      percentage: 30,
    },
    rating: 4.5,
  },
];

export const topSellingData: Product[] = [
  {
    id: 5,
    title: "Kemeja Garis Vertikal",
    srcUrl: "/images/pic5.png",
    gallery: ["/images/pic5.png", "/images/pic10.png", "/images/pic11.png"],
    price: 232000, 
    discount: {
      amount: 0,
      percentage: 20,
    },
    rating: 5.0,
  },
  {
    id: 6,
    title: "Kaos Grafis Courage",
    srcUrl: "/images/pic6.png",
    gallery: ["/images/pic6.png", "/images/pic10.png", "/images/pic11.png"],
    price: 145000, 
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.0,
  },
  {
    id: 7,
    title: "Celana Pendek Bermuda Longgar",
    srcUrl: "/images/pic7.png",
    gallery: ["/images/pic7.png"],
    price: 80000, 
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 3.0,
  },
  {
    id: 8,
    title: "Jeans Skinny Pudar",
    srcUrl: "/images/pic8.png",
    gallery: ["/images/pic8.png"],
    price: 210000, 
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.5,
  },
];

export const relatedProductData: Product[] = [
  {
    id: 12,
    title: "Polo dengan Trim Kontras",
    srcUrl: "/images/pic12.png",
    gallery: ["/images/pic12.png", "/images/pic10.png", "/images/pic11.png"],
    price: 242000, 
    discount: {
      amount: 0,
      percentage: 20,
    },
    rating: 4.0,
  },
  {
    id: 13,
    title: "Kaos Grafis Gradasi",
    srcUrl: "/images/pic13.png",
    gallery: ["/images/pic13.png", "/images/pic10.png", "/images/pic11.png"],
    price: 145000, 
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 3.5,
  },
  {
    id: 14,
    title: "Polo dengan Detail Tipping",
    srcUrl: "/images/pic14.png",
    gallery: ["/images/pic14.png"],
    price: 180000, 
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.5,
  },
  {
    id: 15,
    title: "Kaos Garis Hitam",
    srcUrl: "/images/pic15.png",
    gallery: ["/images/pic15.png"],
    price: 150000, 
    discount: {
      amount: 0,
      percentage: 30,
    },
    rating: 5.0,
  },
];

export const reviewsData: Review[] = [
  {
    id: 1,
    user: "Alex K.",
    content:
      "Menemukan pakaian yang sesuai dengan gaya pribadi saya dulunya sulit, sampai saya menemukan Shop.co. Pilihan yang mereka tawarkan benar-benar luar biasa, cocok untuk berbagai selera dan acara.",
    rating: 5,
    date: "14 Agustus 2023",
  },
  {
    id: 2,
    user: "Sarah M.",
    content: "Saya sangat terkesan dengan kualitas dan gaya pakaian yang saya terima dari Shop.co. Mulai dari pakaian santai hingga gaun elegan, setiap item yang saya beli selalu melebihi harapan saya.",
    rating: 5,
    date: "15 Agustus 2023",
  },
  {
    id: 3,
    user: "Ethan R.",
    content: "Kaos ini wajib dimiliki bagi siapa saja yang menghargai desain bagus. Pola minimalis namun stylish menarik perhatian saya, dan pas di badan. Saya bisa melihat sentuhan desainer di setiap detail kaos ini.",
    rating: 5,
    date: "16 Agustus 2023",
  },
  {
    id: 4,
    user: "Olivia P.",
    content: "Sebagai penggemar UI/UX, saya menghargai kesederhanaan dan fungsionalitas. Kaos ini tidak hanya merepresentasikan prinsip-prinsip tersebut tetapi juga nyaman dipakai. Terlihat jelas bahwa desainer menuangkan kreativitas mereka untuk membuat kaos ini menonjol.",
    rating: 5,
    date: "17 Agustus 2023",
  },
  {
    id: 5,
    user: "Liam K.",
    content: "Kaos ini merupakan perpaduan kenyamanan dan kreativitas. Bahannya lembut, dan desainnya menunjukkan keahlian desainer. Rasanya seperti memakai karya seni yang mencerminkan passion saya pada desain dan mode.",
    rating: 5,
    date: "18 Agustus 2023",
  },
  {
    id: 6,
    user: "Samantha D.",
    content: "Saya benar-benar suka kaos ini! Desainnya unik dan bahannya sangat nyaman. Sebagai sesama desainer, saya menghargai perhatian terhadap detail. Ini sudah menjadi kaos favorit saya.",
    rating: 5,
    date: "19 Agustus 2023",
  },
];



export default function Home() {
  return (
    <>
      <Header />
      <Brands />
      <main className="my-[50px] sm:my-[72px]">
        <ProductListSec
          title="NEW ARRIVALS"
          data={newArrivalsData}
          viewAllLink="/shop#new-arrivals"
        />
        <div className="max-w-frame mx-auto px-4 xl:px-0">
          <hr className="h-[1px] border-t-black/10 my-10 sm:my-16" />
        </div>
        <div className="mb-[50px] sm:mb-20">
          <ProductListSec
            title="top selling"
            data={topSellingData}
            viewAllLink="/shop#top-selling"
          />
        </div>
        <div className="mb-[50px] sm:mb-20">
          <DressStyle />
        </div>
        <Reviews data={reviewsData} />
      </main>
    </>
  );
}
