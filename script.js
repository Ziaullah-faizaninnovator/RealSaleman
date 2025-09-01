const products = [
  // ========== GROCERY (Basic Food Items) ==========
  { id: 1,  name: "Eggs (Dozen)",          category: "grocery",  price: 260,  image: "https://images.unsplash.com/photo-1587486913049-53fc88980cfc?w=500" },
  { id: 2,  name: "Wheat Flour (10kg)",     category: "grocery",  price: 1650, image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500" },
  { id: 3,  name: "Basmati Rice (5kg)",     category: "grocery",  price: 2400, image: "https://images.unsplash.com/photo-1547496502-affa22d38842?w=500" },
  { id: 4,  name: "Sugar (1kg)",            category: "grocery",  price: 140,  image: "https://images.unsplash.com/photo-1603569283847-aa295f0d016a?w=500" },
  { id: 5,  name: "Cooking Oil (1L)",       category: "grocery",  price: 480,  image: "https://images.unsplash.com/photo-1533050487297-09b450131914?w=500" },
  { id: 6,  name: "Salt (1kg)",             category: "grocery",  price: 70,   image: "https://images.unsplash.com/photo-1615484477779-1d0c39fb8d49?w=500" },

  // ========== DAIRY ==========
  { id: 7,  name: "Milk Pack (1L)",        category: "dairy",    price: 170,  image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=500" },
  { id: 8,  name: "Yogurt (1kg)",          category: "dairy",    price: 220,  image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=500" },
  { id: 9,  name: "Cheese Slice Pack",     category: "dairy",    price: 550,  image: "https://images.unsplash.com/photo-1611270633757-8c4e7e5685e1?w=500" },
  { id: 10, name: "Butter (200g)",         category: "dairy",    price: 340,  image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=500" },

  // ========== SNACKS ==========
  { id: 11, name: "Lay's Chips (65g)",     category: "snacks",   price: 80,   image: "https://images.unsplash.com/photo-1566475950299-b6a9ef0e6b84?w=500" },
  { id: 12, name: "Biscuits (12-Pack)",    category: "snacks",   price: 140,  image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=500" },
  { id: 13, name: "Dairy Milk Chocolate",  category: "snacks",   price: 120,  image: "https://images.unsplash.com/photo-1575377427642-087cf684f29d?w=500" },
  { id: 14, name: "Wafers (Family Pack)",  category: "snacks",   price: 200,  image: "https://images.unsplash.com/photo-1526081347589-7d8e1b04e0a0?w=500" },

  // ========== BEVERAGES ==========
  { id: 15, name: "Tapal Tea (390g)",      category: "beverages", price: 280, image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=500" },
  { id: 16, name: "Pepsi (1.5L)",         category: "beverages", price: 200, image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=500" },
  { id: 17, name: "Sprite (1.5L)",        category: "beverages", price: 200, image: "https://images.unsplash.com/photo-1596662951482-ef39eeb5c0f8?w=500" },
  { id: 18, name: "Mango Juice (1L)",     category: "beverages", price: 280, image: "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?w=500" },

  // ========== PERSONAL CARE ==========
  { id: 19, name: "Lux Soap",             category: "personal-care", price: 90,  image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=500" },
  { id: 20, name: "Colgate Toothpaste",   category: "personal-care", price: 160, image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=500" },
  { id: 21, name: "Dove Shampoo (200ml)", category: "personal-care", price: 420, image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=500" },

  // ========== CLEANING ==========
  { id: 22, name: "Surf Excel (1kg)",     category: "cleaning",  price: 320, image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=500" },
  { id: 23, name: "Harpic (500ml)",       category: "cleaning",  price: 170, image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=500" },
  { id: 24, name: "Dettol Liquid (250ml)", category: "cleaning", price: 230, image: "https://images.unsplash.com/photo-1615484477779-1d0c39fb8d49?w=500" }
];


        
        // Village coverage areas
        const villages = ["Palodhand", "Nogram", "Bakar", "Janak", "Shahmansoor", "Tajabad"];
        document.addEventListener("DOMContentLoaded", () => {
            const cartSummary = document.getElementById("cart-summary");
            const cartEmpty = document.getElementById("cart-empty");
            const cartTotals = document.getElementById("cart-totals");
            const subtotalPriceEl = document.getElementById("subtotal-price");
            const totalPriceEl = document.getElementById("total-price");
            const totalProfitEl = document.getElementById("total-profit");
            const confirmOrderBtn = document.getElementById("confirm-order");
            const productGrid = document.getElementById("productGrid");
            const categoryBadges = document.querySelectorAll(".category-badge");
            const categoryFilter = document.getElementById("categoryFilter");
            const searchInput = document.getElementById("searchInput");
            const getLocationBtn = document.getElementById("getLocationBtn");
            const addressInput = document.getElementById("address");
            const voiceBtn = document.getElementById("voiceBtn");
            const languageToggle = document.getElementById("languageToggle");
            
            let cart = [];
            let currentLanguage = 'english';
            
            // Initialize the product grid
            function renderProducts(productsToRender) {
                productGrid.innerHTML = '';
                
                if (productsToRender.length === 0) {
                    productGrid.innerHTML = '<div class="col-12 text-center py-5"><i class="fas fa-box-open fa-3x mb-3 text-muted"></i><p class="text-muted">No products found</p></div>';
                    return;
                }
                
                productsToRender.forEach(product => {
                    const productCard = document.createElement('div');
                    productCard.className = 'col-md-6 col-lg-4 mb-4';
                    productCard.innerHTML = `
                        <div class="card product-card h-100" data-id="${product.id}" data-category="${product.category}">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-4">
                                        <img src="${product.image}" class="product-img w-100" alt="${product.name}">
                                    </div>
                                    <div class="col-8">
                                        <h6 class="card-title">${product.name}</h6>
                                        <div class="price-comparison mb-2">
                                            <span class="market-price">Market: ${product.marketPrice} PKR</span><br>
                                            <span class="our-price">Our Price: ${product.price} PKR</span>
                                        </div>
                                        <span class="profit-badge"><i class="fas fa-coins me-1"></i>Profit: ${product.profit} PKR</span>
                                        <div class="mt-2">
                                            <small class="text-muted">Unit: ${product.unit}</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card-footer bg-transparent">
                                <div class="d-flex justify-content-between align-items-center">
                                    <input type="number" class="form-control quantity-input" min="1" value="1" style="width: 60px;">
                                    <button class="btn btn-sm btn-primary add-to-cart-btn">
                                        <i class="fas fa-cart-plus me-1"></i>Add
                                    </button>
                                </div>
                            </div>
                        </div>
                    `;
                    productGrid.appendChild(productCard);
                });
                
                // Add event listeners to the new add-to-cart buttons
                document.querySelectorAll('.add-to-cart-btn').forEach(button => {
                    button.addEventListener('click', addToCart);
                });
            }
            
            // Filter products by category
            function filterProducts(category = 'all', searchTerm = '') {
                let filteredProducts = products;
                
                if (category !== 'all') {
                    filteredProducts = filteredProducts.filter(product => product.category === category);
                }
                
                if (searchTerm) {
                    const term = searchTerm.toLowerCase();
                    filteredProducts = filteredProducts.filter(product => 
                        product.name.toLowerCase().includes(term)
                    );
                }
                
                renderProducts(filteredProducts);
            }
            
            // Add to cart function
            function addToCart(event) {
                const productCard = event.target.closest('.product-card');
                const productId = parseInt(productCard.dataset.id);
                const quantityInput = productCard.querySelector('.quantity-input');
                const quantity = parseInt(quantityInput.value) || 1;
                
                const product = products.find(p => p.id === productId);
                const existingItem = cart.find(item => item.id === productId);
                
                if (existingItem) {
                    existingItem.quantity += quantity;
                } else {
                    cart.push({
                        ...product,
                        quantity: quantity
                    });
                }
                
                updateCart();
                
                // Show feedback to user
                const feedback = document.createElement('div');
                feedback.innerHTML = `<i class="fas fa-check-circle me-2"></i>Added ${quantity} ${product.unit} of ${product.name}`;
                feedback.className = 'alert alert-success py-2 px-3 position-fixed';
                feedback.style.top = '20px';
                feedback.style.right = '20px';
                feedback.style.zIndex = '1100';
                document.body.appendChild(feedback);
                
                setTimeout(() => {
                    feedback.remove();
                }, 3000);
            }
            
            // Update cart display
            function updateCart() {
                cartSummary.innerHTML = '';
                
                if (cart.length === 0) {
                    cartEmpty.style.display = 'block';
                    cartTotals.style.display = 'none';
                    confirmOrderBtn.disabled = true;
                    return;
                }
                
                cartEmpty.style.display = 'none';
                cartTotals.style.display = 'block';
                
                let subtotal = 0;
                let totalProfit = 0;
                
                cart.forEach(item => {
                    const itemTotal = item.price * item.quantity;
                    const itemProfit = item.profit * item.quantity;
                    subtotal += itemTotal;
                    totalProfit += itemProfit;
                    
                    const li = document.createElement('li');
                    li.className = 'list-group-item d-flex justify-content-between align-items-center';
                    li.innerHTML = `
                        <div>
                            <strong>${item.name}</strong>
                            <div class="text-muted">${item.quantity} ${item.unit} × ${item.price} PKR</div>
                        </div>
                        <div class="text-end">
                            <div>${itemTotal} PKR</div>
                            <small class="profit-badge">Profit: ${itemProfit} PKR</small>
                        </div>
                    `;
                    cartSummary.appendChild(li);
                });
                
                subtotalPriceEl.textContent = subtotal;
                totalPriceEl.textContent = subtotal + 50; // Adding delivery charge
                totalProfitEl.textContent = totalProfit;
                
                confirmOrderBtn.disabled = false;
            }
            
            // Cancel order
            document.getElementById("cancel-order").addEventListener("click", () => {
                cart = [];
                updateCart();
            });
            
            // Confirm order
            confirmOrderBtn.addEventListener("click", () => {
                const customerName = document.getElementById("customer-name").value;
                const customerPhone = document.getElementById("customer-phone").value;
                const address = addressInput.value;
                const paymentMethod = document.getElementById("payment-method").value;
                const specialNotes = document.getElementById("special-notes").value;
                
                if (!customerName || !customerPhone || !address) {
                    alert("Please fill in all required fields: customer name, phone, and address");
                    return;
                }
                
                // In a real app, you would send this data to your backend
                console.log("Order confirmed:", {
                    customerName,
                    customerPhone,
                    address,
                    paymentMethod,
                    specialNotes,
                    items: cart,
                    subtotal: parseInt(subtotalPriceEl.textContent),
                    total: parseInt(totalPriceEl.textContent),
                    totalProfit: parseInt(totalProfitEl.textContent)
                });
                
                // Show order confirmation
                alert(`Order confirmed for ${customerName}! Total: ${totalPriceEl.textContent} PKR`);
                cart = [];
                updateCart();
                document.getElementById("customer-name").value = '';
                document.getElementById("customer-phone").value = '';
                addressInput.value = '';
                document.getElementById("special-notes").value = '';
            });
            
            // Get GPS location
            getLocationBtn.addEventListener("click", () => {
                if (navigator.geolocation) {
                    getLocationBtn.innerHTML = '<i class="fas fa-spinner fa-spin me-1"></i> Locating...';
                    navigator.geolocation.getCurrentPosition(
                        (position) => {
                            const lat = position.coords.latitude;
                            const lng = position.coords.longitude;
                            // In a real app, you would reverse geocode to get address
                            addressInput.value = `GPS: ${lat.toFixed(4)}, ${lng.toFixed(4)}`;
                            getLocationBtn.innerHTML = '<i class="fas fa-map-marker-alt me-1"></i> GPS';
                            
                            // Show on map (simulated)
                            document.getElementById("map").innerHTML = `
                                <div class="text-center p-3">
                                    <i class="fas fa-map-marked-alt fa-3x mb-3" style="color: var(--primary-color);"></i>
                                    <h6>Delivery Location</h6>
                                    <p>${villages[Math.floor(Math.random() * villages.length)]} Area</p>
                                    <small class="text-muted">Lat: ${lat.toFixed(4)}, Lng: ${lng.toFixed(4)}</small>
                                </div>
                            `;
                        },
                        (error) => {
                            alert("Could not get location: " + error.message);
                            getLocationBtn.innerHTML = '<i class="fas fa-map-marker-alt me-1"></i> GPS';
                        }
                    );
                } else {
                    alert("Geolocation is not supported by your browser");
                }
            });
            
            // Voice command (simulated)
            voiceBtn.addEventListener("click", () => {
                // In a real app, you would use the Web Speech API
                const productNames = products.map(p => p.name);
                const randomProduct = productNames[Math.floor(Math.random() * productNames.length)];
                
                voiceBtn.innerHTML = '<i class="fas fa-microphone-slash"></i>';
                voiceBtn.style.backgroundColor = '#4CAF50';
                
                setTimeout(() => {
                    alert(`Voice command: Added ${randomProduct} to cart`);
                    voiceBtn.innerHTML = '<i class="fas fa-microphone"></i>';
                    voiceBtn.style.backgroundColor = 'var(--secondary-color)';
                    
                    // Simulate adding the product to cart
                    const product = products.find(p => p.name === randomProduct);
                    if (product) {
                        const existingItem = cart.find(item => item.id === product.id);
                        
                        if (existingItem) {
                            existingItem.quantity += 1;
                        } else {
                            cart.push({
                                ...product,
                                quantity: 1
                            });
                        }
                        
                        updateCart();
                    }
                }, 1500);
            });
            
            // Language toggle (simulated Urdu support)
            languageToggle.addEventListener("click", (e) => {
                e.preventDefault();
                currentLanguage = currentLanguage === 'english' ? 'urdu' : 'english';
                
                if (currentLanguage === 'urdu') {
                    languageToggle.innerHTML = '<i class="fas fa-language me-1"></i> English';
                    document.querySelector('title').textContent = 'ریل سیلزمین - پلوڈنڈ';
                    document.querySelector('.navbar-brand').innerHTML = '<i class="fas fa-store me-2"></i>ریل سیلزمین <small class="d-block" style="font-size: 0.6rem; opacity: 0.8;">پلوڈنڈ، صوابی</small>';
                } else {
                    languageToggle.innerHTML = '<i class="fas fa-language me-1"></i> اردو';
                    document.querySelector('title').textContent = 'Real Salesman - Palodhand';
                    document.querySelector('.navbar-brand').innerHTML = '<i class="fas fa-store me-2"></i>Real Salesman <small class="d-block" style="font-size: 0.6rem; opacity: 0.8;">Palodhand, Swabi</small>';
                }
            });
            
            // Category filter badges
            categoryBadges.forEach(badge => {
                badge.addEventListener('click', () => {
                    categoryBadges.forEach(b => b.classList.remove('active'));
                    badge.classList.add('active');
                    const category = badge.dataset.category;
                    categoryFilter.value = category;
                    filterProducts(category, searchInput.value);
                });
            });
            
            // Category dropdown filter
            categoryFilter.addEventListener('change', () => {
                const category = categoryFilter.value;
                categoryBadges.forEach(b => b.classList.remove('active'));
                document.querySelector(`.category-badge[data-category="${category}"]`).classList.add('active');
                filterProducts(category, searchInput.value);
            });
            
            // Search functionality
            searchInput.addEventListener('input', () => {
                const term = searchInput.value;
                const activeCategory = document.querySelector('.category-badge.active').dataset.category;
                filterProducts(activeCategory === 'all' ? 'all' : activeCategory, term);
            });
            
            // Initialize the app
            renderProducts(products);
            updateCart();
            
            // Simulate price updates from API
            setInterval(() => {
                // In a real app, you would fetch from your backend which gets prices from local market APIs
                products.forEach(product => {
                    // Random price fluctuation ±5%
                    const fluctuation = 1 + (Math.random() * 0.1 - 0.05);
                    product.marketPrice = Math.round(product.price * 1.1 * fluctuation);
                });
                
                // Re-render products to show updated prices
                const activeCategory = document.querySelector('.category-badge.active').dataset.category;
                const searchTerm = searchInput.value;
                filterProducts(activeCategory === 'all' ? 'all' : activeCategory, searchTerm);
            }, 30000); // Update every 30 seconds
        });