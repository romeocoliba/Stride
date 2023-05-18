const products = [
  {
    id: 1,
    name: "Nike Air Max 90",
    description: "The Nike Air Max 90 is a classic shoe that offers comfort and style. It features a durable upper and a cushioned midsole for maximum support. Perfect for everyday wear.",
    stars: 4,
    price: 99.99,
    category: "men",
    size: [41, 42, 43, 44, 45],
    image: "../../style/img/products/image1.jpg"
  },
  {
    id: 2,
    name: "Adidas Ultraboost",
    description: "The Adidas Ultraboost is a popular running shoe known for its responsive cushioning and lightweight design. It provides excellent energy return and support during workouts.",
    stars: 5,
    price: 129.99,
    category: "men",
    size: [40, 41, 42, 43, 44],
    image: "../../style/img/products/image2.jpg"
  },
  {
    id: 3,
    name: "Converse Chuck Taylor All Star",
    description: "The Converse Chuck Taylor All Star is an iconic sneaker that never goes out of style. It features a canvas upper and a rubber sole for durability. Available in various colors.",
    stars: 4,
    price: 59.99,
    category: "women",
    size: [35, 36, 37, 38, 39],
    image: "../../style/img/products/image3.jpg"
  },
  {
    id: 4,
    name: "Puma Suede Classic",
    description: "The Puma Suede Classic is a timeless shoe that offers a retro look and superior comfort. It features a suede upper and a rubber outsole for excellent traction.",
    stars: 4,
    price: 79.99,
    category: "men",
    size: [40, 41, 42, 43, 44],
    image: "../../style/img/products/image4.jpg"
  },
  {
    id: 5,
    name: "Reebok Classic Leather",
    description: "The Reebok Classic Leather is an iconic sneaker that combines style and functionality. It features a soft leather upper and a cushioned midsole for all-day comfort.",
    stars: 4,
    price: 89.99,
    category: "women",
    size: [36, 37, 38, 39, 40],
    image: "../../style/img/products/image5.jpg"
  },
  {
    id: 6,
    name: "New Balance 574",
    description: "The New Balance 574 is a versatile sneaker that offers a perfect blend of style and comfort. It features a suede and mesh upper and an ENCAP midsole for superior support.",
    stars: 4,
    price: 89.99,
    category: "men",
    size: [40, 41, 42, 43, 44],
    image: "../../style/img/products/image6.jpg"
  },
  {
    id: 7,
    name: "Vans Authentic",
    description: "The Vans Authentic is a classic skate shoe known for its simplicity and durability. It features a canvas upper and a vulcanized rubber outsole for enhanced grip.",
    stars: 4,
    price: 49.99,
    category: "men",
    size: [41, 42, 43, 44, 45],
    image: "../../style/img/products/image7.jpg"
  },
  {
    id: 8,
    name: "Nike Roshe One",
    description: "The Nike Roshe One is a lightweight and breathable shoe designed for everyday comfort. It features a mesh upper and a cushioned Phylon midsole for a responsive feel.",
    stars: 4,
    price: 79.99,
    category: "women",
    size: [36, 37, 38, 39, 40],
    image: "../../style/img/products/image8.jpg"
  },
  {
    id: 9,
    name: "Adidas Superstar",
    description: "The Adidas Superstar is a classic sneaker that has been a symbol of street style for decades. It features a leather upper and the iconic shell toe design.",
    stars: 5,
    price: 89.99,
    category: "men",
    size: [40, 41, 42, 43, 44],
    image: "../../style/img/products/image9.jpg"
  },
  {
    id: 10,
    name: "Converse Jack Purcell",
    description: "The Converse Jack Purcell is a timeless shoe known for its clean and minimalist design. It features a canvas upper and a signature smiley face on the toe cap.",
    stars: 4,
    price: 69.99,
    category: "women",
    size: [35, 36, 37, 38, 39],
    image: "../../style/img/products/image10.jpg"
  },
  {
    id: 11,
    name: "Puma Clyde Court",
    description: "The Puma Clyde Court is a performance basketball shoe that offers exceptional on-court performance. It features a lightweight upper and responsive cushioning.",
    stars: 5,
    price: 129.99,
    category: "men",
    size: [40, 41, 42, 43, 44],
    image: "../../style/img/products/image11.jpg"
  },
  {
    id: 12,
    name: "Reebok Club C 85",
    description: "The Reebok Club C 85 is a classic tennis shoe that exudes retro style. It features a soft leather upper and a cushioned midsole for comfort and support.",
    stars: 4,
    price: 79.99,
    category: "women",
    size: [36, 37, 38, 39, 40],
    image: "../../style/img/products/image12.jpg"
  },
  {
    id: 13,
    name: "New Balance 997",
    description: "The New Balance 997 is a premium lifestyle sneaker that offers a perfect combination of style and craftsmanship. It features a suede and mesh upper and an ENCAP midsole.",
    stars: 5,
    price: 149.99,
    category: "men",
    size: [40, 41, 42, 43, 44],
    image: "../../style/img/products/image13.jpg"
  },
  {
    id: 14,
    name: "Vans Slip-On",
    description: "The Vans Slip-On is a classic skate shoe that provides an effortless style and comfort. It features a canvas upper and elastic side accents for easy on and off.",
    stars: 4,
    price: 54.99,
    category: "men",
    size: [41, 42, 43, 44, 45],
    image: "../../style/img/products/image14.jpg"
  },
  {
    id: 15,
    name: "Nike Air Force 1",
    description: "The Nike Air Force 1 is an iconic basketball shoe that has become a streetwear staple. It features a leather upper and a full-length Nike Air unit for superior cushioning.",
    stars: 5,
    price: 109.99,
    category: "women",
    size: [36, 37, 38, 39, 40],
    image: "../../style/img/products/image15.jpg"
  },
  {
    id: 16,
    name: "Adidas Stan Smith",
    description: "The Adidas Stan Smith is a legendary tennis shoe known for its clean and minimalist design. It features a leather upper and perforated 3-Stripes for a timeless look.",
    stars: 4,
    price: 79.99,
    category: "men",
    size: [40, 41, 42, 43, 44],
    image: "../../style/img/products/image16.jpg"
  },
  {
    id: 17,
    name: "Converse Chuck 70",
    description: "The Converse Chuck 70 is a premium version of the classic Chuck Taylor All Star. It features a vintage canvas upper and enhanced cushioning for maximum comfort.",
    stars: 5,
    price: 79.99,
    category: "women",
    size: [35, 36, 37, 38, 39],
    image: "../../style/img/products/image17.jpg"
  },
  {
    id: 18,
    name: "Puma RS-X",
    description: "The Puma RS-X is a chunky sneaker that combines retro design elements with modern comfort. It features a mesh and leather upper and a bulky, yet lightweight sole.",
    stars: 4,
    price: 109.99,
    category: "men",
    size: [40, 41, 42, 43, 44],
    image: "../../style/img/products/image18.jpg"
  },
  {
    id: 19,
    name: "Reebok Aztrek",
    description: "The Reebok Aztrek is a 90s-inspired sneaker that offers a bold and retro look. It features a synthetic and textile upper and Hexalite technology for cushioning.",
    stars: 4,
    price: 89.99,
    category: "women",
    size: [36, 37, 38, 39, 40],
    image: "../../style/img/products/image19.jpg"
  },
  {
    id: 20,
    name: "New Balance Fresh Foam Cruz",
    description: "The New Balance Fresh Foam Cruz is a versatile running shoe that provides a cushioned and responsive ride. It features a knit upper and a Fresh Foam midsole.",
    stars: 5,
    price: 89.99,
    category: "men",
    size: [40, 41, 42, 43, 44],
    image: "../../style/img/products/image20.jpg"
  },
  {
    id: 21,
    name: "Vans Era",
    description: "The Vans Era is a classic skate shoe known for its low-top silhouette and padded collar. It features a canvas upper and a signature waffle outsole for grip and durability.",
    stars: 4,
    price: 59.99,
    category: "men",
    size: [41, 42, 43, 44, 45],
    image: "../../style/img/products/image21.jpg"
  },
  {
    id: 22,
    name: "Nike Free RN",
    description: "The Nike Free RN is a lightweight running shoe that offers natural flexibility and a barefoot-like feel. It features a breathable mesh upper and a rounded heel for a smooth stride.",
    stars: 4,
    price: 99.99,
    category: "women",
    size: [36, 37, 38, 39, 40],
    image: "../../style/img/products/image22.jpg"
  },
  {
    id: 23,
    name: "Adidas Gazelle",
    description: "The Adidas Gazelle is a classic sneaker that has been a favorite among athletes and fashion enthusiasts for decades. It features a suede upper and contrasting 3-Stripes.",
    stars: 5,
    price: 89.99,
    category: "men",
    size: [40, 41, 42, 43, 44],
    image: "../../style/img/products/image23.jpg"
  },
  {
    id: 24,
    name: "Converse One Star",
    description: "The Converse One Star is a retro sneaker that offers a sleek and stylish look. It features a suede upper and a cushioned insole for all-day comfort.",
    stars: 4,
    price: 69.99,
    category: "women",
    size: [35, 36, 37, 38, 39],
    image: "../../style/img/products/image24.jpg"
  },
  {
    id: 25,
    name: "Puma Future Rider",
    description: "The Puma Future Rider is a modern sneaker that combines vintage design with contemporary features. It features a nylon and suede upper and a shock-absorbing midsole.",
    stars: 4,
    price: 79.99,
    category: "men",
    size: [40, 41, 42, 43, 44],
    image: "../../style/img/products/image25.jpg"
  },
  {
    id: 26,
    name: "Reebok Nano X",
    description: "The Reebok Nano X is a high-performance training shoe designed for CrossFit athletes. It features a flexible upper and responsive cushioning for optimal stability and support.",
    stars: 5,
    price: 129.99,
    category: "women",
    size: [36, 37, 38, 39, 40],
    image: "../../style/img/products/image26.jpg"
  },
  {
    id: 27,
    name: "New Balance 990",
    description: "The New Balance 990 is a premium running shoe that offers superior comfort and stability. It features a pigskin and mesh upper and a dual-density foam collar.",
    stars: 5,
    price: 179.99,
    category: "men",
    size: [40, 41, 42, 43, 44],
    image: "../../style/img/products/image27.jpg"
  },
  {
    id: 28,
    name: "Vans Sk8-Hi",
    description: "The Vans Sk8-Hi is a classic high-top skate shoe known for its durable construction and padded collar. It features a canvas and suede upper and a vulcanized rubber outsole.",
    stars: 4,
    price: 69.99,
    category: "men",
    size: [41, 42, 43, 44, 45],
    image: "../../style/img/products/image28.jpg"
  },
  {
    id: 29,
    name: "Nike Air Zoom Pegasus",
    description: "The Nike Air Zoom Pegasus is a versatile running shoe that offers a responsive and cushioned ride. It features a breathable mesh upper and Zoom Air units in the forefoot and heel.",
    stars: 5,
    price: 109.99,
    category: "women",
    size: [36, 37, 38, 39, 40],
    image: "../../style/img/products/image29.jpg"
  },
  {
    id: 30,
    name: "Adidas NMD",
    description: "The Adidas NMD is a modern sneaker that combines street style with innovative technology. It features a lightweight Primeknit upper and responsive Boost cushioning.",
    stars: 4,
    price: 129.99,
    category: "men",
    size: [40, 41, 42, 43, 44],
    image: "../../style/img/products/image30.jpg"
  }
];
