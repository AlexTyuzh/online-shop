import { createContext, useContext, useState } from "react";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products] = useState([
    {
      id: 1,
      image: require("../img/Lily.jpg"),
      title: "White Lily",
      categories: "Indoor Plant",
      subcategories: "Sun lover",
      description:
        "A beautiful white lily that thrives indoors with proper sunlight.",
      priceOld: 20,
      price: 15,
      inStock: 0,
    },
    {
      id: 2,
      image: require("../img/Cactus.jpg"),
      title: "Cactus",
      categories: "Outdoor Plants",
      subcategories: "Low maintenance",
      description:
        "A hardy cactus that requires minimal care and thrives in dry conditions.",
      priceOld: null,
      price: 10,
      inStock: 2,
    },
    {
      id: 3,
      image: require("../img/FiddleLeafFig.jpg"),
      title: "Fiddle Leaf Fig",
      categories: "Indoor Plants",
      subcategories: "Bright light",
      description:
        "A stylish indoor plant with large, glossy leaves requiring bright light.",
      priceOld: 50,
      price: 45,
      inStock: 10,
    },
    {
      id: 4,
      image: require("../img/Monstera.jpg"),
      title: "Monstera",
      categories: "Indoor Plants",
      subcategories: "Easy care",
      description:
        "A trendy indoor plant with unique, split leaves that grows well in indirect light.",
      priceOld: 40,
      price: 35,
      inStock: 20,
    },
    {
      id: 5,
      image: require("../img/SnakePlant.jpg"),
      title: "Snake Plant",
      categories: "Indoor Plants",
      subcategories: "Low maintenance",
      description:
        "A resilient plant that purifies air and requires minimal watering.",
      priceOld: 30,
      price: 25,
      inStock: 25,
    },
    {
      id: 6,
      image: require("../img/AloeVera.jpg"),
      title: "Aloe Vera",
      categories: "Indoor Plants",
      subcategories: "Medicinal",
      description:
        "A healing plant known for its soothing gel used in skincare and first aid.",
      priceOld: 20,
      price: 18,
      inStock: 30,
    },
    {
      id: 7,
      image: require("../img/RedRose.jpg"),
      title: "Red Rose Bush",
      categories: "Outdoor Plants",
      subcategories: "Full sun",
      description:
        "A stunning red rose bush that blooms beautifully in full sunlight.",
      priceOld: 35,
      price: 30,
      inStock: 15,
    },
    {
      id: 8,
      image: require("../img/WhiteRose.jpg"),
      title: "White Rose Bush",
      categories: "Outdoor Plants",
      subcategories: "Full sun",
      description:
        "A delicate white rose bush, perfect for outdoor gardens and sunny spots.",
      priceOld: 35,
      price: 30,
      inStock: 10,
    },
    {
      id: 9,
      image: require("../img/PinkRose.jpg"),
      title: "Pink Rose Bush",
      categories: "Outdoor Plants",
      subcategories: "Full sun",
      description:
        "A charming pink rose bush that adds elegance to any garden.",
      priceOld: 35,
      price: 30,
      inStock: 7,
    },
    {
      id: 10,
      image: require("../img/Bamboo.jpg"),
      title: "Lucky Bamboo",
      categories: "Indoor Plants",
      subcategories: "Water based",
      description:
        "A decorative bamboo plant that grows in water and brings good luck.",
      priceOld: 25,
      price: 22,
      inStock: 20,
    },
    {
      id: 11,
      image: require("../img/BlueOrchid.jpg"),
      title: "Blue Orchid",
      categories: "Indoor Plants",
      subcategories: "Elegant",
      description: "A rare and elegant orchid with vibrant blue petals.",
      priceOld: 60,
      price: 55,
      inStock: 10,
    },
    {
      id: 12,
      image: require("../img/PurpleOrchid.jpg"),
      title: "Purple Orchid",
      categories: "Indoor Plants",
      subcategories: "Elegant",
      description:
        "A stunning purple orchid that adds a touch of luxury to any room.",
      priceOld: 60,
      price: 55,
      inStock: 10,
    },
    {
      id: 13,
      image: require("../img/WhiteOrchid.jpg"),
      title: "White Orchid",
      categories: "Indoor Plants",
      subcategories: "Elegant",
      description: "A graceful white orchid symbolizing purity and beauty.",
      priceOld: 60,
      price: 55,
      inStock: 10,
    },
    {
      id: 14,
      image: require("../img/Jasmine.jpg"),
      title: "Jasmine",
      categories: "Outdoor Plants",
      subcategories: "Fragrant",
      description:
        "A fragrant jasmine plant that blooms with delicate white flowers.",
      priceOld: 40,
      price: 35,
      inStock: 20,
    },

    // Fertilizers
    {
      id: 31,
      image: require("../img/OrganicFertilizer.jpg"),
      title: "Organic Fertilizer",
      categories: "Fertilizers",
      subcategories: "Plant Nutrition",
      description:
        "A natural fertilizer that enhances plant growth and soil health.",
      priceOld: 15,
      price: 12,
      inStock: 50,
    },
    {
      id: 32,
      image: require("../img/LiquidFertilizer.jpg"),
      title: "Liquid Fertilizer",
      categories: "Fertilizers",
      subcategories: "Fast Acting",
      description:
        "A quick-absorbing liquid fertilizer that boosts plant growth instantly.",
      priceOld: 20,
      price: 18,
      inStock: 40,
    },
    {
      id: 33,
      image: require("../img/BioFertilizer.jpg"),
      title: "Bio-Fertilizer",
      categories: "Fertilizers",
      subcategories: "Plant Nutrition",
      description:
        "Stimulates the plant's roots themselves to grow wide and strong. Mikro-Root is not only effective on roots, when applied to seeds the Trichoderma spurs higher germination rates..",
      priceOld: 28,
      price: 25,
      inStock: 10,
    },
    {
      id: 34,
      image: require("../img/RootFormer.jpg"),
      title: "Root Former",
      categories: "Fertilizers",
      subcategories: "Fast Acting",
      description:
        "A safe product for reliable rooting of cuttings, growth of the root system of any crops, except for amaranth and cruciferous. Contains a microbial inoculant.",
      priceOld: 15,
      price: 13,
      inStock: 40,
    },

    // Gardening
    {
      id: 41,
      image: require("../img/GardenShovel.jpg"),
      title: "Garden Shovel",
      categories: "Gardening",
      subcategories: "Tools",
      description: "A durable garden shovel perfect for digging and planting.",
      priceOld: 30,
      price: 25,
      inStock: 25,
    },
    {
      id: 42,
      image: require("../img/GardenGloves.jpg"),
      title: "Garden Gloves",
      categories: "Gardening",
      subcategories: "Protective Gear",
      description: "Durable gloves to protect your hands while gardening.",
      priceOld: 10,
      price: 8,
      inStock: 50,
    },
    {
      id: 43,
      image: require("../img/WateringCan.jpg"),
      title: "Watering Can",
      categories: "Gardening",
      subcategories: "Outdoor Gardening, Tools",
      description:
        "A stylish watering can for easy and efficient plant watering.",
      priceOld: 18,
      price: 15,
      inStock: 30,
    },
    {
      id: 44,
      image: require("../img/GardeningKit.jpg"),
      title: "Garden tool set",
      categories: "Gardening",
      subcategories: "Outdoor Gardening, Tools",
      description:
        "Garden tool set, plastic handles, consists 7 items of the most essential tools with which you can perform any work in the garden.",
      priceOld: 23,
      price: 20,
      inStock: 7,
    },

    // Flower Pots
    {
      id: 51,
      image: require("../img/TripleCeramicPot.jpg"),
      title: "Triple Ceramic Pot",
      categories: "Pots & Planters",
      subcategories: "Ceramic Pots",
      description:
        "A set of three elegant ceramic pots suitable for any home decor.",
      priceOld: 25,
      price: 20,
      inStock: 20,
    },
    {
      id: 53,
      image: require("../img/BlackCeramicPot.jpg"),
      title: "Black Ceramic Pot",
      categories: "Pots & Planters",
      subcategories: "Ceramic Pots",
      description:
        "A modern black ceramic pot perfect for minimalist interiors.",
      priceOld: 25,
      price: 20,
      inStock: 20,
    },
    {
      id: 54,
      image: require("../img/GreenCeramicPot.jpg"),
      title: "Green Ceramic Pot",
      categories: "Pots & Planters",
      subcategories: "Ceramic Pots",
      description: "A refreshing green ceramic pot to bring nature indoors.",
      priceOld: 25,
      price: 20,
      inStock: 20,
    },
    {
      id: 55,
      image: require("../img/BlackHangingPlastickPot.jpg"),
      title: "Black Hanging Plastic Pot",
      categories: "Pots & Planters",
      subcategories: "Plastic Pots, Vertical Gardening",
      description:
        "A lightweight black hanging pot ideal for vertical gardening.",
      priceOld: 20,
      price: 18,
      inStock: 30,
    },
    {
      id: 56,
      image: require("../img/WhiteHangingPlastickPot.jpg"),
      title: "White Hanging Plastic Pot",
      categories: "Pots & Planters",
      subcategories: "Plastic Pots, Vertical Gardening",
      description:
        "A stylish white hanging pot, perfect for modern indoor gardens.",
      priceOld: 20,
      price: 18,
      inStock: 30,
    },

    // Seeds
    {
      id: 61,
      image: require("../img/TomatoSeeds.jpg"),
      title: "Tomato Seeds",
      categories: "Seeds",
      subcategories: "Vegetable Seeds",
      description:
        "High-quality tomato seeds for growing fresh, juicy tomatoes.",
      priceOld: 6,
      price: 4,
      inStock: 15,
    },
    {
      id: 62,
      image: require("../img/CucumberSeeds.jpeg"),
      title: "Cucumber Seeds",
      categories: "Seeds",
      subcategories: "Vegetable Seeds",
      description: "High-quality cucumber seeds for growing fresh cucumbers.",
      priceOld: 6,
      price: 4,
      inStock: 15,
    },
    {
      id: 63,
      image: require("../img/SunflowerSeeds.jpg"),
      title: "Sunflower Seeds",
      categories: "Seeds",
      subcategories: "Flower Seeds",
      description: "Premium sunflower seeds for growing vibrant yellow blooms.",
      priceOld: 8,
      price: 6,
      inStock: 22,
    },

    {
      id: 63,
      image: require("../img/Calendula.jpg"),
      title: "Calendula Seeds",
      categories: "Seeds",
      subcategories: "Flower Seeds",
      description: "Premium calendula seeds for growing vibrant bright blooms.",
      priceOld: 10,
      price: 8,
      inStock: 10,
    },

    // Accessories

    {
      id: 71,
      image: require("../img/GrowLights.jpg"),
      title: "Grow Lights",
      categories: "Accessories",
      subcategories: "Indoor Gardening",
      description:
        "LED grow lights to help indoor plants thrive in low-light conditions.",
      priceOld: 50,
      price: 45,
      inStock: 10,
    },
    {
      id: 72,
      image: require("../img/PlantSupport.jpg"),
      title: "Plant Support",
      categories: "Accessories",
      subcategories: "Indoor Gardening",
      description:
        "Plant supports give weaker plant stems and climbing plants exactly what they need to grow well.",
      priceOld: 50,
      price: 45,
      inStock: 10,
    },
    {
      id: 73,
      image: require("../img/MushroomAcc.jpg"),
      title: "Decorative mushroom",
      categories: "Accessories",
      subcategories: "Indoor Gardening",
      description:
        "10 pieces of mini mushrooms bring fun and colour to your plants.",
      priceOld: 6,
      price: 5,
      inStock: 12,
    },
    {
      id: 74,
      image: require("../img/stones.jpg"),
      title: "Decorative stones",
      categories: "Accessories",
      subcategories: "Indoor Gardening",
      description:
        "500g White decorative stones. These versatile pebbles are perfect for table crafts, vase arrangements, or as decorative accents in your garden.",
      priceOld: 15,
      price: 12,
      inStock: 8,
    },
  ]);
  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => useContext(ProductsContext);
