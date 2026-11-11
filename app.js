/**
 * BENDITA KA — LUXE FITNESS E-COMMERCE ENGINE
 * Official Catalog, Shopping Cart, Interactive Quick View & Size Guide
 */

// Official store catalog scraped from https://www.benditaka.com.br/
const BENDITA_PRODUCTS = [
  {
    id: "top-seamless-black",
    name: "Top Seamless Bendita",
    category: "top",
    categoryLabel: "Top Esportivo Seamless",
    price: 149.00,
    colorName: "Preto Ônix (Essential Black)",
    colorHex: "#111111",
    badge: "Bestseller",
    images: [
      "https://dcdn-us.mitiendanube.com/stores/005/325/256/products/img_6033-jpg-3-90940027f7dd9c2cd017788901234970-640-0.webp",
      "https://dcdn-us.mitiendanube.com/stores/005/325/256/products/img_6032-jpg-2-3a79cc8b9809d2a61f17798274518903-480-0.webp",
      "https://dcdn-us.mitiendanube.com/stores/005/325/256/products/img_6033-jpg-4-3467fc86596763f2ec17789477372306-480-0.webp"
    ],
    description: "Top esportivo feminino com design ajustado e faixa elástica reforçada. Desenvolvido para unir sustentação impecável, flexibilidade e conforto em cada detalhe. Com tecnologia sem costura, elimina o atrito com a pele durante treinos intensos e uso prolongado.",
    features: ["Tecnologia Zero-Costura", "Sustentação Média-Alta", "Alças anatômicas que não marcam os ombros", "Secagem ultra rápida"]
  },
  {
    id: "legging-seamless-slate",
    name: "Legging Seamless Essencial",
    category: "legging",
    categoryLabel: "Legging Alta Compressão",
    price: 209.00,
    colorName: "Cinza Mescla (Heather Slate)",
    colorHex: "#70737a",
    badge: "Alta Compressão",
    images: [
      "https://dcdn-us.mitiendanube.com/stores/005/325/256/products/4-4-3c31c5acc708fe49d217786945789227-640-0.webp"
    ],
    description: "A Legging Seamless Essencial foi criada para acompanhar a mulher que você é hoje — forte, leve e em constante movimento. Com modelagem de cós anatômico alto e tecnologia de compressão graduada, ela esculpe a silhueta, valoriza o quadril e assegura 100% de opacidade no agachamento.",
    features: ["Squat Proof (zero transparência)", "Cós alto compressivo que não desce nem enrola", "Efeito modelador e anti-celulite", "Toque extremamente macio e aveludado"]
  },
  {
    id: "shorts-seamless-mineral",
    name: "Shorts Seamless Bendita",
    category: "shorts",
    categoryLabel: "Shorts Meia Coxa",
    price: 149.00,
    colorName: "Cinza Chumbo (Mineral Gray)",
    colorHex: "#48494d",
    badge: "Must Have",
    images: [
      "https://dcdn-us.mitiendanube.com/stores/005/325/256/products/5-5-e4baca07392197f1d217786947684404-640-0.webp"
    ],
    description: "Movimente-se com confiança, conforto e elegância. O Shorts Seamless Bendita foi projetado com comprimento meia-coxa perfeito: não sobe, não embola e fornece firmeza muscular para corridas, pilates ou musculação pesada.",
    features: ["Comprimento seguro meia coxa", "Textura canelada lateral para ajuste preciso", "Liberdade total de amplitude", "Não esquenta e ventila com facilidade"]
  },
  {
    id: "top-seamless-rose",
    name: "Top Seamless Essencial",
    category: "top",
    categoryLabel: "Top Esportivo Seamless",
    price: 149.00,
    colorName: "Rose Quartz (Rosa Suave)",
    colorHex: "#d89ca4",
    badge: "Nova Cor",
    images: [
      "https://dcdn-us.mitiendanube.com/stores/005/325/256/products/top-rosa-a967a2b8a9b9734b6217787726859433-640-0.webp"
    ],
    description: "Leve, feminino e irresistivelmente confortável. O Top Seamless Essencial na nuance Rose Quartz traz suavidade e luxo para seu armário fitness. Possui bojo removível ultra fino e elástico inferior com sustentação suave que não aperta as costelas.",
    features: ["Tom suave acetinado de alta sofisticação", "Entrada para bojo removível", "Costura zero que previne marcas no busto", "Fio respirável antiodor"]
  },
  {
    id: "top-seamless-taupe",
    name: "Top Seamless Bendita",
    category: "top",
    categoryLabel: "Top Esportivo Seamless",
    price: 149.00,
    colorName: "Café Latte (Mocca Taupe)",
    colorHex: "#8d7465",
    badge: "Edição Limitada",
    images: [
      "https://dcdn-us.mitiendanube.com/stores/005/325/256/products/whatsapp-image-2026-05-11-at-14-37-28-eaf190932b8d11270717787802016888-640-0.webp",
      "https://dcdn-us.mitiendanube.com/stores/005/325/256/products/whatsapp-image-2026-05-11-at-14-32-34-1-32109fc6e06912bfe017789370587185-480-0.webp"
    ],
    description: "A cor neutra mais desejada do luxo esportivo contemporâneo. O tom Mocca Taupe harmoniza com qualquer sobreposição, agregando um ar sofisticado e discreto tanto no estúdio quanto nas ruas.",
    features: ["Paleta terrosa exclusiva", "Trama texturizada estruturante", "Alta resistência a lavagens sem desbotar", "Design minimalista contemporâneo"]
  },
  {
    id: "shorts-seamless-ocean",
    name: "Shorts Seamless Essencial",
    category: "shorts",
    categoryLabel: "Shorts Meia Coxa",
    price: 149.00,
    colorName: "Azul Petróleo (Deep Ocean)",
    colorHex: "#2b4c5b",
    badge: "Elegance",
    images: [
      "https://dcdn-us.mitiendanube.com/stores/005/325/256/products/whatsapp-image-2026-05-11-at-14-30-34-1-94d106f2cbea8a801f17788877696215-640-0.webp"
    ],
    description: "Uma tonalidade profunda e imponente. Este shorts traz cós ultra-anatômico que modela a cintura sem restringir a respiração diafragmática. Ideal para quem valoriza discrição com máxima elegância.",
    features: ["Cós duplo canelado de alta sustentação", "Modelagem ergonômica sem marcas", "Fator de proteção UV50+", "Elasticidade 4-way stretch"]
  },
  {
    id: "shorts-seamless-sienna",
    name: "Shorts Seamless Essencial",
    category: "shorts",
    categoryLabel: "Shorts Meia Coxa",
    price: 149.00,
    colorName: "Terracota (Burnt Sienna)",
    colorHex: "#9b4733",
    badge: "Tendência",
    images: [
      "https://dcdn-us.mitiendanube.com/stores/005/325/256/products/whatsapp-image-2026-05-11-at-14-34-21-1-334b8387811870a0f217788879948628-640-0.webp",
      "https://dcdn-us.mitiendanube.com/stores/005/325/256/products/whatsapp-image-2026-05-11-at-14-32-14-8405daebcca16b774517788898143522-480-0.webp"
    ],
    description: "Vibrante, quente e magnético. O Terracota Bendita Ka realça o bronzeado e transforma o look do treino numa verdadeira declaração de estilo pessoal. Acabamento opaco premium.",
    features: ["Pigmentação premium indelével", "Tecido respirável e sedoso", "Cós modelador com reforço de elastano", "Zero transparência mesmo esticado"]
  },
  {
    id: "legging-seamless-midnight",
    name: "Legging Seamless Essencial",
    category: "legging",
    categoryLabel: "Legging Alta Compressão",
    price: 209.00,
    colorName: "Navy Blue (Midnight Navy)",
    colorHex: "#1b2838",
    badge: "Clássico Supremo",
    images: [
      "https://dcdn-us.mitiendanube.com/stores/005/325/256/products/whatsapp-image-2026-05-11-at-14-29-53-466fdc96bd659ac93e17788892665622-640-0.webp"
    ],
    description: "A clássica legging azul-marinho reinventada sob o conceito de alta alfaiataria esportiva. Comprimento no ossinho do tornozelo, elasticidade de retorno perfeito e ajuste que abraça as curvas sem apertar.",
    features: ["Compressão que reduz a fadiga muscular", "100% à prova de agachamento", "Sem costuras incômodas na virilha ou laterais", "Toque fresco de toque acetinado"]
  }
];

// App State
let state = {
  currentFilter: "all",
  currentSort: "featured",
  cart: JSON.parse(localStorage.getItem("bk_cart") || "[]"),
  wishlist: JSON.parse(localStorage.getItem("bk_wishlist") || "[]"),
  activeModalProduct: null,
  selectedSize: "M",
  selectedQuantity: 1
};

// Formatting helpers
function formatPrice(val) {
  return "R$ " + val.toFixed(2).replace(".", ",");
}

function calculateInstallments(price, times = 6) {
  const value = (price / times).toFixed(2).replace(".", ",");
  return `${times}x de R$ ${value} sem juros`;
}

// Lifecycle Init
document.addEventListener("DOMContentLoaded", () => {
  // Lucide Icons Render
  lucide.createIcons();

  // Render initial catalog
  renderProducts();

  // Update Cart and Wishlist Badges
  updateCartUI();
  updateWishlistUI();

  // Setup Event Listeners
  setupEventListeners();

  // Hero Background Crossfade Loop
  initHeroSlideshow();
});

// Setup listeners for scroll, filters, drawers
function setupEventListeners() {
  // Sticky header class on scroll
  window.addEventListener("scroll", () => {
    const header = document.getElementById("header");
    if (window.scrollY > 40) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // Filter chips
  const filterChips = document.querySelectorAll(".filter-chip");
  filterChips.forEach(chip => {
    chip.addEventListener("click", () => {
      filterChips.forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      state.currentFilter = chip.dataset.filter;
      renderProducts();
    });
  });

  // Sorting
  const sortSelect = document.getElementById("sortSelect");
  sortSelect.addEventListener("change", (e) => {
    state.currentSort = e.target.value;
    renderProducts();
  });

  // Cart Drawer open/close
  const cartTrigger = document.getElementById("cartTrigger");
  const cartDrawer = document.getElementById("cartDrawer");
  const cartBackdrop = document.getElementById("cartBackdrop");
  const cartClose = document.getElementById("cartClose");

  const openCart = () => {
    cartDrawer.classList.add("active");
    cartBackdrop.classList.add("active");
    document.body.style.overflow = "hidden";
  };

  const closeCart = () => {
    cartDrawer.classList.remove("active");
    cartBackdrop.classList.remove("active");
    document.body.style.overflow = "";
  };

  cartTrigger.addEventListener("click", openCart);
  cartClose.addEventListener("click", closeCart);
  cartBackdrop.addEventListener("click", closeCart);

  // Mobile Drawer
  const menuToggle = document.getElementById("menuToggle");
  const mobileDrawer = document.getElementById("mobileDrawer");
  const drawerBackdrop = document.getElementById("drawerBackdrop");
  const drawerClose = document.getElementById("drawerClose");

  menuToggle.addEventListener("click", () => {
    mobileDrawer.classList.add("active");
    drawerBackdrop.classList.add("active");
    document.body.style.overflow = "hidden";
  });

  const closeDrawer = () => {
    mobileDrawer.classList.remove("active");
    drawerBackdrop.classList.remove("active");
    document.body.style.overflow = "";
  };

  drawerClose.addEventListener("click", closeDrawer);
  drawerBackdrop.addEventListener("click", closeDrawer);
  window.closeDrawer = closeDrawer;

  // Global ESC key to close open modals
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeProductModal();
      closeSizeGuideModal();
      closeSearchModal();
      closeCart();
      closeWishlist();
      closeDrawer();
    }
  });
}

// Hero background cycle
function initHeroSlideshow() {
  const images = document.querySelectorAll(".hero-bg-img");
  let currentIndex = 0;
  setInterval(() => {
    images[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add("active");
  }, 6000);
}

// Catalog Rendering with Filters & Sort
function renderProducts() {
  const grid = document.getElementById("productsGrid");
  if (!grid) return;

  let list = [...BENDITA_PRODUCTS];

  // Filter
  if (state.currentFilter !== "all") {
    list = list.filter(p => p.category === state.currentFilter);
  }

  // Sort
  if (state.currentSort === "price-asc") {
    list.sort((a, b) => a.price - b.price);
  } else if (state.currentSort === "price-desc") {
    list.sort((a, b) => b.price - a.price);
  } else if (state.currentSort === "name") {
    list.sort((a, b) => a.name.localeCompare(b.name));
  }

  // Render HTML
  grid.innerHTML = list.map(product => {
    const isWish = state.wishlist.includes(product.id);
    return `
      <div class="product-card" data-id="${product.id}">
        <div class="card-media" onclick="openProductModal('${product.id}')">
          <img src="${product.images[0]}" alt="${product.name}" loading="lazy">
          ${product.badge ? `<span class="card-badge">${product.badge}</span>` : ""}
          <div class="card-actions-float" onclick="event.stopPropagation()">
            <button class="action-circle-btn ${isWish ? 'wishlisted' : ''}" onclick="toggleWishlist('${product.id}')" title="Favoritar">
              <i data-lucide="heart"></i>
            </button>
            <button class="action-circle-btn" onclick="openProductModal('${product.id}')" title="Ver Detalhes">
              <i data-lucide="eye"></i>
            </button>
          </div>
          <div class="card-quick-buy" onclick="event.stopPropagation()">
            <button class="btn-card-quick" onclick="quickAddToCart('${product.id}')">
              <i data-lucide="shopping-bag"></i> Adicionar à Sacola
            </button>
          </div>
        </div>

        <div class="card-body">
          <span class="card-category">${product.categoryLabel}</span>
          <h3 class="card-title" onclick="openProductModal('${product.id}')" style="cursor: pointer;">${product.name}</h3>
          <div class="card-color-tag">
            <span class="color-swatch-circle" style="background-color: ${product.colorHex};"></span>
            <span>${product.colorName}</span>
          </div>

          <div class="card-price-row">
            <div>
              <div class="card-price">${formatPrice(product.price)}</div>
              <div class="card-installments">${calculateInstallments(product.price)}</div>
            </div>
            <button class="icon-btn" onclick="openProductModal('${product.id}')" title="Selecionar Tamanho">
              <i data-lucide="arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join("");

  lucide.createIcons();
}

// Filter programmatically from links
window.filterCatalog = function(cat) {
  const chip = document.querySelector(`.filter-chip[data-filter="${cat}"]`);
  if (chip) chip.click();
  const el = document.getElementById("colecao");
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

// Wishlist Functionality
window.toggleWishlist = function(productId) {
  const index = state.wishlist.indexOf(productId);
  const product = BENDITA_PRODUCTS.find(p => p.id === productId);

  if (index === -1) {
    state.wishlist.push(productId);
    showToast(`"${product.name}" adicionado aos seus favoritos.`);
  } else {
    state.wishlist.splice(index, 1);
    showToast(`"${product.name}" removido dos favoritos.`);
  }

  localStorage.setItem("bk_wishlist", JSON.stringify(state.wishlist));
  updateWishlistUI();
  renderProducts();
};

function updateWishlistUI() {
  const countEl = document.getElementById("wishlistCount");
  const drawerCountEl = document.getElementById("wishlistDrawerCount");
  if (countEl) countEl.textContent = state.wishlist.length;
  if (drawerCountEl) drawerCountEl.textContent = state.wishlist.length;
  renderWishlistDrawerItems();
}

function renderWishlistDrawerItems() {
  const container = document.getElementById("wishlistItemsContainer");
  if (!container) return;

  const favoriteProducts = BENDITA_PRODUCTS.filter(p => state.wishlist.includes(p.id));

  if (favoriteProducts.length === 0) {
    container.innerHTML = `
      <div class="wishlist-empty">
        <i data-lucide="heart"></i>
        <h4>Nenhuma peça favoritada</h4>
        <p>Clique no ícone de coração nos produtos para salvar suas peças preferidas aqui.</p>
      </div>
    `;
    lucide.createIcons();
    return;
  }

  container.innerHTML = favoriteProducts.map(product => `
    <div class="wishlist-item" id="wish-item-${product.id}">
      <img src="${product.images[0]}" alt="${product.name}" class="wishlist-item-img" onclick="openProductModal('${product.id}'); closeWishlist();">
      <div class="wishlist-item-info">
        <h4 class="wishlist-item-title" onclick="openProductModal('${product.id}'); closeWishlist();">${product.name}</h4>
        <div class="wishlist-item-meta">${product.categoryLabel} • ${product.colorName}</div>
        <div class="wishlist-item-price">${formatPrice(product.price)}</div>
        <button class="wishlist-btn-add" onclick="moveWishlistToCart('${product.id}')">
          <i data-lucide="shopping-bag"></i> Adicionar à Sacola
        </button>
      </div>
      <div class="wishlist-item-actions">
        <button class="wishlist-item-remove" onclick="toggleWishlist('${product.id}')" title="Remover dos favoritos">
          <i data-lucide="trash-2"></i>
        </button>
      </div>
    </div>
  `).join("");

  lucide.createIcons();
}

window.openWishlist = function() {
  const drawer = document.getElementById("wishlistDrawer");
  const backdrop = document.getElementById("wishlistBackdrop");
  if (!drawer || !backdrop) return;
  updateWishlistUI();
  drawer.classList.add("active");
  backdrop.classList.add("active");
  document.body.style.overflow = "hidden";
};

window.closeWishlist = function() {
  const drawer = document.getElementById("wishlistDrawer");
  const backdrop = document.getElementById("wishlistBackdrop");
  if (drawer) drawer.classList.remove("active");
  if (backdrop) backdrop.classList.remove("active");
  document.body.style.overflow = "";
};

window.openWishlistModal = function() {
  openWishlist();
};

window.moveWishlistToCart = function(productId) {
  addToCart(productId, "M", 1);
  closeWishlist();
};

window.addAllWishlistToCart = function() {
  if (state.wishlist.length === 0) {
    showToast("Nenhuma peça para adicionar à sacola.");
    return;
  }
  state.wishlist.forEach(id => {
    addToCart(id, "M", 1);
  });
  closeWishlist();
  showToast("Todas as peças favoritadas foram adicionadas à sacola!");
};

// Cart Engine
window.quickAddToCart = function(productId) {
  addToCart(productId, "M", 1);
};

function addToCart(productId, size = "M", quantity = 1) {
  const product = BENDITA_PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existingIndex = state.cart.findIndex(item => item.id === productId && item.size === size);

  if (existingIndex > -1) {
    state.cart[existingIndex].quantity += quantity;
  } else {
    state.cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      size: size,
      quantity: quantity,
      image: product.images[0],
      colorName: product.colorName
    });
  }

  saveCart();
  updateCartUI();
  showToast(`${product.name} (${size}) adicionado à sua sacola.`);

  // Auto open cart drawer
  document.getElementById("cartDrawer").classList.add("active");
  document.getElementById("cartBackdrop").classList.add("active");
  document.body.style.overflow = "hidden";
}

function saveCart() {
  localStorage.setItem("bk_cart", JSON.stringify(state.cart));
}

function updateCartUI() {
  const totalItems = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  // Update header badges
  const cartCount = document.getElementById("cartCount");
  const cartDrawerCount = document.getElementById("cartDrawerCount");
  if (cartCount) cartCount.textContent = totalItems;
  if (cartDrawerCount) cartDrawerCount.textContent = totalItems;

  // Update totals
  const subtotalEl = document.getElementById("cartSubtotal");
  const pixTotalEl = document.getElementById("cartPixTotal");
  const installmentsEl = document.getElementById("cartInstallments");

  if (subtotalEl) subtotalEl.textContent = formatPrice(subtotal);
  if (pixTotalEl) pixTotalEl.textContent = formatPrice(subtotal * 0.95);
  if (installmentsEl) installmentsEl.textContent = `ou em até 6x de ${formatPrice(subtotal / 6)} sem juros`;

  // Free Shipping Threshold (R$ 399)
  const threshold = 399.00;
  const shippingMessage = document.getElementById("shippingMessage");
  const shippingFill = document.getElementById("shippingFill");

  if (shippingMessage && shippingFill) {
    if (subtotal >= threshold) {
      shippingMessage.innerHTML = `Parabéns! Você ganhou <strong>Frete Expresso Cortesia</strong>.`;
      shippingFill.style.width = "100%";
    } else {
      const remaining = threshold - subtotal;
      const pct = Math.min((subtotal / threshold) * 100, 100);
      shippingMessage.innerHTML = `Faltam <strong>${formatPrice(remaining)}</strong> para <strong>Frete Expresso Cortesia</strong>`;
      shippingFill.style.width = `${pct}%`;
    }
  }

  // Render items list
  const container = document.getElementById("cartItemsContainer");
  if (!container) return;

  if (state.cart.length === 0) {
    container.innerHTML = `
      <div class="cart-empty">
        <i data-lucide="shopping-bag"></i>
        <h4>Sua sacola está vazia</h4>
        <p>Explore nossas peças de alta compressão e selecione suas favoritas.</p>
      </div>
    `;
    lucide.createIcons();
    return;
  }

  container.innerHTML = state.cart.map((item, index) => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}" class="cart-item-img">
      <div>
        <h4 class="cart-item-title">${item.name}</h4>
        <div class="cart-item-meta">Tam: <strong>${item.size}</strong> • ${item.colorName}</div>
        <div class="cart-item-price">${formatPrice(item.price)} (Qtd: ${item.quantity})</div>
      </div>
      <button class="cart-item-remove" onclick="removeCartItem(${index})" title="Remover item">
        <i data-lucide="trash-2"></i>
      </button>
    </div>
  `).join("");

  lucide.createIcons();
}

window.removeCartItem = function(index) {
  state.cart.splice(index, 1);
  saveCart();
  updateCartUI();
  showToast("Item removido da sacola.");
};

window.quickAddSet = function() {
  // Add Top Seamless (149) + Legging Seamless (209) = 358
  addToCart("top-seamless-black", "M", 1);
  addToCart("legging-seamless-slate", "M", 1);
  showToast("Conjunto Essência adicionado à sua sacola com sucesso!");
};

window.proceedToCheckout = function() {
  if (state.cart.length === 0) {
    showToast("Adicione produtos à sacola antes de prosseguir para o pagamento.");
    return;
  }
  const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const itemsSummary = state.cart.map(i => `${i.quantity}x ${i.name} (${i.size})`).join("%0A");
  
  const text = `Ol%C3%A1%2C%20gostaria%20de%20finalizar%20meu%20pedido%20na%20Bendita%20Ka%3A%0A%0A${itemsSummary}%0A%0ASubtotal%3A%20${encodeURIComponent(formatPrice(subtotal))}%0A%0APor%20favor%2C%20gostaria%20das%20informa%C3%A7%C3%B5es%20de%20pagamento%20e%20envio.`;
  window.open(`https://wa.me/5511999999999?text=${text}`, "_blank");
};

// Product Quick View Modal
window.openProductModal = function(productId) {
  const product = BENDITA_PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  state.activeModalProduct = product;
  state.selectedSize = "M";
  state.selectedQuantity = 1;

  const content = document.getElementById("modalProductContent");
  content.innerHTML = `
    <div class="modal-gallery">
      <img src="${product.images[0]}" alt="${product.name}" id="modalMainImg">
    </div>
    <div class="modal-details">
      <span class="modal-cat">${product.categoryLabel}</span>
      <h2 class="modal-title">${product.name}</h2>
      
      <div class="modal-price-wrap">
        <span class="modal-price">${formatPrice(product.price)}</span>
        <span class="modal-pix-promo">à vista no PIX com 5% OFF (${formatPrice(product.price * 0.95)})</span>
      </div>

      <div class="card-color-tag" style="margin-bottom: 20px;">
        <span class="color-swatch-circle" style="background-color: ${product.colorHex};"></span>
        <span>Cor: <strong>${product.colorName}</strong></span>
      </div>

      <p class="modal-desc">${product.description}</p>

      <div class="selector-label">
        <span>Tamanho</span>
        <a href="#" onclick="openSizeGuideModal(); return false;" style="color: var(--accent-gold); text-decoration: underline;">Guia de Medidas</a>
      </div>
      <div class="size-selector">
        <button class="size-btn ${state.selectedSize === 'P' ? 'selected' : ''}" onclick="selectModalSize('P')">P</button>
        <button class="size-btn ${state.selectedSize === 'M' ? 'selected' : ''}" onclick="selectModalSize('M')">M</button>
        <button class="size-btn ${state.selectedSize === 'G' ? 'selected' : ''}" onclick="selectModalSize('G')">G</button>
      </div>

      <div class="modal-add-row">
        <div class="qty-control">
          <button class="qty-btn" onclick="changeModalQty(-1)">-</button>
          <span class="qty-num" id="modalQtyDisplay">1</span>
          <button class="qty-btn" onclick="changeModalQty(1)">+</button>
        </div>
        <button class="btn btn-add-modal" onclick="confirmAddFromModal()">
          <i data-lucide="shopping-bag"></i> Adicionar à Sacola
        </button>
      </div>
    </div>
  `;

  document.getElementById("productModal").classList.add("active");
  document.body.style.overflow = "hidden";
  lucide.createIcons();
};

window.closeProductModal = function() {
  document.getElementById("productModal").classList.remove("active");
  document.body.style.overflow = "";
};

window.selectModalSize = function(size) {
  state.selectedSize = size;
  const buttons = document.querySelectorAll(".size-btn");
  buttons.forEach(btn => {
    btn.classList.toggle("selected", btn.textContent === size);
  });
};

window.changeModalQty = function(delta) {
  state.selectedQuantity = Math.max(1, state.selectedQuantity + delta);
  document.getElementById("modalQtyDisplay").textContent = state.selectedQuantity;
};

window.confirmAddFromModal = function() {
  if (!state.activeModalProduct) return;
  addToCart(state.activeModalProduct.id, state.selectedSize, state.selectedQuantity);
  closeProductModal();
};

// Size Guide Modal
window.openSizeGuideModal = function() {
  document.getElementById("sizeGuideModal").classList.add("active");
  document.body.style.overflow = "hidden";
};

window.closeSizeGuideModal = function() {
  document.getElementById("sizeGuideModal").classList.remove("active");
  document.body.style.overflow = "";
};

// Search System
window.openSearchModal = function() {
  const modal = document.getElementById("searchModal");
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
  const input = document.getElementById("searchInput");
  input.value = "";
  input.focus();
  renderSearchResults("");
};

window.closeSearchModal = function() {
  document.getElementById("searchModal").classList.remove("active");
  document.body.style.overflow = "";
};

window.handleSearch = function(query) {
  renderSearchResults(query.trim().toLowerCase());
};

function renderSearchResults(query) {
  const container = document.getElementById("searchResults");
  if (!container) return;

  if (!query) {
    container.innerHTML = `
      <div style="padding: 20px; color: var(--text-muted); text-align: center; font-size: 0.85rem;">
        Sugestões: Legging, Top, Shorts, Rose Quartz, Seamless, Preto
      </div>
    `;
    return;
  }

  const results = BENDITA_PRODUCTS.filter(p => 
    p.name.toLowerCase().includes(query) ||
    p.colorName.toLowerCase().includes(query) ||
    p.categoryLabel.toLowerCase().includes(query)
  );

  if (results.length === 0) {
    container.innerHTML = `
      <div style="padding: 20px; color: var(--text-muted); text-align: center; font-size: 0.85rem;">
        Nenhum modelo encontrado para "${query}".
      </div>
    `;
    return;
  }

  container.innerHTML = results.map(product => `
    <div class="search-result-item" onclick="openProductModal('${product.id}'); closeSearchModal();">
      <img src="${product.images[0]}" alt="${product.name}" class="search-thumb">
      <div>
        <h4 style="font-size: 0.9rem; color: #fff;">${product.name}</h4>
        <span style="font-size: 0.75rem; color: var(--text-muted);">${product.colorName}</span>
      </div>
      <div style="margin-left: auto; font-family: var(--font-display); font-weight: 700; color: var(--accent-gold-light);">
        ${formatPrice(product.price)}
      </div>
    </div>
  `).join("");
}

// Policies & Info Modal
window.openPolicyModal = function(type) {
  let title = "";
  let msg = "";

  if (type === "trocas") {
    title = "Primeira Troca 100% Gratuita";
    msg = "Sabemos que o ajuste precisa ser perfeito. Por isso, você tem até 30 dias corridos após o recebimento para solicitar a primeira troca sem nenhum custo de frete reverso.";
  } else if (type === "envio") {
    title = "Prazos e Entregas Expressas";
    msg = "Despachamos todos os pedidos em até 24 horas úteis com código de rastreamento enviado via e-mail e WhatsApp. Frete grátis em pedidos acima de R$ 399,00.";
  } else if (type === "cuidados") {
    title = "Como Cuidar de Suas Peças Seamless";
    msg = "Lavar preferencialmente à mão ou no ciclo delicado da máquina dentro de saquinho protetor. Não alvejar, não centrifugar em alta rotação e secar à sombra para máxima longevidade da fibra elástica.";
  } else {
    title = "Compromisso de Privacidade";
    msg = "Seus dados pessoais e de pagamento estão protegidos sob os mais rígidos protocolos de criptografia SSL 256-bits. Nunca compartilhamos suas informações.";
  }

  showToast(`${title}: ${msg}`);
};

// Newsletter Form Handler
window.handleNewsletter = function(e) {
  e.preventDefault();
  const emailInput = document.getElementById("vipEmail");
  if (emailInput && emailInput.value) {
    showToast(`Bem-vinda ao Clube Privé! Seu cupom de 10% OFF foi enviado para ${emailInput.value}`);
    emailInput.value = "";
  }
};

// Toast Notifications Helper
function showToast(message) {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `
    <i data-lucide="sparkles"></i>
    <span>${message}</span>
  `;

  container.appendChild(toast);
  lucide.createIcons();

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(10px)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

