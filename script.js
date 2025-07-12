const products = [
  // ---------- GROCERY ----------
  { id: 1,  name: "Eggs (Dozen)",                category: "grocery",       price: 250,  profit: 30,  marketPrice: 270,  unit: "dozen",       image: "https://images.unsplash.com/photo-1587486913049-53fc88980cfc?w=500&auto=format&fit=crop" },
  { id: 2,  name: "Atta (Flour) 10 kg",          category: "grocery",       price: 1500, profit: 120, marketPrice: 1620, unit: "10 kg bag",   image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500&auto=format&fit=crop" },
  { id: 3,  name: "Basmati Rice 5 kg",           category: "grocery",       price: 2200, profit: 200, marketPrice: 2400, unit: "5 kg bag",    image: "https://images.unsplash.com/photo-1547496502-affa22d38842?w=500&auto=format&fit=crop" },
  { id: 4,  name: "Sugar 1 kg",                  category: "grocery",       price: 120,  profit: 10,  marketPrice: 130,  unit: "kg",          image: "https://images.unsplash.com/photo-1603569283847-aa295f0d016a?w=500&auto=format&fit=crop" },
  { id: 5,  name: "Cooking Oil 1 L",             category: "grocery",       price: 455,  profit: 40,  marketPrice: 495,  unit: "liter",       image: "https://images.unsplash.com/photo-1533050487297-09b450131914?w=500&auto=format&fit=crop" },
  { id: 6,  name: "Refined Salt 1 kg",           category: "grocery",       price: 40,   profit: 5,   marketPrice: 45,   unit: "kg",          image: "https://images.unsplash.com/photo-1584735422189-080a0225d1b8?w=500&auto=format&fit=crop" },
  { id: 7,  name: "Chickpeas Kabuli 1 kg",       category: "grocery",       price: 260,  profit: 25,  marketPrice: 285,  unit: "kg",          image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop" },
  { id: 8,  name: "Maida 2 kg",                  category: "grocery",       price: 220,  profit: 18,  marketPrice: 238,  unit: "2 kg bag",    image: "https://images.unsplash.com/photo-1603569283847-aa295f0d016a?w=500&auto=format&fit=crop" },

  // ---------- SPICES ----------
  { id: 9,  name: "Shan Biryani Masala 50 g",    category: "spices",        price: 120,  profit: 15,  marketPrice: 135,  unit: "packet",      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500&auto=format&fit=crop" },
  { id: 10, name: "National Nihari Masala 43 g", category: "spices",        price: 100,  profit: 12,  marketPrice: 112,  unit: "packet",      image: "https://images.unsplash.com/photo-1603569283847-aa295f0d016a?w=500&auto=format&fit=crop" },

  // ---------- SNACKS ----------
  { id: 11, name: "Dairy Milk Chocolate 38 g",   category: "snacks",        price: 100,  profit: 15,  marketPrice: 115,  unit: "bar",         image: "https://images.unsplash.com/photo-1575377427642-087cf684f29d?w=500&auto=format&fit=crop" },
  { id: 12, name: "Lay's Masala Chips 65 g",     category: "snacks",        price: 70,   profit: 8,   marketPrice: 78,   unit: "pack",        image: "https://images.unsplash.com/photo-1566475950299-b6a9ef0e6b84?w=500&auto=format&fit=crop" },
  { id: 13, name: "Sooper Biscuits 12‑pack",     category: "snacks",        price: 120,  profit: 12,  marketPrice: 132,  unit: "pack",        image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=500&auto=format&fit=crop" },
  { id: 14, name: "Nimko Mix 200 g",             category: "snacks",        price: 160,  profit: 18,  marketPrice: 178,  unit: "pack",        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop" },
  { id: 15, name: "Candi Cookies 150 g",         category: "snacks",        price: 130,  profit: 15,  marketPrice: 145,  unit: "pack",        image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=500&auto=format&fit=crop" },

  // ---------- DAIRY ----------
  { id: 16, name: "Nestlé Milk Pack 1 L",        category: "dairy",         price: 150,  profit: 10,  marketPrice: 160,  unit: "1 L",         image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=500&auto=format&fit=crop" },
  { id: 17, name: "Olper's Milk 1 L",            category: "dairy",         price: 160,  profit: 12,  marketPrice: 172,  unit: "1 L",         image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=500&auto=format&fit=crop" },
  { id: 18, name: "Plain Yogurt 1 kg",           category: "dairy",         price: 200,  profit: 20,  marketPrice: 220,  unit: "1 kg",        image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=500&auto=format&fit=crop" },
  { id: 19, name: "Cheddar Cheese 1 kg",         category: "dairy",         price: 500,  profit: 60,  marketPrice: 560,  unit: "1 kg",        image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=500&auto=format&fit=crop" },
  { id: 20, name: "Salted Butter 200 g",         category: "dairy",         price: 320,  profit: 25,  marketPrice: 345,  unit: "200 g",       image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=500&auto=format&fit=crop" },

  // ---------- BEVERAGES ----------
  { id: 21, name: "Tapal Danedar Tea 390 g",     category: "beverages",     price: 250,  profit: 20,  marketPrice: 270,  unit: "pack",        image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=500&auto=format&fit=crop" },
  { id: 22, name: "Lipton Yellow Label 190 g",   category: "beverages",     price: 200,  profit: 18,  marketPrice: 218,  unit: "pack",        image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=500&auto=format&fit=crop" },
  { id: 23, name: "Pepsi 1.5 L Bottle",         category: "beverages",     price: 180,  profit: 15,  marketPrice: 195,  unit: "1.5 L",       image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=500&auto=format&fit=crop" },
  { id: 24, name: "Coca‑Cola 330 ml Can",        category: "beverages",     price: 60,   profit: 5,   marketPrice: 65,   unit: "330 ml",      image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=500&auto=format&fit=crop" },
  { id: 25, name: "Rooh Afza 800 ml",            category: "beverages",     price: 300,  profit: 25,  marketPrice: 325,  unit: "800 ml",      image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=500&auto=format&fit=crop" },
  { id: 26, name: "Tang Orange 500 g",           category: "beverages",     price: 290,  profit: 25,  marketPrice: 315,  unit: "jar",         image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=500&auto=format&fit=crop" },
  { id: 27, name: "Fruita Vitals Mango 1 L",     category: "beverages",     price: 260,  profit: 22,  marketPrice: 282,  unit: "1 L",         image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=500&auto=format&fit=crop" },

  // ---------- PERSONAL CARE ----------
  { id: 28, name: "Lux Soap Bar",                category: "personal‑care", price: 80,   profit: 8,   marketPrice: 88,   unit: "bar",         image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=500&auto=format&fit=crop" },
  { id: 29, name: "Lifebuoy Soap Bar",           category: "personal‑care", price: 75,   profit: 8,   marketPrice: 83,   unit: "bar",         image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=500&auto=format&fit=crop" },
  { id: 30, name: "Head & Shoulders 200 ml",     category: "personal‑care", price: 250,  profit: 22,  marketPrice: 272,  unit: "200 ml",      image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=500&auto=format&fit=crop" },
  { id: 31, name: "Colgate Toothpaste 100 g",    category: "personal‑care", price: 140,  profit: 14,  marketPrice: 154,  unit: "100 g",       image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=500&auto=format&fit=crop" },
  { id: 32, name: "Dove Body Wash 250 ml",       category: "personal‑care", price: 400,  profit: 35,  marketPrice: 435,  unit: "250 ml",      image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=500&auto=format&fit=crop" },
  { id: 33, name: "Sunsilk Conditioner 180 ml",  category: "personal‑care", price: 220,  profit: 20,  marketPrice: 240,  unit: "180 ml",      image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=500&auto=format&fit=crop" },
  { id: 34, name: "Fair & Lovely Cream 25 g",    category: "personal‑care", price: 120,  profit: 12,  marketPrice: 132,  unit: "25 g",        image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=500&auto=format&fit=crop" },

  // ---------- CLEANING ----------
  { id: 35, name: "Surf Excel Detergent 1 kg",   category: "cleaning",      price: 300,  profit: 28,  marketPrice: 328,  unit: "1 kg",        image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=500&auto=format&fit=crop" },
  { id: 36, name: "Ariel Washing Powder 1 kg",   category: "cleaning",      price: 280,  profit: 25,  marketPrice: 305,  unit: "1 kg",        image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=500&auto=format&fit=crop" },
  { id: 37, name: "Dettol Antiseptic 250 ml",    category: "cleaning",      price: 180,  profit: 15,  marketPrice: 195,  unit: "250 ml",      image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=500&auto=format&fit=crop" },
  { id: 38, name: "Harpic Cleaner 500 ml",       category: "cleaning",      price: 150,  profit: 14,  marketPrice: 164,  unit: "500 ml",      image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=500&auto=format&fit=crop" },

  // ---------- FROZEN ----------
  { id: 39, name: "K&N's Nuggets 750 g",         category: "frozen",        price: 550,  profit: 50,  marketPrice: 600,  unit: "750 g",       image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop" },
  { id: 40, name: "Sabroso Pops 700 g",          category: "frozen",        price: 520,  profit: 48,  marketPrice: 568,  unit: "700 g",       image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop" },

  // ---------- HOME ESSENTIALS ----------
  { id: 41, name: "Rose Petal Tissue Roll",      category: "home‑essentials", price: 80,  profit: 8,   marketPrice: 88,   unit: "roll",        image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=500&auto=format&fit=crop" },
  { id: 42, name: "Matchbox 12‑Pack",            category: "home‑essentials", price: 60,  profit: 6,   marketPrice: 66,   unit: "box",         image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=500&auto=format&fit=crop" },
  { id: 43, name: "LED Bulb 12 W",               category: "home‑essentials", price: 350, profit: 30,  marketPrice: 380,  unit: "piece",       image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=500&auto=format&fit=crop" },

  // ---------- BABY CARE ----------
  { id: 44, name: "Pampers Small 36 pcs",        category: "baby‑care",      price: 820, profit: 70,  marketPrice: 890,  unit: "36 pcs",      image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=500&auto=format&fit=crop" },

  // ---------- CONDIMENTS ----------
  { id: 45, name: "Mitchell's Ketchup 500 g",    category: "condiments",     price: 200, profit: 18,  marketPrice: 218,  unit: "500 g",       image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=500&auto=format&fit=crop" },
  { id: 46, name: "Shezan Chili Garlic 300 g",   category: "condiments",     price: 230, profit: 20,  marketPrice: 250,  unit: "300 g",       image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=500&auto=format&fit=crop" },

  // ---------- BAKERY & MISC ----------
  { id: 47, name: "Dawn Bread Loaf",             category: "bakery",         price: 120, profit: 10,  marketPrice: 130,  unit: "loaf",         image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=500&auto=format&fit=crop" },
  { id: 48, name: "Candles Pack of 6",           category: "home‑essentials", price: 100, profit: 10, marketPrice: 110,  unit: "pack",        image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=500&auto=format&fit=crop" },

  // ---------- DAIRY SPECIAL ----------
  { id: 49, name: "Olper's Cream 200 ml",        category: "dairy",          price: 170, profit: 12,  marketPrice: 182,  unit: "200 ml",      image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=500&auto=format&fit=crop" },

  // ---------- SOFT DRINK ----------
  { id: 50, name: "Cola Next 500 ml",            category: "beverages",      price: 50,  profit: 5,   marketPrice: 55,   unit: "500 ml",      image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=500&auto=format&fit=crop" }
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