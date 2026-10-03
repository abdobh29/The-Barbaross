// ==========================================================================
// THE BARBAROSS - MENU INTERFACE
// Connects with menu-data.js (Quiikly Source of Truth)
// ==========================================================================

if (typeof require !== 'undefined') {
    try {
        const data = require('./menu-data.js');
        if (data && data.menuItems) {
            menuItems = data.menuItems;
            menuCategories = data.menuCategories;
            restaurantInfo = data.restaurantInfo;
        }
    } catch (e) {
        // Fallback for direct browser script execution
    }
}

// Utility functions
function getMenuByCategory(categoryId) {
    if (!categoryId || categoryId === "all" || categoryId === "Tous") {
        return menuItems;
    }
    return menuItems.filter(item => item.categoryId === categoryId || item.categoryName === categoryId);
}

function searchMenu(searchTerm, lang = 'fr') {
    if (!searchTerm || !searchTerm.trim()) {
        return menuItems;
    }
    const term = searchTerm.toLowerCase().trim();
    return menuItems.filter(item => {
        const name = (item.name && item.name[lang] ? item.name[lang] : (item.name || '')).toLowerCase();
        const desc = (item.description && item.description[lang] ? item.description[lang] : (item.description || '')).toLowerCase();
        const cat = (item.categoryName || '').toLowerCase();
        return name.includes(term) || desc.includes(term) || cat.includes(term);
    });
}

function formatPrice(price) {
    return `${price} DA`;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        getMenuByCategory,
        searchMenu,
        formatPrice
    };
}