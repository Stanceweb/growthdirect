 import Product1 from "../../assets/Images/product1.jpg";
 import Product2 from "../../assets/Images/product2.jpg";
 import Product3 from "../../assets/Images/product3.jpg";
 import Product4 from "../../assets/Images/product4.jpg";
 import Product5 from "../../assets/Images/product5.jpg";
 import Product6 from "../../assets/Images/product6.jpg";
 import Product7 from "../../assets/Images/product7.jpg";
 import Product8 from "../../assets/Images/product8.jpg";

 const Products = [
    {
      id: 1,
      img: Product1,
      Heading: "Fishing Reel",
      price: "$32.00",
      category_id: ["All", "Reel", "Jacket"],
    },

    {
      id: 2,
      img: Product2,
      Heading: "Compass",
      price: "$52.00",
      category_id: ["All", "Compass", "Stearing", "Jacket"],
    },

    {
      id: 3,
      img: Product3,
      Heading: "Binocular",
      price: "$42.00",
      category_id: ["All", "Reel", "Jacket", "Binocular"],
    },

    {
      id: 4,
      img: Product4,
      Heading: "Fish Finder",
      price: "$22.00",
      category_id: ["All" , "Compass", "Stearing" , "Binocular"],
    },

    {
      id: 5,
      img: Product5,
      Heading: "Compass",
      price: "$34.00",
      category_id: ["All" , "Reel", "Stearing" , "Jacket" ],
    },

    {
      id: 6,
      img: Product6,
      Heading: "Lifebuoy",
      price: "$25.00",
      category_id: ["All","Compass","Reel"],
    },

    {
      id: 7,
      img: Product7,
      Heading: "Life Jacket",
      price: "$20.00",
      category_id: ["All" ,"Jacket" , "Binocular"],
    },

    {
      id: 8,
      img: Product8,
      Heading: "Boat Steering",
      price: "$40.00",
      category_id: ["All" , "Compass" , "Reel" , "Stearing" , "Binocular"],
    },
  ];

  export default Products;