const products = [
  {
    id: 1,
    name: "Nike Air Max 90",
    description: "Nike Air Max 90 este un pantof clasic care oferă confort și stil. Are o parte superioară durabilă și o talpă intermediară amortizată pentru un suport maxim. Perfect pentru uzura de zi cu zi.",
    stars: 4,
    price: 99.99,
    category: "men",
    size: [41, 42, 43, 44, 45],
    image: "../../style/img/products/image1.jpg"
  },
  {
    id: 2,
    name: "Adidas Ultraboost",
    description: "Adidas Ultraboost este un pantof de alergare popular, cunoscut pentru amortizarea receptivă și designul ușor. Oferă o revenire excelentă a energiei și suport în timpul antrenamentelor.",
    stars: 5,
    price: 129.99,
    category: "men",
    size: [40, 41, 42, 43, 44],
    image: "../../style/img/products/image2.jpg"
  },
  {
    id: 3,
    name: "Converse Chuck Taylor All Star",
    description: "Converse Chuck Taylor All Star este un adidas iconic care nu se demodează niciodată. Are o parte superioară din pânză și o talpă din cauciuc pentru durabilitate. Disponibil în diverse culori.",
    stars: 4,
    price: 59.99,
    category: "women",
    size: [35, 36, 37, 38, 39],
    image: "../../style/img/products/image3.jpg"
  },
  {
    id: 4,
    name: "Puma Suede Classic",
    description: "Pantoful Puma Suede Classic este un pantof atemporal care oferă un aspect retro și un confort superior. Acesta are o parte superioară din piele de căprioară și o talpă exterioară din cauciuc pentru o tracțiune excelentă.",
    stars: 4,
    price: 79.99,
    category: "men",
    size: [40, 41, 42, 43, 44],
    image: "../../style/img/products/image4.jpg"
  },
  {
    id: 5,
    name: "Reebok Classic Leather",
    description: "Modelul Reebok Classic Leather este un adidaș iconic care combină stilul și funcționalitatea. Acesta are o parte superioară din piele moale și o talpă intermediară amortizată pentru un confort pe tot parcursul zilei.",
    stars: 4,
    price: 89.99,
    category: "women",
    size: [36, 37, 38, 39, 40],
    image: "../../style/img/products/image5.jpg"
  },
  {
    id: 6,
    name: "New Balance 574",
    description: "New Balance 574 este un adidaș versatil care oferă o combinație perfectă de stil și confort. Acesta are o parte superioară din piele de căprioară și plasă și o talpă intermediară ENCAP pentru un suport superior.",
    stars: 4,
    price: 89.99,
    category: "men",
    size: [40, 41, 42, 43, 44],
    image: "../../style/img/products/image6.jpg"
  },
  {
    id: 7,
    name: "Vans Authentic",
    description: "Vans Authentic este un pantof de skate clasic, cunoscut pentru simplitatea și durabilitatea sa. Are o parte superioară din pânză și o talpă exterioară din cauciuc vulcanizat pentru o aderență sporită.",
    stars: 4,
    price: 49.99,
    category: "men",
    size: [41, 42, 43, 44, 45],
    image: "../../style/img/products/image7.jpg"
  },
  {
    id: 8,
    name: "Nike Roshe One",
    description: "Nike Roshe One este un pantof ușor și respirabil, conceput pentru confortul de zi cu zi. Are o parte superioară din plasă și o talpă intermediară Phylon amortizată pentru o senzație de reacție.",
    stars: 4,
    price: 79.99,
    category: "women",
    size: [36, 37, 38, 39, 40],
    image: "../../style/img/products/image8.jpg"
  },
  {
    id: 9,
    name: "Adidas Superstar",
    description: "Adidas Superstar este un adidaș clasic care a fost un simbol al stilului de stradă timp de zeci de ani. Acesta are o parte superioară din piele și designul iconic al vârfului în formă de coajă.",
    stars: 5,
    price: 89.99,
    category: "men",
    size: [40, 41, 42, 43, 44],
    image: "../../style/img/products/image9.jpg"
  },
  {
    id: 10,
    name: "Converse Jack Purcell",
    description: "Converse Jack Purcell este un pantof atemporal cunoscut pentru designul său curat și minimalist. Acesta are o parte superioară din pânză și o față zâmbăreață semnătură pe vârful piciorului.",
    stars: 4,
    price: 69.99,
    category: "women",
    size: [35, 36, 37, 38, 39],
    image: "../../style/img/products/image10.jpg"
  },
  {
    id: 11,
    name: "Puma Clyde Court",
    description: "Puma Clyde Court este un pantof de baschet performant care oferă performanțe excepționale pe teren. Acesta dispune de o parte superioară ușoară și amortizare receptivă.",
    stars: 5,
    price: 129.99,
    category: "men",
    size: [40, 41, 42, 43, 44],
    image: "../../style/img/products/image11.jpg"
  },
  {
    id: 12,
    name: "Reebok Club C 85",
    description: "Reebok Club C 85 este un pantof de tenis clasic care emană un stil retro. Acesta are o parte superioară din piele moale și o talpă intermediară amortizată pentru confort și susținere.",
    stars: 4,
    price: 79.99,
    category: "women",
    size: [36, 37, 38, 39, 40],
    image: "../../style/img/products/image12.jpg"
  },
  {
    id: 13,
    name: "New Balance 997",
    description: "New Balance 997 este un adidaș premium de lifestyle care oferă o combinație perfectă de stil și măiestrie. Acesta are o parte superioară din piele de căprioară și plasă și o talpă intermediară ENCAP.",
    stars: 5,
    price: 149.99,
    category: "men",
    size: [40, 41, 42, 43, 44],
    image: "../../style/img/products/image13.jpg"
  },
  {
    id: 14,
    name: "Vans Slip-On",
    description: "Pantoful Vans Slip-On este un pantof de skate clasic care oferă un stil și un confort fără efort. Acesta are o parte superioară din pânză și accente laterale elastice pentru a fi ușor de încălțat și de scos.",
    stars: 4,
    price: 54.99,
    category: "men",
    size: [41, 42, 43, 44, 45],
    image: "../../style/img/products/image14.jpg"
  },
  {
    id: 15,
    name: "Nike Air Force 1",
    description: "Nike Air Force 1 este un pantof de baschet iconic care a devenit un element de bază al îmbrăcămintei de stradă. Acesta are o parte superioară din piele și o unitate Nike Air pe toată lungimea pentru o amortizare superioară.",
    stars: 5,
    price: 109.99,
    category: "women",
    size: [36, 37, 38, 39, 40],
    image: "../../style/img/products/image15.jpg"
  },
  {
    id: 16,
    name: "Adidas Stan Smith",
    description: "Adidas Stan Smith este un pantof de tenis legendar, cunoscut pentru designul său curat și minimalist. Acesta are o parte superioară din piele și 3 benzi perforate pentru un aspect atemporal.",
    stars: 4,
    price: 79.99,
    category: "men",
    size: [40, 41, 42, 43, 44],
    image: "../../style/img/products/image16.jpg"
  },
  {
    id: 17,
    name: "Converse Chuck 70",
    description: "Modelul Converse Chuck 70 este o versiune premium a clasicului Chuck Taylor All Star. Are o parte superioară din pânză de epocă și o amortizare îmbunătățită pentru un confort maxim.",
    stars: 5,
    price: 79.99,
    category: "women",
    size: [35, 36, 37, 38, 39],
    image: "../../style/img/products/image17.jpg"
  },
  {
    id: 18,
    name: "Puma RS-X",
    description: "Modelul Puma RS-X este un adidaș gros care combină elementele de design retro cu confortul modern. Are o parte superioară din plasă și piele și o talpă voluminoasă, dar ușoară.",
    stars: 4,
    price: 109.99,
    category: "men",
    size: [40, 41, 42, 43, 44],
    image: "../../style/img/products/image18.jpg"
  },
  {
    id: 19,
    name: "Reebok Aztrek",
    description: "Reebok Aztrek este un adidaș inspirat din anii '90, care oferă un aspect îndrăzneț și retro. Are o parte superioară din material sintetic și textil și tehnologie Hexalite pentru amortizare.",
    stars: 4,
    price: 89.99,
    category: "women",
    size: [36, 37, 38, 39, 40],
    image: "../../style/img/products/image19.jpg"
  },
  {
    id: 20,
    name: "New Balance Fresh Foam Cruz",
    description: "New Balance Fresh Foam Cruz este un pantof de alergare versatil care oferă o cursă amortizată și receptivă. Acesta are o parte superioară din tricot și o talpă intermediară Fresh Foam.",
    stars: 5,
    price: 89.99,
    category: "men",
    size: [40, 41, 42, 43, 44],
    image: "../../style/img/products/image20.jpg"
  },
  {
    id: 21,
    name: "Vans Era",
    description: "Vans Era este un pantof de skate clasic, cunoscut pentru silueta sa low-top și gulerul căptușit. Are o parte superioară din pânză și o talpă exterioară tip waffle pentru aderență și durabilitate.",
    stars: 4,
    price: 59.99,
    category: "men",
    size: [41, 42, 43, 44, 45],
    image: "../../style/img/products/image21.jpg"
  },
  {
    id: 22,
    name: "Nike Free RN",
    description: "Nike Free RN este un pantof de alergare ușor, care oferă flexibilitate naturală și o senzație asemănătoare cu cea a piciorului gol. Are o parte superioară din plasă respirabilă și un călcâi rotunjit pentru un pas lin.",
    stars: 4,
    price: 99.99,
    category: "women",
    size: [36, 37, 38, 39, 40],
    image: "../../style/img/products/image22.jpg"
  },
  {
    id: 23,
    name: "Adidas Gazelle",
    description: "Adidas Gazelle este un sneaker clasic care a fost favoritul sportivilor și al pasionaților de modă timp de zeci de ani. Are o parte superioară din piele de căprioară și 3 dungi contrastante.",
    stars: 5,
    price: 89.99,
    category: "men",
    size: [40, 41, 42, 43, 44],
    image: "../../style/img/products/image23.jpg"
  },
  {
    id: 24,
    name: "Converse One Star",
    description: "Converse One Star este un adidaș retro care oferă un aspect elegant și stilat. Are o parte superioară din piele de căprioară și o talpă amortizată pentru un confort pe tot parcursul zilei.",
    stars: 4,
    price: 69.99,
    category: "women",
    size: [35, 36, 37, 38, 39],
    image: "../../style/img/products/image24.jpg"
  },
  {
    id: 25,
    name: "Puma Future Rider",
    description: "Puma Future Rider este un adidaș modern care combină designul vintage cu caracteristici contemporane. Are o parte superioară din nylon și piele de căprioară și o talpă intermediară care absoarbe șocurile.",
    stars: 4,
    price: 79.99,
    category: "men",
    size: [40, 41, 42, 43, 44],
    image: "../../style/img/products/image25.jpg"
  },
  {
    id: 26,
    name: "Reebok Nano X",
    description: "Reebok Nano X este un pantof de antrenament de înaltă performanță conceput pentru sportivii CrossFit. Acesta dispune de o parte superioară flexibilă și amortizare receptivă pentru stabilitate și susținere optimă.",
    stars: 5,
    price: 129.99,
    category: "women",
    size: [36, 37, 38, 39, 40],
    image: "../../style/img/products/image26.jpg"
  },
  {
    id: 27,
    name: "New Balance 990",
    description: "New Balance 990 este un pantof de alergare premium care oferă confort și stabilitate superioare. Are o parte superioară din piele de porc și plasă și un guler din spumă cu densitate dublă.",
    stars: 5,
    price: 179.99,
    category: "men",
    size: [40, 41, 42, 43, 44],
    image: "../../style/img/products/image27.jpg"
  },
  {
    id: 28,
    name: "Vans Sk8-Hi",
    description: "Vans Sk8-Hi este un pantof de skate clasic cu vârf înalt, cunoscut pentru construcția sa durabilă și gulerul căptușit. Are o parte superioară din pânză și piele de căprioară și o talpă exterioară din cauciuc vulcanizat.",
    stars: 4,
    price: 69.99,
    category: "men",
    size: [41, 42, 43, 44, 45],
    image: "../../style/img/products/image28.jpg"
  },
  {
    id: 29,
    name: "Nike Air Zoom Pegasus",
    description: "Nike Air Zoom Pegasus este un pantof de alergare versatil care oferă o cursă receptivă și amortizată. Este prevăzut cu o parte superioară din plasă respirabilă și unități Zoom Air în partea din față a piciorului și în călcâi.",
    stars: 5,
    price: 109.99,
    category: "women",
    size: [36, 37, 38, 39, 40],
    image: "../../style/img/products/image29.jpg"
  },
  {
    id: 30,
    name: "Adidas NMD",
    description: "Adidas NMD este un sneaker modern care combină stilul de stradă cu tehnologia inovatoare. Are o parte superioară Primeknit ușoară și o amortizare Boost receptivă.",
    stars: 4,
    price: 129.99,
    category: "men",
    size: [40, 41, 42, 43, 44],
    image: "../../style/img/products/image30.jpg"
  }
];
