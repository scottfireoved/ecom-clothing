const SHOP_DATA = [
  {
    id: 1,
    title: 'New Releases',
    routeName: 'releases',
    items: [
      {
        id: 1,
        name: 'Interior Light Bar',
        imageUrl: 'https://www.quadratec.com/sites/default/files/styles/product_zoomed/public/product_images/quadratec-97109.1400-stealth-interior-windshield-light-bar-jeep-wrangler-jl-zoom-white-main.jpg',
        price: 700
      },
      {
        id: 2,
        name: 'Freedom Panel Soft Top',
        imageUrl: 'https://www.quadratec.com/sites/default/files/styles/product_zoomed/public/product_images/Bestop-52452-17-Sunrider-For-Hardtop-JL-Open-No-Doors.jpg',
        price: 700
      },
      {
        id: 3,
        name: 'Tubular Doors',
        imageUrl: 'https://www.quadratec.com/sites/default/files/styles/product_zoomed/public/product_images/mopar-77072498-front-rear-tube%20doors-jeep-wrangler-jl-main2.jpg',
        price: 1200
      },
      {
        id: 4,
        name: 'Stubby Bumper',
        imageUrl: 'https://www.quadratec.com/sites/default/files/styles/product_zoomed/public/product_images/235467.jpg',
        price: 600
      },
      {
        id: 5,
        name: 'Rear Bumper',
        imageUrl: 'https://www.quadratec.com/sites/default/files/styles/product_zoomed/public/product_images/ARB-5650380-Rear-Bumper-Jeep-Wrangler-JL-Installed.jpg',
        price: 835
      },
      {
        id: 6,
        name: 'Fast Back Hardtop',
        imageUrl: 'https://www.quadratec.com/sites/default/files/styles/product_zoomed/public/product_images/DV8-hardtop-jku-full.jpg',
        price: 2800
      },
      {
        id: 7,
        name: 'Offroad Slim Fenders',
        imageUrl: 'https://www.quadratec.com/sites/default/files/styles/product_zoomed/public/product_images/DV8-Slim-Fender-JK-FENDB-06-side.jpg',
        price: 510
      },
      {
        id: 8,
        name: 'Side Armor Step',
        imageUrl: 'https://www.quadratec.com/sites/default/files/styles/product_zoomed/public/product_images/quadratec-12004.3211-qrc-side-step-armor-jeep-wrangler-jk-unlimited.jpg',
        price: 300
      },
      {
        id: 9,
        name: 'Pre-Runner LED Light',
        imageUrl: 'https://www.quadratec.com/sites/default/files/styles/product_zoomed/public/product_images/quadratec-prerunner-led%20grille-lights-jeep-wrangler-jl-main.jpg',
        price: 35
      }
    ]
  },
  {
    id: 2,
    title: 'Performance',
    routeName: 'performance',
    items: [
      {
        id: 10,
        name: 'Snorkel Kit',
        imageUrl: 'https://www.quadratec.com/sites/default/files/styles/product_zoomed/public/product_images/rugged-ridge-hi-low-mount-snorkel-system-jl-jt-17756.31-installed.jpg',
        price: 150
      },
      {
        id: 11,
        name: '3.5" Lift Kit',
        imageUrl: 'https://www.quadratec.com/sites/default/files/styles/product_large/public/product_images/EVO-241B-1-Stage-1-Enforcer-Pro-Kit-NV2514-JL_0.jpg',
        price: 5640
      },
      {
        id: 12,
        name: '2.5" Lift Kit',
        imageUrl: 'https://www.quadratec.com/sites/default/files/styles/product_large/public/product_images/98209.jpg',
        price: 835
      },
      {
        id: 13,
        name: 'Alternator',
        imageUrl: 'https://www.quadratec.com/sites/default/files/styles/product_zoomed/public/product_images/Mean_Green_MG1584_Alternator.jpg',
        price: 450
      },
      {
        id: 14,
        name: 'Nike Red High Tops',
        imageUrl: 'https://www.quadratec.com/sites/default/files/styles/product_zoomed/public/product_images/Magnaflow-axle-back-black-15160-01.jpg',
        price: 160
      },
      {
        id: 15,
        name: 'Nike Brown High Tops',
        imageUrl: 'https://i.ibb.co/fMTV342/nike-brown.png',
        price: 160
      },
      {
        id: 16,
        name: 'Air Jordan Limited',
        imageUrl: 'https://i.ibb.co/w4k6Ws9/nike-funky.png',
        price: 190
      },
      {
        id: 17,
        name: 'Timberlands',
        imageUrl: 'https://i.ibb.co/Mhh6wBg/timberlands.png',
        price: 200
      }
    ]
  },
  {
    id: 3,
    title: 'Accessories',
    routeName: 'accessories',
    items: [
      {
        id: 18,
        name: 'Black Jean Shearling',
        imageUrl: 'https://i.ibb.co/XzcwL5s/black-shearling.png',
        price: 125
      },
      {
        id: 19,
        name: 'Blue Jean Jacket',
        imageUrl: 'https://i.ibb.co/mJS6vz0/blue-jean-jacket.png',
        price: 90
      },
      {
        id: 20,
        name: 'Grey Jean Jacket',
        imageUrl: 'https://i.ibb.co/N71k1ML/grey-jean-jacket.png',
        price: 90
      },
      {
        id: 21,
        name: 'Brown Shearling',
        imageUrl: 'https://i.ibb.co/s96FpdP/brown-shearling.png',
        price: 165
      },
      {
        id: 22,
        name: 'Tan Trench',
        imageUrl: 'https://i.ibb.co/M6hHc3F/brown-trench.png',
        price: 185
      }
    ]
  },
  {
    id: 4,
    title: 'Tires',
    routeName: 'tires',
    items: [
      {
        id: 23,
        name: 'Blue Tanktop',
        imageUrl: 'https://i.ibb.co/7CQVJNm/blue-tank.png',
        price: 25
      },
      {
        id: 24,
        name: 'Floral Blouse',
        imageUrl: 'https://i.ibb.co/4W2DGKm/floral-blouse.png',
        price: 20
      },
      {
        id: 25,
        name: 'Floral Dress',
        imageUrl: 'https://i.ibb.co/KV18Ysr/floral-skirt.png',
        price: 80
      },
      {
        id: 26,
        name: 'Red Dots Dress',
        imageUrl: 'https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png',
        price: 80
      },
      {
        id: 27,
        name: 'Striped Sweater',
        imageUrl: 'https://i.ibb.co/KmSkMbH/striped-sweater.png',
        price: 45
      },
      {
        id: 28,
        name: 'Yellow Track Suit',
        imageUrl: 'https://i.ibb.co/v1cvwNf/yellow-track-suit.png',
        price: 135
      },
      {
        id: 29,
        name: 'White Blouse',
        imageUrl: 'https://i.ibb.co/qBcrsJg/white-vest.png',
        price: 20
      }
    ]
  }
];

export default SHOP_DATA;
