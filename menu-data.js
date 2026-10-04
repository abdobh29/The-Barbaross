// ==========================================================================
// THE BARBAROSS - OFFICIAL RESTAURANT MENU DATA
// Updated: full menu provided by the owner (2026-10-04)
// ==========================================================================

const restaurantInfo = {
    name: "The Barbaross",
    businessType: "Restaurant & Pizzeria",
    address: "Rue Mennouar Djebbar, Mascara, Algeria",
    phones: ["0674723651", "0793313853"],
    openingHours: "11:00 – 00:00",
    tiktok: "@the.barbarouss",
    tiktokUrl: "https://www.tiktok.com/@the.barbarouss",
    googleMapsUrl: "https://maps.app.goo.gl/acgz37mik21LEj2j7",
    logo: "assets/logo/logo.png",
    video: "assets/video/restaurant-tour.mp4"
};

const menuCategories = [
    {
        "id": "sandwiches",
        "raw_category": "Sandwiches",
        "name": {
            "fr": "Sandwiches",
            "en": "Sandwiches",
            "ar": "سندويتشات"
        },
        "icon": "fa-burger"
    },
    {
        "id": "big-specials-poutine",
        "raw_category": "Big Specials & Poutine",
        "name": {
            "fr": "Big Specials & Poutine",
            "en": "Big Specials & Poutine",
            "ar": "بيغ سبيسيال وبوتين"
        },
        "icon": "fa-bowl-food"
    },
    {
        "id": "tacos-chawarma",
        "raw_category": "Tacos & Chawarma",
        "name": {
            "fr": "Tacos & Chawarma",
            "en": "Tacos & Shawarma",
            "ar": "تاكوس وشاورما"
        },
        "icon": "fa-hotdog"
    },
    {
        "id": "pizza-medium",
        "raw_category": "Pizza · Medium",
        "name": {
            "fr": "Pizza · Medium",
            "en": "Pizza · Medium",
            "ar": "بيتزا متوسطة"
        },
        "icon": "fa-pizza-slice"
    },
    {
        "id": "pizza-large",
        "raw_category": "Pizza · Large",
        "name": {
            "fr": "Pizza · Large",
            "en": "Pizza · Large",
            "ar": "بيتزا كبيرة"
        },
        "icon": "fa-pizza-slice"
    },
    {
        "id": "pizza-mega",
        "raw_category": "Pizza · Méga",
        "name": {
            "fr": "Pizza · Méga",
            "en": "Pizza · Mega",
            "ar": "بيتزا ميغا"
        },
        "icon": "fa-pizza-slice"
    },
    {
        "id": "plats-garnis",
        "raw_category": "Plats Garnis",
        "name": {
            "fr": "Plats Garnis",
            "en": "Plated Dishes",
            "ar": "أطباق مشكلة"
        },
        "icon": "fa-utensils"
    },
    {
        "id": "pates",
        "raw_category": "Pâtes",
        "name": {
            "fr": "Pâtes",
            "en": "Pasta",
            "ar": "معكرونة"
        },
        "icon": "fa-wheat-awn"
    },
    {
        "id": "poisson",
        "raw_category": "Poisson",
        "name": {
            "fr": "Poisson",
            "en": "Fish",
            "ar": "سمك"
        },
        "icon": "fa-fish"
    },
    {
        "id": "tajine",
        "raw_category": "Tajine",
        "name": {
            "fr": "Tajine",
            "en": "Tajine",
            "ar": "طاجين"
        },
        "icon": "fa-pot-food"
    },
    {
        "id": "entrees-froides",
        "raw_category": "Entrées Froides",
        "name": {
            "fr": "Entrées Froides",
            "en": "Cold Appetizers",
            "ar": "مقبلات باردة"
        },
        "icon": "fa-salad"
    },
    {
        "id": "entrees-chaudes",
        "raw_category": "Entrées Chaudes",
        "name": {
            "fr": "Entrées Chaudes",
            "en": "Hot Appetizers",
            "ar": "مقبلات ساخنة"
        },
        "icon": "fa-mug-hot"
    },
    {
        "id": "packs",
        "raw_category": "Packs",
        "name": {
            "fr": "Packs",
            "en": "Packs",
            "ar": "باقات"
        },
        "icon": "fa-box-open"
    },
    {
        "id": "creme-dessert-jus",
        "raw_category": "Crème Dessert & Jus",
        "name": {
            "fr": "Crème Dessert & Jus",
            "en": "Desserts & Juices",
            "ar": "تحليات وعصائر"
        },
        "icon": "fa-ice-cream"
    },
    {
        "id": "boissons-chaudes",
        "raw_category": "Boissons Chaudes",
        "name": {
            "fr": "Boissons Chaudes",
            "en": "Hot Drinks",
            "ar": "مشروبات ساخنة"
        },
        "icon": "fa-coffee"
    },
    {
        "id": "boissons-froides",
        "raw_category": "Boissons Froides",
        "name": {
            "fr": "Boissons Froides",
            "en": "Cold Drinks",
            "ar": "مشروبات باردة"
        },
        "icon": "fa-glass-water"
    }
];

const menuItems = [
    {
        "id": "item_1",
        "categoryId": "sandwiches",
        "categoryName": "Sandwiches",
        "name": {
            "fr": "Sandwiche Poulet Hachée",
            "en": "Sandwiche Poulet Hachée",
            "ar": "Sandwiche Poulet Hachée"
        },
        "description": {
            "fr": "Salade, tomate, poulet haché, pommes de terre frites, omelette, fromage, sauce maison",
            "en": "Salade, tomate, poulet haché, pommes de terre frites, omelette, fromage, sauce maison",
            "ar": "Salade, tomate, poulet haché, pommes de terre frites, omelette, fromage, sauce maison"
        },
        "price": 300,
        "priceFormatted": "300 Da",
        "hasSizes": false,
        "image": "Sandwich poulet hach\u00e9.jpg",
        "isSignature": false
    },
    {
        "id": "item_2",
        "categoryId": "sandwiches",
        "categoryName": "Sandwiches",
        "name": {
            "fr": "Sandwiche Viande Hachée",
            "en": "Sandwiche Viande Hachée",
            "ar": "Sandwiche Viande Hachée"
        },
        "description": {
            "fr": "Salade, tomate, viande hachée, pommes de terre frites, omelette, fromage, sauce maison",
            "en": "Salade, tomate, viande hachée, pommes de terre frites, omelette, fromage, sauce maison",
            "ar": "Salade, tomate, viande hachée, pommes de terre frites, omelette, fromage, sauce maison"
        },
        "price": 350,
        "priceFormatted": "350 Da",
        "hasSizes": false,
        "image": "Sandwich viande hach\u00e9e.jpg",
        "isSignature": false
    },
    {
        "id": "item_3",
        "categoryId": "sandwiches",
        "categoryName": "Sandwiches",
        "name": {
            "fr": "Sandwiche Escalope",
            "en": "Sandwiche Escalope",
            "ar": "Sandwiche Escalope"
        },
        "description": {
            "fr": "Salade, tomate, escalope, pommes de terre frites, omelette, fromage, sauce maison",
            "en": "Salade, tomate, escalope, pommes de terre frites, omelette, fromage, sauce maison",
            "ar": "Salade, tomate, escalope, pommes de terre frites, omelette, fromage, sauce maison"
        },
        "price": 350,
        "priceFormatted": "350 Da",
        "hasSizes": false,
        "image": "Sandwich escalope grill\u00e9.jpg",
        "isSignature": false
    },
    {
        "id": "item_4",
        "categoryId": "sandwiches",
        "categoryName": "Sandwiches",
        "name": {
            "fr": "Sandwiche Mariné",
            "en": "Sandwiche Mariné",
            "ar": "Sandwiche Mariné"
        },
        "description": {
            "fr": "Salade, tomate, poulet mariné, pommes de terre frites, fromage, sauce maison",
            "en": "Salade, tomate, poulet mariné, pommes de terre frites, fromage, sauce maison",
            "ar": "Salade, tomate, poulet mariné, pommes de terre frites, fromage, sauce maison"
        },
        "price": 400,
        "priceFormatted": "400 Da",
        "hasSizes": false,
        "image": "Sandwich marin\u00e9.jpg",
        "isSignature": false
    },
    {
        "id": "item_5",
        "categoryId": "sandwiches",
        "categoryName": "Sandwiches",
        "name": {
            "fr": "Sandwiche Chicken Taquitos",
            "en": "Sandwiche Chicken Taquitos",
            "ar": "Sandwiche Chicken Taquitos"
        },
        "description": {
            "fr": "Salade, tomate, poulet mariné, pommes de terre frites, fromage, sauce mexicaine",
            "en": "Salade, tomate, poulet mariné, pommes de terre frites, fromage, sauce mexicaine",
            "ar": "Salade, tomate, poulet mariné, pommes de terre frites, fromage, sauce mexicaine"
        },
        "price": 400,
        "priceFormatted": "400 Da",
        "hasSizes": false,
        "image": "Sandwich chicken taquitos.jpg",
        "isSignature": false
    },
    {
        "id": "item_6",
        "categoryId": "sandwiches",
        "categoryName": "Sandwiches",
        "name": {
            "fr": "Sandwiche Chicken Fahita",
            "en": "Sandwiche Chicken Fahita",
            "ar": "Sandwiche Chicken Fahita"
        },
        "description": {
            "fr": "Salade, tomate, poulet mariné, pommes de terre frites, fromage, oignons et poivrons, sauce mexicaine",
            "en": "Salade, tomate, poulet mariné, pommes de terre frites, fromage, oignons et poivrons, sauce mexicaine",
            "ar": "Salade, tomate, poulet mariné, pommes de terre frites, fromage, oignons et poivrons, sauce mexicaine"
        },
        "price": 400,
        "priceFormatted": "400 Da",
        "hasSizes": false,
        "image": "Sandwich chicken fahita.jpg",
        "isSignature": false
    },
    {
        "id": "item_7",
        "categoryId": "sandwiches",
        "categoryName": "Sandwiches",
        "name": {
            "fr": "Sandwiche Les Zaba",
            "en": "Sandwiche Les Zaba",
            "ar": "Sandwiche Les Zaba"
        },
        "description": {
            "fr": "Salade, tomate, Les Zaba, pommes de terre frites, fromage, oignons, sauce",
            "en": "Salade, tomate, Les Zaba, pommes de terre frites, fromage, oignons, sauce",
            "ar": "Salade, tomate, Les Zaba, pommes de terre frites, fromage, oignons, sauce"
        },
        "price": 400,
        "priceFormatted": "400 Da",
        "hasSizes": false,
        "image": null,
        "isSignature": false
    },
    {
        "id": "item_8",
        "categoryId": "sandwiches",
        "categoryName": "Sandwiches",
        "name": {
            "fr": "Sandwiche Merguez",
            "en": "Sandwiche Merguez",
            "ar": "Sandwiche Merguez"
        },
        "description": {
            "fr": "Salade, tomate, merguez, pommes de terre frites, fromage, sauce maison",
            "en": "Salade, tomate, merguez, pommes de terre frites, fromage, sauce maison",
            "ar": "Salade, tomate, merguez, pommes de terre frites, fromage, sauce maison"
        },
        "price": 450,
        "priceFormatted": "450 Da",
        "hasSizes": false,
        "image": "Sandwich merguez.jpg",
        "isSignature": false
    },
    {
        "id": "item_9",
        "categoryId": "sandwiches",
        "categoryName": "Sandwiches",
        "name": {
            "fr": "Sandwiche Escalope Panée",
            "en": "Sandwiche Escalope Panée",
            "ar": "Sandwiche Escalope Panée"
        },
        "description": {
            "fr": "Salade, tomate, escalope panée, pommes de terre frites, omelette, fromage, sauce maison",
            "en": "Salade, tomate, escalope panée, pommes de terre frites, omelette, fromage, sauce maison",
            "ar": "Salade, tomate, escalope panée, pommes de terre frites, omelette, fromage, sauce maison"
        },
        "price": 500,
        "priceFormatted": "500 Da",
        "hasSizes": false,
        "image": "Sandwich escalope pan\u00e9.jpg",
        "isSignature": false
    },
    {
        "id": "item_10",
        "categoryId": "sandwiches",
        "categoryName": "Sandwiches",
        "name": {
            "fr": "Sandwiche Hot-Dog",
            "en": "Sandwiche Hot-Dog",
            "ar": "Sandwiche Hot-Dog"
        },
        "description": {
            "fr": "Salade, tomate, hot-dog, pommes de terre frites, omelette, fromage, sauce maison",
            "en": "Salade, tomate, hot-dog, pommes de terre frites, omelette, fromage, sauce maison",
            "ar": "Salade, tomate, hot-dog, pommes de terre frites, omelette, fromage, sauce maison"
        },
        "price": 500,
        "priceFormatted": "500 Da",
        "hasSizes": false,
        "image": null,
        "isSignature": false
    },
    {
        "id": "item_11",
        "categoryId": "sandwiches",
        "categoryName": "Sandwiches",
        "name": {
            "fr": "Sandwiche Barberoussa 7036",
            "en": "Sandwiche Barberoussa 7036",
            "ar": "Sandwiche Barberoussa 7036"
        },
        "description": {
            "fr": "Salade, tomate, poulet mariné, pommes de terre frites, tranches de fromage, sauce maison, sauce barbecue",
            "en": "Salade, tomate, poulet mariné, pommes de terre frites, tranches de fromage, sauce maison, sauce barbecue",
            "ar": "Salade, tomate, poulet mariné, pommes de terre frites, tranches de fromage, sauce maison, sauce barbecue"
        },
        "price": 700,
        "priceFormatted": "700 Da",
        "hasSizes": false,
        "image": null,
        "isSignature": false
    },
    {
        "id": "item_12",
        "categoryId": "sandwiches",
        "categoryName": "Sandwiches",
        "name": {
            "fr": "Sandwiche Baba Hsan",
            "en": "Sandwiche Baba Hsan",
            "ar": "Sandwiche Baba Hsan"
        },
        "description": {
            "fr": "Salade, tomate, escalope panée, pommes de terre frites, tranches de fromage, sauce maison, sauce barbecue",
            "en": "Salade, tomate, escalope panée, pommes de terre frites, tranches de fromage, sauce maison, sauce barbecue",
            "ar": "Salade, tomate, escalope panée, pommes de terre frites, tranches de fromage, sauce maison, sauce barbecue"
        },
        "price": 750,
        "priceFormatted": "750 Da",
        "hasSizes": false,
        "image": "Sandwiche Baba Hsan.jpg",
        "isSignature": false
    },
    {
        "id": "item_13",
        "categoryId": "sandwiches",
        "categoryName": "Sandwiches",
        "name": {
            "fr": "Sandwiche Panozo",
            "en": "Sandwiche Panozo",
            "ar": "Sandwiche Panozo"
        },
        "description": {
            "fr": "Salade, tomate, poulet fumé, cheddar, camembert, sauce maison, sauce barbecue",
            "en": "Salade, tomate, poulet fumé, cheddar, camembert, sauce maison, sauce barbecue",
            "ar": "Salade, tomate, poulet fumé, cheddar, camembert, sauce maison, sauce barbecue"
        },
        "price": 800,
        "priceFormatted": "800 Da",
        "hasSizes": false,
        "image": null,
        "isSignature": false
    },
    {
        "id": "item_14",
        "categoryId": "big-specials-poutine",
        "categoryName": "Big Specials & Poutine",
        "name": {
            "fr": "Big Poulet Haché",
            "en": "Big Poulet Haché",
            "ar": "Big Poulet Haché"
        },
        "description": {
            "fr": "Poulet haché",
            "en": "Poulet haché",
            "ar": "Poulet haché"
        },
        "price": 500,
        "priceFormatted": "500 Da",
        "hasSizes": false,
        "image": null,
        "isSignature": false
    },
    {
        "id": "item_15",
        "categoryId": "big-specials-poutine",
        "categoryName": "Big Specials & Poutine",
        "name": {
            "fr": "Big Viande Hachée",
            "en": "Big Viande Hachée",
            "ar": "Big Viande Hachée"
        },
        "description": {
            "fr": "Viande hachée",
            "en": "Viande hachée",
            "ar": "Viande hachée"
        },
        "price": 500,
        "priceFormatted": "500 Da",
        "hasSizes": false,
        "image": null,
        "isSignature": false
    },
    {
        "id": "item_16",
        "categoryId": "big-specials-poutine",
        "categoryName": "Big Specials & Poutine",
        "name": {
            "fr": "Big Escalope Grillée",
            "en": "Big Escalope Grillée",
            "ar": "Big Escalope Grillée"
        },
        "description": {
            "fr": "Escalope grillée",
            "en": "Escalope grillée",
            "ar": "Escalope grillée"
        },
        "price": 500,
        "priceFormatted": "500 Da",
        "hasSizes": false,
        "image": null,
        "isSignature": false
    },
    {
        "id": "item_17",
        "categoryId": "big-specials-poutine",
        "categoryName": "Big Specials & Poutine",
        "name": {
            "fr": "Big Escalope Panée",
            "en": "Big Escalope Panée",
            "ar": "Big Escalope Panée"
        },
        "description": {
            "fr": "Escalope panée",
            "en": "Escalope panée",
            "ar": "Escalope panée"
        },
        "price": 600,
        "priceFormatted": "600 Da",
        "hasSizes": false,
        "image": null,
        "isSignature": false
    },
    {
        "id": "item_18",
        "categoryId": "big-specials-poutine",
        "categoryName": "Big Specials & Poutine",
        "name": {
            "fr": "Big Ottoman",
            "en": "Big Ottoman",
            "ar": "Big Ottoman"
        },
        "description": {
            "fr": "Salade, tomate, oignons caramélisés, tranches d'escalope panée, tranches de fromage, pommes de terre frites, omelette, fromage, sauce maison",
            "en": "Salade, tomate, oignons caramélisés, tranches d'escalope panée, tranches de fromage, pommes de terre frites, omelette, fromage, sauce maison",
            "ar": "Salade, tomate, oignons caramélisés, tranches d'escalope panée, tranches de fromage, pommes de terre frites, omelette, fromage, sauce maison"
        },
        "price": 800,
        "priceFormatted": "800 Da",
        "hasSizes": false,
        "image": null,
        "isSignature": false
    },
    {
        "id": "item_19",
        "categoryId": "big-specials-poutine",
        "categoryName": "Big Specials & Poutine",
        "name": {
            "fr": "Big Pirate",
            "en": "Big Pirate",
            "ar": "Big Pirate"
        },
        "description": {
            "fr": "Salade, tomate, poulet roulé en tranches, tranches de fromage, pommes de terre frites, omelette, fromage, sauce maison",
            "en": "Salade, tomate, poulet roulé en tranches, tranches de fromage, pommes de terre frites, omelette, fromage, sauce maison",
            "ar": "Salade, tomate, poulet roulé en tranches, tranches de fromage, pommes de terre frites, omelette, fromage, sauce maison"
        },
        "price": 800,
        "priceFormatted": "800 Da",
        "hasSizes": false,
        "image": null,
        "isSignature": false
    },
    {
        "id": "item_20",
        "categoryId": "big-specials-poutine",
        "categoryName": "Big Specials & Poutine",
        "name": {
            "fr": "Big Marin",
            "en": "Big Marin",
            "ar": "Big Marin"
        },
        "description": {
            "fr": "Salade, tomate, viande hachée en tranches, tranches de fromage, pommes de terre frites, omelette, fromage, sauce maison",
            "en": "Salade, tomate, viande hachée en tranches, tranches de fromage, pommes de terre frites, omelette, fromage, sauce maison",
            "ar": "Salade, tomate, viande hachée en tranches, tranches de fromage, pommes de terre frites, omelette, fromage, sauce maison"
        },
        "price": 800,
        "priceFormatted": "800 Da",
        "hasSizes": false,
        "image": null,
        "isSignature": false
    },
    {
        "id": "item_21",
        "categoryId": "big-specials-poutine",
        "categoryName": "Big Specials & Poutine",
        "name": {
            "fr": "Poutine Black Ship",
            "en": "Poutine Black Ship",
            "ar": "Poutine Black Ship"
        },
        "description": {
            "fr": "Pommes de terre frites, poulet pané, sauce fromage, cheddar",
            "en": "Pommes de terre frites, poulet pané, sauce fromage, cheddar",
            "ar": "Pommes de terre frites, poulet pané, sauce fromage, cheddar"
        },
        "price": 700,
        "priceFormatted": "700 Da",
        "hasSizes": false,
        "image": null,
        "isSignature": false
    },
    {
        "id": "item_22",
        "categoryId": "big-specials-poutine",
        "categoryName": "Big Specials & Poutine",
        "name": {
            "fr": "Poutine Dark Raider",
            "en": "Poutine Dark Raider",
            "ar": "Poutine Dark Raider"
        },
        "description": {
            "fr": "Pommes de terre frites, viande hachée, sauce fromage, cheddar",
            "en": "Pommes de terre frites, viande hachée, sauce fromage, cheddar",
            "ar": "Pommes de terre frites, viande hachée, sauce fromage, cheddar"
        },
        "price": 700,
        "priceFormatted": "700 Da",
        "hasSizes": false,
        "image": null,
        "isSignature": false
    },
    {
        "id": "item_23",
        "categoryId": "tacos-chawarma",
        "categoryName": "Tacos & Chawarma",
        "name": {
            "fr": "Tacos Poulet Hachée",
            "en": "Tacos Poulet Hachée",
            "ar": "Tacos Poulet Hachée"
        },
        "description": {
            "fr": "Fromage, poulet haché, pommes de terre frites, tranches de fromage, sauce fromage, sauce maison",
            "en": "Fromage, poulet haché, pommes de terre frites, tranches de fromage, sauce fromage, sauce maison",
            "ar": "Fromage, poulet haché, pommes de terre frites, tranches de fromage, sauce fromage, sauce maison"
        },
        "price": 550,
        "priceFormatted": "550 Da",
        "hasSizes": false,
        "image": "Tacos poulet hach\u00e9.jpg",
        "isSignature": false
    },
    {
        "id": "item_24",
        "categoryId": "tacos-chawarma",
        "categoryName": "Tacos & Chawarma",
        "name": {
            "fr": "Tacos Viande Hachée",
            "en": "Tacos Viande Hachée",
            "ar": "Tacos Viande Hachée"
        },
        "description": {
            "fr": "Fromage, viande hachée, pommes de terre frites, tranches de fromage, sauce fromage, sauce maison",
            "en": "Fromage, viande hachée, pommes de terre frites, tranches de fromage, sauce fromage, sauce maison",
            "ar": "Fromage, viande hachée, pommes de terre frites, tranches de fromage, sauce fromage, sauce maison"
        },
        "price": 650,
        "priceFormatted": "650 Da",
        "hasSizes": false,
        "image": "Tacos viande hach\u00e9e.jpg",
        "isSignature": false
    },
    {
        "id": "item_25",
        "categoryId": "tacos-chawarma",
        "categoryName": "Tacos & Chawarma",
        "name": {
            "fr": "Tacos Mixte",
            "en": "Tacos Mixte",
            "ar": "Tacos Mixte"
        },
        "description": {
            "fr": "Fromage, viande et poulet hachés, pommes de terre frites, tranches de fromage, sauce fromage, sauce maison",
            "en": "Fromage, viande et poulet hachés, pommes de terre frites, tranches de fromage, sauce fromage, sauce maison",
            "ar": "Fromage, viande et poulet hachés, pommes de terre frites, tranches de fromage, sauce fromage, sauce maison"
        },
        "price": 700,
        "priceFormatted": "700 Da",
        "hasSizes": false,
        "image": "Tacos mixte.jpg",
        "isSignature": false
    },
    {
        "id": "item_26",
        "categoryId": "tacos-chawarma",
        "categoryName": "Tacos & Chawarma",
        "name": {
            "fr": "Tacos Gratiné",
            "en": "Tacos Gratiné",
            "ar": "Tacos Gratiné"
        },
        "description": {
            "fr": "Fromage, poulet haché, pommes de terre frites, camembert, tranches de fromage, sauce fromage, sauce maison",
            "en": "Fromage, poulet haché, pommes de terre frites, camembert, tranches de fromage, sauce fromage, sauce maison",
            "ar": "Fromage, poulet haché, pommes de terre frites, camembert, tranches de fromage, sauce fromage, sauce maison"
        },
        "price": 750,
        "priceFormatted": "750 Da",
        "hasSizes": false,
        "image": "Tacos gratin\u00e9.jpg",
        "isSignature": false
    },
    {
        "id": "item_27",
        "categoryId": "tacos-chawarma",
        "categoryName": "Tacos & Chawarma",
        "name": {
            "fr": "Tacos Panée",
            "en": "Tacos Panée",
            "ar": "Tacos Panée"
        },
        "description": {
            "fr": "Fromage, poulet haché pané, pommes de terre frites, tranches de fromage, sauce fromage, sauce maison",
            "en": "Fromage, poulet haché pané, pommes de terre frites, tranches de fromage, sauce fromage, sauce maison",
            "ar": "Fromage, poulet haché pané, pommes de terre frites, tranches de fromage, sauce fromage, sauce maison"
        },
        "price": 750,
        "priceFormatted": "750 Da",
        "hasSizes": false,
        "image": "Tacos pan\u00e9.jpg",
        "isSignature": false
    },
    {
        "id": "item_28",
        "categoryId": "tacos-chawarma",
        "categoryName": "Tacos & Chawarma",
        "name": {
            "fr": "Chawarma Barberousse",
            "en": "Chawarma Barberousse",
            "ar": "Chawarma Barberousse"
        },
        "description": {
            "fr": "Fromage, poulet mariné, pommes de terre frites, sauce fromage, sauce maison",
            "en": "Fromage, poulet mariné, pommes de terre frites, sauce fromage, sauce maison",
            "ar": "Fromage, poulet mariné, pommes de terre frites, sauce fromage, sauce maison"
        },
        "price": 750,
        "priceFormatted": "750 Da",
        "hasSizes": false,
        "image": null,
        "isSignature": false
    },
    {
        "id": "item_29",
        "categoryId": "pizza-medium",
        "categoryName": "Pizza · Medium",
        "name": {
            "fr": "Pizza Marguerite",
            "en": "Pizza Marguerite",
            "ar": "Pizza Marguerite"
        },
        "description": {
            "fr": "Sauce tomate, mozzarella, cheddar",
            "en": "Sauce tomate, mozzarella, cheddar",
            "ar": "Sauce tomate, mozzarella, cheddar"
        },
        "price": 350,
        "priceFormatted": "350 Da",
        "hasSizes": false,
        "image": "Pizza Marguerite.jpg",
        "isSignature": false
    },
    {
        "id": "item_30",
        "categoryId": "pizza-medium",
        "categoryName": "Pizza · Medium",
        "name": {
            "fr": "Pizza Poulet Hachée",
            "en": "Pizza Poulet Hachée",
            "ar": "Pizza Poulet Hachée"
        },
        "description": {
            "fr": "Sauce tomate, mozzarella, cheddar, poulet haché",
            "en": "Sauce tomate, mozzarella, cheddar, poulet haché",
            "ar": "Sauce tomate, mozzarella, cheddar, poulet haché"
        },
        "price": 500,
        "priceFormatted": "500 Da",
        "hasSizes": false,
        "image": "Pizza poulet hach\u00e9.jpg",
        "isSignature": false
    },
    {
        "id": "item_31",
        "categoryId": "pizza-medium",
        "categoryName": "Pizza · Medium",
        "name": {
            "fr": "Pizza Végétarienne",
            "en": "Pizza Végétarienne",
            "ar": "Pizza Végétarienne"
        },
        "description": {
            "fr": "Sauce tomate, mozzarella, cheddar, poivron, oignon, tomate",
            "en": "Sauce tomate, mozzarella, cheddar, poivron, oignon, tomate",
            "ar": "Sauce tomate, mozzarella, cheddar, poivron, oignon, tomate"
        },
        "price": 500,
        "priceFormatted": "500 Da",
        "hasSizes": false,
        "image": "Pizza v\u00e9g\u00e9tarienne.jpg",
        "isSignature": false
    },
    {
        "id": "item_32",
        "categoryId": "pizza-medium",
        "categoryName": "Pizza · Medium",
        "name": {
            "fr": "Pizza Napolitaine",
            "en": "Pizza Napolitaine",
            "ar": "Pizza Napolitaine"
        },
        "description": {
            "fr": "Sauce tomate, mozzarella, cheddar, viande hachée",
            "en": "Sauce tomate, mozzarella, cheddar, viande hachée",
            "ar": "Sauce tomate, mozzarella, cheddar, viande hachée"
        },
        "price": 550,
        "priceFormatted": "550 Da",
        "hasSizes": false,
        "image": "Pizza napolitaine.jpg",
        "isSignature": false
    },
    {
        "id": "item_33",
        "categoryId": "pizza-medium",
        "categoryName": "Pizza · Medium",
        "name": {
            "fr": "Pizza 3 Fromages",
            "en": "Pizza 3 Fromages",
            "ar": "Pizza 3 Fromages"
        },
        "description": {
            "fr": "Sauce tomate, mozzarella, cheddar, fromage fondu",
            "en": "Sauce tomate, mozzarella, cheddar, fromage fondu",
            "ar": "Sauce tomate, mozzarella, cheddar, fromage fondu"
        },
        "price": 600,
        "priceFormatted": "600 Da",
        "hasSizes": false,
        "image": "Pizza 2 fromages.jpg",
        "isSignature": false
    },
    {
        "id": "item_34",
        "categoryId": "pizza-medium",
        "categoryName": "Pizza · Medium",
        "name": {
            "fr": "Pizza Au Thon",
            "en": "Pizza Au Thon",
            "ar": "Pizza Au Thon"
        },
        "description": {
            "fr": "Sauce tomate, mozzarella, cheddar, thon",
            "en": "Sauce tomate, mozzarella, cheddar, thon",
            "ar": "Sauce tomate, mozzarella, cheddar, thon"
        },
        "price": 650,
        "priceFormatted": "650 Da",
        "hasSizes": false,
        "image": "Pizza au thon.jpg",
        "isSignature": false
    },
    {
        "id": "item_35",
        "categoryId": "pizza-medium",
        "categoryName": "Pizza · Medium",
        "name": {
            "fr": "Pizza Royale",
            "en": "Pizza Royale",
            "ar": "Pizza Royale"
        },
        "description": {
            "fr": "Sauce tomate, mozzarella, cheddar, viande hachée, merguez",
            "en": "Sauce tomate, mozzarella, cheddar, viande hachée, merguez",
            "ar": "Sauce tomate, mozzarella, cheddar, viande hachée, merguez"
        },
        "price": 700,
        "priceFormatted": "700 Da",
        "hasSizes": false,
        "image": "Pizza royale.jpg",
        "isSignature": false
    },
    {
        "id": "item_36",
        "categoryId": "pizza-medium",
        "categoryName": "Pizza · Medium",
        "name": {
            "fr": "Pizza Merguez",
            "en": "Pizza Merguez",
            "ar": "Pizza Merguez"
        },
        "description": {
            "fr": "Sauce tomate, mozzarella, cheddar, merguez",
            "en": "Sauce tomate, mozzarella, cheddar, merguez",
            "ar": "Sauce tomate, mozzarella, cheddar, merguez"
        },
        "price": 700,
        "priceFormatted": "700 Da",
        "hasSizes": false,
        "image": "Pizza merguez.jpg",
        "isSignature": false
    },
    {
        "id": "item_37",
        "categoryId": "pizza-medium",
        "categoryName": "Pizza · Medium",
        "name": {
            "fr": "Pizza Kebab",
            "en": "Pizza Kebab",
            "ar": "Pizza Kebab"
        },
        "description": {
            "fr": "Sauce tomate, mozzarella, cheddar, kebab",
            "en": "Sauce tomate, mozzarella, cheddar, kebab",
            "ar": "Sauce tomate, mozzarella, cheddar, kebab"
        },
        "price": 750,
        "priceFormatted": "750 Da",
        "hasSizes": false,
        "image": "Pizza kebab.jpg",
        "isSignature": false
    },
    {
        "id": "item_38",
        "categoryId": "pizza-medium",
        "categoryName": "Pizza · Medium",
        "name": {
            "fr": "Pizza Boisée",
            "en": "Pizza Boisée",
            "ar": "Pizza Boisée"
        },
        "description": {
            "fr": "Sauce blanche, mozzarella, cheddar, poulet haché, poulet fumé",
            "en": "Sauce blanche, mozzarella, cheddar, poulet haché, poulet fumé",
            "ar": "Sauce blanche, mozzarella, cheddar, poulet haché, poulet fumé"
        },
        "price": 750,
        "priceFormatted": "750 Da",
        "hasSizes": false,
        "image": "Pizza bois\u00e9e.jpg",
        "isSignature": false
    },
    {
        "id": "item_39",
        "categoryId": "pizza-medium",
        "categoryName": "Pizza · Medium",
        "name": {
            "fr": "Pizza 4 Fromages",
            "en": "Pizza 4 Fromages",
            "ar": "Pizza 4 Fromages"
        },
        "description": {
            "fr": "Sauce blanche, mozzarella, fromage fondu, camembert, cheddar",
            "en": "Sauce blanche, mozzarella, fromage fondu, camembert, cheddar",
            "ar": "Sauce blanche, mozzarella, fromage fondu, camembert, cheddar"
        },
        "price": 850,
        "priceFormatted": "850 Da",
        "hasSizes": false,
        "image": "Pizza 4 fromages.jpg",
        "isSignature": false
    },
    {
        "id": "item_40",
        "categoryId": "pizza-medium",
        "categoryName": "Pizza · Medium",
        "name": {
            "fr": "Pizza Fruits de Mer",
            "en": "Pizza Fruits de Mer",
            "ar": "Pizza Fruits de Mer"
        },
        "description": {
            "fr": "Sauce tomate, mozzarella, cheddar, fruits de mer, thon",
            "en": "Sauce tomate, mozzarella, cheddar, fruits de mer, thon",
            "ar": "Sauce tomate, mozzarella, cheddar, fruits de mer, thon"
        },
        "price": 1000,
        "priceFormatted": "1000 Da",
        "hasSizes": false,
        "image": "Pizza fruits de mer.jpg",
        "isSignature": false
    },
    {
        "id": "item_41",
        "categoryId": "pizza-medium",
        "categoryName": "Pizza · Medium",
        "name": {
            "fr": "Pizza 4 Saisons",
            "en": "Pizza 4 Saisons",
            "ar": "Pizza 4 Saisons"
        },
        "description": {
            "fr": "1/4 royale, 1/4 4 fromages, 1/4 napolitaine, 1/4 poulet haché avec bordure fromage",
            "en": "1/4 royale, 1/4 4 fromages, 1/4 napolitaine, 1/4 poulet haché avec bordure fromage",
            "ar": "1/4 royale, 1/4 4 fromages, 1/4 napolitaine, 1/4 poulet haché avec bordure fromage"
        },
        "price": 1000,
        "priceFormatted": "1000 Da",
        "hasSizes": false,
        "image": "Pizza 4 saison.jpg",
        "isSignature": false
    },
    {
        "id": "item_42",
        "categoryId": "pizza-medium",
        "categoryName": "Pizza · Medium",
        "name": {
            "fr": "Pizza Indian",
            "en": "Pizza Indian",
            "ar": "Pizza Indian"
        },
        "description": {
            "fr": "Sauce tomate, mozzarella, viande hachée, poulet haché, sauce indienne, cheddar",
            "en": "Sauce tomate, mozzarella, viande hachée, poulet haché, sauce indienne, cheddar",
            "ar": "Sauce tomate, mozzarella, viande hachée, poulet haché, sauce indienne, cheddar"
        },
        "price": 1000,
        "priceFormatted": "1000 Da",
        "hasSizes": false,
        "image": null,
        "isSignature": false
    },
    {
        "id": "item_43",
        "categoryId": "pizza-medium",
        "categoryName": "Pizza · Medium",
        "name": {
            "fr": "Pizza Ranch",
            "en": "Pizza Ranch",
            "ar": "Pizza Ranch"
        },
        "description": {
            "fr": "Sauce tomate, mozzarella, escalope grillée, sauce ranch, cheddar",
            "en": "Sauce tomate, mozzarella, escalope grillée, sauce ranch, cheddar",
            "ar": "Sauce tomate, mozzarella, escalope grillée, sauce ranch, cheddar"
        },
        "price": 1000,
        "priceFormatted": "1000 Da",
        "hasSizes": false,
        "image": null,
        "isSignature": false
    },
    {
        "id": "item_44",
        "categoryId": "pizza-medium",
        "categoryName": "Pizza · Medium",
        "name": {
            "fr": "Pizza Fumatto",
            "en": "Pizza Fumatto",
            "ar": "Pizza Fumatto"
        },
        "description": {
            "fr": "Sauce tomate, mozzarella, poulet croustillant (crispy), sauce barbecue, cheddar",
            "en": "Sauce tomate, mozzarella, poulet croustillant (crispy), sauce barbecue, cheddar",
            "ar": "Sauce tomate, mozzarella, poulet croustillant (crispy), sauce barbecue, cheddar"
        },
        "price": 1000,
        "priceFormatted": "1000 Da",
        "hasSizes": false,
        "image": null,
        "isSignature": false
    },
    {
        "id": "item_45",
        "categoryId": "pizza-medium",
        "categoryName": "Pizza · Medium",
        "name": {
            "fr": "Pizza Barberousse",
            "en": "Pizza Barberousse",
            "ar": "Pizza Barberousse"
        },
        "description": {
            "fr": "Sauce tomate, mozzarella, cheddar, poulet mariné, viande hachée, fruits de mer, camembert, bordure fromage",
            "en": "Sauce tomate, mozzarella, cheddar, poulet mariné, viande hachée, fruits de mer, camembert, bordure fromage",
            "ar": "Sauce tomate, mozzarella, cheddar, poulet mariné, viande hachée, fruits de mer, camembert, bordure fromage"
        },
        "price": 1250,
        "priceFormatted": "1250 Da",
        "hasSizes": false,
        "image": "Pizza barberousse.jpg",
        "isSignature": false
    },
    {
        "id": "item_46",
        "categoryId": "pizza-medium",
        "categoryName": "Pizza · Medium",
        "name": {
            "fr": "Pizza Türk",
            "en": "Pizza Türk",
            "ar": "Pizza Türk"
        },
        "description": {
            "fr": "Sauce blanche, mozzarella, cheddar, poulet mariné, bordure fromage",
            "en": "Sauce blanche, mozzarella, cheddar, poulet mariné, bordure fromage",
            "ar": "Sauce blanche, mozzarella, cheddar, poulet mariné, bordure fromage"
        },
        "price": 1300,
        "priceFormatted": "1300 Da",
        "hasSizes": false,
        "image": null,
        "isSignature": false
    },
    {
        "id": "item_47",
        "categoryId": "pizza-large",
        "categoryName": "Pizza · Large",
        "name": {
            "fr": "Pizza Marguerite",
            "en": "Pizza Marguerite",
            "ar": "Pizza Marguerite"
        },
        "description": {
            "fr": "Sauce tomate, mozzarella, cheddar",
            "en": "Sauce tomate, mozzarella, cheddar",
            "ar": "Sauce tomate, mozzarella, cheddar"
        },
        "price": 700,
        "priceFormatted": "700 Da",
        "hasSizes": false,
        "image": "Pizza Marguerite.jpg",
        "isSignature": false
    },
    {
        "id": "item_48",
        "categoryId": "pizza-large",
        "categoryName": "Pizza · Large",
        "name": {
            "fr": "Pizza Poulet Hachée",
            "en": "Pizza Poulet Hachée",
            "ar": "Pizza Poulet Hachée"
        },
        "description": {
            "fr": "Sauce tomate, mozzarella, cheddar, poulet haché",
            "en": "Sauce tomate, mozzarella, cheddar, poulet haché",
            "ar": "Sauce tomate, mozzarella, cheddar, poulet haché"
        },
        "price": 1000,
        "priceFormatted": "1000 Da",
        "hasSizes": false,
        "image": "Pizza poulet hach\u00e9.jpg",
        "isSignature": false
    },
    {
        "id": "item_49",
        "categoryId": "pizza-large",
        "categoryName": "Pizza · Large",
        "name": {
            "fr": "Pizza Végétarienne",
            "en": "Pizza Végétarienne",
            "ar": "Pizza Végétarienne"
        },
        "description": {
            "fr": "Sauce tomate, mozzarella, cheddar, poivron, oignon, tomate",
            "en": "Sauce tomate, mozzarella, cheddar, poivron, oignon, tomate",
            "ar": "Sauce tomate, mozzarella, cheddar, poivron, oignon, tomate"
        },
        "price": 1000,
        "priceFormatted": "1000 Da",
        "hasSizes": false,
        "image": "Pizza v\u00e9g\u00e9tarienne.jpg",
        "isSignature": false
    },
    {
        "id": "item_50",
        "categoryId": "pizza-large",
        "categoryName": "Pizza · Large",
        "name": {
            "fr": "Pizza Napolitaine",
            "en": "Pizza Napolitaine",
            "ar": "Pizza Napolitaine"
        },
        "description": {
            "fr": "Sauce tomate, mozzarella, cheddar, viande hachée",
            "en": "Sauce tomate, mozzarella, cheddar, viande hachée",
            "ar": "Sauce tomate, mozzarella, cheddar, viande hachée"
        },
        "price": 1100,
        "priceFormatted": "1100 Da",
        "hasSizes": false,
        "image": "Pizza napolitaine.jpg",
        "isSignature": false
    },
    {
        "id": "item_51",
        "categoryId": "pizza-large",
        "categoryName": "Pizza · Large",
        "name": {
            "fr": "Pizza 3 Fromages",
            "en": "Pizza 3 Fromages",
            "ar": "Pizza 3 Fromages"
        },
        "description": {
            "fr": "Sauce tomate, mozzarella, cheddar, fromage fondu",
            "en": "Sauce tomate, mozzarella, cheddar, fromage fondu",
            "ar": "Sauce tomate, mozzarella, cheddar, fromage fondu"
        },
        "price": 1200,
        "priceFormatted": "1200 Da",
        "hasSizes": false,
        "image": "Pizza 2 fromages.jpg",
        "isSignature": false
    },
    {
        "id": "item_52",
        "categoryId": "pizza-large",
        "categoryName": "Pizza · Large",
        "name": {
            "fr": "Pizza Au Thon",
            "en": "Pizza Au Thon",
            "ar": "Pizza Au Thon"
        },
        "description": {
            "fr": "Sauce tomate, mozzarella, cheddar, thon",
            "en": "Sauce tomate, mozzarella, cheddar, thon",
            "ar": "Sauce tomate, mozzarella, cheddar, thon"
        },
        "price": 1300,
        "priceFormatted": "1300 Da",
        "hasSizes": false,
        "image": "Pizza au thon.jpg",
        "isSignature": false
    },
    {
        "id": "item_53",
        "categoryId": "pizza-large",
        "categoryName": "Pizza · Large",
        "name": {
            "fr": "Pizza Royale",
            "en": "Pizza Royale",
            "ar": "Pizza Royale"
        },
        "description": {
            "fr": "Sauce tomate, mozzarella, cheddar, viande hachée, merguez",
            "en": "Sauce tomate, mozzarella, cheddar, viande hachée, merguez",
            "ar": "Sauce tomate, mozzarella, cheddar, viande hachée, merguez"
        },
        "price": 1400,
        "priceFormatted": "1400 Da",
        "hasSizes": false,
        "image": "Pizza royale.jpg",
        "isSignature": false
    },
    {
        "id": "item_54",
        "categoryId": "pizza-large",
        "categoryName": "Pizza · Large",
        "name": {
            "fr": "Pizza Merguez",
            "en": "Pizza Merguez",
            "ar": "Pizza Merguez"
        },
        "description": {
            "fr": "Sauce tomate, mozzarella, cheddar, merguez",
            "en": "Sauce tomate, mozzarella, cheddar, merguez",
            "ar": "Sauce tomate, mozzarella, cheddar, merguez"
        },
        "price": 1400,
        "priceFormatted": "1400 Da",
        "hasSizes": false,
        "image": "Pizza merguez.jpg",
        "isSignature": false
    },
    {
        "id": "item_55",
        "categoryId": "pizza-large",
        "categoryName": "Pizza · Large",
        "name": {
            "fr": "Pizza Kebab",
            "en": "Pizza Kebab",
            "ar": "Pizza Kebab"
        },
        "description": {
            "fr": "Sauce tomate, mozzarella, cheddar, kebab",
            "en": "Sauce tomate, mozzarella, cheddar, kebab",
            "ar": "Sauce tomate, mozzarella, cheddar, kebab"
        },
        "price": 1500,
        "priceFormatted": "1500 Da",
        "hasSizes": false,
        "image": "Pizza kebab.jpg",
        "isSignature": false
    },
    {
        "id": "item_56",
        "categoryId": "pizza-large",
        "categoryName": "Pizza · Large",
        "name": {
            "fr": "Pizza Boisée",
            "en": "Pizza Boisée",
            "ar": "Pizza Boisée"
        },
        "description": {
            "fr": "Sauce blanche, mozzarella, cheddar, poulet haché, poulet fumé",
            "en": "Sauce blanche, mozzarella, cheddar, poulet haché, poulet fumé",
            "ar": "Sauce blanche, mozzarella, cheddar, poulet haché, poulet fumé"
        },
        "price": 1500,
        "priceFormatted": "1500 Da",
        "hasSizes": false,
        "image": "Pizza bois\u00e9e.jpg",
        "isSignature": false
    },
    {
        "id": "item_57",
        "categoryId": "pizza-large",
        "categoryName": "Pizza · Large",
        "name": {
            "fr": "Pizza 4 Fromages",
            "en": "Pizza 4 Fromages",
            "ar": "Pizza 4 Fromages"
        },
        "description": {
            "fr": "Sauce blanche, mozzarella, fromage fondu, camembert, cheddar",
            "en": "Sauce blanche, mozzarella, fromage fondu, camembert, cheddar",
            "ar": "Sauce blanche, mozzarella, fromage fondu, camembert, cheddar"
        },
        "price": 1700,
        "priceFormatted": "1700 Da",
        "hasSizes": false,
        "image": "Pizza 4 fromages.jpg",
        "isSignature": false
    },
    {
        "id": "item_58",
        "categoryId": "pizza-large",
        "categoryName": "Pizza · Large",
        "name": {
            "fr": "Pizza Fruits de Mer",
            "en": "Pizza Fruits de Mer",
            "ar": "Pizza Fruits de Mer"
        },
        "description": {
            "fr": "Sauce tomate, mozzarella, cheddar, fruits de mer, thon",
            "en": "Sauce tomate, mozzarella, cheddar, fruits de mer, thon",
            "ar": "Sauce tomate, mozzarella, cheddar, fruits de mer, thon"
        },
        "price": 2000,
        "priceFormatted": "2000 Da",
        "hasSizes": false,
        "image": "Pizza fruits de mer.jpg",
        "isSignature": false
    },
    {
        "id": "item_59",
        "categoryId": "pizza-large",
        "categoryName": "Pizza · Large",
        "name": {
            "fr": "Pizza 4 Saisons",
            "en": "Pizza 4 Saisons",
            "ar": "Pizza 4 Saisons"
        },
        "description": {
            "fr": "1/4 royale, 1/4 4 fromages, 1/4 napolitaine, 1/4 poulet haché avec bordure fromage",
            "en": "1/4 royale, 1/4 4 fromages, 1/4 napolitaine, 1/4 poulet haché avec bordure fromage",
            "ar": "1/4 royale, 1/4 4 fromages, 1/4 napolitaine, 1/4 poulet haché avec bordure fromage"
        },
        "price": 2000,
        "priceFormatted": "2000 Da",
        "hasSizes": false,
        "image": "Pizza 4 saison.jpg",
        "isSignature": false
    },
    {
        "id": "item_60",
        "categoryId": "pizza-large",
        "categoryName": "Pizza · Large",
        "name": {
            "fr": "Pizza Indian",
            "en": "Pizza Indian",
            "ar": "Pizza Indian"
        },
        "description": {
            "fr": "Sauce tomate, mozzarella, viande hachée, poulet haché, sauce indienne, cheddar",
            "en": "Sauce tomate, mozzarella, viande hachée, poulet haché, sauce indienne, cheddar",
            "ar": "Sauce tomate, mozzarella, viande hachée, poulet haché, sauce indienne, cheddar"
        },
        "price": 2000,
        "priceFormatted": "2000 Da",
        "hasSizes": false,
        "image": null,
        "isSignature": false
    },
    {
        "id": "item_61",
        "categoryId": "pizza-large",
        "categoryName": "Pizza · Large",
        "name": {
            "fr": "Pizza Ranch",
            "en": "Pizza Ranch",
            "ar": "Pizza Ranch"
        },
        "description": {
            "fr": "Sauce tomate, mozzarella, escalope grillée, sauce ranch, cheddar",
            "en": "Sauce tomate, mozzarella, escalope grillée, sauce ranch, cheddar",
            "ar": "Sauce tomate, mozzarella, escalope grillée, sauce ranch, cheddar"
        },
        "price": 2000,
        "priceFormatted": "2000 Da",
        "hasSizes": false,
        "image": null,
        "isSignature": false
    },
    {
        "id": "item_62",
        "categoryId": "pizza-large",
        "categoryName": "Pizza · Large",
        "name": {
            "fr": "Pizza Fumatto",
            "en": "Pizza Fumatto",
            "ar": "Pizza Fumatto"
        },
        "description": {
            "fr": "Sauce tomate, mozzarella, poulet croustillant (crispy), sauce barbecue, cheddar",
            "en": "Sauce tomate, mozzarella, poulet croustillant (crispy), sauce barbecue, cheddar",
            "ar": "Sauce tomate, mozzarella, poulet croustillant (crispy), sauce barbecue, cheddar"
        },
        "price": 2000,
        "priceFormatted": "2000 Da",
        "hasSizes": false,
        "image": null,
        "isSignature": false
    },
    {
        "id": "item_63",
        "categoryId": "pizza-large",
        "categoryName": "Pizza · Large",
        "name": {
            "fr": "Pizza Barberousse",
            "en": "Pizza Barberousse",
            "ar": "Pizza Barberousse"
        },
        "description": {
            "fr": "Sauce tomate, mozzarella, cheddar, poulet mariné, viande hachée, fruits de mer, camembert, bordure fromage",
            "en": "Sauce tomate, mozzarella, cheddar, poulet mariné, viande hachée, fruits de mer, camembert, bordure fromage",
            "ar": "Sauce tomate, mozzarella, cheddar, poulet mariné, viande hachée, fruits de mer, camembert, bordure fromage"
        },
        "price": 2500,
        "priceFormatted": "2500 Da",
        "hasSizes": false,
        "image": "Pizza barberousse.jpg",
        "isSignature": false
    },
    {
        "id": "item_64",
        "categoryId": "pizza-mega",
        "categoryName": "Pizza · Méga",
        "name": {
            "fr": "Pizza Marguerite",
            "en": "Pizza Marguerite",
            "ar": "Pizza Marguerite"
        },
        "description": {
            "fr": "Sauce tomate, mozzarella, cheddar",
            "en": "Sauce tomate, mozzarella, cheddar",
            "ar": "Sauce tomate, mozzarella, cheddar"
        },
        "price": 1100,
        "priceFormatted": "1100 Da",
        "hasSizes": false,
        "image": "Pizza Marguerite.jpg",
        "isSignature": false
    },
    {
        "id": "item_65",
        "categoryId": "pizza-mega",
        "categoryName": "Pizza · Méga",
        "name": {
            "fr": "Pizza Poulet Hachée",
            "en": "Pizza Poulet Hachée",
            "ar": "Pizza Poulet Hachée"
        },
        "description": {
            "fr": "Sauce tomate, mozzarella, cheddar, poulet haché",
            "en": "Sauce tomate, mozzarella, cheddar, poulet haché",
            "ar": "Sauce tomate, mozzarella, cheddar, poulet haché"
        },
        "price": 1600,
        "priceFormatted": "1600 Da",
        "hasSizes": false,
        "image": "Pizza poulet hach\u00e9.jpg",
        "isSignature": false
    },
    {
        "id": "item_66",
        "categoryId": "pizza-mega",
        "categoryName": "Pizza · Méga",
        "name": {
            "fr": "Pizza Végétarienne",
            "en": "Pizza Végétarienne",
            "ar": "Pizza Végétarienne"
        },
        "description": {
            "fr": "Sauce tomate, mozzarella, cheddar, poivron, oignon, tomate",
            "en": "Sauce tomate, mozzarella, cheddar, poivron, oignon, tomate",
            "ar": "Sauce tomate, mozzarella, cheddar, poivron, oignon, tomate"
        },
        "price": 1600,
        "priceFormatted": "1600 Da",
        "hasSizes": false,
        "image": "Pizza v\u00e9g\u00e9tarienne.jpg",
        "isSignature": false
    },
    {
        "id": "item_67",
        "categoryId": "pizza-mega",
        "categoryName": "Pizza · Méga",
        "name": {
            "fr": "Pizza Napolitaine",
            "en": "Pizza Napolitaine",
            "ar": "Pizza Napolitaine"
        },
        "description": {
            "fr": "Sauce tomate, mozzarella, cheddar, viande hachée",
            "en": "Sauce tomate, mozzarella, cheddar, viande hachée",
            "ar": "Sauce tomate, mozzarella, cheddar, viande hachée"
        },
        "price": 2000,
        "priceFormatted": "2000 Da",
        "hasSizes": false,
        "image": "Pizza napolitaine.jpg",
        "isSignature": false
    },
    {
        "id": "item_68",
        "categoryId": "pizza-mega",
        "categoryName": "Pizza · Méga",
        "name": {
            "fr": "Pizza 3 Fromages",
            "en": "Pizza 3 Fromages",
            "ar": "Pizza 3 Fromages"
        },
        "description": {
            "fr": "Sauce tomate, mozzarella, cheddar, fromage fondu",
            "en": "Sauce tomate, mozzarella, cheddar, fromage fondu",
            "ar": "Sauce tomate, mozzarella, cheddar, fromage fondu"
        },
        "price": 1800,
        "priceFormatted": "1800 Da",
        "hasSizes": false,
        "image": "Pizza 2 fromages.jpg",
        "isSignature": false
    },
    {
        "id": "item_69",
        "categoryId": "pizza-mega",
        "categoryName": "Pizza · Méga",
        "name": {
            "fr": "Pizza Au Thon",
            "en": "Pizza Au Thon",
            "ar": "Pizza Au Thon"
        },
        "description": {
            "fr": "Sauce tomate, mozzarella, cheddar, thon",
            "en": "Sauce tomate, mozzarella, cheddar, thon",
            "ar": "Sauce tomate, mozzarella, cheddar, thon"
        },
        "price": 2000,
        "priceFormatted": "2000 Da",
        "hasSizes": false,
        "image": "Pizza au thon.jpg",
        "isSignature": false
    },
    {
        "id": "item_70",
        "categoryId": "pizza-mega",
        "categoryName": "Pizza · Méga",
        "name": {
            "fr": "Pizza Royale",
            "en": "Pizza Royale",
            "ar": "Pizza Royale"
        },
        "description": {
            "fr": "Sauce tomate, mozzarella, cheddar, viande hachée, merguez",
            "en": "Sauce tomate, mozzarella, cheddar, viande hachée, merguez",
            "ar": "Sauce tomate, mozzarella, cheddar, viande hachée, merguez"
        },
        "price": 2000,
        "priceFormatted": "2000 Da",
        "hasSizes": false,
        "image": "Pizza royale.jpg",
        "isSignature": false
    },
    {
        "id": "item_71",
        "categoryId": "pizza-mega",
        "categoryName": "Pizza · Méga",
        "name": {
            "fr": "Pizza Merguez",
            "en": "Pizza Merguez",
            "ar": "Pizza Merguez"
        },
        "description": {
            "fr": "Sauce tomate, mozzarella, cheddar, merguez",
            "en": "Sauce tomate, mozzarella, cheddar, merguez",
            "ar": "Sauce tomate, mozzarella, cheddar, merguez"
        },
        "price": 2000,
        "priceFormatted": "2000 Da",
        "hasSizes": false,
        "image": "Pizza merguez.jpg",
        "isSignature": false
    },
    {
        "id": "item_72",
        "categoryId": "pizza-mega",
        "categoryName": "Pizza · Méga",
        "name": {
            "fr": "Pizza Kebab",
            "en": "Pizza Kebab",
            "ar": "Pizza Kebab"
        },
        "description": {
            "fr": "Sauce tomate, mozzarella, cheddar, kebab",
            "en": "Sauce tomate, mozzarella, cheddar, kebab",
            "ar": "Sauce tomate, mozzarella, cheddar, kebab"
        },
        "price": 2100,
        "priceFormatted": "2100 Da",
        "hasSizes": false,
        "image": "Pizza kebab.jpg",
        "isSignature": false
    },
    {
        "id": "item_73",
        "categoryId": "pizza-mega",
        "categoryName": "Pizza · Méga",
        "name": {
            "fr": "Pizza Boisée",
            "en": "Pizza Boisée",
            "ar": "Pizza Boisée"
        },
        "description": {
            "fr": "Sauce blanche, mozzarella, cheddar, poulet haché, poulet fumé",
            "en": "Sauce blanche, mozzarella, cheddar, poulet haché, poulet fumé",
            "ar": "Sauce blanche, mozzarella, cheddar, poulet haché, poulet fumé"
        },
        "price": 2100,
        "priceFormatted": "2100 Da",
        "hasSizes": false,
        "image": "Pizza bois\u00e9e.jpg",
        "isSignature": false
    },
    {
        "id": "item_74",
        "categoryId": "pizza-mega",
        "categoryName": "Pizza · Méga",
        "name": {
            "fr": "Pizza 4 Fromages",
            "en": "Pizza 4 Fromages",
            "ar": "Pizza 4 Fromages"
        },
        "description": {
            "fr": "Sauce blanche, mozzarella, fromage fondu, camembert, cheddar",
            "en": "Sauce blanche, mozzarella, fromage fondu, camembert, cheddar",
            "ar": "Sauce blanche, mozzarella, fromage fondu, camembert, cheddar"
        },
        "price": 2700,
        "priceFormatted": "2700 Da",
        "hasSizes": false,
        "image": "Pizza 4 fromages.jpg",
        "isSignature": false
    },
    {
        "id": "item_75",
        "categoryId": "pizza-mega",
        "categoryName": "Pizza · Méga",
        "name": {
            "fr": "Pizza Fruits de Mer",
            "en": "Pizza Fruits de Mer",
            "ar": "Pizza Fruits de Mer"
        },
        "description": {
            "fr": "Sauce tomate, mozzarella, cheddar, fruits de mer, thon",
            "en": "Sauce tomate, mozzarella, cheddar, fruits de mer, thon",
            "ar": "Sauce tomate, mozzarella, cheddar, fruits de mer, thon"
        },
        "price": 3000,
        "priceFormatted": "3000 Da",
        "hasSizes": false,
        "image": "Pizza fruits de mer.jpg",
        "isSignature": false
    },
    {
        "id": "item_76",
        "categoryId": "pizza-mega",
        "categoryName": "Pizza · Méga",
        "name": {
            "fr": "Pizza 4 Saisons",
            "en": "Pizza 4 Saisons",
            "ar": "Pizza 4 Saisons"
        },
        "description": {
            "fr": "1/4 royale, 1/4 4 fromages, 1/4 napolitaine, 1/4 poulet haché avec bordure fromage",
            "en": "1/4 royale, 1/4 4 fromages, 1/4 napolitaine, 1/4 poulet haché avec bordure fromage",
            "ar": "1/4 royale, 1/4 4 fromages, 1/4 napolitaine, 1/4 poulet haché avec bordure fromage"
        },
        "price": 3000,
        "priceFormatted": "3000 Da",
        "hasSizes": false,
        "image": "Pizza 4 saison.jpg",
        "isSignature": false
    },
    {
        "id": "item_77",
        "categoryId": "pizza-mega",
        "categoryName": "Pizza · Méga",
        "name": {
            "fr": "Pizza Indian",
            "en": "Pizza Indian",
            "ar": "Pizza Indian"
        },
        "description": {
            "fr": "Sauce tomate, mozzarella, viande hachée, poulet haché, sauce indienne, cheddar",
            "en": "Sauce tomate, mozzarella, viande hachée, poulet haché, sauce indienne, cheddar",
            "ar": "Sauce tomate, mozzarella, viande hachée, poulet haché, sauce indienne, cheddar"
        },
        "price": 3000,
        "priceFormatted": "3000 Da",
        "hasSizes": false,
        "image": null,
        "isSignature": false
    },
    {
        "id": "item_78",
        "categoryId": "pizza-mega",
        "categoryName": "Pizza · Méga",
        "name": {
            "fr": "Pizza Ranch",
            "en": "Pizza Ranch",
            "ar": "Pizza Ranch"
        },
        "description": {
            "fr": "Sauce tomate, mozzarella, escalope grillée, sauce ranch, cheddar",
            "en": "Sauce tomate, mozzarella, escalope grillée, sauce ranch, cheddar",
            "ar": "Sauce tomate, mozzarella, escalope grillée, sauce ranch, cheddar"
        },
        "price": 3000,
        "priceFormatted": "3000 Da",
        "hasSizes": false,
        "image": null,
        "isSignature": false
    },
    {
        "id": "item_79",
        "categoryId": "pizza-mega",
        "categoryName": "Pizza · Méga",
        "name": {
            "fr": "Pizza Fumatto",
            "en": "Pizza Fumatto",
            "ar": "Pizza Fumatto"
        },
        "description": {
            "fr": "Sauce tomate, mozzarella, poulet croustillant (crispy), sauce barbecue, cheddar",
            "en": "Sauce tomate, mozzarella, poulet croustillant (crispy), sauce barbecue, cheddar",
            "ar": "Sauce tomate, mozzarella, poulet croustillant (crispy), sauce barbecue, cheddar"
        },
        "price": 3000,
        "priceFormatted": "3000 Da",
        "hasSizes": false,
        "image": null,
        "isSignature": false
    },
    {
        "id": "item_80",
        "categoryId": "pizza-mega",
        "categoryName": "Pizza · Méga",
        "name": {
            "fr": "Pizza Barberousse",
            "en": "Pizza Barberousse",
            "ar": "Pizza Barberousse"
        },
        "description": {
            "fr": "Sauce tomate, mozzarella, cheddar, poulet mariné, viande hachée, fruits de mer, camembert, bordure fromage",
            "en": "Sauce tomate, mozzarella, cheddar, poulet mariné, viande hachée, fruits de mer, camembert, bordure fromage",
            "ar": "Sauce tomate, mozzarella, cheddar, poulet mariné, viande hachée, fruits de mer, camembert, bordure fromage"
        },
        "price": 3700,
        "priceFormatted": "3700 Da",
        "hasSizes": false,
        "image": "Pizza barberousse.jpg",
        "isSignature": false
    },
    {
        "id": "item_81",
        "categoryId": "plats-garnis",
        "categoryName": "Plats Garnis",
        "name": {
            "fr": "Plat Poulet Hachée",
            "en": "Plat Poulet Hachée",
            "ar": "Plat Poulet Hachée"
        },
        "description": {
            "fr": "Plat de poulet haché",
            "en": "Plat de poulet haché",
            "ar": "Plat de poulet haché"
        },
        "price": 1000,
        "priceFormatted": "1000 Da",
        "hasSizes": false,
        "image": "Plat poulet hach\u00e9e.jpg",
        "isSignature": false
    },
    {
        "id": "item_82",
        "categoryId": "plats-garnis",
        "categoryName": "Plats Garnis",
        "name": {
            "fr": "Plat Viande Haché",
            "en": "Plat Viande Haché",
            "ar": "Plat Viande Haché"
        },
        "description": {
            "fr": "Plat de viande hachée",
            "en": "Plat de viande hachée",
            "ar": "Plat de viande hachée"
        },
        "price": 1000,
        "priceFormatted": "1000 Da",
        "hasSizes": false,
        "image": "Plat viande hach\u00e9e.jpg",
        "isSignature": false
    },
    {
        "id": "item_83",
        "categoryId": "plats-garnis",
        "categoryName": "Plats Garnis",
        "name": {
            "fr": "Plat Escalope Grillée",
            "en": "Plat Escalope Grillée",
            "ar": "Plat Escalope Grillée"
        },
        "description": {
            "fr": "Plat d'escalope grillée",
            "en": "Plat d'escalope grillée",
            "ar": "Plat d'escalope grillée"
        },
        "price": 1000,
        "priceFormatted": "1000 Da",
        "hasSizes": false,
        "image": "Plat escalope grill\u00e9e.jpg",
        "isSignature": false
    },
    {
        "id": "item_84",
        "categoryId": "plats-garnis",
        "categoryName": "Plats Garnis",
        "name": {
            "fr": "Plat Escalope Grillée à la Crème",
            "en": "Plat Escalope Grillée à la Crème",
            "ar": "Plat Escalope Grillée à la Crème"
        },
        "description": {
            "fr": "Plat d'escalope grillée à la crème",
            "en": "Plat d'escalope grillée à la crème",
            "ar": "Plat d'escalope grillée à la crème"
        },
        "price": 1100,
        "priceFormatted": "1100 Da",
        "hasSizes": false,
        "image": "Plat escalope grill\u00e9e.jpg",
        "isSignature": false
    },
    {
        "id": "item_85",
        "categoryId": "plats-garnis",
        "categoryName": "Plats Garnis",
        "name": {
            "fr": "Plat Merguez",
            "en": "Plat Merguez",
            "ar": "Plat Merguez"
        },
        "description": {
            "fr": "Plat de merguez",
            "en": "Plat de merguez",
            "ar": "Plat de merguez"
        },
        "price": 1200,
        "priceFormatted": "1200 Da",
        "hasSizes": false,
        "image": "Plat merguez.jpg",
        "isSignature": false
    },
    {
        "id": "item_86",
        "categoryId": "plats-garnis",
        "categoryName": "Plats Garnis",
        "name": {
            "fr": "Plat Escalope Panée",
            "en": "Plat Escalope Panée",
            "ar": "Plat Escalope Panée"
        },
        "description": {
            "fr": "Plat d'escalope panée",
            "en": "Plat d'escalope panée",
            "ar": "Plat d'escalope panée"
        },
        "price": 1200,
        "priceFormatted": "1200 Da",
        "hasSizes": false,
        "image": "Plat escalope pan\u00e9e.jpg",
        "isSignature": false
    },
    {
        "id": "item_87",
        "categoryId": "plats-garnis",
        "categoryName": "Plats Garnis",
        "name": {
            "fr": "Plat Poulet Roulé",
            "en": "Plat Poulet Roulé",
            "ar": "Plat Poulet Roulé"
        },
        "description": {
            "fr": "Plat de poulet roulé",
            "en": "Plat de poulet roulé",
            "ar": "Plat de poulet roulé"
        },
        "price": 1200,
        "priceFormatted": "1200 Da",
        "hasSizes": false,
        "image": "Plat poulet roul\u00e9.jpg",
        "isSignature": false
    },
    {
        "id": "item_88",
        "categoryId": "plats-garnis",
        "categoryName": "Plats Garnis",
        "name": {
            "fr": "Plat Ballotine",
            "en": "Plat Ballotine",
            "ar": "Plat Ballotine"
        },
        "description": {
            "fr": "Plat de ballotine",
            "en": "Plat de ballotine",
            "ar": "Plat de ballotine"
        },
        "price": 1200,
        "priceFormatted": "1200 Da",
        "hasSizes": false,
        "image": "Plat Ballotine.jpg",
        "isSignature": false
    },
    {
        "id": "item_89",
        "categoryId": "plats-garnis",
        "categoryName": "Plats Garnis",
        "name": {
            "fr": "Plat Kebeb",
            "en": "Plat Kebeb",
            "ar": "Plat Kebeb"
        },
        "description": {
            "fr": "Plat de kebab",
            "en": "Plat de kebab",
            "ar": "Plat de kebab"
        },
        "price": 1300,
        "priceFormatted": "1300 Da",
        "hasSizes": false,
        "image": "Plat Kebeb.jpg",
        "isSignature": false
    },
    {
        "id": "item_90",
        "categoryId": "plats-garnis",
        "categoryName": "Plats Garnis",
        "name": {
            "fr": "Plat Chich Taouk",
            "en": "Plat Chich Taouk",
            "ar": "Plat Chich Taouk"
        },
        "description": {
            "fr": "Plat de chich taouk",
            "en": "Plat de chich taouk",
            "ar": "Plat de chich taouk"
        },
        "price": 1500,
        "priceFormatted": "1500 Da",
        "hasSizes": false,
        "image": null,
        "isSignature": false
    },
    {
        "id": "item_91",
        "categoryId": "plats-garnis",
        "categoryName": "Plats Garnis",
        "name": {
            "fr": "Plat 9al3a",
            "en": "Plat 9al3a",
            "ar": "Plat 9al3a"
        },
        "description": {
            "fr": "Plat de la 9al3a",
            "en": "Plat de la 9al3a",
            "ar": "Plat de la 9al3a"
        },
        "price": 1700,
        "priceFormatted": "1700 Da",
        "hasSizes": false,
        "image": "Plat 9al3a.jpg",
        "isSignature": false
    },
    {
        "id": "item_92",
        "categoryId": "plats-garnis",
        "categoryName": "Plats Garnis",
        "name": {
            "fr": "Plat Mélange",
            "en": "Plat Mélange",
            "ar": "Plat Mélange"
        },
        "description": {
            "fr": "Plat mélange",
            "en": "Plat mélange",
            "ar": "Plat mélange"
        },
        "price": 2500,
        "priceFormatted": "2500 Da",
        "hasSizes": false,
        "image": "Plat m\u00e9lange.jpg",
        "isSignature": false
    },
    {
        "id": "item_93",
        "categoryId": "pates",
        "categoryName": "Pâtes",
        "name": {
            "fr": "Spaghetti Bolognaise",
            "en": "Spaghetti Bolognaise",
            "ar": "Spaghetti Bolognaise"
        },
        "description": {
            "fr": "",
            "en": "",
            "ar": ""
        },
        "price": 800,
        "priceFormatted": "800 Da",
        "hasSizes": false,
        "image": null,
        "isSignature": false
    },
    {
        "id": "item_94",
        "categoryId": "pates",
        "categoryName": "Pâtes",
        "name": {
            "fr": "Spaghetti à la Crème",
            "en": "Spaghetti à la Crème",
            "ar": "Spaghetti à la Crème"
        },
        "description": {
            "fr": "",
            "en": "",
            "ar": ""
        },
        "price": 800,
        "priceFormatted": "800 Da",
        "hasSizes": false,
        "image": null,
        "isSignature": false
    },
    {
        "id": "item_95",
        "categoryId": "pates",
        "categoryName": "Pâtes",
        "name": {
            "fr": "Mac and Cheese",
            "en": "Mac and Cheese",
            "ar": "Mac and Cheese"
        },
        "description": {
            "fr": "",
            "en": "",
            "ar": ""
        },
        "price": 800,
        "priceFormatted": "800 Da",
        "hasSizes": false,
        "image": null,
        "isSignature": false
    },
    {
        "id": "item_96",
        "categoryId": "poisson",
        "categoryName": "Poisson",
        "name": {
            "fr": "Dorade Royale",
            "en": "Dorade Royale",
            "ar": "Dorade Royale"
        },
        "description": {
            "fr": "",
            "en": "",
            "ar": ""
        },
        "price": 1800,
        "priceFormatted": "1800 Da",
        "hasSizes": false,
        "image": null,
        "isSignature": false
    },
    {
        "id": "item_97",
        "categoryId": "poisson",
        "categoryName": "Poisson",
        "name": {
            "fr": "Spadone",
            "en": "Spadone",
            "ar": "Spadone"
        },
        "description": {
            "fr": "",
            "en": "",
            "ar": ""
        },
        "price": 2200,
        "priceFormatted": "2200 Da",
        "hasSizes": false,
        "image": null,
        "isSignature": false
    },
    {
        "id": "item_98",
        "categoryId": "tajine",
        "categoryName": "Tajine",
        "name": {
            "fr": "Tajine de Pruneaux et Amandes",
            "en": "Tajine de Pruneaux et Amandes",
            "ar": "Tajine de Pruneaux et Amandes"
        },
        "description": {
            "fr": "",
            "en": "",
            "ar": ""
        },
        "price": 1500,
        "priceFormatted": "1500 Da",
        "hasSizes": false,
        "image": null,
        "isSignature": false
    },
    {
        "id": "item_99",
        "categoryId": "tajine",
        "categoryName": "Tajine",
        "name": {
            "fr": "Tajine Boulettes de Poulet Haché aux Olives",
            "en": "Tajine Boulettes de Poulet Haché aux Olives",
            "ar": "Tajine Boulettes de Poulet Haché aux Olives"
        },
        "description": {
            "fr": "",
            "en": "",
            "ar": ""
        },
        "price": 1500,
        "priceFormatted": "1500 Da",
        "hasSizes": false,
        "image": "Tajine Boulettes de Poulet Haché aux Olives.jpg",
        "isSignature": false
    },
    {
        "id": "item_100",
        "categoryId": "entrees-froides",
        "categoryName": "Entrées Froides",
        "name": {
            "fr": "Salade Macédoine",
            "en": "Salade Macédoine",
            "ar": "Salade Macédoine"
        },
        "description": {
            "fr": "",
            "en": "",
            "ar": ""
        },
        "price": 300,
        "priceFormatted": "300 Da",
        "hasSizes": false,
        "image": "Salade mac\u00e9doine.jpg",
        "isSignature": false
    },
    {
        "id": "item_101",
        "categoryId": "entrees-froides",
        "categoryName": "Entrées Froides",
        "name": {
            "fr": "Hors d'Oeuvre Royale",
            "en": "Hors d'Oeuvre Royale",
            "ar": "Hors d'Oeuvre Royale"
        },
        "description": {
            "fr": "",
            "en": "",
            "ar": ""
        },
        "price": 400,
        "priceFormatted": "400 Da",
        "hasSizes": false,
        "image": null,
        "isSignature": false
    },
    {
        "id": "item_102",
        "categoryId": "entrees-froides",
        "categoryName": "Entrées Froides",
        "name": {
            "fr": "Salade César",
            "en": "Salade César",
            "ar": "Salade César"
        },
        "description": {
            "fr": "",
            "en": "",
            "ar": ""
        },
        "price": 700,
        "priceFormatted": "700 Da",
        "hasSizes": false,
        "image": null,
        "isSignature": false
    },
    {
        "id": "item_103",
        "categoryId": "entrees-froides",
        "categoryName": "Entrées Froides",
        "name": {
            "fr": "Salade Barberousse",
            "en": "Salade Barberousse",
            "ar": "Salade Barberousse"
        },
        "description": {
            "fr": "",
            "en": "",
            "ar": ""
        },
        "price": 1500,
        "priceFormatted": "1500 Da",
        "hasSizes": false,
        "image": null,
        "isSignature": false
    },
    {
        "id": "item_104",
        "categoryId": "entrees-chaudes",
        "categoryName": "Entrées Chaudes",
        "name": {
            "fr": "Bourak Poulet Hachée",
            "en": "Bourak Poulet Hachée",
            "ar": "Bourak Poulet Hachée"
        },
        "description": {
            "fr": "",
            "en": "",
            "ar": ""
        },
        "price": 150,
        "priceFormatted": "150 Da",
        "hasSizes": false,
        "image": "Bourak poulet.jpg",
        "isSignature": false
    },
    {
        "id": "item_105",
        "categoryId": "entrees-chaudes",
        "categoryName": "Entrées Chaudes",
        "name": {
            "fr": "Keba",
            "en": "Keba",
            "ar": "Keba"
        },
        "description": {
            "fr": "",
            "en": "",
            "ar": ""
        },
        "price": 200,
        "priceFormatted": "200 Da",
        "hasSizes": false,
        "image": null,
        "isSignature": false
    },
    {
        "id": "item_106",
        "categoryId": "entrees-chaudes",
        "categoryName": "Entrées Chaudes",
        "name": {
            "fr": "Omelette au Fromage",
            "en": "Omelette au Fromage",
            "ar": "Omelette au Fromage"
        },
        "description": {
            "fr": "",
            "en": "",
            "ar": ""
        },
        "price": 300,
        "priceFormatted": "300 Da",
        "hasSizes": false,
        "image": "Omelette au fromage.jpg",
        "isSignature": false
    },
    {
        "id": "item_107",
        "categoryId": "entrees-chaudes",
        "categoryName": "Entrées Chaudes",
        "name": {
            "fr": "Soupe",
            "en": "Soupe",
            "ar": "Soupe"
        },
        "description": {
            "fr": "",
            "en": "",
            "ar": ""
        },
        "price": 200,
        "priceFormatted": "200 Da",
        "hasSizes": false,
        "image": null,
        "isSignature": false
    },
    {
        "id": "item_108",
        "categoryId": "entrees-chaudes",
        "categoryName": "Entrées Chaudes",
        "name": {
            "fr": "Soupe de Légume",
            "en": "Soupe de Légume",
            "ar": "Soupe de Légume"
        },
        "description": {
            "fr": "",
            "en": "",
            "ar": ""
        },
        "price": 250,
        "priceFormatted": "250 Da",
        "hasSizes": false,
        "image": "Soupe de l\u00e9gumes.jpg",
        "isSignature": false
    },
    {
        "id": "item_109",
        "categoryId": "entrees-chaudes",
        "categoryName": "Entrées Chaudes",
        "name": {
            "fr": "Soupe de Poisson",
            "en": "Soupe de Poisson",
            "ar": "Soupe de Poisson"
        },
        "description": {
            "fr": "",
            "en": "",
            "ar": ""
        },
        "price": 400,
        "priceFormatted": "400 Da",
        "hasSizes": false,
        "image": "Soupe de l\u00e9gumes.jpg",
        "isSignature": false
    },
    {
        "id": "item_110",
        "categoryId": "packs",
        "categoryName": "Packs",
        "name": {
            "fr": "Pac M'chawi",
            "en": "Pac M'chawi",
            "ar": "Pac M'chawi"
        },
        "description": {
            "fr": "Chich kebab, chich taouk, riz, pommes de terre frites, salade",
            "en": "Chich kebab, chich taouk, riz, pommes de terre frites, salade",
            "ar": "Chich kebab, chich taouk, riz, pommes de terre frites, salade"
        },
        "price": 4500,
        "priceFormatted": "4500 Da",
        "hasSizes": false,
        "image": null,
        "isSignature": false
    },
    {
        "id": "item_111",
        "categoryId": "packs",
        "categoryName": "Packs",
        "name": {
            "fr": "Pac Chawarma",
            "en": "Pac Chawarma",
            "ar": "Pac Chawarma"
        },
        "description": {
            "fr": "Chawarma, riz, salade, pommes de terre frites, sauce tomate",
            "en": "Chawarma, riz, salade, pommes de terre frites, sauce tomate",
            "ar": "Chawarma, riz, salade, pommes de terre frites, sauce tomate"
        },
        "price": 3500,
        "priceFormatted": "3500 Da",
        "hasSizes": false,
        "image": null,
        "isSignature": false
    },
    {
        "id": "item_112",
        "categoryId": "packs",
        "categoryName": "Packs",
        "name": {
            "fr": "Pac Crispy",
            "en": "Pac Crispy",
            "ar": "Pac Crispy"
        },
        "description": {
            "fr": "Poulet pané tendre, pommes de terre frites, sauce",
            "en": "Poulet pané tendre, pommes de terre frites, sauce",
            "ar": "Poulet pané tendre, pommes de terre frites, sauce"
        },
        "price": 3500,
        "priceFormatted": "3500 Da",
        "hasSizes": false,
        "image": null,
        "isSignature": false
    },
    {
        "id": "item_113",
        "categoryId": "creme-dessert-jus",
        "categoryName": "Crème Dessert & Jus",
        "name": {
            "fr": "Flan Maison",
            "en": "Flan Maison",
            "ar": "Flan Maison"
        },
        "description": {
            "fr": "",
            "en": "",
            "ar": ""
        },
        "price": 250,
        "priceFormatted": "250 Da",
        "hasSizes": false,
        "image": "Flan maison.jpg",
        "isSignature": false
    },
    {
        "id": "item_114",
        "categoryId": "creme-dessert-jus",
        "categoryName": "Crème Dessert & Jus",
        "name": {
            "fr": "Jus de Saison",
            "en": "Jus de Saison",
            "ar": "Jus de Saison"
        },
        "description": {
            "fr": "",
            "en": "",
            "ar": ""
        },
        "price": 300,
        "priceFormatted": "300 Da",
        "hasSizes": false,
        "image": "Jus de saison.jpg",
        "isSignature": false
    },
    {
        "id": "item_115",
        "categoryId": "creme-dessert-jus",
        "categoryName": "Crème Dessert & Jus",
        "name": {
            "fr": "Tiramisu au Biscuit",
            "en": "Tiramisu au Biscuit",
            "ar": "Tiramisu au Biscuit"
        },
        "description": {
            "fr": "",
            "en": "",
            "ar": ""
        },
        "price": 400,
        "priceFormatted": "400 Da",
        "hasSizes": false,
        "image": "Tiramissu au biscuit.jpg",
        "isSignature": false
    },
    {
        "id": "item_116",
        "categoryId": "creme-dessert-jus",
        "categoryName": "Crème Dessert & Jus",
        "name": {
            "fr": "Salade de Fruits",
            "en": "Salade de Fruits",
            "ar": "Salade de Fruits"
        },
        "description": {
            "fr": "",
            "en": "",
            "ar": ""
        },
        "price": 400,
        "priceFormatted": "400 Da",
        "hasSizes": false,
        "image": "Salede de fruits.jpg",
        "isSignature": false
    },
    {
        "id": "item_117",
        "categoryId": "creme-dessert-jus",
        "categoryName": "Crème Dessert & Jus",
        "name": {
            "fr": "Crème Dessert",
            "en": "Crème Dessert",
            "ar": "Crème Dessert"
        },
        "description": {
            "fr": "",
            "en": "",
            "ar": ""
        },
        "price": 400,
        "priceFormatted": "400 Da",
        "hasSizes": false,
        "image": null,
        "isSignature": false
    },
    {
        "id": "item_118",
        "categoryId": "creme-dessert-jus",
        "categoryName": "Crème Dessert & Jus",
        "name": {
            "fr": "Jus Cocktail",
            "en": "Jus Cocktail",
            "ar": "Jus Cocktail"
        },
        "description": {
            "fr": "",
            "en": "",
            "ar": ""
        },
        "price": 400,
        "priceFormatted": "400 Da",
        "hasSizes": false,
        "image": "Jus.jpg",
        "isSignature": false
    },
    {
        "id": "item_119",
        "categoryId": "boissons-chaudes",
        "categoryName": "Boissons Chaudes",
        "name": {
            "fr": "Lait Chaud (Candia)",
            "en": "Lait Chaud (Candia)",
            "ar": "Lait Chaud (Candia)"
        },
        "description": {
            "fr": "",
            "en": "",
            "ar": ""
        },
        "price": 60,
        "priceFormatted": "60 Da",
        "hasSizes": false,
        "image": "Lait chaud.jpg",
        "isSignature": false
    },
    {
        "id": "item_120",
        "categoryId": "boissons-chaudes",
        "categoryName": "Boissons Chaudes",
        "name": {
            "fr": "Thé Lipton",
            "en": "Thé Lipton",
            "ar": "Thé Lipton"
        },
        "description": {
            "fr": "",
            "en": "",
            "ar": ""
        },
        "price": 70,
        "priceFormatted": "70 Da",
        "hasSizes": false,
        "image": "Th\u00e9 lipton.jpg",
        "isSignature": false
    },
    {
        "id": "item_121",
        "categoryId": "boissons-chaudes",
        "categoryName": "Boissons Chaudes",
        "name": {
            "fr": "La Camomille Tisane",
            "en": "La Camomille Tisane",
            "ar": "La Camomille Tisane"
        },
        "description": {
            "fr": "",
            "en": "",
            "ar": ""
        },
        "price": 70,
        "priceFormatted": "70 Da",
        "hasSizes": false,
        "image": "La camomille tisane.jpg",
        "isSignature": false
    },
    {
        "id": "item_122",
        "categoryId": "boissons-chaudes",
        "categoryName": "Boissons Chaudes",
        "name": {
            "fr": "Zanjabil",
            "en": "Zanjabil",
            "ar": "Zanjabil"
        },
        "description": {
            "fr": "",
            "en": "",
            "ar": ""
        },
        "price": 70,
        "priceFormatted": "70 Da",
        "hasSizes": false,
        "image": "Zanjabil.jpg",
        "isSignature": false
    },
    {
        "id": "item_123",
        "categoryId": "boissons-chaudes",
        "categoryName": "Boissons Chaudes",
        "name": {
            "fr": "Café Noire (Maxwell - Carte Noire)",
            "en": "Café Noire (Maxwell - Carte Noire)",
            "ar": "Café Noire (Maxwell - Carte Noire)"
        },
        "description": {
            "fr": "",
            "en": "",
            "ar": ""
        },
        "price": 100,
        "priceFormatted": "100 Da",
        "hasSizes": false,
        "image": null,
        "isSignature": false
    },
    {
        "id": "item_124",
        "categoryId": "boissons-chaudes",
        "categoryName": "Boissons Chaudes",
        "name": {
            "fr": "Café au Lait (Candia + Maxwell)",
            "en": "Café au Lait (Candia + Maxwell)",
            "ar": "Café au Lait (Candia + Maxwell)"
        },
        "description": {
            "fr": "",
            "en": "",
            "ar": ""
        },
        "price": 100,
        "priceFormatted": "100 Da",
        "hasSizes": false,
        "image": "Caf\u00e9 au lait.jpg",
        "isSignature": false
    },
    {
        "id": "item_125",
        "categoryId": "boissons-chaudes",
        "categoryName": "Boissons Chaudes",
        "name": {
            "fr": "Lait au Chocolat (Candia + Nesquik)",
            "en": "Lait au Chocolat (Candia + Nesquik)",
            "ar": "Lait au Chocolat (Candia + Nesquik)"
        },
        "description": {
            "fr": "",
            "en": "",
            "ar": ""
        },
        "price": 100,
        "priceFormatted": "100 Da",
        "hasSizes": false,
        "image": "Lait au chocolat.jpg",
        "isSignature": false
    },
    {
        "id": "item_126",
        "categoryId": "boissons-chaudes",
        "categoryName": "Boissons Chaudes",
        "name": {
            "fr": "Cappuccino Classic",
            "en": "Cappuccino Classic",
            "ar": "Cappuccino Classic"
        },
        "description": {
            "fr": "",
            "en": "",
            "ar": ""
        },
        "price": 150,
        "priceFormatted": "150 Da",
        "hasSizes": false,
        "image": "Cappuccino classic.jpg",
        "isSignature": false
    },
    {
        "id": "item_127",
        "categoryId": "boissons-chaudes",
        "categoryName": "Boissons Chaudes",
        "name": {
            "fr": "Café Latté",
            "en": "Café Latté",
            "ar": "Café Latté"
        },
        "description": {
            "fr": "",
            "en": "",
            "ar": ""
        },
        "price": 150,
        "priceFormatted": "150 Da",
        "hasSizes": false,
        "image": "Caf\u00e9 latt\u00e9.jpg",
        "isSignature": false
    },
    {
        "id": "item_128",
        "categoryId": "boissons-chaudes",
        "categoryName": "Boissons Chaudes",
        "name": {
            "fr": "Cappuccino Chocolat Milka",
            "en": "Cappuccino Chocolat Milka",
            "ar": "Cappuccino Chocolat Milka"
        },
        "description": {
            "fr": "",
            "en": "",
            "ar": ""
        },
        "price": 250,
        "priceFormatted": "250 Da",
        "hasSizes": false,
        "image": "Cappuccino.jpg",
        "isSignature": false
    },
    {
        "id": "item_129",
        "categoryId": "boissons-froides",
        "categoryName": "Boissons Froides",
        "name": {
            "fr": "Eau Minérale — Petit",
            "en": "Eau Minérale — Petit",
            "ar": "Eau Minérale — Petit"
        },
        "description": {
            "fr": "",
            "en": "",
            "ar": ""
        },
        "price": 30,
        "priceFormatted": "30 Da",
        "hasSizes": false,
        "image": "Eaux min\u00e9rale.jpg",
        "isSignature": false
    },
    {
        "id": "item_130",
        "categoryId": "boissons-froides",
        "categoryName": "Boissons Froides",
        "name": {
            "fr": "Eau Minérale — Grand",
            "en": "Eau Minérale — Grand",
            "ar": "Eau Minérale — Grand"
        },
        "description": {
            "fr": "",
            "en": "",
            "ar": ""
        },
        "price": 60,
        "priceFormatted": "60 Da",
        "hasSizes": false,
        "image": "Eaux min\u00e9rale g.jpg",
        "isSignature": false
    },
    {
        "id": "item_131",
        "categoryId": "boissons-froides",
        "categoryName": "Boissons Froides",
        "name": {
            "fr": "Boisson Gazeuse — Petit",
            "en": "Boisson Gazeuse — Petit",
            "ar": "Boisson Gazeuse — Petit"
        },
        "description": {
            "fr": "",
            "en": "",
            "ar": ""
        },
        "price": 70,
        "priceFormatted": "70 Da",
        "hasSizes": false,
        "image": "Boissons gazouz.jpg",
        "isSignature": false
    },
    {
        "id": "item_132",
        "categoryId": "boissons-froides",
        "categoryName": "Boissons Froides",
        "name": {
            "fr": "Boisson Gazeuse — Grand",
            "en": "Boisson Gazeuse — Grand",
            "ar": "Boisson Gazeuse — Grand"
        },
        "description": {
            "fr": "",
            "en": "",
            "ar": ""
        },
        "price": 200,
        "priceFormatted": "200 Da",
        "hasSizes": false,
        "image": "Boissons gazouz g.jpg",
        "isSignature": false
    },
    {
        "id": "item_133",
        "categoryId": "boissons-froides",
        "categoryName": "Boissons Froides",
        "name": {
            "fr": "Jus — Petit",
            "en": "Jus — Petit",
            "ar": "Jus — Petit"
        },
        "description": {
            "fr": "",
            "en": "",
            "ar": ""
        },
        "price": 80,
        "priceFormatted": "80 Da",
        "hasSizes": false,
        "image": "Jus.jpg",
        "isSignature": false
    },
    {
        "id": "item_134",
        "categoryId": "boissons-froides",
        "categoryName": "Boissons Froides",
        "name": {
            "fr": "Jus — Grand",
            "en": "Jus — Grand",
            "ar": "Jus — Grand"
        },
        "description": {
            "fr": "",
            "en": "",
            "ar": ""
        },
        "price": 200,
        "priceFormatted": "200 Da",
        "hasSizes": false,
        "image": "Jus g.jpg",
        "isSignature": false
    },
    {
        "id": "item_135",
        "categoryId": "boissons-froides",
        "categoryName": "Boissons Froides",
        "name": {
            "fr": "Canette",
            "en": "Canette",
            "ar": "Canette"
        },
        "description": {
            "fr": "",
            "en": "",
            "ar": ""
        },
        "price": 120,
        "priceFormatted": "120 Da",
        "hasSizes": false,
        "image": "Canette.jpg",
        "isSignature": false
    }
];

// Compatibility aliases
const dishes = menuItems;

if (typeof module !== "undefined" && module.exports) {
    module.exports = { restaurantInfo, menuCategories, menuItems, dishes };
}
