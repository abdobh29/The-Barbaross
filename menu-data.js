// ==========================================================================
// THE BARBAROSS - OFFICIAL RESTAURANT MENU DATA
// Source of Truth: https://quiikly.com/barbarous
// Generated with exact Quiikly categories, items, prices, and variants
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
        "id": "boissons-froides",
        "raw_category": "Boissons froides",
        "name": {
            "fr": "Boissons froides",
            "en": "Cold Drinks",
            "ar": "مشروبات باردة"
        },
        "icon": "fa-glass-water"
    },
    {
        "id": "entrees-froides",
        "raw_category": "Entrées Froides",
        "name": {
            "fr": "Entrées Froides",
            "en": "Cold Appetizers",
            "ar": "مقبلات باردة"
        },
        "icon": "fa-bowl-food"
    },
    {
        "id": "entrees-chaudes",
        "raw_category": "Entrées chaudes",
        "name": {
            "fr": "Entrées chaudes",
            "en": "Hot Appetizers",
            "ar": "مقبلات ساخنة"
        },
        "icon": "fa-mug-hot"
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
        "id": "tacos",
        "raw_category": "Tacos",
        "name": {
            "fr": "Tacos",
            "en": "Tacos",
            "ar": "تاكوس"
        },
        "icon": "fa-hotdog"
    },
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
        "id": "pizzas",
        "raw_category": "Pizzas",
        "name": {
            "fr": "Pizzas",
            "en": "Pizzas",
            "ar": "بيتزا"
        },
        "icon": "fa-pizza-slice"
    },
    {
        "id": "supplements",
        "raw_category": "Suppléments",
        "name": {
            "fr": "Suppléments",
            "en": "Extras & Add-ons",
            "ar": "إضافات"
        },
        "icon": "fa-cheese"
    },
    {
        "id": "pizzas-vip",
        "raw_category": "Pizzas VIP",
        "name": {
            "fr": "Pizzas VIP",
            "en": "VIP Pizzas",
            "ar": "بيتزا VIP"
        },
        "icon": "fa-crown"
    },
    {
        "id": "big-vip",
        "raw_category": "BIG VIP",
        "name": {
            "fr": "BIG VIP",
            "en": "BIG VIP Burgers",
            "ar": "بيغ VIP"
        },
        "icon": "fa-star"
    },
    {
        "id": "boissons-chaudes",
        "raw_category": "Boissons chaudes",
        "name": {
            "fr": "Boissons chaudes",
            "en": "Hot Drinks",
            "ar": "مشروبات ساخنة"
        },
        "icon": "fa-coffee"
    },
    {
        "id": "creme-dessert",
        "raw_category": "Crème dessert",
        "name": {
            "fr": "Crème dessert",
            "en": "Dessert Creams",
            "ar": "تحليات"
        },
        "icon": "fa-ice-cream"
    },
    {
        "id": "gateaux",
        "raw_category": "Gâteaux",
        "name": {
            "fr": "Gâteaux",
            "en": "Pastries & Cakes",
            "ar": "حلويات"
        },
        "icon": "fa-cake-candles"
    }
];

const menuItems = [
    {
        "id": "item_1",
        "categoryId": "boissons-froides",
        "categoryName": "Boissons froides",
        "name": {
            "fr": "Boissons gazouz (Petit modèle)",
            "en": "Soft Drink (Soda) (Small)",
            "ar": "مشروبات غازية (حجم صغير)"
        },
        "description": {
            "fr": "Petit modèle",
            "en": "Chilled beverage",
            "ar": "مشروب منعش بارد"
        },
        "price": 70,
        "priceFormatted": "70 Da",
        "hasSizes": false,
        "image": "Boissons gazouz.jpg",
        "isSignature": false,
        "quiiklyId": "3056"
    },
    {
        "id": "item_2",
        "categoryId": "boissons-froides",
        "categoryName": "Boissons froides",
        "name": {
            "fr": "Jus (Petit modèle)",
            "en": "Fruit Juice (Small)",
            "ar": "عصير فواكه (حجم صغير)"
        },
        "description": {
            "fr": "Petit modèle",
            "en": "Chilled beverage",
            "ar": "مشروب منعش بارد"
        },
        "price": 70,
        "priceFormatted": "70 Da",
        "hasSizes": false,
        "image": "Jus.jpg",
        "isSignature": false,
        "quiiklyId": "3058"
    },
    {
        "id": "item_3",
        "categoryId": "boissons-froides",
        "categoryName": "Boissons froides",
        "name": {
            "fr": "Eaux minérale (Petit modèle)",
            "en": "Mineral Water (Small)",
            "ar": "مياه معدنية (حجم صغير)"
        },
        "description": {
            "fr": "Petit modèle",
            "en": "Chilled beverage",
            "ar": "مشروب منعش بارد"
        },
        "price": 30,
        "priceFormatted": "30 Da",
        "hasSizes": false,
        "image": "Eaux minérale.jpg",
        "isSignature": false,
        "quiiklyId": "3060"
    },
    {
        "id": "item_4",
        "categoryId": "boissons-froides",
        "categoryName": "Boissons froides",
        "name": {
            "fr": "Boissons gazouz (Grand modèle)",
            "en": "Soft Drink (Soda) (Large)",
            "ar": "مشروبات غازية (حجم كبير)"
        },
        "description": {
            "fr": "Grand modèle",
            "en": "Large chilled bottle",
            "ar": "مشروب منعش بارد"
        },
        "price": 150,
        "priceFormatted": "150 Da",
        "hasSizes": false,
        "image": "Boissons gazouz g.jpg",
        "isSignature": false,
        "quiiklyId": "3057"
    },
    {
        "id": "item_5",
        "categoryId": "boissons-froides",
        "categoryName": "Boissons froides",
        "name": {
            "fr": "Jus (Grand modèle)",
            "en": "Fruit Juice (Large)",
            "ar": "عصير فواكه (حجم كبير)"
        },
        "description": {
            "fr": "Grand modèle",
            "en": "Large chilled bottle",
            "ar": "مشروب منعش بارد"
        },
        "price": 150,
        "priceFormatted": "150 Da",
        "hasSizes": false,
        "image": "Jus g.jpg",
        "isSignature": false,
        "quiiklyId": "3059"
    },
    {
        "id": "item_6",
        "categoryId": "boissons-froides",
        "categoryName": "Boissons froides",
        "name": {
            "fr": "Eaux minérale (Grand modèle)",
            "en": "Mineral Water (Large)",
            "ar": "مياه معدنية (حجم كبير)"
        },
        "description": {
            "fr": "Grand modèle",
            "en": "Large chilled bottle",
            "ar": "مشروب منعش بارد"
        },
        "price": 60,
        "priceFormatted": "60 Da",
        "hasSizes": false,
        "image": "Eaux minérale g.jpg",
        "isSignature": false,
        "quiiklyId": "3061"
    },
    {
        "id": "item_7",
        "categoryId": "boissons-froides",
        "categoryName": "Boissons froides",
        "name": {
            "fr": "Jus de saison (Grand modèle)",
            "en": "Seasonal Fresh Juice (Large)",
            "ar": "عصير الموسم الطازج (حجم كبير)"
        },
        "description": {
            "fr": "Grand modèle",
            "en": "Large chilled bottle",
            "ar": "مشروب منعش بارد"
        },
        "price": 300,
        "priceFormatted": "300 Da",
        "hasSizes": false,
        "image": "Jus de saison.jpg",
        "isSignature": false,
        "quiiklyId": "2890"
    },
    {
        "id": "item_8",
        "categoryId": "boissons-froides",
        "categoryName": "Boissons froides",
        "name": {
            "fr": "Canette (Grand modèle)",
            "en": "Canned Soda (Large)",
            "ar": "علبة مشروب غازي (حجم كبير)"
        },
        "description": {
            "fr": "Grand modèle",
            "en": "Large chilled bottle",
            "ar": "مشروب منعش بارد"
        },
        "price": 120,
        "priceFormatted": "120 Da",
        "hasSizes": false,
        "image": "Canette.jpg",
        "isSignature": false,
        "quiiklyId": "3062"
    },
    {
        "id": "item_9",
        "categoryId": "entrees-froides",
        "categoryName": "Entrées Froides",
        "name": {
            "fr": "Salade cezar",
            "en": "Caesar Salad",
            "ar": "سلطة سيزر"
        },
        "description": {
            "fr": "",
            "en": "",
            "ar": ""
        },
        "price": 650,
        "priceFormatted": "650 Da",
        "hasSizes": false,
        "image": "Salade cezar.jpg",
        "isSignature": false,
        "quiiklyId": "2869"
    },
    {
        "id": "item_10",
        "categoryId": "entrees-froides",
        "categoryName": "Entrées Froides",
        "name": {
            "fr": "Hors-d'œuvre royal",
            "en": "Royal Appetizer Platter",
            "ar": "مقبلات ملكية"
        },
        "description": {
            "fr": "",
            "en": "",
            "ar": ""
        },
        "price": 400,
        "priceFormatted": "400 Da",
        "hasSizes": false,
        "image": "Hors-d'œuvre royal.jpg",
        "isSignature": false,
        "quiiklyId": "2870"
    },
    {
        "id": "item_11",
        "categoryId": "entrees-froides",
        "categoryName": "Entrées Froides",
        "name": {
            "fr": "Salade macédoine",
            "en": "Macedonian Vegetable Salad",
            "ar": "سلطة ماسيدوان"
        },
        "description": {
            "fr": "",
            "en": "",
            "ar": ""
        },
        "price": 300,
        "priceFormatted": "300 Da",
        "hasSizes": false,
        "image": "Salade macédoine.jpg",
        "isSignature": false,
        "quiiklyId": "2871"
    },
    {
        "id": "item_12",
        "categoryId": "entrees-chaudes",
        "categoryName": "Entrées chaudes",
        "name": {
            "fr": "Bourak poulet hachée",
            "en": "Minced Chicken Bourak",
            "ar": "بوراك بالدجاج المفروم"
        },
        "description": {
            "fr": "",
            "en": "",
            "ar": ""
        },
        "price": 120,
        "priceFormatted": "120 Da",
        "hasSizes": false,
        "image": "Bourak poulet.jpg",
        "isSignature": false,
        "quiiklyId": "2872"
    },
    {
        "id": "item_13",
        "categoryId": "entrees-chaudes",
        "categoryName": "Entrées chaudes",
        "name": {
            "fr": "Soupe de légumes",
            "en": "Vegetable Soup",
            "ar": "حساء خضار"
        },
        "description": {
            "fr": "",
            "en": "",
            "ar": ""
        },
        "price": 150,
        "priceFormatted": "150 Da",
        "hasSizes": false,
        "image": "Soupe de légumes.jpg",
        "isSignature": false,
        "quiiklyId": "2873"
    },
    {
        "id": "item_14",
        "categoryId": "entrees-chaudes",
        "categoryName": "Entrées chaudes",
        "name": {
            "fr": "Omelette au fromage",
            "en": "Cheese Omelette",
            "ar": "أومليت بالجبن"
        },
        "description": {
            "fr": "",
            "en": "",
            "ar": ""
        },
        "price": 250,
        "priceFormatted": "250 Da",
        "hasSizes": false,
        "image": "Omelette au fromage.jpg",
        "isSignature": false,
        "quiiklyId": "2874"
    },
    {
        "id": "item_15",
        "categoryId": "plats-garnis",
        "categoryName": "Plats Garnis",
        "name": {
            "fr": "Plat poulet roulé",
            "en": "Stuffed Chicken Roulade Platter",
            "ar": "طبق دجاج رولي محشي"
        },
        "description": {
            "fr": "",
            "en": "",
            "ar": ""
        },
        "price": 900,
        "priceFormatted": "900 Da",
        "hasSizes": false,
        "image": "Plat poulet roulé.jpg",
        "isSignature": true,
        "quiiklyId": "2875"
    },
    {
        "id": "item_16",
        "categoryId": "plats-garnis",
        "categoryName": "Plats Garnis",
        "name": {
            "fr": "Plat viande hachée",
            "en": "Minced Beef Platter",
            "ar": "طبق لحم مفروم مشوي"
        },
        "description": {
            "fr": "",
            "en": "",
            "ar": ""
        },
        "price": 900,
        "priceFormatted": "900 Da",
        "hasSizes": false,
        "image": "Plat viande hachée.jpg",
        "isSignature": false,
        "quiiklyId": "2876"
    },
    {
        "id": "item_17",
        "categoryId": "plats-garnis",
        "categoryName": "Plats Garnis",
        "name": {
            "fr": "Plat poulet hachée",
            "en": "Minced Chicken Platter",
            "ar": "طبق دجاج مفروم مشوي"
        },
        "description": {
            "fr": "",
            "en": "",
            "ar": ""
        },
        "price": 900,
        "priceFormatted": "900 Da",
        "hasSizes": false,
        "image": "Plat poulet hachée.jpg",
        "isSignature": false,
        "quiiklyId": "2877"
    },
    {
        "id": "item_18",
        "categoryId": "plats-garnis",
        "categoryName": "Plats Garnis",
        "name": {
            "fr": "Plat escalope panée",
            "en": "Crispy Breaded Escalope Platter",
            "ar": "طبق إسكالوب بانيه مقرمش"
        },
        "description": {
            "fr": "",
            "en": "",
            "ar": ""
        },
        "price": 900,
        "priceFormatted": "900 Da",
        "hasSizes": false,
        "image": "Plat escalope panée.jpg",
        "isSignature": false,
        "quiiklyId": "2878"
    },
    {
        "id": "item_19",
        "categoryId": "plats-garnis",
        "categoryName": "Plats Garnis",
        "name": {
            "fr": "Plat escalope grillée",
            "en": "Grilled Escalope Platter",
            "ar": "طبق إسكالوب مشوي"
        },
        "description": {
            "fr": "",
            "en": "",
            "ar": ""
        },
        "price": 900,
        "priceFormatted": "900 Da",
        "hasSizes": false,
        "image": "Plat escalope grillée.jpg",
        "isSignature": false,
        "quiiklyId": "2879"
    },
    {
        "id": "item_20",
        "categoryId": "plats-garnis",
        "categoryName": "Plats Garnis",
        "name": {
            "fr": "Plat merguez",
            "en": "Artisanal Merguez Sausage Platter",
            "ar": "طبق مرقاز مشوي"
        },
        "description": {
            "fr": "",
            "en": "",
            "ar": ""
        },
        "price": 900,
        "priceFormatted": "900 Da",
        "hasSizes": false,
        "image": "Plat merguez.jpg",
        "isSignature": false,
        "quiiklyId": "2880"
    },
    {
        "id": "item_21",
        "categoryId": "plats-garnis",
        "categoryName": "Plats Garnis",
        "name": {
            "fr": "Plat pilons de poulet panés",
            "en": "Crispy Chicken Drumsticks Platter",
            "ar": "طبق أفخاذ دجاج مقرمشة"
        },
        "description": {
            "fr": "",
            "en": "",
            "ar": ""
        },
        "price": 900,
        "priceFormatted": "900 Da",
        "hasSizes": false,
        "image": "Plat pilons de poulet panés.jpg",
        "isSignature": false,
        "quiiklyId": "2881"
    },
    {
        "id": "item_22",
        "categoryId": "plats-garnis",
        "categoryName": "Plats Garnis",
        "name": {
            "fr": "Plat mélange",
            "en": "Barbaross Mixed Grill Platter",
            "ar": "طبق المشاوي المشكل بارباروس"
        },
        "description": {
            "fr": "",
            "en": "",
            "ar": ""
        },
        "price": 1400,
        "priceFormatted": "1400 Da",
        "hasSizes": false,
        "image": "Plat mélange.jpg",
        "isSignature": true,
        "quiiklyId": "2882"
    },
    {
        "id": "item_23",
        "categoryId": "plats-garnis",
        "categoryName": "Plats Garnis",
        "name": {
            "fr": "Plat 9al3a",
            "en": "Plat El Qalaâ (The Fortress Platter)",
            "ar": "طبق القلعة الفاخر"
        },
        "description": {
            "fr": "",
            "en": "",
            "ar": ""
        },
        "price": 1500,
        "priceFormatted": "1500 Da",
        "hasSizes": false,
        "image": "Plat 9al3a.jpg",
        "isSignature": false,
        "quiiklyId": "2883"
    },
    {
        "id": "item_24",
        "categoryId": "plats-garnis",
        "categoryName": "Plats Garnis",
        "name": {
            "fr": "Plat Kebda",
            "en": "Sauteed Liver Platter (Kebda)",
            "ar": "طبق كبدة مشوية ومتبلة"
        },
        "description": {
            "fr": "",
            "en": "",
            "ar": ""
        },
        "price": 1500,
        "priceFormatted": "1500 Da",
        "hasSizes": false,
        "image": "Plat Kebda.jpg",
        "isSignature": false,
        "quiiklyId": "2917"
    },
    {
        "id": "item_25",
        "categoryId": "plats-garnis",
        "categoryName": "Plats Garnis",
        "name": {
            "fr": "Gratin",
            "en": "Gourmet Oven Gratin",
            "ar": "غراتان ساخن في الفرن"
        },
        "description": {
            "fr": "",
            "en": "",
            "ar": ""
        },
        "price": 600,
        "priceFormatted": "600 Da",
        "hasSizes": false,
        "image": "Gratin.jpg",
        "isSignature": false,
        "quiiklyId": "2918"
    },
    {
        "id": "item_26",
        "categoryId": "plats-garnis",
        "categoryName": "Plats Garnis",
        "name": {
            "fr": "Plat de riz",
            "en": "Seasoned Rice Platter",
            "ar": "طبق أرز متبل"
        },
        "description": {
            "fr": "",
            "en": "",
            "ar": ""
        },
        "price": 500,
        "priceFormatted": "500 Da",
        "hasSizes": false,
        "image": "Plat de riz.jpg",
        "isSignature": false,
        "quiiklyId": "2919"
    },
    {
        "id": "item_27",
        "categoryId": "plats-garnis",
        "categoryName": "Plats Garnis",
        "name": {
            "fr": "Plat du jour",
            "en": "Daily Chef's Special",
            "ar": "طبق اليوم الخاص"
        },
        "description": {
            "fr": "",
            "en": "",
            "ar": ""
        },
        "price": 600,
        "priceFormatted": "600 Da",
        "hasSizes": false,
        "image": "Plat du jour.jpg",
        "isSignature": false,
        "quiiklyId": "2920"
    },
    {
        "id": "item_28",
        "categoryId": "plats-garnis",
        "categoryName": "Plats Garnis",
        "name": {
            "fr": "Baba arudj",
            "en": "Baba Aruj Feast Platter (Monumental Special)",
            "ar": "طبق بابا عروج الملكي الفاخر"
        },
        "description": {
            "fr": "",
            "en": "",
            "ar": ""
        },
        "price": 3500,
        "priceFormatted": "3500 Da",
        "hasSizes": false,
        "image": "Baba arudj.jpg",
        "isSignature": true,
        "quiiklyId": "3002"
    },
    {
        "id": "item_29",
        "categoryId": "tacos",
        "categoryName": "Tacos",
        "name": {
            "fr": "Tacos poulet haché",
            "en": "Minced Chicken Tacos",
            "ar": "تاكوس دجاج مفروم"
        },
        "description": {
            "fr": "Cheddar, poulet haché, frittes, sauce maison",
            "en": "Cheddar cheese, seasoned minced chicken, crispy french fries, house signature sauce.",
            "ar": "جبن شيدر، دجاج مفروم متبل، بطاطس مقلية، صلصة المحل الخاصة."
        },
        "price": 550,
        "priceFormatted": "550 Da",
        "hasSizes": false,
        "image": "Tacos poulet haché.jpg",
        "isSignature": false,
        "quiiklyId": "2891"
    },
    {
        "id": "item_30",
        "categoryId": "tacos",
        "categoryName": "Tacos",
        "name": {
            "fr": "Tacos viande hachée",
            "en": "Minced Beef Tacos",
            "ar": "تاكوس لحم مفروم"
        },
        "description": {
            "fr": "Cheddar, viande hachée, frittes, sauce maison",
            "en": "Cheddar cheese, savory minced beef, crispy french fries, house signature sauce.",
            "ar": "جبن شيدر، لحم مفروم، بطاطس مقلية، صلصة المحل الخاصة."
        },
        "price": 650,
        "priceFormatted": "650 Da",
        "hasSizes": false,
        "image": "Tacos viande hachée.jpg",
        "isSignature": false,
        "quiiklyId": "2892"
    },
    {
        "id": "item_31",
        "categoryId": "tacos",
        "categoryName": "Tacos",
        "name": {
            "fr": "Tacos mixte",
            "en": "Mixed Tacos (Beef & Chicken)",
            "ar": "تاكوس مشكل (لحم ودجاج)"
        },
        "description": {
            "fr": "Cheddar, V-P-haché, frittes, sauce maison",
            "en": "Cheddar cheese, duo of minced beef & chicken, crispy fries, house sauce.",
            "ar": "جبن شيدر، مزيج لحم ودجاج مفروم، بطاطس مقلية، صلصة المحل الخاصة."
        },
        "price": 700,
        "priceFormatted": "700 Da",
        "hasSizes": false,
        "image": "Tacos mixte.jpg",
        "isSignature": false,
        "quiiklyId": "2893"
    },
    {
        "id": "item_32",
        "categoryId": "tacos",
        "categoryName": "Tacos",
        "name": {
            "fr": "Tacos gratiné",
            "en": "Gratinated Cheese Tacos",
            "ar": "تاكوس غراتيني بالجبن والكاممبير"
        },
        "description": {
            "fr": "Cheddar, poulet haché, frittes, camembert, slice, sauce maison",
            "en": "Cheddar, poulet haché, frittes, camembert, slice, sauce maison",
            "ar": "Cheddar, poulet haché, frittes, camembert, slice, sauce maison"
        },
        "price": 750,
        "priceFormatted": "750 Da",
        "hasSizes": false,
        "image": "Tacos gratiné.jpg",
        "isSignature": true,
        "quiiklyId": "2894"
    },
    {
        "id": "item_33",
        "categoryId": "tacos",
        "categoryName": "Tacos",
        "name": {
            "fr": "Tacos pané",
            "en": "Crispy Breaded Chicken Tacos",
            "ar": "تاكوس بانيه مقرمش"
        },
        "description": {
            "fr": "Cheddar, poulet haché, frittes, sauce maison",
            "en": "Cheddar cheese, seasoned minced chicken, crispy french fries, house signature sauce.",
            "ar": "جبن شيدر، دجاج مفروم متبل، بطاطس مقلية، صلصة المحل الخاصة."
        },
        "price": 750,
        "priceFormatted": "750 Da",
        "hasSizes": false,
        "image": "Tacos pané.jpg",
        "isSignature": false,
        "quiiklyId": "2895"
    },
    {
        "id": "item_34",
        "categoryId": "sandwiches",
        "categoryName": "Sandwiches",
        "name": {
            "fr": "Frittes corner",
            "en": "Crispy Fries Corner",
            "ar": "فرّيتس كورنر بطاطس مقلية"
        },
        "description": {
            "fr": "",
            "en": "",
            "ar": ""
        },
        "price": 150,
        "priceFormatted": "150 Da",
        "hasSizes": false,
        "image": "Frittes corner.jpg",
        "isSignature": false,
        "quiiklyId": "2896"
    },
    {
        "id": "item_35",
        "categoryId": "sandwiches",
        "categoryName": "Sandwiches",
        "name": {
            "fr": "Sandwich viande hachée",
            "en": "Minced Beef Sandwich",
            "ar": "سندويتش لحم مفروم"
        },
        "description": {
            "fr": "Salade, tomate, viande hachée, frittes, omelette, fromage, sauce maison",
            "en": "Fresh lettuce, tomato, minced beef, golden fries, tender omelette, cheese, house sauce.",
            "ar": "سلطة، طماطم، لحم مفروم، بطاطس مقلية، أومليت، جبن، صلصة المحل الخاصة."
        },
        "price": 350,
        "priceFormatted": "350 Da",
        "hasSizes": false,
        "image": "Sandwich viande hachée.jpg",
        "isSignature": false,
        "quiiklyId": "2897"
    },
    {
        "id": "item_36",
        "categoryId": "sandwiches",
        "categoryName": "Sandwiches",
        "name": {
            "fr": "Sandwich poulet haché",
            "en": "Minced Chicken Sandwich",
            "ar": "سندويتش دجاج مفروم"
        },
        "description": {
            "fr": "Salade, tomate, poulet hachée, frittes, omelette, fromage, sauce maison",
            "en": "Fresh lettuce, tomato, minced chicken, golden fries, tender omelette, cheese, house sauce.",
            "ar": "سلطة، طماطم، دجاج مفروم، بطاطس مقلية، أومليت، جبن، صلصة المحل الخاصة."
        },
        "price": 300,
        "priceFormatted": "300 Da",
        "hasSizes": false,
        "image": "Sandwich poulet haché.jpg",
        "isSignature": false,
        "quiiklyId": "2901"
    },
    {
        "id": "item_37",
        "categoryId": "sandwiches",
        "categoryName": "Sandwiches",
        "name": {
            "fr": "Sandwich escalope grillé",
            "en": "Grilled Escalope Sandwich",
            "ar": "سندويتش إسكالوب مشوي"
        },
        "description": {
            "fr": "Salade, tomate, escalope, frittes, omelette, fromage, sauce maison",
            "en": "Fresh lettuce, tomato, grilled escalope, fries, omelette, cheese, house sauce.",
            "ar": "سلطة، طماطم، إسكالوب مشوي، بطاطس مقلية، أومليت، جبن، صلصة المحل الخاصة."
        },
        "price": 350,
        "priceFormatted": "350 Da",
        "hasSizes": false,
        "image": "Sandwich escalope grillé.jpg",
        "isSignature": false,
        "quiiklyId": "2902"
    },
    {
        "id": "item_38",
        "categoryId": "sandwiches",
        "categoryName": "Sandwiches",
        "name": {
            "fr": "Sandwich mariné",
            "en": "Marinated Chicken Sandwich",
            "ar": "سندويتش ماريني متبل"
        },
        "description": {
            "fr": "Salade, tomate, mariné, frittes, omelette, fromage, sauce maison",
            "en": "Fresh lettuce, tomato, marinated tender chicken, fries, omelette, cheese, house sauce.",
            "ar": "سلطة، طماطم، دجاج ماريني متبل، بطاطس مقلية، أومليت، جبن، صلصة المحل الخاصة."
        },
        "price": 400,
        "priceFormatted": "400 Da",
        "hasSizes": false,
        "image": "Sandwich mariné.jpg",
        "isSignature": false,
        "quiiklyId": "2903"
    },
    {
        "id": "item_39",
        "categoryId": "sandwiches",
        "categoryName": "Sandwiches",
        "name": {
            "fr": "Sandwich chicken taquitos",
            "en": "Chicken Taquitos Sandwich",
            "ar": "سندويتش شيكن تاكيتوس"
        },
        "description": {
            "fr": "Salade, tomate, mariné, frittes, omelette, fromage, sauce mexicaine",
            "en": "Fresh lettuce, tomato, marinated chicken, fries, omelette, cheese, zesty Mexican sauce.",
            "ar": "سلطة، طماطم، دجاج ماريني متبل، بطاطس مقلية، أومليت، جبن، صلصة مكسيكية."
        },
        "price": 400,
        "priceFormatted": "400 Da",
        "hasSizes": false,
        "image": "Sandwich chicken taquitos.jpg",
        "isSignature": false,
        "quiiklyId": "2904"
    },
    {
        "id": "item_40",
        "categoryId": "sandwiches",
        "categoryName": "Sandwiches",
        "name": {
            "fr": "Sandwich chicken fahita",
            "en": "Chicken Fajita Sandwich",
            "ar": "سندويتش شيكن فاهيتا"
        },
        "description": {
            "fr": "Salade, tomate, mariné, frittes, omelette, fromage, oignons et poivrons sauce mexicaine",
            "en": "Fresh salad, tomato, marinated chicken, fries, omelette, cheese, sautéed onions & peppers, Mexican sauce.",
            "ar": "سلطة، طماطم، دجاج ماريني متبل، بطاطس، أومليت، جبن، بصل وفلفل مشوي، صلصة مكسيكية."
        },
        "price": 400,
        "priceFormatted": "400 Da",
        "hasSizes": false,
        "image": "Sandwich chicken fahita.jpg",
        "isSignature": false,
        "quiiklyId": "2905"
    },
    {
        "id": "item_41",
        "categoryId": "sandwiches",
        "categoryName": "Sandwiches",
        "name": {
            "fr": "Sandwich merguez",
            "en": "Spicy Merguez Sandwich",
            "ar": "سندويتش مرقاز"
        },
        "description": {
            "fr": "Salade, tomate, merguez, frittes, omelette, fromage, sauce maison",
            "en": "Fresh salad, tomato, spicy merguez, fries, omelette, cheese, house sauce.",
            "ar": "سلطة، طماطم، مرقاز، بطاطس مقلية، أومليت، جبن، صلصة المحل الخاصة."
        },
        "price": 400,
        "priceFormatted": "400 Da",
        "hasSizes": false,
        "image": "Sandwich merguez.jpg",
        "isSignature": false,
        "quiiklyId": "2906"
    },
    {
        "id": "item_42",
        "categoryId": "sandwiches",
        "categoryName": "Sandwiches",
        "name": {
            "fr": "Sandwich escalope pané",
            "en": "Breaded Escalope Sandwich",
            "ar": "سندويتش إسكالوب بانيه"
        },
        "description": {
            "fr": "Salade, tomate, escalopepané, frittes, omelette, fromage, sauce maison",
            "en": "Fresh salad, tomato, breaded chicken escalope, fries, omelette, cheese, house sauce.",
            "ar": "سلطة، طماطم، إسكالوب بانيه مقرمش، بطاطس مقلية، أومليت، جبن، صلصة المحل الخاصة."
        },
        "price": 450,
        "priceFormatted": "450 Da",
        "hasSizes": false,
        "image": "Sandwich escalope pané.jpg",
        "isSignature": false,
        "quiiklyId": "2907"
    },
    {
        "id": "item_43",
        "categoryId": "sandwiches",
        "categoryName": "Sandwiches",
        "name": {
            "fr": "Sandwich kebda",
            "en": "Savory Liver Sandwich (Kebda)",
            "ar": "سندويتش كبدة"
        },
        "description": {
            "fr": "Salade, tomate, kebda, frittes, omelette, fromage, sauce maison",
            "en": "Fresh salad, tomato, sautéed spiced liver, fries, omelette, cheese, house sauce.",
            "ar": "سلطة، طماطم، كبدة متبلة، بطاطس مقلية، أومليت، جبن، صلصة المحل الخاصة."
        },
        "price": 1,
        "priceFormatted": "1 Da",
        "hasSizes": false,
        "image": "Sandwich kebda.jpg",
        "isSignature": false,
        "quiiklyId": "3003"
    },
    {
        "id": "item_44",
        "categoryId": "sandwiches",
        "categoryName": "Sandwiches",
        "name": {
            "fr": "Supplément double viande",
            "en": "Extra Double Meat Portion",
            "ar": "إضافة لحم مضاعف"
        },
        "description": {
            "fr": "",
            "en": "",
            "ar": ""
        },
        "price": 150,
        "priceFormatted": "150 Da",
        "hasSizes": false,
        "image": "Supplément double viande.jpg",
        "isSignature": false,
        "quiiklyId": "3018"
    },
    {
        "id": "item_45",
        "categoryId": "sandwiches",
        "categoryName": "Sandwiches",
        "name": {
            "fr": "Supplément pain burger",
            "en": "Special Gourmet Burger Bun",
            "ar": "إضافة خبز برغر خاص"
        },
        "description": {
            "fr": "",
            "en": "",
            "ar": ""
        },
        "price": 700,
        "priceFormatted": "700 Da",
        "hasSizes": false,
        "image": "Supplément pain burger.jpg",
        "isSignature": false,
        "quiiklyId": "3019"
    },
    {
        "id": "item_46",
        "categoryId": "pizzas",
        "categoryName": "Pizzas",
        "name": {
            "fr": "Pizza Marguerite",
            "en": "Margherita Pizza",
            "ar": "بيتزا مارغريتا"
        },
        "description": {
            "fr": "Sauce tomate, fromage pizza, olives",
            "en": "Rich tomato sauce, melted pizza cheese, Mediterranean black olives.",
            "ar": "صلصة طماطم، جبن بيتزا، زيتون أسود متوسطي."
        },
        "price": 350,
        "priceFormatted": "350 Da",
        "hasSizes": true,
        "variants": [
            {
                "size": "Medium",
                "price": 350,
                "priceFormatted": "350 Da"
            },
            {
                "size": "Large",
                "price": 700,
                "priceFormatted": "700 Da"
            },
            {
                "size": "Méga",
                "price": 1100,
                "priceFormatted": "1100 Da"
            }
        ],
        "image": "Pizza Marguerite.jpg",
        "isSignature": false,
        "quiiklyId": ""
    },
    {
        "id": "item_47",
        "categoryId": "pizzas",
        "categoryName": "Pizzas",
        "name": {
            "fr": "Pizza napolitaine",
            "en": "Neapolitan Pizza (Minced Beef)",
            "ar": "بيتزا نابوليتان باللحم المفروم"
        },
        "description": {
            "fr": "Sauce tomate, fromage pizza, gouda, viande hachée, olives",
            "en": "Tomato sauce, pizza cheese, Dutch gouda, seasoned minced beef, black olives.",
            "ar": "صلصة طماطم، جبن بيتزا، جبن غودا، لحم مفروم، زيتون."
        },
        "price": 550,
        "priceFormatted": "550 Da",
        "hasSizes": true,
        "variants": [
            {
                "size": "Medium",
                "price": 550,
                "priceFormatted": "550 Da"
            },
            {
                "size": "Large",
                "price": 1100,
                "priceFormatted": "1100 Da"
            },
            {
                "size": "Méga",
                "price": 2000,
                "priceFormatted": "2000 Da"
            }
        ],
        "image": "Pizza napolitaine.jpg",
        "isSignature": false,
        "quiiklyId": ""
    },
    {
        "id": "item_48",
        "categoryId": "pizzas",
        "categoryName": "Pizzas",
        "name": {
            "fr": "Pizza poulet haché",
            "en": "Minced Chicken Pizza",
            "ar": "بيتزا دجاج مفروم"
        },
        "description": {
            "fr": "Sauce tomate, fromage pizza, gouda, poulet hachée, olives",
            "en": "Tomato sauce, pizza cheese, gouda, tender minced chicken, black olives.",
            "ar": "صلصة طماطم، جبن بيتزا، جبن غودا، دجاج مفروم، زيتون."
        },
        "price": 500,
        "priceFormatted": "500 Da",
        "hasSizes": true,
        "variants": [
            {
                "size": "Medium",
                "price": 500,
                "priceFormatted": "500 Da"
            },
            {
                "size": "Large",
                "price": 1000,
                "priceFormatted": "1000 Da"
            },
            {
                "size": "Méga",
                "price": 1600,
                "priceFormatted": "1600 Da"
            }
        ],
        "image": "Pizza poulet haché.jpg",
        "isSignature": false,
        "quiiklyId": ""
    },
    {
        "id": "item_49",
        "categoryId": "pizzas",
        "categoryName": "Pizzas",
        "name": {
            "fr": "Pizza 2 fromages",
            "en": "Two Cheeses Pizza",
            "ar": "بيتزا جبنتين"
        },
        "description": {
            "fr": "Sauce tomate, fromage pizza, gouda, fromage fondu, olives",
            "en": "Tomato sauce, pizza cheese, gouda, rich melted cheese, black olives.",
            "ar": "صلصة طماطم، جبن بيتزا، جبن غودا، جبن ذائب، زيتون."
        },
        "price": 450,
        "priceFormatted": "450 Da",
        "hasSizes": true,
        "variants": [
            {
                "size": "Medium",
                "price": 450,
                "priceFormatted": "450 Da"
            },
            {
                "size": "Large",
                "price": 900,
                "priceFormatted": "900 Da"
            },
            {
                "size": "Méga",
                "price": 1400,
                "priceFormatted": "1400 Da"
            }
        ],
        "image": "Pizza 2 fromages.jpg",
        "isSignature": false,
        "quiiklyId": ""
    },
    {
        "id": "item_50",
        "categoryId": "pizzas",
        "categoryName": "Pizzas",
        "name": {
            "fr": "Pizza végétarienne",
            "en": "Vegetarian Garden Pizza",
            "ar": "بيتزا خضار نباتية"
        },
        "description": {
            "fr": "Sauce tomate, fromage pizza, gouda, poivron, shampignion, oignons, olives",
            "en": "Tomato sauce, pizza cheese, gouda, bell peppers, fresh mushrooms, sweet onions, olives.",
            "ar": "صلصة طماطم، جبن بيتزا، جبن غودا، فلفل حلو، فطر، بصل، زيتون."
        },
        "price": 500,
        "priceFormatted": "500 Da",
        "hasSizes": true,
        "variants": [
            {
                "size": "Medium",
                "price": 500,
                "priceFormatted": "500 Da"
            },
            {
                "size": "Large",
                "price": 1000,
                "priceFormatted": "1000 Da"
            },
            {
                "size": "Méga",
                "price": 1500,
                "priceFormatted": "1500 Da"
            }
        ],
        "image": "Pizza végétarienne.jpg",
        "isSignature": false,
        "quiiklyId": ""
    },
    {
        "id": "item_51",
        "categoryId": "pizzas",
        "categoryName": "Pizzas",
        "name": {
            "fr": "Pizza au thon",
            "en": "Tuna Pizza",
            "ar": "بيتزا تونة"
        },
        "description": {
            "fr": "Sauce tomate, fromage pizza, gouda, thon, olives",
            "en": "Tomato sauce, pizza cheese, gouda, tender tuna, black olives.",
            "ar": "صلصة طماطم، جبن بيتزا، جبن غودا، تونة، زيتون."
        },
        "price": 650,
        "priceFormatted": "650 Da",
        "hasSizes": true,
        "variants": [
            {
                "size": "Medium",
                "price": 650,
                "priceFormatted": "650 Da"
            },
            {
                "size": "Large",
                "price": 1300,
                "priceFormatted": "1300 Da"
            },
            {
                "size": "Méga",
                "price": 2000,
                "priceFormatted": "2000 Da"
            }
        ],
        "image": "Pizza au thon.jpg",
        "isSignature": false,
        "quiiklyId": ""
    },
    {
        "id": "item_52",
        "categoryId": "pizzas",
        "categoryName": "Pizzas",
        "name": {
            "fr": "Pizza royale",
            "en": "Royal Pizza (Beef & Merguez)",
            "ar": "بيتزا رويال باللحم والمرقاز"
        },
        "description": {
            "fr": "Sauce tomate, fromage pizza, gouda, viande hachée, merguez, olives",
            "en": "Tomato sauce, pizza cheese, gouda, minced beef, spicy merguez sausages, olives.",
            "ar": "صلصة طماطم، جبن بيتزا، جبن غودا، لحم مفروم، مرقاز، زيتون."
        },
        "price": 700,
        "priceFormatted": "700 Da",
        "hasSizes": true,
        "variants": [
            {
                "size": "Medium",
                "price": 700,
                "priceFormatted": "700 Da"
            },
            {
                "size": "Large",
                "price": 1400,
                "priceFormatted": "1400 Da"
            },
            {
                "size": "Méga",
                "price": 2200,
                "priceFormatted": "2200 Da"
            }
        ],
        "image": "Pizza royale.jpg",
        "isSignature": false,
        "quiiklyId": ""
    },
    {
        "id": "item_53",
        "categoryId": "pizzas",
        "categoryName": "Pizzas",
        "name": {
            "fr": "Pizza merguez",
            "en": "Spicy Merguez Pizza",
            "ar": "بيتزا مرقاز"
        },
        "description": {
            "fr": "Sauce tomate, fromage pizza, merguez, olives",
            "en": "Tomato sauce, pizza cheese, artisanal merguez sausages, olives.",
            "ar": "صلصة طماطم، جبن بيتزا، مرقاز مشوي، زيتون."
        },
        "price": 700,
        "priceFormatted": "700 Da",
        "hasSizes": true,
        "variants": [
            {
                "size": "Medium",
                "price": 700,
                "priceFormatted": "700 Da"
            },
            {
                "size": "Large",
                "price": 1400,
                "priceFormatted": "1400 Da"
            },
            {
                "size": "Méga",
                "price": 2200,
                "priceFormatted": "2200 Da"
            }
        ],
        "image": "Pizza merguez.jpg",
        "isSignature": false,
        "quiiklyId": ""
    },
    {
        "id": "item_54",
        "categoryId": "pizzas",
        "categoryName": "Pizzas",
        "name": {
            "fr": "Pizza kebab",
            "en": "Savory Kebab Pizza",
            "ar": "بيتزا كباب"
        },
        "description": {
            "fr": "Sauce tomate, fromage pizza, gouda, kebab, olives",
            "en": "Tomato sauce, pizza cheese, gouda, spiced kebab meat, olives.",
            "ar": "صلصة طماطم، جبن بيتزا، جبن غودا، كباب متبل، زيتون."
        },
        "price": 750,
        "priceFormatted": "750 Da",
        "hasSizes": true,
        "variants": [
            {
                "size": "Medium",
                "price": 750,
                "priceFormatted": "750 Da"
            },
            {
                "size": "Large",
                "price": 1500,
                "priceFormatted": "1500 Da"
            },
            {
                "size": "Méga",
                "price": 2300,
                "priceFormatted": "2300 Da"
            }
        ],
        "image": "Pizza kebab.jpg",
        "isSignature": false,
        "quiiklyId": ""
    },
    {
        "id": "item_55",
        "categoryId": "pizzas",
        "categoryName": "Pizzas",
        "name": {
            "fr": "Pizza fruits de mer",
            "en": "Mediterranean Seafood Pizza",
            "ar": "بيتزا فواكه البحر"
        },
        "description": {
            "fr": "Sauce tomate, fromage pizza, gouda, fruits de mer, thon, olives",
            "en": "Tomato sauce, pizza cheese, gouda, assorted Mediterranean seafood, tuna, olives.",
            "ar": "صلصة طماطم، جبن بيتزا، جبن غودا، فواكه البحر، تونة، زيتون."
        },
        "price": 850,
        "priceFormatted": "850 Da",
        "hasSizes": true,
        "variants": [
            {
                "size": "Medium",
                "price": 850,
                "priceFormatted": "850 Da"
            },
            {
                "size": "Large",
                "price": 1700,
                "priceFormatted": "1700 Da"
            },
            {
                "size": "Méga",
                "price": 2600,
                "priceFormatted": "2600 Da"
            }
        ],
        "image": "Pizza fruits de mer.jpg",
        "isSignature": true,
        "quiiklyId": ""
    },
    {
        "id": "item_56",
        "categoryId": "pizzas",
        "categoryName": "Pizzas",
        "name": {
            "fr": "Pizza 4 saison",
            "en": "Four Seasons Pizza (4 Saisons)",
            "ar": "بيتزا الفصول الأربعة"
        },
        "description": {
            "fr": "1/4 pizza royale, 1/4 pizza 4 fromages, 1/4 pizza napolitaine, 1/4 pizza poulet haché",
            "en": "4 distinct quarters: 1/4 Royale, 1/4 Four Cheeses, 1/4 Neapolitan, 1/4 Minced Chicken.",
            "ar": "أربعة أرباع متنوعة: 1/4 رويال، 1/4 أربعة أجبان، 1/4 نابوليتان، 1/4 دجاج مفروم."
        },
        "price": 900,
        "priceFormatted": "900 Da",
        "hasSizes": true,
        "variants": [
            {
                "size": "Medium",
                "price": 900,
                "priceFormatted": "900 Da"
            },
            {
                "size": "Large",
                "price": 1800,
                "priceFormatted": "1800 Da"
            },
            {
                "size": "Méga",
                "price": 2700,
                "priceFormatted": "2700 Da"
            }
        ],
        "image": "Pizza 4 saison.jpg",
        "isSignature": false,
        "quiiklyId": ""
    },
    {
        "id": "item_57",
        "categoryId": "pizzas",
        "categoryName": "Pizzas",
        "name": {
            "fr": "Pizza 4 fromages",
            "en": "Four Cheeses White Pizza (4 Fromages)",
            "ar": "بيتزا 4 أجبان بالصلصة البيضاء"
        },
        "description": {
            "fr": "Sauce blanche, fromage pizza, fromage fondu, camembert, gouda, olives",
            "en": "Velvety white sauce, pizza cheese, melted cheese, French camembert, gouda, olives.",
            "ar": "صلصة بيضاء كريمية، جبن بيتزا، جبن ذائب، كامامبير، غودا، زيتون."
        },
        "price": 800,
        "priceFormatted": "800 Da",
        "hasSizes": true,
        "variants": [
            {
                "size": "Medium",
                "price": 800,
                "priceFormatted": "800 Da"
            },
            {
                "size": "Large",
                "price": 1600,
                "priceFormatted": "1600 Da"
            },
            {
                "size": "Méga",
                "price": 2500,
                "priceFormatted": "2500 Da"
            }
        ],
        "image": "Pizza 4 fromages.jpg",
        "isSignature": false,
        "quiiklyId": ""
    },
    {
        "id": "item_58",
        "categoryId": "pizzas",
        "categoryName": "Pizzas",
        "name": {
            "fr": "Pizza boisée",
            "en": "Pizza Boisée (Smoked Chicken & White Sauce)",
            "ar": "بيتزا بوازي بالدجاج المدخن"
        },
        "description": {
            "fr": "Sauce blanche, fromage pizza, gouda, pulet hachée, poulet fumé, olives",
            "en": "Velvety white sauce, pizza cheese, gouda, minced chicken, smoked chicken, olives.",
            "ar": "صلصة بيضاء كريمية، جبن بيتزا، غودا، دجاج مفروم، دجاج مدخن، زيتون."
        },
        "price": 750,
        "priceFormatted": "750 Da",
        "hasSizes": true,
        "variants": [
            {
                "size": "Medium",
                "price": 750,
                "priceFormatted": "750 Da"
            },
            {
                "size": "Large",
                "price": 1500,
                "priceFormatted": "1500 Da"
            },
            {
                "size": "Méga",
                "price": 2300,
                "priceFormatted": "2300 Da"
            }
        ],
        "image": "Pizza boisée.jpg",
        "isSignature": false,
        "quiiklyId": ""
    },
    {
        "id": "item_59",
        "categoryId": "pizzas",
        "categoryName": "Pizzas",
        "name": {
            "fr": "Pizza barberousse",
            "en": "Pizza Barbarousse (House Signature Seafood & Meats)",
            "ar": "بيتزا بارباروس الخاصة (فواكه البحر، لحوم، أجبان)"
        },
        "description": {
            "fr": "Sauce tomate, fromage pizza, gouda, poulet haché, viande hachée, fruits de mer, camembert, olives",
            "en": "The Grand Masterpiece: tomato sauce, pizza cheese, gouda, minced chicken, minced beef, Mediterranean seafood, camembert, olives.",
            "ar": "تحفة بارباروس الكبرى: صلصة طماطم، جبن بيتزا، غودا، دجاج مفروم، لحم مفروم، فواكه البحر، كامامبير، زيتون."
        },
        "price": 1200,
        "priceFormatted": "1200 Da",
        "hasSizes": true,
        "variants": [
            {
                "size": "Medium",
                "price": 1200,
                "priceFormatted": "1200 Da"
            },
            {
                "size": "Large",
                "price": 2400,
                "priceFormatted": "2400 Da"
            },
            {
                "size": "Méga",
                "price": 3200,
                "priceFormatted": "3200 Da"
            }
        ],
        "image": "Pizza barberousse.jpg",
        "isSignature": true,
        "quiiklyId": ""
    },
    {
        "id": "item_60",
        "categoryId": "pizzas",
        "categoryName": "Pizzas",
        "name": {
            "fr": "Supplément bordure fromage",
            "en": "Cheese Crust Upgrade",
            "ar": "إضافة حواف محشوة بالجبن"
        },
        "description": {
            "fr": "",
            "en": "",
            "ar": ""
        },
        "price": 150,
        "priceFormatted": "150 Da",
        "hasSizes": true,
        "variants": [
            {
                "size": "Medium",
                "price": 150,
                "priceFormatted": "150 Da"
            },
            {
                "size": "Large",
                "price": 300,
                "priceFormatted": "300 Da"
            },
            {
                "size": "Méga",
                "price": 400,
                "priceFormatted": "400 Da"
            }
        ],
        "image": "Supplément bordure fromage.jpg",
        "isSignature": false,
        "quiiklyId": ""
    },
    {
        "id": "item_61",
        "categoryId": "pizzas",
        "categoryName": "Pizzas",
        "name": {
            "fr": "Supplément sauce blanche",
            "en": "Creamy White Sauce Base Upgrade",
            "ar": "إضافة صلصة بيضاء"
        },
        "description": {
            "fr": "",
            "en": "",
            "ar": ""
        },
        "price": 100,
        "priceFormatted": "100 Da",
        "hasSizes": true,
        "variants": [
            {
                "size": "Medium",
                "price": 100,
                "priceFormatted": "100 Da"
            },
            {
                "size": "Large",
                "price": 200,
                "priceFormatted": "200 Da"
            },
            {
                "size": "Méga",
                "price": 300,
                "priceFormatted": "300 Da"
            }
        ],
        "image": "Supplément sauce blanche.jpg",
        "isSignature": false,
        "quiiklyId": ""
    },
    {
        "id": "item_62",
        "categoryId": "supplements",
        "categoryName": "Suppléments",
        "name": {
            "fr": "Gouda",
            "en": "Dutch Gouda Cheese",
            "ar": "جبن غودا"
        },
        "description": {
            "fr": "",
            "en": "",
            "ar": ""
        },
        "price": 300,
        "priceFormatted": "300 Da",
        "hasSizes": false,
        "image": "Gouda.jpg",
        "isSignature": false,
        "quiiklyId": "3005"
    },
    {
        "id": "item_63",
        "categoryId": "supplements",
        "categoryName": "Suppléments",
        "name": {
            "fr": "Fromage rouge",
            "en": "Red Cheese (Edam)",
            "ar": "جبن أحمر"
        },
        "description": {
            "fr": "",
            "en": "",
            "ar": ""
        },
        "price": 300,
        "priceFormatted": "300 Da",
        "hasSizes": false,
        "image": "Fromage rouge.jpg",
        "isSignature": false,
        "quiiklyId": "3006"
    },
    {
        "id": "item_64",
        "categoryId": "supplements",
        "categoryName": "Suppléments",
        "name": {
            "fr": "Mozzarella",
            "en": "Fresh Mozzarella Cheese",
            "ar": "جبن موزاريلا"
        },
        "description": {
            "fr": "",
            "en": "",
            "ar": ""
        },
        "price": 300,
        "priceFormatted": "300 Da",
        "hasSizes": false,
        "image": "Mozzarella.jpg",
        "isSignature": false,
        "quiiklyId": "3007"
    },
    {
        "id": "item_65",
        "categoryId": "supplements",
        "categoryName": "Suppléments",
        "name": {
            "fr": "Camembert",
            "en": "French Camembert Cheese",
            "ar": "جبن كامامبير"
        },
        "description": {
            "fr": "",
            "en": "",
            "ar": ""
        },
        "price": 200,
        "priceFormatted": "200 Da",
        "hasSizes": false,
        "image": "Camembert.jpg",
        "isSignature": false,
        "quiiklyId": "3008"
    },
    {
        "id": "item_66",
        "categoryId": "supplements",
        "categoryName": "Suppléments",
        "name": {
            "fr": "Thon",
            "en": "Premium Tuna",
            "ar": "تونة فاخرة"
        },
        "description": {
            "fr": "",
            "en": "",
            "ar": ""
        },
        "price": 200,
        "priceFormatted": "200 Da",
        "hasSizes": false,
        "image": "Thon.jpg",
        "isSignature": false,
        "quiiklyId": "3009"
    },
    {
        "id": "item_67",
        "categoryId": "supplements",
        "categoryName": "Suppléments",
        "name": {
            "fr": "Poulet fumé",
            "en": "Smoked Chicken Breast",
            "ar": "دجاج مدخن"
        },
        "description": {
            "fr": "",
            "en": "",
            "ar": ""
        },
        "price": 150,
        "priceFormatted": "150 Da",
        "hasSizes": false,
        "image": "Poulet fumé.jpg",
        "isSignature": false,
        "quiiklyId": "3010"
    },
    {
        "id": "item_68",
        "categoryId": "supplements",
        "categoryName": "Suppléments",
        "name": {
            "fr": "Sauce piquante au olives",
            "en": "Spicy Olive House Sauce",
            "ar": "صلصة حارة بالزيتون"
        },
        "description": {
            "fr": "",
            "en": "",
            "ar": ""
        },
        "price": 50,
        "priceFormatted": "50 Da",
        "hasSizes": false,
        "image": "Sauce piquante au olives.jpg",
        "isSignature": false,
        "quiiklyId": "3011"
    },
    {
        "id": "item_69",
        "categoryId": "pizzas-vip",
        "categoryName": "Pizzas VIP",
        "name": {
            "fr": "Pizza étoile",
            "en": "Pizza Étoile VIP (Star-Shaped Sole Fish)",
            "ar": "بيتزا النجمة VIP (فيليه سمك الصول)"
        },
        "description": {
            "fr": "Sauce blanche, filet de sole, gouda,  mozarella, cheddar, olives",
            "en": "Star-shaped crust, white sauce, tender filet of sole fish, gouda, mozzarella, cheddar, olives.",
            "ar": "حواف نجمية فاخرة، صلصة بيضاء، فيليه سمك الصول، غودا، موزاريلا، شيدر، زيتون."
        },
        "price": 1300,
        "priceFormatted": "1300 Da",
        "hasSizes": false,
        "image": "Pizza étoile.jpg",
        "isSignature": true,
        "quiiklyId": "2912"
    },
    {
        "id": "item_70",
        "categoryId": "pizzas-vip",
        "categoryName": "Pizzas VIP",
        "name": {
            "fr": "Pizza Elizabeth",
            "en": "Pizza Elizabeth VIP (Tender Steak)",
            "ar": "بيتزا إليزابيث VIP (شرائح الستيك)"
        },
        "description": {
            "fr": "Sauce blanche, steack, gouda,  mozarella, cheddar, olives",
            "en": "White sauce, tender sliced steak, gouda, mozzarella, cheddar, olives.",
            "ar": "صلصة بيضاء، شرائح ستيك طرية، غودا، موزاريلا، شيدر، زيتون."
        },
        "price": 1300,
        "priceFormatted": "1300 Da",
        "hasSizes": false,
        "image": null,
        "isSignature": false,
        "quiiklyId": "2913"
    },
    {
        "id": "item_71",
        "categoryId": "pizzas-vip",
        "categoryName": "Pizzas VIP",
        "name": {
            "fr": "Pizza Blanche Neige",
            "en": "Pizza Blanche Neige VIP (Snow White Kebab)",
            "ar": "بيتزا بياض الثلج VIP (كباب فاخر)"
        },
        "description": {
            "fr": "Sauce blanche, kebab, gouda,  mozarella, cheddar, olives",
            "en": "White sauce, spiced kebab meat, gouda, mozzarella, cheddar, olives.",
            "ar": "صلصة بيضاء، كباب متبل، غودا، موزاريلا، شيدر، زيتون."
        },
        "price": 1300,
        "priceFormatted": "1300 Da",
        "hasSizes": false,
        "image": "Pizza Blanche Neige.jpg",
        "isSignature": false,
        "quiiklyId": "2914"
    },
    {
        "id": "item_72",
        "categoryId": "pizzas-vip",
        "categoryName": "Pizzas VIP",
        "name": {
            "fr": "Pizza Buffalo",
            "en": "Pizza Buffalo VIP (Tender Calamari)",
            "ar": "بيتزا بوفالو VIP (حبار كالاماري)"
        },
        "description": {
            "fr": "Sauce blanche, calamar, gouda,  mozarella, cheddar, olives",
            "en": "White sauce, tender calamari rings, gouda, mozzarella, cheddar, olives.",
            "ar": "صلصة بيضاء، حلقات كالاماري طازجة، غودا، موزاريلا، شيدر، زيتون."
        },
        "price": 1300,
        "priceFormatted": "1300 Da",
        "hasSizes": false,
        "image": null,
        "isSignature": false,
        "quiiklyId": "2915"
    },
    {
        "id": "item_73",
        "categoryId": "big-vip",
        "categoryName": "BIG VIP",
        "name": {
            "fr": "Big Barberousse",
            "en": "Big Barberousse VIP Burger",
            "ar": "بيغ بارباروس VIP (إسكالوب بانيه)"
        },
        "description": {
            "fr": "Salade, tomate, oignons caramélisés, slice escalope pané, slice, frittes, omelette, fromage, sauce maison",
            "en": "Fresh salad, tomato, caramelized onions, breaded escalope slice, fries, omelette, melted cheese, house sauce.",
            "ar": "سلطة، طماطم، بصل مكرمل، شريحة إسكالوب بانيه، بطاطس مقلية، أومليت، جبن، صلصة المحل."
        },
        "price": 800,
        "priceFormatted": "800 Da",
        "hasSizes": false,
        "image": "Big Barberousse.jpg",
        "isSignature": true,
        "quiiklyId": "2908"
    },
    {
        "id": "item_74",
        "categoryId": "big-vip",
        "categoryName": "BIG VIP",
        "name": {
            "fr": "Big Bugatti",
            "en": "Big Bugatti VIP Burger",
            "ar": "بيغ بوغاتي VIP (هوت دوغ فاخر)"
        },
        "description": {
            "fr": "Salade, tomate, oignons caramélisés, slice hot dog, slice, frittes, omelette, fromage, sauce maison",
            "en": "Fresh salad, tomato, caramelized onions, hot dog slice, fries, omelette, cheese slice, house sauce.",
            "ar": "سلطة، طماطم، بصل مكرمل، شريحة هوت دوغ، بطاطس مقلية، أومليت، جبن، صلصة المحل."
        },
        "price": 800,
        "priceFormatted": "800 Da",
        "hasSizes": false,
        "image": "Big Bugatti.jpg",
        "isSignature": false,
        "quiiklyId": "2909"
    },
    {
        "id": "item_75",
        "categoryId": "big-vip",
        "categoryName": "BIG VIP",
        "name": {
            "fr": "Big BMW",
            "en": "Big BMW VIP Burger",
            "ar": "بيغ بي إم دبليو VIP (دجاج رولي)"
        },
        "description": {
            "fr": "Salade, tomate, oignons caramélisés, slice poulet roulé, slice, frittes, omelette, fromage, sauce maison",
            "en": "Fresh salad, tomato, caramelized onions, stuffed chicken roulade slice, fries, omelette, cheese slice, house sauce.",
            "ar": "سلطة، طماطم، بصل مكرمل، شريحة دجاج رولي محشي، بطاطس، أومليت، جبن، صلصة المحل."
        },
        "price": 800,
        "priceFormatted": "800 Da",
        "hasSizes": false,
        "image": "Big BMW.jpg",
        "isSignature": false,
        "quiiklyId": "2910"
    },
    {
        "id": "item_76",
        "categoryId": "big-vip",
        "categoryName": "BIG VIP",
        "name": {
            "fr": "Big Apple",
            "en": "Big Apple VIP Burger",
            "ar": "بيغ آبل VIP (لحم مفروم)"
        },
        "description": {
            "fr": "Salade, tomate, oignons caramélisés, slice viande hachée slice, frittes, omelette, fromage, sauce maison",
            "en": "Fresh salad, tomato, caramelized onions, minced beef patty, fries, omelette, melted cheese slice, house sauce.",
            "ar": "سلطة، طماطم، بصل مكرمل، شريحة لحم مفروم، بطاطس، أومليت، جبن، صلصة المحل."
        },
        "price": 800,
        "priceFormatted": "800 Da",
        "hasSizes": false,
        "image": "Big Apple.jpg",
        "isSignature": false,
        "quiiklyId": "2911"
    },
    {
        "id": "item_77",
        "categoryId": "boissons-chaudes",
        "categoryName": "Boissons chaudes",
        "name": {
            "fr": "Café noir",
            "en": "Black Espresso Coffee",
            "ar": "قهوة سوداء نسبريسو"
        },
        "description": {
            "fr": "Maxwell - carte noir",
            "en": "Selection Maxwell Carte Noire espresso.",
            "ar": "قهوة ماكسويل كارت نوار المختارة."
        },
        "price": 100,
        "priceFormatted": "100 Da",
        "hasSizes": false,
        "image": "Café noir.jpg",
        "isSignature": false,
        "quiiklyId": "3020"
    },
    {
        "id": "item_78",
        "categoryId": "boissons-chaudes",
        "categoryName": "Boissons chaudes",
        "name": {
            "fr": "Café latté",
            "en": "Creamy Café Latté",
            "ar": "كافيه لاتيه بالحليب"
        },
        "description": {
            "fr": "",
            "en": "",
            "ar": ""
        },
        "price": 150,
        "priceFormatted": "150 Da",
        "hasSizes": false,
        "image": "Café latté.jpg",
        "isSignature": false,
        "quiiklyId": "3021"
    },
    {
        "id": "item_79",
        "categoryId": "boissons-chaudes",
        "categoryName": "Boissons chaudes",
        "name": {
            "fr": "Café au lait",
            "en": "French Café au Lait",
            "ar": "قهوة بحليب كانديا"
        },
        "description": {
            "fr": "Candia + Maxwell",
            "en": "Fresh Candia milk combined with rich Maxwell espresso.",
            "ar": "حليب كانديا الطازج مع قهوة ماكسويل الغنية."
        },
        "price": 100,
        "priceFormatted": "100 Da",
        "hasSizes": false,
        "image": "Café au lait.jpg",
        "isSignature": false,
        "quiiklyId": "3022"
    },
    {
        "id": "item_80",
        "categoryId": "boissons-chaudes",
        "categoryName": "Boissons chaudes",
        "name": {
            "fr": "Cappuccino",
            "en": "Italian Cappuccino",
            "ar": "كابوتشينو إيطالي"
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
        "isSignature": false,
        "quiiklyId": "3023"
    },
    {
        "id": "item_81",
        "categoryId": "boissons-chaudes",
        "categoryName": "Boissons chaudes",
        "name": {
            "fr": "Cappuccino classic",
            "en": "Classic Cappuccino",
            "ar": "كابوتشينو كلاسيك"
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
        "isSignature": false,
        "quiiklyId": "3050"
    },
    {
        "id": "item_82",
        "categoryId": "boissons-chaudes",
        "categoryName": "Boissons chaudes",
        "name": {
            "fr": "Lait au chocolat",
            "en": "Hot Chocolate Milk",
            "ar": "حليب ساخن بالشوكولاتة نيسكويك"
        },
        "description": {
            "fr": "Candia + Nesquik",
            "en": "Warm Candia milk with delicious Nesquik chocolate.",
            "ar": "حليب كانديا دافئ مع شوكولاتة نسكويك اللذيذة."
        },
        "price": 100,
        "priceFormatted": "100 Da",
        "hasSizes": false,
        "image": "Lait au chocolat.jpg",
        "isSignature": false,
        "quiiklyId": "3051"
    },
    {
        "id": "item_83",
        "categoryId": "boissons-chaudes",
        "categoryName": "Boissons chaudes",
        "name": {
            "fr": "Lait chaud",
            "en": "Pure Warm Milk",
            "ar": "حليب ساخن كانديا"
        },
        "description": {
            "fr": "Candia",
            "en": "Fresh hot Candia milk.",
            "ar": "حليب كانديا الساخن الطازج."
        },
        "price": 60,
        "priceFormatted": "60 Da",
        "hasSizes": false,
        "image": "Lait chaud.jpg",
        "isSignature": false,
        "quiiklyId": "3052"
    },
    {
        "id": "item_84",
        "categoryId": "boissons-chaudes",
        "categoryName": "Boissons chaudes",
        "name": {
            "fr": "Thé lipton",
            "en": "Lipton Black Tea",
            "ar": "شاي ليبتون أسود"
        },
        "description": {
            "fr": "",
            "en": "",
            "ar": ""
        },
        "price": 70,
        "priceFormatted": "70 Da",
        "hasSizes": false,
        "image": "Thé lipton.jpg",
        "isSignature": false,
        "quiiklyId": "3053"
    },
    {
        "id": "item_85",
        "categoryId": "boissons-chaudes",
        "categoryName": "Boissons chaudes",
        "name": {
            "fr": "La camomille tisane",
            "en": "Chamomile Herbal Infusion",
            "ar": "تيزانة البابونج المهدئة"
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
        "isSignature": false,
        "quiiklyId": "3054"
    },
    {
        "id": "item_86",
        "categoryId": "boissons-chaudes",
        "categoryName": "Boissons chaudes",
        "name": {
            "fr": "Zanjabil",
            "en": "Warm Ginger Infusion",
            "ar": "مشروب الزنجبيل الساخن"
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
        "isSignature": false,
        "quiiklyId": "3055"
    },
    {
        "id": "item_87",
        "categoryId": "creme-dessert",
        "categoryName": "Crème dessert",
        "name": {
            "fr": "Tiramissu au biscuit",
            "en": "Classic Biscuit Tiramisu",
            "ar": "تيراميسو بالبسكويت"
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
        "isSignature": false,
        "quiiklyId": "2884"
    },
    {
        "id": "item_88",
        "categoryId": "creme-dessert",
        "categoryName": "Crème dessert",
        "name": {
            "fr": "Salede de fruits",
            "en": "Fresh Mediterranean Fruit Salad",
            "ar": "سلطة فواكه طازجة"
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
        "isSignature": false,
        "quiiklyId": "2885"
    },
    {
        "id": "item_89",
        "categoryId": "creme-dessert",
        "categoryName": "Crème dessert",
        "name": {
            "fr": "Mousse caramel",
            "en": "Caramel Mousse",
            "ar": "موس الكراميل الحريري"
        },
        "description": {
            "fr": "",
            "en": "",
            "ar": ""
        },
        "price": 400,
        "priceFormatted": "400 Da",
        "hasSizes": false,
        "image": "Mousse caramel.jpg",
        "isSignature": false,
        "quiiklyId": "2886"
    },
    {
        "id": "item_90",
        "categoryId": "creme-dessert",
        "categoryName": "Crème dessert",
        "name": {
            "fr": "Mousse au chocolat noir",
            "en": "Dark Chocolate Mousse",
            "ar": "موس الشوكولاتة السوداء"
        },
        "description": {
            "fr": "",
            "en": "",
            "ar": ""
        },
        "price": 400,
        "priceFormatted": "400 Da",
        "hasSizes": false,
        "image": "Mousse au chocolat noir.jpg",
        "isSignature": false,
        "quiiklyId": "2887"
    },
    {
        "id": "item_91",
        "categoryId": "creme-dessert",
        "categoryName": "Crème dessert",
        "name": {
            "fr": "Flan coutil",
            "en": "Flan Coutil",
            "ar": "فلان كوتيل"
        },
        "description": {
            "fr": "",
            "en": "",
            "ar": ""
        },
        "price": 250,
        "priceFormatted": "250 Da",
        "hasSizes": false,
        "image": "Flan coutil.jpg",
        "isSignature": false,
        "quiiklyId": "2888"
    },
    {
        "id": "item_92",
        "categoryId": "creme-dessert",
        "categoryName": "Crème dessert",
        "name": {
            "fr": "Flan maison",
            "en": "Traditional Homemade Flan",
            "ar": "فلان منزلي تقليدي"
        },
        "description": {
            "fr": "",
            "en": "",
            "ar": ""
        },
        "price": 200,
        "priceFormatted": "200 Da",
        "hasSizes": false,
        "image": "Flan maison.jpg",
        "isSignature": false,
        "quiiklyId": "2889"
    },
    {
        "id": "item_93",
        "categoryId": "gateaux",
        "categoryName": "Gâteaux",
        "name": {
            "fr": "Gâteau Snickers",
            "en": "Snickers Cake Slice",
            "ar": "كعكة سنيكرز"
        },
        "description": {
            "fr": "Chocolat au lait, caramel onctueux et cacahuètes croquantes.",
            "en": "Milk chocolate, silky caramel and crunchy roasted peanuts.",
            "ar": "شوكولاتة الحليب، كراميل ناعم وفول سوداني مقرمش."
        },
        "price": 200,
        "priceFormatted": "200 Da",
        "hasSizes": false,
        "image": "Snickers.jpg",
        "isSignature": false,
        "quiiklyId": "3038"
    },
    {
        "id": "item_94",
        "categoryId": "gateaux",
        "categoryName": "Gâteaux",
        "name": {
            "fr": "Pâtisserie fine 1",
            "en": "Artisan Pastry Slice 1",
            "ar": "قطعة حلوى فاخرة 1"
        },
        "description": {
            "fr": "Pâtisserie artisanale du chef pâtissier.",
            "en": "House handcrafted fine artisan pastry.",
            "ar": "حلويات فاخرة محضرة بعناية من طرف الشيف."
        },
        "price": 250,
        "priceFormatted": "250 Da",
        "hasSizes": false,
        "image": "cacke 1.jpg",
        "isSignature": false,
        "quiiklyId": "3039"
    },
    {
        "id": "item_95",
        "categoryId": "gateaux",
        "categoryName": "Gâteaux",
        "name": {
            "fr": "Pâtisserie fine 2",
            "en": "Artisan Pastry Slice 2",
            "ar": "قطعة حلوى فاخرة 2"
        },
        "description": {
            "fr": "Pâtisserie artisanale du chef pâtissier.",
            "en": "House handcrafted fine artisan pastry.",
            "ar": "حلويات فاخرة محضرة بعناية من طرف الشيف."
        },
        "price": 250,
        "priceFormatted": "250 Da",
        "hasSizes": false,
        "image": "cacke 2.jpg",
        "isSignature": false,
        "quiiklyId": "3040"
    },
    {
        "id": "item_96",
        "categoryId": "gateaux",
        "categoryName": "Gâteaux",
        "name": {
            "fr": "Pâtisserie fine 3",
            "en": "Artisan Pastry Slice 3",
            "ar": "قطعة حلوى فاخرة 3"
        },
        "description": {
            "fr": "Pâtisserie artisanale du chef pâtissier.",
            "en": "House handcrafted fine artisan pastry.",
            "ar": "حلويات فاخرة محضرة بعناية من طرف الشيف."
        },
        "price": 250,
        "priceFormatted": "250 Da",
        "hasSizes": false,
        "image": "cacke 3.jpg",
        "isSignature": false,
        "quiiklyId": "3041"
    },
    {
        "id": "item_97",
        "categoryId": "gateaux",
        "categoryName": "Gâteaux",
        "name": {
            "fr": "Pâtisserie fine 4",
            "en": "Artisan Pastry Slice 4",
            "ar": "قطعة حلوى فاخرة 4"
        },
        "description": {
            "fr": "Pâtisserie artisanale du chef pâtissier.",
            "en": "House handcrafted fine artisan pastry.",
            "ar": "حلويات فاخرة محضرة بعناية من طرف الشيف."
        },
        "price": 250,
        "priceFormatted": "250 Da",
        "hasSizes": false,
        "image": "cacke 4.jpg",
        "isSignature": false,
        "quiiklyId": "3042"
    },
    {
        "id": "item_98",
        "categoryId": "gateaux",
        "categoryName": "Gâteaux",
        "name": {
            "fr": "Pâtisserie fine 5",
            "en": "Artisan Pastry Slice 5",
            "ar": "قطعة حلوى فاخرة 5"
        },
        "description": {
            "fr": "Pâtisserie artisanale du chef pâtissier.",
            "en": "House handcrafted fine artisan pastry.",
            "ar": "حلويات فاخرة محضرة بعناية من طرف الشيف."
        },
        "price": 250,
        "priceFormatted": "250 Da",
        "hasSizes": false,
        "image": "cacke 5.jpg",
        "isSignature": false,
        "quiiklyId": "3043"
    },
    {
        "id": "item_99",
        "categoryId": "gateaux",
        "categoryName": "Gâteaux",
        "name": {
            "fr": "Pâtisserie fine 6",
            "en": "Artisan Pastry Slice 6",
            "ar": "قطعة حلوى فاخرة 6"
        },
        "description": {
            "fr": "Pâtisserie artisanale du chef pâtissier.",
            "en": "House handcrafted fine artisan pastry.",
            "ar": "حلويات فاخرة محضرة بعناية من طرف الشيف."
        },
        "price": 250,
        "priceFormatted": "250 Da",
        "hasSizes": false,
        "image": "cacke 6.jpg",
        "isSignature": false,
        "quiiklyId": "3044"
    },
    {
        "id": "item_100",
        "categoryId": "gateaux",
        "categoryName": "Gâteaux",
        "name": {
            "fr": "Pâtisserie fine 7",
            "en": "Artisan Pastry Slice 7",
            "ar": "قطعة حلوى فاخرة 7"
        },
        "description": {
            "fr": "Pâtisserie artisanale du chef pâtissier.",
            "en": "House handcrafted fine artisan pastry.",
            "ar": "حلويات فاخرة محضرة بعناية من طرف الشيف."
        },
        "price": 250,
        "priceFormatted": "250 Da",
        "hasSizes": false,
        "image": "cacke 7.jpg",
        "isSignature": false,
        "quiiklyId": "3045"
    },
    {
        "id": "item_101",
        "categoryId": "gateaux",
        "categoryName": "Gâteaux",
        "name": {
            "fr": "Tartelette au Citron",
            "en": "Lemon Tart Slice",
            "ar": "تارت الليمون المنعشة"
        },
        "description": {
            "fr": "Pâtisserie artisanale du chef pâtissier.",
            "en": "House handcrafted fine artisan pastry.",
            "ar": "حلويات فاخرة محضرة بعناية من طرف الشيف."
        },
        "price": 250,
        "priceFormatted": "250 Da",
        "hasSizes": false,
        "image": "citron.jpg",
        "isSignature": false,
        "quiiklyId": "3046"
    }
];

// Export for browser & module support
if (typeof window !== 'undefined') {
    window.restaurantInfo = restaurantInfo;
    window.menuCategories = menuCategories;
    window.menuItems = menuItems;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { restaurantInfo, menuCategories, menuItems };
}
