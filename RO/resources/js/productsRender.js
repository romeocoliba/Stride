

var itemsPerPage = 12; 
var currentPage = 1; 
var totalPages = Math.ceil(products.length / itemsPerPage);



function renderProducts() {
  var productList = document.getElementById("product-list");
  productList.innerHTML = ""; 
  var startIndex = (currentPage - 1) * itemsPerPage;
var endIndex = startIndex + itemsPerPage;

  for (var i = startIndex; i < endIndex; i++) {
    if (i >= products.length) break;

    var product = products[i];

    var productCard = document.createElement("div");
    productCard.className = "product-card";
    productCard.innerHTML = `
      <a onclick="dynamicPage(${product.id})" href="product.html"><img src="${product.image}" alt="${product.name}" /></a>
      <h2>${product.name}</h2>
      <div id="stars-container${i}"></div>
      <p>€${product.price}</p>
      <div class="buttons">
      <button onclick="buyNow(${product.id})">Cumpără</button>
      <button onclick="addToCart(${product.id})">Adaugă in coş</button>
      </div>`;

    productList.appendChild(productCard);
  }
}

function renderProductsFilterMen() {
  var productList = document.getElementById("product-list");
  productList.innerHTML = ""; 
  var startIndex = (currentPage - 1) * itemsPerPage;
var endIndex = startIndex + itemsPerPage;

  for (var i = startIndex; i < endIndex; i++) {
    if (i >= products.length) break;

    var product = products[i];

    if (product.category === "men") {
      
    var productCard = document.createElement("div");
    productCard.className = "product-card";
    productCard.innerHTML = `
      <a onclick="dynamicPage(${product.id})" href="product.html"><img src="${product.image}" alt="${product.name}" /></a>
      <h2>${product.name}</h2>
      <div id="stars-container${i}"></div>
      <p>€${product.price}</p>
      <div class="buttons">
      <button onclick="buyNow(${product.id})">Cumpără</button>
      <button onclick="addToCart(${product.id})">Adaugă in coş</button>
      </div>`;

    productList.appendChild(productCard);
  }
}
}


function stars() {
  var startIndex = (currentPage - 1) * itemsPerPage;
  var endIndex = startIndex + itemsPerPage;

  for (let index = startIndex; index < endIndex; index++) {
    let div = document.getElementById(`stars-container${index}`);
    
    let indexstars = products[index].stars;
    let antiindex = 5 - indexstars;
  
    for (let i = 0; i < indexstars; i++) {
      let star = document.createElement("i");
      star.className = "fa-solid fa-star";
      div.appendChild(star);
    }
    for (let i = 0; i < antiindex; i++) {
      let star = document.createElement("i");
      star.className = "fa-regular fa-star";
      div.appendChild(star);
    }
  }
}


function renderPagination() {
  var paginationContainer = document.getElementById("pagination");
  paginationContainer.innerHTML = "";

  for (var i = 1; i <= totalPages; i++) {
    var pageLink = document.createElement("a");
    pageLink.textContent = i;
    pageLink.href = "#";
    pageLink.addEventListener("click", goToPage.bind(null, i));

    if (i === currentPage) {
      pageLink.classList.add("active");
    }

    paginationContainer.appendChild(pageLink);
  }
}

function goToPage(page) {
  if (page >= 1 && page <= totalPages) {
    currentPage = page;
    renderProducts();
    renderPagination();
  }
}

function dynamicPage(productId) {
  var product = products.find(function(p) {
    return p.id === productId;
  });

  localStorage.setItem("dynamicProduct", JSON.stringify(product));
}


function buyNow(productId) {
  var product = products.find(function(p) {
    return p.id === productId;
  });

  price = product.price

  localStorage.setItem("buy", JSON.stringify(price));
  window.location.href = 'payment.html';
}


function addToCart(productId) {

  var authValue = window.localStorage.getItem("auth");

  if (authValue === "true") {

  if (localStorage.getItem("cart")) {

    var product = products.find(function(p) {
      return p.id === productId;
    });

    let old = JSON.parse(localStorage.getItem("cart"));

    old.push(product);

    localStorage.setItem("cart", JSON.stringify(old));
    
  } else {
    var product = [products.find(function(p) {
      return p.id === productId;
    })];
    
  localStorage.setItem("cart", JSON.stringify(product));
  }

  alert("Produs adăugat în coș!");
  cartNr();
    
} else {
  alert("Nu ești autentificat!");
  window.location.href = "login.html";
}
}

function cartNr() {
  if (window.localStorage.getItem("cart")) {

    let storage = JSON.parse(window.localStorage.getItem("cart"));

    var nr = document.getElementById("qty");
  
    nr.innerHTML = "";
  
    nr.innerHTML = storage.length;
  }


}



function initializePage() {
  renderProducts();
  renderPagination();
  stars();
  cartNr();
}

window.onload = initializePage;


