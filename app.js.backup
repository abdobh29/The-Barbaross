// ==========================================================================
// THE BARBAROSS - APPLICATION LOGIC
// Multilingual, RTL, Quiikly Menu Filtering, Search & Interactive Controls
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
    // --------------------------------------------------------------------------
    // State
    // --------------------------------------------------------------------------
    let currentLang = localStorage.getItem('barbaross_lang') || 'fr';
    let activeCategory = 'all';
    let activeSizeFilter = 'all';
    let searchQuery = '';
    let selectedPizzaSizes = {}; // { itemId: 'Medium' | 'Large' | 'Méga' }

    // --------------------------------------------------------------------------
    // DOM Elements
    // --------------------------------------------------------------------------
    const langButtons = document.querySelectorAll('.lang-btn');
    const categoryTabsContainer = document.getElementById('category-tabs');
    const menuGridContainer = document.getElementById('menu-grid');
    const signaturesGridContainer = document.getElementById('signatures-grid');
    const searchInput = document.getElementById('menu-search-input');
    const pizzaSizeFilterContainer = document.getElementById('pizza-size-filter');
    const sizePills = document.querySelectorAll('.size-pill');

    // Video Elements
    const heroVideo = document.getElementById('hero-video');
    const videoPlayBtn = document.getElementById('video-play-btn');
    const videoMuteBtn = document.getElementById('video-mute-btn');

    // Modal Elements
    const dishModal = document.getElementById('dish-modal');
    const modalCloseBtn = document.getElementById('modal-close-btn');
    const modalBackdrop = document.getElementById('dish-modal');

    // Mobile Drawer
    const mobileToggle = document.getElementById('mobile-toggle');
    const mobileDrawer = document.getElementById('mobile-drawer');
    const drawerBackdrop = document.getElementById('drawer-backdrop');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

    // --------------------------------------------------------------------------
    // Initialize
    // --------------------------------------------------------------------------
    function init() {
        // Set language & RTL
        setLanguage(currentLang);

        // Setup event listeners
        setupEventListeners();

        // Render sections
        renderCategoryTabs();
        renderSignatures();
        renderMenu();
        renderGallery();
    }

    // --------------------------------------------------------------------------
    // Language & Translation Handling
    // --------------------------------------------------------------------------
    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('barbaross_lang', lang);

        // Update HTML dir and lang
        const isRtl = lang === 'ar';
        document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
        document.documentElement.lang = lang;

        // Update active class on lang buttons
        langButtons.forEach(btn => {
            if (btn.dataset.lang === lang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        // Translate static UI elements
        const dict = uiTranslations[lang] || uiTranslations.fr;
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (dict[key]) {
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    el.placeholder = dict[key];
                } else {
                    el.textContent = dict[key];
                }
            }
        });

        // Translate HTML placeholder on search
        if (searchInput && dict.searchPlaceholder) {
            searchInput.placeholder = dict.searchPlaceholder;
        }

        // Re-render dynamic elements
        renderCategoryTabs();
        renderSignatures();
        renderMenu();
    }

    // --------------------------------------------------------------------------
    // Helpers
    // --------------------------------------------------------------------------
    function getDishImageSrc(imageName) {
        if (!imageName) {
            return 'assets/logo/logo.png';
        }
        return `assets/menu/${encodeURIComponent(imageName)}`;
    }

    function getCurrencyLabel() {
        const dict = uiTranslations[currentLang] || uiTranslations.fr;
        return dict.currency || 'DA';
    }

    // --------------------------------------------------------------------------
    // Render Category Tabs
    // --------------------------------------------------------------------------
    function renderCategoryTabs() {
        if (!categoryTabsContainer) return;
        const dict = uiTranslations[currentLang] || uiTranslations.fr;

        let html = `
            <button class="category-btn ${activeCategory === 'all' ? 'active' : ''}" data-category="all">
                <i class="fa-solid fa-utensils"></i>
                <span>${dict.allCategories || 'Tous'}</span>
            </button>
        `;

        menuCategories.forEach(cat => {
            const catName = cat.name[currentLang] || cat.name.fr;
            const isActive = activeCategory === cat.id;
            html += `
                <button class="category-btn ${isActive ? 'active' : ''}" data-category="${cat.id}">
                    <i class="fa-solid ${cat.icon || 'fa-circle-dot'}"></i>
                    <span>${catName}</span>
                </button>
            `;
        });

        categoryTabsContainer.innerHTML = html;

        // Add click events to tabs
        categoryTabsContainer.querySelectorAll('.category-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                activeCategory = btn.dataset.category;
                categoryTabsContainer.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                // Show/hide pizza size filter
                if (activeCategory === 'pizzas' || activeCategory === 'all') {
                    if (pizzaSizeFilterContainer) pizzaSizeFilterContainer.style.display = 'flex';
                } else {
                    if (pizzaSizeFilterContainer) pizzaSizeFilterContainer.style.display = 'none';
                }

                renderMenu();
            });
        });
    }

    // --------------------------------------------------------------------------
    // Render Signatures Showcase
    // --------------------------------------------------------------------------
    function renderSignatures() {
        if (!signaturesGridContainer) return;
        const dict = uiTranslations[currentLang] || uiTranslations.fr;

        const signatureDishes = menuItems.filter(item => item.isSignature);

        signaturesGridContainer.innerHTML = signatureDishes.map(dish => {
            const name = dish.name[currentLang] || dish.name.fr;
            const desc = dish.description[currentLang] || dish.description.fr || '';
            const price = dish.hasSizes 
                ? (dish.variants ? `${dish.variants[0].price} - ${dish.variants[dish.variants.length-1].price}` : dish.price)
                : dish.price;
            const imgSrc = getDishImageSrc(dish.image);

            return `
                <div class="signature-card" data-dish-id="${dish.id}">
                    <div class="card-img-wrap">
                        <img src="${imgSrc}" alt="${name}" loading="lazy">
                        <div class="signature-badge-overlay">${dict.signaturesBadge || 'Signature'}</div>
                    </div>
                    <div class="card-body">
                        <div class="card-top">
                            <h3 class="card-title">${name}</h3>
                            <div class="card-price">${price} ${getCurrencyLabel()}</div>
                        </div>
                        <p class="card-desc">${desc}</p>
                        <div class="card-footer-action">
                            <button class="btn-card-action" onclick="appOpenModal('${dish.id}')">
                                <span>${dict.btnViewInMenu || 'Détails'}</span>
                                <i class="fa-solid fa-arrow-right"></i>
                            </button>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    }

    // --------------------------------------------------------------------------
    // Render Menu Grid
    // --------------------------------------------------------------------------
    function renderMenu() {
        if (!menuGridContainer) return;
        const dict = uiTranslations[currentLang] || uiTranslations.fr;

        // Filter items
        let filtered = menuItems.filter(item => {
            // Category filter
            if (activeCategory !== 'all' && item.categoryId !== activeCategory) {
                return false;
            }

            // Pizza Size filter (if pizzas category or global filter active and item is pizza)
            if (item.categoryId === 'pizzas' && activeSizeFilter !== 'all' && item.hasSizes) {
                const hasVariant = item.variants && item.variants.some(v => v.size.toLowerCase() === activeSizeFilter.toLowerCase());
                if (!hasVariant) return false;
            }

            // Search query filter
            if (searchQuery.trim() !== '') {
                const q = searchQuery.toLowerCase().trim();
                const nameFr = (item.name.fr || '').toLowerCase();
                const nameEn = (item.name.en || '').toLowerCase();
                const nameAr = (item.name.ar || '').toLowerCase();
                const descFr = (item.description.fr || '').toLowerCase();
                const descEn = (item.description.en || '').toLowerCase();
                const descAr = (item.description.ar || '').toLowerCase();
                const catFr = (item.categoryName || '').toLowerCase();

                const match = nameFr.includes(q) || nameEn.includes(q) || nameAr.includes(q) ||
                              descFr.includes(q) || descEn.includes(q) || descAr.includes(q) ||
                              catFr.includes(q);
                if (!match) return false;
            }

            return true;
        });

        // Handle empty results
        if (filtered.length === 0) {
            menuGridContainer.innerHTML = `
                <div class="empty-menu-state">
                    <i class="fa-solid fa-plate-wheat"></i>
                    <h3>${dict.noResultsTitle || 'Aucun plat trouvé'}</h3>
                    <p>${dict.noResultsDesc || 'Veuillez modifier votre recherche ou sélectionner une autre catégorie.'}</p>
                </div>
            `;
            return;
        }

        menuGridContainer.innerHTML = filtered.map(dish => {
            const name = dish.name[currentLang] || dish.name.fr;
            const desc = dish.description[currentLang] || dish.description.fr || '';
            const imgSrc = getDishImageSrc(dish.image);

            // Determine active size & price for pizzas
            let currentPrice = dish.price;
            let sizeSwitcherHtml = '';

            if (dish.hasSizes && dish.variants && dish.variants.length > 0) {
                const selectedSize = selectedPizzaSizes[dish.id] || (activeSizeFilter !== 'all' ? activeSizeFilter : dish.variants[0].size);
                const matchedVariant = dish.variants.find(v => v.size.toLowerCase() === selectedSize.toLowerCase()) || dish.variants[0];
                currentPrice = matchedVariant.price;

                sizeSwitcherHtml = `
                    <div class="pizza-size-switcher">
                        ${dish.variants.map(v => {
                            const isCurrent = v.size.toLowerCase() === selectedSize.toLowerCase();
                            return `
                                <button class="card-size-btn ${isCurrent ? 'active' : ''}" 
                                        onclick="appSelectPizzaSize('${dish.id}', '${v.size}', event)">
                                    ${v.size}
                                </button>
                            `;
                        }).join('')}
                    </div>
                `;
            }

            return `
                <div class="menu-card" data-dish-id="${dish.id}">
                    <div class="menu-card-img-wrap" onclick="appOpenModal('${dish.id}')">
                        <img src="${imgSrc}" alt="${name}" loading="lazy" onerror="this.src='assets/logo/logo.png'">
                        <div class="zoom-overlay">
                            <i class="fa-solid fa-expand"></i>
                        </div>
                    </div>
                    <div class="menu-card-content">
                        <div class="menu-card-header">
                            <h3 class="menu-card-title">${name}</h3>
                            <div class="menu-card-price" id="price-${dish.id}">${currentPrice} ${getCurrencyLabel()}</div>
                        </div>
                        ${desc ? `<p class="menu-card-desc">${desc}</p>` : ''}
                        ${sizeSwitcherHtml}
                    </div>
                </div>
            `;
        }).join('');
    }

    // --------------------------------------------------------------------------
    // Select Pizza Size on card
    // --------------------------------------------------------------------------
    window.appSelectPizzaSize = function(dishId, size, event) {
        if (event) event.stopPropagation();
        selectedPizzaSizes[dishId] = size;

        const dish = menuItems.find(d => d.id === dishId);
        if (dish && dish.variants) {
            const variant = dish.variants.find(v => v.size.toLowerCase() === size.toLowerCase());
            if (variant) {
                const priceEl = document.getElementById(`price-${dishId}`);
                if (priceEl) {
                    priceEl.textContent = `${variant.price} ${getCurrencyLabel()}`;
                }
            }
        }

        // Update active class on siblings
        if (event && event.currentTarget) {
            const parent = event.currentTarget.parentElement;
            parent.querySelectorAll('.card-size-btn').forEach(btn => btn.classList.remove('active'));
            event.currentTarget.classList.add('active');
        }
    };

    // --------------------------------------------------------------------------
    // Dish Modal Lightbox
    // --------------------------------------------------------------------------
    window.appOpenModal = function(dishId) {
        const dish = menuItems.find(d => d.id === dishId);
        if (!dish) return;

        const dict = uiTranslations[currentLang] || uiTranslations.fr;
        const name = dish.name[currentLang] || dish.name.fr;
        const desc = dish.description[currentLang] || dish.description.fr || '';
        const imgSrc = getDishImageSrc(dish.image);

        // Populate modal
        document.getElementById('modal-img').src = imgSrc;
        document.getElementById('modal-title').textContent = name;
        document.getElementById('modal-cat').textContent = dish.categoryName;
        document.getElementById('modal-desc').textContent = desc || (dict.modalIngredients || 'Spécialité The Barbaross');

        const variantsContainer = document.getElementById('modal-variants');
        if (dish.hasSizes && dish.variants && dish.variants.length > 0) {
            variantsContainer.style.display = 'grid';
            variantsContainer.innerHTML = dish.variants.map(v => `
                <div class="modal-variant-card">
                    <div class="modal-variant-size">${v.size}</div>
                    <div class="modal-variant-price">${v.price} ${getCurrencyLabel()}</div>
                </div>
            `).join('');
            document.getElementById('modal-price').textContent = `${dish.variants[0].price} - ${dish.variants[dish.variants.length-1].price} ${getCurrencyLabel()}`;
        } else {
            variantsContainer.style.display = 'none';
            document.getElementById('modal-price').textContent = `${dish.price} ${getCurrencyLabel()}`;
        }

        // Open modal
        dishModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    function closeModal() {
        if (!dishModal) return;
        dishModal.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (modalCloseBtn) {
        modalCloseBtn.addEventListener('click', closeModal);
    }
    if (dishModal) {
        dishModal.addEventListener('click', (e) => {
            if (e.target === dishModal) closeModal();
        });
    }

    // --------------------------------------------------------------------------
    // Visual Gallery
    // --------------------------------------------------------------------------
    function renderGallery() {
        const galleryContainer = document.getElementById('gallery-grid');
        if (!galleryContainer) return;

        // Select 9 authentic dishes for the gallery
        const galleryDishes = [
            menuItems.find(d => d.name.fr.includes("Baba arudj")),
            menuItems.find(d => d.name.fr.includes("Pizza barberousse")),
            menuItems.find(d => d.name.fr.includes("Big Barberousse")),
            menuItems.find(d => d.name.fr.includes("Pizza étoile")),
            menuItems.find(d => d.name.fr.includes("Plat mélange")),
            menuItems.find(d => d.name.fr.includes("Tacos gratiné")),
            menuItems.find(d => d.name.fr.includes("Pizza 4 fromages")),
            menuItems.find(d => d.name.fr.includes("Plat poulet roulé")),
            menuItems.find(d => d.name.fr.includes("Tiramissu au biscuit"))
        ].filter(Boolean);

        galleryContainer.innerHTML = galleryDishes.map((dish, idx) => {
            const name = dish.name[currentLang] || dish.name.fr;
            const imgSrc = getDishImageSrc(dish.image);
            const isFeatured = idx === 0 || idx === 4;

            return `
                <div class="gallery-item ${isFeatured ? 'span-2' : ''}" onclick="appOpenModal('${dish.id}')">
                    <img src="${imgSrc}" alt="${name}" loading="lazy">
                    <div class="gallery-hover-overlay">
                        <span class="gallery-caption">${name}</span>
                    </div>
                </div>
            `;
        }).join('');
    }

    // --------------------------------------------------------------------------
    // Event Listeners Setup
    // --------------------------------------------------------------------------
    function setupEventListeners() {
        // Language switcher clicks
        langButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const lang = btn.dataset.lang;
                if (lang && lang !== currentLang) {
                    setLanguage(lang);
                }
            });
        });

        // Search input
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                searchQuery = e.target.value;
                renderMenu();
            });
        }

        // Pizza Size filter pills
        sizePills.forEach(pill => {
            pill.addEventListener('click', () => {
                sizePills.forEach(p => p.classList.remove('active'));
                pill.classList.add('active');
                activeSizeFilter = pill.dataset.size;
                renderMenu();
            });
        });

        // Video Controls
        if (heroVideo && videoPlayBtn) {
            videoPlayBtn.addEventListener('click', () => {
                if (heroVideo.paused) {
                    heroVideo.play();
                    videoPlayBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
                } else {
                    heroVideo.pause();
                    videoPlayBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
                }
            });
        }

        if (heroVideo && videoMuteBtn) {
            videoMuteBtn.addEventListener('click', () => {
                heroVideo.muted = !heroVideo.muted;
                videoMuteBtn.innerHTML = heroVideo.muted 
                    ? '<i class="fa-solid fa-volume-xmark"></i>' 
                    : '<i class="fa-solid fa-volume-high"></i>';
            });
        }

        // Mobile drawer toggle
        if (mobileToggle && mobileDrawer && drawerBackdrop) {
            mobileToggle.addEventListener('click', () => {
                mobileDrawer.classList.toggle('active');
                drawerBackdrop.classList.toggle('active');
            });

            drawerBackdrop.addEventListener('click', () => {
                mobileDrawer.classList.remove('active');
                drawerBackdrop.classList.remove('active');
            });

            mobileNavLinks.forEach(link => {
                link.addEventListener('click', () => {
                    mobileDrawer.classList.remove('active');
                    drawerBackdrop.classList.remove('active');
                });
            });
        }

        // Close modal on Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeModal();
        });
    }

    // Run
    init();
});
