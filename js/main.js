/* ============================================
   VANGUARD NEXUS - Main JavaScript
   D Format Card Shop
   ============================================ */

// =============================================
// PRODUCT DATA
// =============================================
const PRODUCTS = [
  {
    id: 1,
    name: "Blaster blade",
    series: "D-BT05 Triumphant Return of the Brave Heroes",
    price: 50,
    originalPrice: null,
    rarity: "RRR",
    clan: "Keter Sanctuary" ,
    
    grade: 2,
    stock: 16,
    isNew: false,
    tags: ["blaster", "kagero", "nation", "blade"],
    image: "images/dbt05_005.png",
    color: "#3fb3e1"
  },
  {
    id: 2,
    name: "Chakrabarthi Phoenix Dragon, Nirvana Jheva",
    series: "D-BT06 Blazing Dragon Reborn",
    price: 40,
    originalPrice: null,
    rarity: "RRR",
    clan: "Dragon Empire",
    
    grade: 3,
    stock: 8,
    isNew: false,
    tags: ["Nirvana", "Dragon", "Jheva"],
    image: "images/dbt06_001.png",
    color: "#f63b3b"
  },
  {
    id: 3,
    name: "Dragonic Overlord",
    series: "D-BT02 A Brush with the Legends",
    price: 90,
    originalPrice: 90,
    rarity: "RRR",
    clan: "Dragon Empire",
    
    grade: 3,
    stock: 1,
    isNew: false,
    tags: ["Dragonic", "Empire", "Overlord"],
    image: "images/dbt02_001.png",
    color: "#d45c06"
  },
  {
    id: 4,
    name: "Diabolos Girls, Natalia",
    series: "D-BT02 A Brush with the Legends",
    price: 75,
    originalPrice: null,
    rarity: "SP",
    clan: "Dark States",
    
    grade: 0,
    stock: 12,
    isNew: false,
    tags: ["Diabolos ", "Dark", "Natalia"],
    image: "images/dbt02_sp27.png",
    color: "#6626f2"
  },
  {
    id: 5,
    name: "Divine Sister, Languedechat",
    series: "D-BT07 Raging Flames Against Emerald Storm",
    price: 15,
    originalPrice: null,
    rarity: "R",
    clan: "Keter Sanctuary",
    grade: 1,
    stock: 20,
    isNew: false,
    tags: ["Divine", "Keter"],
    image: "images/dbt07_045.png"
  },
  {
    id: 6,
    name: "Detonation Monster, Bobalmine",
    series: "D-BT01 Genesis of the Five Greats",
    price: 60,
    originalPrice: 900,
    rarity: "RR",
    clan: "Brandt Gate",
    grade: 1,
    stock: 6,
    isNew: false,
    tags: ["Brandt Gate", "Bobalmine", "BT01"],
    image: "images/dbt01_018.png",
    color: "#8b5cf6"
  },
  {
    id: 7,
    name: "D Booster Set 06-2 Blazing Dragon Reborn",
    series: "D-BT06 Blazing Dragon Reborn",
    price: 160,
    originalPrice: null,
    rarity: "BT",
    clan: ["Stoicheia", " Brandt Gate", "Dark States"],
    grade: "*",
    stock: 3,
    isNew: false,
    tags: ["booster", "09"],
    image: "images/D-BT06_2-1-1024x871.png",
    color: "#f59e0b"
  },
  {
    id: 8,
    name: "Mysterious Rain Spiritualist, Zorga",
    series: "D-BT01 Genesis of the Five Greats",
    price: 95,
    originalPrice: null,
    rarity: "RRR",
    clan: "Stoicheia",
    grade: 3,
    stock: 31,
    isNew: false,
    tags: ["Stoicheia", "RRR", "Zorga"],
    image: "images/dbt01_009.png",
    color: "#6366f1"
  },
  {
    id: 9,
    name: "Nirvana, Lotus Dragon King",
    series: "D-BT04 Awakening of Trinas",
    price: 60,
    originalPrice: 100,
    rarity: "RRR",
    clan: "Dragon Empire",
    grade: 4,
    stock: 6,
    isNew: false,
    tags: ["nirvana", "empire", "dragon"],
    image: "images/dbt04_002.png",
    color: "#ec4899"
  },
  {
    id: 10,
    name: "Archangel of Twin Wings, Alestiel",
    series: "D-LBT01 Lyrical Melody",
    price: 150,
    originalPrice: null,
    rarity: "RRR",
    clan: "Lyrical Monasterio",
    grade: 3,
    stock: 1,
    isNew: false,
    tags: ["stoicheia", "forest", "dragon"],
    image: "images/dlbt01_002.png",
    color: "#22c55e"
  },
  {
    id: 11,
    name: "D Booster Set 09-1 Dragontree Invasion",
    series: "D-BT09 Dragontree Invasion",
    price: 150,
    originalPrice: 160,
    rarity: "BT",
    clan: ["Dragon Empire" , "Brandt Gate","and Nationless"],
    grade: "*",
    stock: 9,
    isNew: true,
    tags: ["booster", "09"],
    image: "images/MOCK_VGD_BT09__1-1024x920.png",
    color: "#7c3aed"
  },
  {
    id: 12,
    name: "D Booster Set 09-2 Dragontree Invasion",
    series: "D-BT09 Dragontree Invasion",
    price: 150,
    originalPrice: null,
    rarity: "BT",
    clan: ["Dark States", "Keter Sanctuary", "Stoicheia"],
    grade: "*",
    stock: 5,
    isNew: true,
    tags: ["booster", "09"],
    image: "images/MOCK_VGD_BT09__2-1024x947.png",
    color: "#f97316"
  }
];

// =============================================
// STATE
// =============================================
let cart = JSON.parse(localStorage.getItem("vg_cart")) || [];
let wishlist = JSON.parse(localStorage.getItem("vg_wishlist")) || [];
let currentUser = JSON.parse(localStorage.getItem("vg_user")) || null;

// =============================================
// UTILITY FUNCTIONS
// =============================================
function saveCart() {
  localStorage.setItem("vg_cart", JSON.stringify(cart));
  updateCartUI();
}

function saveWishlist() {
  localStorage.setItem("vg_wishlist", JSON.stringify(wishlist));
}

function formatPrice(price) {
  return price.toLocaleString("th-TH") + " ฿";
}

function getRarityLabel(rarity) {
  const map = { RRR: "Vanguard Rare", RR: "Double Rare", R: "Rare", BT: "D-BT", SP: "Special" };
  return map[rarity] || rarity;
}

function showToast(msg, type = "success", duration = 3000) {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const icons = { success: "✅", error: "❌", info: "ℹ️", warning: "⚠️" };
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <span class="toast-icon">${icons[type]}</span>
    <span class="toast-msg">${msg}</span>
    <div class="toast-bar"></div>
  `;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.animation = "toastOut 0.3s ease forwards";
    setTimeout(() => toast.remove(), 300);
  }, duration);
}

// =============================================
// CART FUNCTIONS
// =============================================
function addToCart(productId, qty = 1) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;
  if (product.stock === 0) {
    showToast("สินค้าหมดสต็อก", "error");
    return;
  }

  const existing = cart.find(item => item.id === productId);
  if (existing) {
    const newQty = existing.qty + qty;
    if (newQty > product.stock) {
      showToast(`มีในตะกร้าแล้ว ${existing.qty} ชิ้น (สต็อกเหลือ ${product.stock})`, "warning");
      return;
    }
    existing.qty = newQty;
  } else {
    cart.push({ id: productId, qty });
  }

  saveCart();
  showToast(`เพิ่ม "${product.name}" ลงตะกร้าแล้ว 🛒`);
  animateCartBtn();
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  saveCart();
  renderCartPage();
}

function updateCartQty(productId, qty) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;
  const item = cart.find(i => i.id === productId);
  if (!item) return;

  if (qty < 1) {
    removeFromCart(productId);
    return;
  }
  if (qty > product.stock) {
    showToast(`สต็อกเหลือเพียง ${product.stock} ชิ้น`, "warning");
    return;
  }
  item.qty = qty;
  saveCart();
  renderCartPage();
}

function getCartTotal() {
  return cart.reduce((sum, item) => {
    const product = PRODUCTS.find(p => p.id === item.id);
    return sum + (product ? product.price * item.qty : 0);
  }, 0);
}

function getCartCount() {
  return cart.reduce((sum, item) => sum + item.qty, 0);
}

function updateCartUI() {
  const countEls = document.querySelectorAll(".cart-count");
  const count = getCartCount();
  countEls.forEach(el => {
    el.textContent = count;
    el.style.display = count > 0 ? "flex" : "none";
  });
}

function animateCartBtn() {
  const btns = document.querySelectorAll(".cart-btn");
  btns.forEach(btn => {
    btn.style.transform = "scale(1.15)";
    setTimeout(() => btn.style.transform = "", 200);
  });
}

// =============================================
// WISHLIST FUNCTIONS
// =============================================
function toggleWishlist(productId) {
  const idx = wishlist.indexOf(productId);
  if (idx >= 0) {
    wishlist.splice(idx, 1);
    showToast("ลบออกจากรายการโปรดแล้ว", "info");
  } else {
    wishlist.push(productId);
    showToast("เพิ่มในรายการโปรดแล้ว ❤️", "success");
  }
  saveWishlist();
  updateWishlistBtns();
}

function updateWishlistBtns() {
  document.querySelectorAll("[data-wishlist-id]").forEach(btn => {
    const id = parseInt(btn.dataset.wishlistId);
    btn.classList.toggle("active", wishlist.includes(id));
    btn.innerHTML = wishlist.includes(id) ? "❤️" : "🤍";
  });
}

// =============================================
// PRODUCT CARD RENDERER
// =============================================
function createProductCard(product) {
  const inWishlist = wishlist.includes(product.id);
  const stockClass = product.stock === 0 ? "out" : product.stock <= 3 ? "low" : "";
  const stockText = product.stock === 0 ? "หมดสต็อก" : product.stock <= 3 ? `เหลือ ${product.stock} ชิ้น` : `มีสินค้า ${product.stock} ชิ้น`;
  const rarityClass = `rarity-${product.rarity.toLowerCase()}`;

  return `
    <div class="product-card" onclick="window.location.href='product-detail.html?id=${product.id}'">
      <div class="card-image-wrap">
      <div class="card-placeholder" style="background: linear-gradient(135deg, ${product.color}18, ${product.color}06)">
          ${product.image
            ? `<img src="${product.image}" alt="${product.name}" style="width:100%;height:100%;object-fit:contain;border-radius:8px;">`
            : `<span class="card-art">${product.emoji}</span><span class="card-art-name">${product.name.split(",")[0]}</span>`
          }
        </div>
        <span class="card-rarity ${rarityClass}">${product.rarity}</span>
        ${product.isNew ? '<span class="card-badge-new">NEW</span>' : ""}
        <div class="card-actions">
          <button class="action-btn add-cart" onclick="event.stopPropagation(); addToCart(${product.id})">
            🛒 เพิ่มตะกร้า
          </button>
          <button class="action-btn view-detail" onclick="event.stopPropagation(); window.location.href='product-detail.html?id=${product.id}'">
            👁 ดูรายละเอียด
          </button>
        </div>
      </div>
      <div class="card-info">
        <div class="card-name">${product.name}</div>
        <div class="card-series">${product.series}</div>
        <div class="card-footing">
          <div class="card-price">${formatPrice(product.price)}</div>
          <div class="card-stock ${stockClass}">${stockText}</div>
        </div>
      </div>
    </div>
  `;
}

// =============================================
// SEARCH SYSTEM
// =============================================
function initSearch() {
  const overlay = document.getElementById("search-overlay");
  const input = document.getElementById("search-input");
  const clearBtn = document.getElementById("search-clear");
  const resultsEl = document.getElementById("search-results");
  const searchToggle = document.querySelector(".search-toggle");

  if (!overlay) return;

  searchToggle?.addEventListener("click", () => {
    overlay.classList.add("open");
    setTimeout(() => input?.focus(), 200);
  });

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeSearch();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeSearch();
    if ((e.ctrlKey || e.metaKey) && e.key === "k") {
      e.preventDefault();
      overlay.classList.add("open");
      setTimeout(() => input?.focus(), 200);
    }
  });

  clearBtn?.addEventListener("click", () => {
    input.value = "";
    resultsEl.innerHTML = "";
    resultsEl.style.display = "none";
    input.focus();
  });

  input?.addEventListener("input", debounce(() => {
    const q = input.value.trim().toLowerCase();
    if (q.length < 1) {
      resultsEl.innerHTML = "";
      resultsEl.style.display = "none";
      return;
    }

    const matches = PRODUCTS.filter(p => {
      const clanArr = Array.isArray(p.clan) ? p.clan : [p.clan];
      const clanStr = clanArr.join(" ").toLowerCase();
      return p.name.toLowerCase().includes(q) ||
        p.series.toLowerCase().includes(q) ||
        clanStr.includes(q) ||
        p.tags.some(t => t.toLowerCase().includes(q));
    }).slice(0, 6);

    if (matches.length === 0) {
      resultsEl.innerHTML = `<div style="padding:1.5rem;text-align:center;color:var(--text-muted);font-size:.875rem;">ไม่พบสินค้าที่ค้นหา</div>`;
    } else {
      resultsEl.innerHTML = matches.map(p => `
        <div class="search-result-item" onclick="window.location.href='product-detail.html?id=${p.id}'; closeSearch()">
          <div class="search-result-img" style="background:linear-gradient(135deg,${p.color ?? '#888'}18,${p.color ?? '#888'}06);display:flex;align-items:center;justify-content:center;font-size:1.5rem">
  ${p.image
    ? `<img src="${p.image}" alt="${p.name}" style="width:100%;height:100%;object-fit:contain;border-radius:4px;">`
    : p.emoji ?? ""
  }
      </div>
          <div class="search-result-info">
            <div class="search-result-name">${p.name}</div>
            <div class="search-result-price">${formatPrice(p.price)} · ${p.rarity} · ${p.clan}</div>
          </div>
        </div>
      `).join("");
    }
    resultsEl.style.display = "block";
  }, 200));
}

function closeSearch() {
  const overlay = document.getElementById("search-overlay");
  overlay?.classList.remove("open");
}

// =============================================
// LOGIN / AUTH SYSTEM
// =============================================
const DEMO_USERS = [
  { email: "demo@vanguard.th", password: "demo1234", name: "Demo Player", initials: "DP" },
  { email: "admin@vanguard.th", password: "admin1234", name: "Shop Admin", initials: "SA" }
];

function initLoginModal() {
  const overlay = document.getElementById("login-modal");
  const closeBtn = document.getElementById("modal-close");
  const tabBtns = document.querySelectorAll(".tab-btn");
  const loginForm = document.getElementById("login-form");
  const registerForm = document.getElementById("register-form");
  const loginBtn = document.querySelector(".login-btn");
  const togglePws = document.querySelectorAll(".toggle-pw");

  if (!overlay) return;

  loginBtn?.addEventListener("click", () => {
    overlay.classList.add("open");
  });

  closeBtn?.addEventListener("click", () => {
    overlay.classList.remove("open");
  });

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) overlay.classList.remove("open");
  });

  tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      tabBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const tab = btn.dataset.tab;
      loginForm?.classList.toggle("hidden", tab !== "login");
      registerForm?.classList.toggle("hidden", tab !== "register");
    });
  });

  togglePws.forEach(btn => {
    btn.addEventListener("click", () => {
      const input = btn.previousElementSibling;
      if (input.type === "password") {
        input.type = "text";
        btn.textContent = "🙈";
      } else {
        input.type = "password";
        btn.textContent = "👁";
      }
    });
  });

  loginForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = loginForm.querySelector('[name=email]').value.trim();
    const password = loginForm.querySelector('[name=password]').value;

    const user = DEMO_USERS.find(u => u.email === email && u.password === password);
    if (user) {
    localStorage.setItem("vg_user", JSON.stringify(user));
    overlay.classList.remove("open");
    showToast(`ยินดีต้อนรับ ${user.name}! 🎴`);
    setTimeout(() => location.reload(), 1000);
    } else {
      showToast("อีเมลหรือรหัสผ่านไม่ถูกต้อง", "error");
    }
  });

  registerForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = registerForm.querySelector('[name=name]').value.trim();
    const email = registerForm.querySelector('[name=email]').value.trim();
    const password = registerForm.querySelector('[name=password]').value;

    if (name.length < 2) { showToast("กรุณากรอกชื่อที่ถูกต้อง", "error"); return; }
    if (!email.includes("@")) { showToast("กรุณากรอกอีเมลที่ถูกต้อง", "error"); return; }
    if (password.length < 6) { showToast("รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร", "error"); return; }

    const newUser = { email, name, initials: name.slice(0, 2).toUpperCase() };
    currentUser = newUser;
    localStorage.setItem("vg_user", JSON.stringify(newUser));
    overlay.classList.remove("open");
    updateUserUI();
    showToast(`สมัครสมาชิกสำเร็จ! ยินดีต้อนรับ ${name} 🎉`);
  });
}

function updateUserUI() {
  const loginBtn = document.querySelector(".login-btn");
  const userMenuBtn = document.querySelector(".user-menu-btn");

  if (currentUser) {
    loginBtn?.style && (loginBtn.style.display = "none");
    if (userMenuBtn) {
      userMenuBtn.style.display = "flex";
      userMenuBtn.querySelector(".user-avatar").textContent = currentUser.initials;
      userMenuBtn.querySelector(".user-name").textContent = currentUser.name;
    }
  } else {
    loginBtn?.style && (loginBtn.style.display = "");
    userMenuBtn && (userMenuBtn.style.display = "none");
  }


}



function logout() {
  currentUser = null;
  localStorage.removeItem("vg_user");
  updateUserUI();
  showToast("ออกจากระบบแล้ว", "info");
}

// =============================================
// NAVBAR SCROLL
// =============================================
function initNavbar() {
  const navbar = document.querySelector(".navbar");
  if (!navbar) return;

  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 30);
  });

  // Active link
  const path = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a, .mobile-nav a").forEach(a => {
    const href = a.getAttribute("href");
    if (href === path || (path === "" && href === "index.html")) {
      a.classList.add("active");
    }
  });

  // Mobile hamburger
  const hamburger = document.querySelector(".hamburger");
  const mobileNav = document.querySelector(".mobile-nav");
  hamburger?.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobileNav?.classList.toggle("open");
  });
}

// =============================================
// SCROLL ANIMATIONS
// =============================================
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("visible");
        }, i * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });

  document.querySelectorAll(".animate-up").forEach(el => observer.observe(el));
}

// =============================================
// CART PAGE
// =============================================
function renderCartPage() {
  const container = document.getElementById("cart-items-container");
  const summaryContainer = document.getElementById("cart-summary");
  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="cart-empty">
        <div class="empty-icon">🛒</div>
        <h3>ตะกร้าสินค้าว่างเปล่า</h3>
        <p>เพิ่มการ์ดที่คุณชื่นชอบลงในตะกร้าได้เลย</p>
        <a href="products.html" class="btn-primary" style="display:inline-flex">
          🎴 ดูสินค้าทั้งหมด
        </a>
      </div>
    `;
    if (summaryContainer) {
      document.getElementById("summary-subtotal").textContent = "0 ฿";
      document.getElementById("summary-total").textContent = "0 ฿";
    }
    return;
  }

  container.innerHTML = `
    <div class="cart-header-row">
      <span>สินค้า</span>
      <span>ราคา</span>
      <span>จำนวน</span>
      <span>รวม</span>
      <span></span>
    </div>
    ${cart.map(item => {
      const product = PRODUCTS.find(p => p.id === item.id);
      if (!product) return "";
      const total = product.price * item.qty;
      return `
        <div class="cart-item">
          <div class="cart-item-info">
           <div class="cart-item-img-placeholder" style="background:linear-gradient(135deg,${product.color ?? '#888'}18,${product.color ?? '#888'}06)">
  ${product.image
    ? `<img src="${product.image}" alt="${product.name}" style="width:100%;height:100%;object-fit:contain;border-radius:4px;">`
    : product.emoji ?? ""
  }
</div>
              <div class="cart-item-name">${product.name}</div>
              <div class="cart-item-series">${product.series} · <span class="card-rarity rarity-${product.rarity.toLowerCase()}" style="position:static;padding:2px 6px;font-size:.6rem;border-radius:3px">${product.rarity}</span></div>
            </div>
          </div>
          <div class="cart-item-price">${formatPrice(product.price)}</div>
          <div class="cart-item-qty">
            <div class="qty-control">
              <button class="qty-btn" onclick="updateCartQty(${product.id}, ${item.qty - 1})">−</button>
              <input class="qty-val" type="number" value="${item.qty}" min="1" max="${product.stock}"
                onchange="updateCartQty(${product.id}, parseInt(this.value))">
              <button class="qty-btn" onclick="updateCartQty(${product.id}, ${item.qty + 1})">+</button>
            </div>
          </div>
          <div class="cart-item-total">${formatPrice(total)}</div>
          <button class="cart-remove" onclick="removeFromCart(${product.id})" title="ลบออก">✕</button>
        </div>
      `;
    }).join("")}
  `;

  // Update summary
  const subtotal = getCartTotal();
  // FIX Bug 2: ค่าส่งตรงกับที่แสดงใน HTML (50฿ ส่งฟรีเมื่อครบ 250฿)
  const shipping = subtotal >= 250 ? 0 : 50;
  const total = subtotal + shipping;

  if (document.getElementById("summary-subtotal")) {
    document.getElementById("summary-subtotal").textContent = formatPrice(subtotal);
    document.getElementById("summary-shipping").textContent = shipping === 0 ? "ฟรี" : formatPrice(shipping);
    document.getElementById("summary-total").textContent = formatPrice(total);
  }
}

function initCartPage() {
  renderCartPage();

  // FIX Bug 4: Render recommended products (เดิมอยู่นอก HTML ใน cart.html)
  const recGrid = document.getElementById("recommended-grid");
  if (recGrid) {
    const cartIds = cart.map(i => i.id);
    const recs = PRODUCTS.filter(p => !cartIds.includes(p.id)).slice(0, 4);
    recGrid.innerHTML = recs.map(p => createProductCard(p)).join("");
    updateWishlistBtns();
  }

  // FIX Bug 3: coupon ลดราคาจริง ไม่ใช่แค่ toast
  let appliedDiscount = 0;

  const couponApply = document.getElementById("coupon-apply");
  couponApply?.addEventListener("click", () => {
    const code = document.getElementById("coupon-input")?.value.trim().toUpperCase();
    // value = เปอร์เซ็นต์ส่วนลด
    const validCodes = { "VGNEXUS10": 10, "DFORMAT": 15 };
    if (validCodes[code]) {
      appliedDiscount = validCodes[code];
      showToast(`ใช้โค้ด ${code} ส่วนลด ${appliedDiscount}% สำเร็จ! 🎉`);
      applyDiscountToSummary(appliedDiscount);
      if (couponApply) couponApply.disabled = true;
      if (couponApply) couponApply.textContent = "✓ ใช้แล้ว";
    } else {
      showToast("โค้ดส่วนลดไม่ถูกต้อง", "error");
    }
  });

  // Checkout
  document.getElementById("checkout-btn")?.addEventListener("click", () => {
    if (cart.length === 0) { showToast("ไม่มีสินค้าในตะกร้า", "warning"); return; }
    if (!currentUser) {
      showToast("กรุณาเข้าสู่ระบบก่อนชำระเงิน", "warning");
      document.getElementById("login-modal")?.classList.add("open");
      return;
    }
    showToast("ระบบชำระเงินกำลังพัฒนา 🚧 ขอบคุณที่ทดสอบ!", "info");
  });
}

function applyDiscountToSummary(pct) {
  const subtotal = getCartTotal();
  const shipping = subtotal >= 250 ? 0 : 50;
  const discount = Math.round(subtotal * pct / 100);
  const total = subtotal + shipping - discount;

  const subtotalEl = document.getElementById("summary-subtotal");
  const shippingEl = document.getElementById("summary-shipping");
  const totalEl = document.getElementById("summary-total");

  if (subtotalEl) subtotalEl.textContent = formatPrice(subtotal);
  if (shippingEl) shippingEl.textContent = shipping === 0 ? "ฟรี" : formatPrice(shipping);

  // แสดง row ส่วนลด (สร้าง dynamic ถ้ายังไม่มี)
  let discountRow = document.getElementById("summary-discount-row");
  if (!discountRow) {
    const divider = document.querySelector(".summary-divider");
    discountRow = document.createElement("div");
    discountRow.id = "summary-discount-row";
    discountRow.className = "summary-row";
    discountRow.style.color = "var(--accent-gold)";
    discountRow.innerHTML = `<span class="label">ส่วนลดโค้ด (${pct}%)</span><span class="value" id="summary-discount">-${formatPrice(discount)}</span>`;
    divider?.before(discountRow);
  } else {
    document.getElementById("summary-discount").textContent = `-${formatPrice(discount)}`;
  }

  if (totalEl) totalEl.textContent = formatPrice(total);
}

function initProductsPage() {
  const grid = document.getElementById("products-grid");
  if (!grid) return;

  let filtered = [...PRODUCTS];
  let currentView = "grid";

  function render() {
    grid.innerHTML = filtered.map(p => createProductCard(p)).join("");
    document.getElementById("products-count").innerHTML = `แสดง <span>${filtered.length}</span> จาก ${PRODUCTS.length} รายการ`;
    initScrollAnimations();
    updateWishlistBtns();
  }

  function applyFilters() {
    const searchQ = document.getElementById("filter-search")?.value.toLowerCase() || "";
    const selectedRarities = [...document.querySelectorAll("[data-filter-rarity]:checked")].map(el => el.value);
    const selectedClans = [...document.querySelectorAll("[data-filter-clan]:checked")].map(el => el.value);
    const maxPrice = parseInt(document.getElementById("price-max")?.value || 9999);
    const sortVal = document.getElementById("sort-select")?.value || "default";

    // FIX Bug 1: รองรับ clan ที่เป็น Array
    filtered = PRODUCTS.filter(p => {
      const clanArr = Array.isArray(p.clan) ? p.clan : [p.clan];
      const clanStr = clanArr.join(" ").toLowerCase();
      const matchSearch = !searchQ || p.name.toLowerCase().includes(searchQ) || clanStr.includes(searchQ);
      const matchRarity = selectedRarities.length === 0 || selectedRarities.includes(p.rarity);
      const matchClan = selectedClans.length === 0 || clanArr.some(c => selectedClans.includes(c.trim()));
      const matchPrice = p.price <= maxPrice;
      return matchSearch && matchRarity && matchClan && matchPrice;
    });

    if (sortVal === "price-asc") filtered.sort((a, b) => a.price - b.price);
    else if (sortVal === "price-desc") filtered.sort((a, b) => b.price - a.price);
    else if (sortVal === "name") filtered.sort((a, b) => a.name.localeCompare(b.name));
    else if (sortVal === "new") filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));

    render();
  }

  // Events
  document.querySelectorAll("[data-filter-rarity], [data-filter-clan]").forEach(el => {
    el.addEventListener("change", applyFilters);
  });

  document.getElementById("sort-select")?.addEventListener("change", applyFilters);
  document.getElementById("filter-search")?.addEventListener("input", debounce(applyFilters, 250));

  document.getElementById("price-range-slider")?.addEventListener("input", (e) => {
    if (document.getElementById("price-max")) {
      document.getElementById("price-max").value = e.target.value;
    }
    document.getElementById("price-display").textContent = formatPrice(parseInt(e.target.value));
    applyFilters();
  });

  document.getElementById("filter-clear")?.addEventListener("click", () => {
    document.querySelectorAll("[data-filter-rarity], [data-filter-clan]").forEach(el => el.checked = false);
    if (document.getElementById("price-range-slider")) document.getElementById("price-range-slider").value = 9999;
    if (document.getElementById("price-max")) document.getElementById("price-max").value = 9999;
    if (document.getElementById("price-display")) document.getElementById("price-display").textContent = "9,999 ฿";
    if (document.getElementById("filter-search")) document.getElementById("filter-search").value = "";
    filtered = [...PRODUCTS];
    render();
  });

  // View toggle
  document.querySelectorAll(".view-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".view-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentView = btn.dataset.view;
      grid.classList.toggle("list-view", currentView === "list");
    });
  });

  // FIX Bug 6: อ่าน URL query params จาก index.html categories แล้ว pre-check filter
  const params = new URLSearchParams(window.location.search);
  const qRarity = params.get("rarity");
  const qClan = params.get("clan");
  if (qRarity) {
    const cb = document.querySelector(`[data-filter-rarity][value="${qRarity}"]`);
    if (cb) cb.checked = true;
  }
  if (qClan) {
    // ลอง match clan ที่ตรงที่สุด (case-insensitive)
    document.querySelectorAll("[data-filter-clan]").forEach(cb => {
      if (cb.value.toLowerCase().includes(qClan.toLowerCase())) cb.checked = true;
    });
  }

  applyFilters();
}

// =============================================
// PRODUCT DETAIL PAGE
// =============================================
function initProductDetailPage() {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id")) || 1;
  const product = PRODUCTS.find(p => p.id === id);

  if (!product) {
    document.querySelector(".detail-grid")?.insertAdjacentHTML("beforebegin", `
      <div style="text-align:center;padding:4rem;color:var(--text-muted)">ไม่พบสินค้า</div>
    `);
    return;
  }

  // Fill data
  document.title = `${product.name} - Vanguard Nexus`;
  setTextAll("[data-detail-name]", product.name);
  setTextAll("[data-detail-series]", product.series);
  setTextAll("[data-detail-price]", formatPrice(product.price));
  setTextAll("[data-detail-clan]", product.clan);
  setTextAll("[data-detail-rarity]", getRarityLabel(product.rarity));
  setTextAll("[data-detail-grade]", `Grade ${product.grade}`);

  const rarityBadge = document.getElementById("detail-rarity-badge");
  if (rarityBadge) {
    rarityBadge.textContent = product.rarity;
    rarityBadge.className = `card-rarity rarity-${product.rarity.toLowerCase()}`;
    rarityBadge.style.position = "static";
  }

  // Image placeholder
  const mainImgArea = document.getElementById("main-img-area");
 if (mainImgArea) {
    mainImgArea.innerHTML = product.image
      ? `<img src="${product.image}" alt="${product.name}" style="width:100%;height:100%;object-fit:contain;border-radius:8px;">`
      : `<div style="width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:1rem;background:linear-gradient(135deg,${product.color}18,${product.color}06)">
          <span style="font-size:6rem">${product.emoji}</span>
          <span style="font-size:1rem;color:var(--text-secondary);font-weight:600">${product.name}</span>
        </div>`;
  }

  // Stock bar
  const stockFill = document.getElementById("stock-fill");
  const stockPct = Math.min((product.stock / 20) * 100, 100);
  if (stockFill) stockFill.style.width = stockPct + "%";

  const stockLabel = document.getElementById("stock-label");
  if (stockLabel) stockLabel.textContent = product.stock === 0 ? "หมดสต็อก" : `เหลือ ${product.stock} ชิ้น`;

  // Tags
  const tagsEl = document.getElementById("detail-tags");
  if (tagsEl) {
    tagsEl.innerHTML = product.tags.map(t => `<span class="tag">#${t}</span>`).join("");
  }

  // Original price
  if (product.originalPrice) {
    const origEl = document.getElementById("detail-orig-price");
    const saveEl = document.getElementById("detail-save");
    if (origEl) origEl.textContent = formatPrice(product.originalPrice);
    const save = Math.round((1 - product.price / product.originalPrice) * 100);
    if (saveEl) saveEl.textContent = `ประหยัด ${save}%`;
  }

  // Qty control
  let qty = 1;
  const qtyDisplay = document.getElementById("detail-qty-val");

  document.getElementById("qty-minus")?.addEventListener("click", () => {
    if (qty > 1) { qty--; qtyDisplay.textContent = qty; }
  });
  document.getElementById("qty-plus")?.addEventListener("click", () => {
    if (qty < product.stock) { qty++; qtyDisplay.textContent = qty; }
  });

  // Add to cart
  document.getElementById("detail-add-cart")?.addEventListener("click", () => {
    addToCart(product.id, qty);
  });

  // Wishlist
  const wishBtn = document.getElementById("detail-wishlist");
  wishBtn?.addEventListener("click", () => {
    toggleWishlist(product.id);
    wishBtn.classList.toggle("active", wishlist.includes(product.id));
    wishBtn.innerHTML = wishlist.includes(product.id) ? "❤️" : "🤍";
  });
  if (wishBtn && wishlist.includes(product.id)) {
    wishBtn.classList.add("active");
    wishBtn.innerHTML = "❤️";
  }

  // Related products
  const relatedGrid = document.getElementById("related-grid");
  if (relatedGrid) {
    const related = PRODUCTS.filter(p => p.id !== product.id && (p.clan === product.clan || p.rarity === product.rarity)).slice(0, 4);
    relatedGrid.innerHTML = related.map(p => createProductCard(p)).join("");
  }
}

function setTextAll(selector, text) {
  document.querySelectorAll(selector).forEach(el => el.textContent = text);
}

// =============================================
// CONTACT PAGE
// =============================================
function initContactPage() {
  const form = document.getElementById("contact-form");
  form?.addEventListener("submit", (e) => {
    e.preventDefault();
    showToast("ส่งข้อความเรียบร้อยแล้ว! เราจะติดต่อกลับภายใน 24 ชม. 📨");
    form.reset();
  });
}

// =============================================
// INDEX PAGE
// =============================================
function initIndexPage() {
  const featuredGrid = document.getElementById("featured-grid");
  if (featuredGrid) {
    // FIX: ใช้ spread ก่อน sort เพื่อไม่ให้ mutate array ต้นฉบับ
    const featured = [...PRODUCTS].sort((a, b) => b.price - a.price).slice(0, 8);
    featuredGrid.innerHTML = featured.map(p => createProductCard(p)).join("");
    updateWishlistBtns();
  }
}

// =============================================
// UTILITY
// =============================================
function debounce(fn, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

// =============================================
// INIT
// =============================================
document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  initSearch();
  initLoginModal();
  updateCartUI();
  updateUserUI();
  initScrollAnimations();

  const page = window.location.pathname.split("/").pop();
  if (page === "" || page === "index.html") initIndexPage();
  if (page === "products.html") initProductsPage();
  if (page === "product-detail.html") initProductDetailPage();
  if (page === "cart.html") initCartPage();
  if (page === "contact.html") initContactPage();
  if (page === "about.html") initScrollAnimations();

});
