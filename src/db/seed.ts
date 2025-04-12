import { db } from ".";
import { product, store } from "./schema";
import { Store } from "../db/schema";

const productSeedData = [
  {
    id: "p1",
    barcodeNumber: "5901234123457",
    barcodeType: "EAN",
    barcodeFormats: "EAN-13",
    asin: "B07JQRYR5M",
    model: "CW553",
    productName: "Sony WH-1000XM4 Wireless Noise Cancelling Headphones",
    category: "Electronics",
    manufacturer: "Sony",
    brand: "Sony",
    color: "Black",
    description:
      "Industry-leading noise cancellation with Dual Noise Sensor technology",
    features: [
      "30-hour battery life",
      "Touch Sensor controls",
      "Speak-to-chat technology",
      "Wearing detection",
    ],
    images: [
      "https://example.com/sony-wh-1000xm4-1.jpg",
      "https://example.com/sony-wh-1000xm4-2.jpg",
    ],
    stores: [
      {
        id: "s1",
        storeName: "Amazon",
        storePrice: "278.00",
        productUrl: "https://www.amazon.com/sony-wh-1000xm4",
        currencyCode: "USD",
        currencySymbol: "$",
      },
      {
        id: "s2",
        storeName: "Best Buy",
        storePrice: "299.99",
        productUrl: "https://www.bestbuy.com/sony-wh-1000xm4",
        currencyCode: "USD",
        currencySymbol: "$",
      },
    ],
  },
  {
    id: "p2",
    barcodeNumber: "0885909950805",
    barcodeType: "UPC",
    barcodeFormats: "UPC-A",
    asin: "B07XQXZXJC",
    model: "iPhone 13",
    productName: "Apple iPhone 13 128GB",
    category: "Smartphones",
    manufacturer: "Apple",
    brand: "Apple",
    color: "Midnight",
    description: "A15 Bionic chip for lightning-fast performance",
    features: [
      "Super Retina XDR display",
      "Cinematic mode",
      "Dual-camera system",
      "Water resistant",
    ],
    images: [
      "https://example.com/iphone-13-1.jpg",
      "https://example.com/iphone-13-2.jpg",
    ],
    stores: [
      {
        id: "s3",
        storeName: "Apple Store",
        storePrice: "799.00",
        productUrl: "https://www.apple.com/iphone-13",
        currencyCode: "USD",
        currencySymbol: "$",
      },
      {
        id: "s4",
        storeName: "Target",
        storePrice: "799.99",
        productUrl: "https://www.target.com/iphone-13",
        currencyCode: "USD",
        currencySymbol: "$",
      },
    ],
  },
  {
    id: "p3",
    barcodeNumber: "7350073730309",
    barcodeType: "EAN",
    barcodeFormats: "EAN-13",
    asin: "B07JP1QK9T",
    model: "D8",
    productName: "Dyson V11 Absolute Cordless Vacuum",
    category: "Home Appliances",
    manufacturer: "Dyson",
    brand: "Dyson",
    color: "Blue/Nickel",
    description: "Twice the suction of any other cordless vacuum",
    features: [
      "High Torque cleaner head",
      "LCD screen",
      "60-minute run time",
      "Whole-machine filtration",
    ],
    images: [
      "https://example.com/dyson-v11-1.jpg",
      "https://example.com/dyson-v11-2.jpg",
    ],
    stores: [
      {
        id: "s5",
        storeName: "Dyson",
        storePrice: "599.99",
        productUrl: "https://www.dyson.com/v11-absolute",
        currencyCode: "USD",
        currencySymbol: "$",
      },
      {
        id: "s6",
        storeName: "Walmart",
        storePrice: "569.00",
        productUrl: "https://www.walmart.com/dyson-v11",
        currencyCode: "USD",
        currencySymbol: "$",
      },
    ],
  },
  {
    id: "p4",
    barcodeNumber: "8806092987807",
    barcodeType: "EAN",
    barcodeFormats: "EAN-13",
    asin: "B09BVQTKRQ",
    model: "OLED C1",
    productName: "LG OLED C1 65-inch 4K Smart TV",
    category: "Televisions",
    manufacturer: "LG Electronics",
    brand: "LG",
    color: "Black",
    description: "Self-lit OLED pixels for perfect black and infinite contrast",
    features: [
      "α9 Gen 4 AI Processor 4K",
      "Game Optimizer",
      "Dolby Vision IQ",
      "Dolby Atmos",
    ],
    images: [
      "https://example.com/lg-c1-1.jpg",
      "https://example.com/lg-c1-2.jpg",
    ],
    stores: [
      {
        id: "s7",
        storeName: "Best Buy",
        storePrice: "1799.99",
        productUrl: "https://www.bestbuy.com/lg-c1-oled",
        currencyCode: "USD",
        currencySymbol: "$",
      },
      {
        id: "s8",
        storeName: "Costco",
        storePrice: "1699.99",
        productUrl: "https://www.costco.com/lg-c1-oled",
        currencyCode: "USD",
        currencySymbol: "$",
      },
    ],
  },
  {
    id: "p5",
    barcodeNumber: "0841631101844",
    barcodeType: "UPC",
    barcodeFormats: "UPC-A",
    asin: "B07XR5TRSZ",
    model: "Series 7",
    productName: "Apple Watch Series 7 GPS 45mm",
    category: "Wearables",
    manufacturer: "Apple",
    brand: "Apple",
    color: "Midnight",
    description: "Always-On Retina display with nearly 20% more screen area",
    features: [
      "ECG app",
      "Blood Oxygen app",
      "Water resistant",
      "Fitness tracking",
    ],
    images: [
      "https://example.com/apple-watch-7-1.jpg",
      "https://example.com/apple-watch-7-2.jpg",
    ],
    stores: [
      {
        id: "s9",
        storeName: "Apple Store",
        storePrice: "429.00",
        productUrl: "https://www.apple.com/apple-watch-series-7",
        currencyCode: "USD",
        currencySymbol: "$",
      },
      {
        id: "s10",
        storeName: "Best Buy",
        storePrice: "429.99",
        productUrl: "https://www.bestbuy.com/apple-watch-series-7",
        currencyCode: "USD",
        currencySymbol: "$",
      },
    ],
  },
  {
    id: "p6",
    barcodeNumber: "0191167152303",
    barcodeType: "UPC",
    barcodeFormats: "UPC-A",
    asin: "B0CHX3QBFR",
    model: "Series 5",
    productName: "Xbox Series X Console",
    category: "Gaming",
    manufacturer: "Microsoft",
    brand: "Xbox",
    color: "Black",
    description: "The fastest, most powerful Xbox ever",
    features: ["4K gaming", "120 FPS", "1 TB SSD", "Ray tracing"],
    images: [
      "https://example.com/xbox-series-x-1.jpg",
      "https://example.com/xbox-series-x-2.jpg",
    ],
    stores: [
      {
        id: "s11",
        storeName: "Microsoft Store",
        storePrice: "499.99",
        productUrl: "https://www.microsoft.com/xbox-series-x",
        currencyCode: "USD",
        currencySymbol: "$",
      },
      {
        id: "s12",
        storeName: "GameStop",
        storePrice: "499.99",
        productUrl: "https://www.gamestop.com/xbox-series-x",
        currencyCode: "USD",
        currencySymbol: "$",
      },
    ],
  },
  {
    id: "p7",
    barcodeNumber: "8809785393607",
    barcodeType: "EAN",
    barcodeFormats: "EAN-13",
    asin: "B08LKJPR5X",
    model: "NP930XDB",
    productName: 'Samsung Galaxy Book Pro 15.6"',
    category: "Laptops",
    manufacturer: "Samsung",
    brand: "Samsung",
    color: "Mystic Blue",
    description: "Ultra-thin and light laptop with AMOLED display",
    features: ["Intel Core i7", "16GB RAM", "512GB SSD", "Windows 11"],
    images: [
      "https://example.com/samsung-galaxy-book-1.jpg",
      "https://example.com/samsung-galaxy-book-2.jpg",
    ],
    stores: [
      {
        id: "s13",
        storeName: "Samsung",
        storePrice: "1199.99",
        productUrl: "https://www.samsung.com/galaxy-book-pro",
        currencyCode: "USD",
        currencySymbol: "$",
      },
      {
        id: "s14",
        storeName: "Amazon",
        storePrice: "1099.00",
        productUrl: "https://www.amazon.com/samsung-galaxy-book-pro",
        currencyCode: "USD",
        currencySymbol: "$",
      },
    ],
  },
  {
    id: "p8",
    barcodeNumber: "0711719541158",
    barcodeType: "UPC",
    barcodeFormats: "UPC-A",
    asin: "B08FC5L3RG",
    model: "CFI-1015A",
    productName: "PlayStation 5 Console",
    category: "Gaming",
    manufacturer: "Sony",
    brand: "PlayStation",
    color: "White",
    description: "Lightning-fast loading with an ultra-high speed SSD",
    features: ["4K gaming", "120 FPS", "825GB SSD", "Haptic feedback"],
    images: ["https://example.com/ps5-1.jpg", "https://example.com/ps5-2.jpg"],
    stores: [
      {
        id: "s15",
        storeName: "PlayStation Direct",
        storePrice: "499.99",
        productUrl: "https://direct.playstation.com/ps5",
        currencyCode: "USD",
        currencySymbol: "$",
      },
      {
        id: "s16",
        storeName: "Target",
        storePrice: "499.99",
        productUrl: "https://www.target.com/ps5",
        currencyCode: "USD",
        currencySymbol: "$",
      },
    ],
  },
  {
    id: "p9",
    barcodeNumber: "0190199503472",
    barcodeType: "UPC",
    barcodeFormats: "UPC-A",
    asin: "B09JQXL5NJ",
    model: 'iPad Pro 12.9"',
    productName: 'Apple iPad Pro 12.9" 256GB Wi-Fi',
    category: "Tablets",
    manufacturer: "Apple",
    brand: "Apple",
    color: "Space Gray",
    description: "Liquid Retina XDR display with M1 chip",
    features: ["12.9-inch display", "M1 chip", "Thunderbolt port", "Face ID"],
    images: [
      "https://example.com/ipad-pro-1.jpg",
      "https://example.com/ipad-pro-2.jpg",
    ],
    stores: [
      {
        id: "s17",
        storeName: "Apple Store",
        storePrice: "1199.00",
        productUrl: "https://www.apple.com/ipad-pro",
        currencyCode: "USD",
        currencySymbol: "$",
      },
      {
        id: "s18",
        storeName: "B&H Photo",
        storePrice: "1199.00",
        productUrl: "https://www.bhphotovideo.com/ipad-pro",
        currencyCode: "USD",
        currencySymbol: "$",
      },
    ],
  },
  {
    id: "p10",
    barcodeNumber: "8806092058583",
    barcodeType: "EAN",
    barcodeFormats: "EAN-13",
    asin: "B098TLTXLZ",
    model: "QN90A",
    productName: 'Samsung 65" QN90A Neo QLED 4K Smart TV',
    category: "Televisions",
    manufacturer: "Samsung",
    brand: "Samsung",
    color: "Titan Black",
    description: "Quantum Matrix Technology with Mini LEDs",
    features: [
      "Neo Quantum Processor 4K",
      "Anti-glare screen",
      "Object Tracking Sound",
      "Game Bar",
    ],
    images: [
      "https://example.com/samsung-qn90a-1.jpg",
      "https://example.com/samsung-qn90a-2.jpg",
    ],
    stores: [
      {
        id: "s19",
        storeName: "Samsung",
        storePrice: "1999.99",
        productUrl: "https://www.samsung.com/qn90a",
        currencyCode: "USD",
        currencySymbol: "$",
      },
      {
        id: "s20",
        storeName: "Best Buy",
        storePrice: "1899.99",
        productUrl: "https://www.bestbuy.com/samsung-qn90a",
        currencyCode: "USD",
        currencySymbol: "$",
      },
    ],
  },
  {
    id: "p11",
    barcodeNumber: "0194252139691",
    barcodeType: "UPC",
    barcodeFormats: "UPC-A",
    asin: "B0BSHF7WHW",
    model: "MacBook Pro 14",
    productName: 'Apple MacBook Pro 14" M2 Pro',
    category: "Laptops",
    manufacturer: "Apple",
    brand: "Apple",
    color: "Space Gray",
    description: "Supercharged by M2 Pro or M2 Max",
    features: [
      "14-inch Liquid Retina XDR display",
      "10-core CPU",
      "16-core GPU",
      "16GB RAM",
    ],
    images: [
      "https://example.com/macbook-pro-14-1.jpg",
      "https://example.com/macbook-pro-14-2.jpg",
    ],
    stores: [
      {
        id: "s21",
        storeName: "Apple Store",
        storePrice: "1999.00",
        productUrl: "https://www.apple.com/macbook-pro-14",
        currencyCode: "USD",
        currencySymbol: "$",
      },
      {
        id: "s22",
        storeName: "Micro Center",
        storePrice: "1899.99",
        productUrl: "https://www.microcenter.com/macbook-pro-14",
        currencyCode: "USD",
        currencySymbol: "$",
      },
    ],
  },
  {
    id: "p12",
    barcodeNumber: "0840080626734",
    barcodeType: "UPC",
    barcodeFormats: "UPC-A",
    asin: "B09V3YW8KM",
    model: "Pixel 7 Pro",
    productName: "Google Pixel 7 Pro 128GB",
    category: "Smartphones",
    manufacturer: "Google",
    brand: "Google",
    color: "Obsidian",
    description: "Google's best-of-everything phone",
    features: [
      "6.7-inch display",
      "Google Tensor G2",
      "48MP telephoto camera",
      "5000mAh battery",
    ],
    images: [
      "https://example.com/pixel-7-pro-1.jpg",
      "https://example.com/pixel-7-pro-2.jpg",
    ],
    stores: [
      {
        id: "s23",
        storeName: "Google Store",
        storePrice: "899.00",
        productUrl: "https://store.google.com/pixel-7-pro",
        currencyCode: "USD",
        currencySymbol: "$",
      },
      {
        id: "s24",
        storeName: "Amazon",
        storePrice: "849.00",
        productUrl: "https://www.amazon.com/google-pixel-7-pro",
        currencyCode: "USD",
        currencySymbol: "$",
      },
    ],
  },
  {
    id: "p13",
    barcodeNumber: "0685387188703",
    barcodeType: "UPC",
    barcodeFormats: "UPC-A",
    asin: "B0BXVQFGFZ",
    model: "EB-1795F",
    productName: "Epson PowerLite 1795F Wireless Full HD 1080p 3LCD Projector",
    category: "Projectors",
    manufacturer: "Epson",
    brand: "Epson",
    color: "White",
    description: "Ultra thin and light with exceptional image quality",
    features: [
      "1080p resolution",
      "Wireless connectivity",
      "3200 lumens",
      "Auto screen fit",
    ],
    images: [
      "https://example.com/epson-projector-1.jpg",
      "https://example.com/epson-projector-2.jpg",
    ],
    stores: [
      {
        id: "s25",
        storeName: "Epson",
        storePrice: "999.99",
        productUrl: "https://epson.com/powerlite-1795f",
        currencyCode: "USD",
        currencySymbol: "$",
      },
      {
        id: "s26",
        storeName: "Staples",
        storePrice: "979.99",
        productUrl: "https://www.staples.com/epson-powerlite-1795f",
        currencyCode: "USD",
        currencySymbol: "$",
      },
    ],
  },
  {
    id: "p14",
    barcodeNumber: "0086279114809",
    barcodeType: "UPC",
    barcodeFormats: "UPC-A",
    asin: "B07WK53M99",
    model: "BP7850",
    productName: "Braun Series 9 Pro Electric Shaver",
    category: "Personal Care",
    manufacturer: "Braun",
    brand: "Braun",
    color: "Silver",
    description: "The world's most efficient shaver with ProLift trimmer",
    features: [
      "AutoSense technology",
      "5 shaving elements",
      "60-minute battery life",
      "Waterproof",
    ],
    images: [
      "https://example.com/braun-series-9-1.jpg",
      "https://example.com/braun-series-9-2.jpg",
    ],
    stores: [
      {
        id: "s27",
        storeName: "Braun",
        storePrice: "329.99",
        productUrl: "https://braun.com/series-9-pro",
        currencyCode: "USD",
        currencySymbol: "$",
      },
      {
        id: "s28",
        storeName: "Amazon",
        storePrice: "299.95",
        productUrl: "https://www.amazon.com/braun-series-9-pro",
        currencyCode: "USD",
        currencySymbol: "$",
      },
    ],
  },
  {
    id: "p15",
    barcodeNumber: "0193015538800",
    barcodeType: "UPC",
    barcodeFormats: "UPC-A",
    asin: "B0B3C5HNPQ",
    model: "Quest 2",
    productName: "Meta Quest 2 128GB VR Headset",
    category: "Virtual Reality",
    manufacturer: "Meta",
    brand: "Meta",
    color: "White",
    description: "All-in-one virtual reality headset",
    features: [
      "No PC or console required",
      "3D cinematic sound",
      "Next-generation graphics",
      "Easy setup",
    ],
    images: [
      "https://example.com/meta-quest-2-1.jpg",
      "https://example.com/meta-quest-2-2.jpg",
    ],
    stores: [
      {
        id: "s29",
        storeName: "Meta",
        storePrice: "299.99",
        productUrl: "https://www.meta.com/quest-2",
        currencyCode: "USD",
        currencySymbol: "$",
      },
      {
        id: "s30",
        storeName: "Best Buy",
        storePrice: "299.99",
        productUrl: "https://www.bestbuy.com/meta-quest-2",
        currencyCode: "USD",
        currencySymbol: "$",
      },
    ],
  },
  {
    id: "p16",
    barcodeNumber: "0885170437852",
    barcodeType: "UPC",
    barcodeFormats: "UPC-A",
    asin: "B09DYZB46C",
    model: "SRS-XB43",
    productName: "Sony SRS-XB43 EXTRA BASS Wireless Portable Speaker",
    category: "Speakers",
    manufacturer: "Sony",
    brand: "Sony",
    color: "Black",
    description: "Powerful sound and deep bass with X-Balanced speakers",
    features: [
      "IP67 waterproof",
      "24-hour battery life",
      "Party lights",
      "Bluetooth connectivity",
    ],
    images: [
      "https://example.com/sony-srs-xb43-1.jpg",
      "https://example.com/sony-srs-xb43-2.jpg",
    ],
    stores: [
      {
        id: "s31",
        storeName: "Sony",
        storePrice: "169.99",
        productUrl: "https://www.sony.com/srs-xb43",
        currencyCode: "USD",
        currencySymbol: "$",
      },
      {
        id: "s32",
        storeName: "Amazon",
        storePrice: "148.00",
        productUrl: "https://www.amazon.com/sony-srs-xb43",
        currencyCode: "USD",
        currencySymbol: "$",
      },
    ],
  },
  {
    id: "p17",
    barcodeNumber: "5030917291012",
    barcodeType: "EAN",
    barcodeFormats: "EAN-13",
    asin: "B099NHH2FQ",
    model: "9780",
    productName: "Call of Duty: Modern Warfare III - PlayStation 5",
    category: "Video Games",
    manufacturer: "Activision",
    brand: "Activision",
    color: "N/A",
    description: "The next evolution of Call of Duty combat",
    features: [
      "Campaign mode",
      "Multiplayer mode",
      "Warzone integration",
      "4K HDR graphics",
    ],
    images: [
      "https://example.com/cod-mw3-1.jpg",
      "https://example.com/cod-mw3-2.jpg",
    ],
    stores: [
      {
        id: "s33",
        storeName: "GameStop",
        storePrice: "69.99",
        productUrl: "https://www.gamestop.com/cod-mw3",
        currencyCode: "USD",
        currencySymbol: "$",
      },
      {
        id: "s34",
        storeName: "Best Buy",
        storePrice: "69.99",
        productUrl: "https://www.bestbuy.com/cod-mw3",
        currencyCode: "USD",
        currencySymbol: "$",
      },
    ],
  },
  {
    id: "p18",
    barcodeNumber: "5060662581329",
    barcodeType: "EAN",
    barcodeFormats: "EAN-13",
    asin: "B09X1WRHPJ",
    model: "90MW0481",
    productName: "ASUS ROG Strix G15 Gaming Laptop",
    category: "Laptops",
    manufacturer: "ASUS",
    brand: "ROG",
    color: "Eclipse Gray",
    description: "Next-gen gaming performance with AMD Ryzen 9 and RTX 3060",
    features: [
      "AMD Ryzen 9 5900HX",
      "NVIDIA GeForce RTX 3060",
      "16GB DDR4",
      "512GB PCIe SSD",
    ],
    images: [
      "https://example.com/asus-rog-strix-1.jpg",
      "https://example.com/asus-rog-strix-2.jpg",
    ],
    stores: [
      {
        id: "s35",
        storeName: "Newegg",
        storePrice: "1299.99",
        productUrl: "https://www.newegg.com/asus-rog-strix-g15",
        currencyCode: "USD",
        currencySymbol: "$",
      },
      {
        id: "s36",
        storeName: "Amazon",
        storePrice: "1349.00",
        productUrl: "https://www.amazon.com/asus-rog-strix-g15",
        currencyCode: "USD",
        currencySymbol: "$",
      },
    ],
  },
  {
    id: "p19",
    barcodeNumber: "0097855161574",
    barcodeType: "UPC",
    barcodeFormats: "UPC-A",
    asin: "B07Z6RQL8J",
    model: "WH-CH710N",
    productName: "Bose QuietComfort 45 Noise Cancelling Headphones",
    category: "Headphones",
    manufacturer: "Bose",
    brand: "Bose",
    color: "Triple Black",
    description: "High-fidelity audio with world-class noise cancellation",
    features: [
      "Acoustic Noise Cancelling",
      "24-hour battery life",
      "TriPort acoustic design",
      "Bluetooth 5.1",
    ],
    images: [
      "https://example.com/bose-qc45-1.jpg",
      "https://example.com/bose-qc45-2.jpg",
    ],
    stores: [
      {
        id: "s37",
        storeName: "Bose",
        storePrice: "329.00",
        productUrl: "https://www.bose.com/quietcomfort-45",
        currencyCode: "USD",
        currencySymbol: "$",
      },
      {
        id: "s38",
        storeName: "Amazon",
        storePrice: "279.00",
        productUrl: "https://www.amazon.com/bose-quietcomfort-45",
        currencyCode: "USD",
        currencySymbol: "$",
      },
    ],
  },
  {
    id: "p20",
    barcodeNumber: "8720377031704",
    barcodeType: "EAN",
    barcodeFormats: "EAN-13",
    asin: "B09C1WN8SR",
    model: "HL1711",
    productName: "Philips Hue White and Color Ambiance Starter Kit",
    category: "Smart Home",
    manufacturer: "Signify",
    brand: "Philips Hue",
    color: "Multicolor",
    description:
      "Smart lighting system with 16 million colors and warm to cool white light",
    features: [
      "Works with Alexa",
      "Bluetooth compatible",
      "Includes bridge",
      "3 bulbs included",
    ],
    images: [
      "https://example.com/philips-hue-1.jpg",
      "https://example.com/philips-hue-2.jpg",
    ],
    stores: [
      {
        id: "s39",
        storeName: "Philips Hue",
        storePrice: "199.99",
        productUrl: "https://www.philips-hue.com/starter-kit",
        currencyCode: "USD",
        currencySymbol: "$",
      },
      {
        id: "s40",
        storeName: "Best Buy",
        storePrice: "179.99",
        productUrl: "https://www.bestbuy.com/philips-hue-starter-kit",
        currencyCode: "USD",
        currencySymbol: "$",
      },
    ],
  },
];

const storesSeedData = productSeedData.reduce<Store[]>((acc, product) => {
  const stores: Store[] = product.stores.map((store) => ({
    ...store,
    productId: product.id,
  }));
  return [...acc, ...stores];
}, []);

const seed = async () => {
  // Delete all existing data
  await db.delete(store);
  await db.delete(product);

  // Insert seed data
  await db.insert(product).values(productSeedData);
  await db.insert(store).values(storesSeedData);
};

await seed();
