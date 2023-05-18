

var itemsPerPage = 12; // Number of items to display per page
var currentPage = 1; // Current page
var totalPages = Math.ceil(products.length / itemsPerPage); // Total number of pages



// Function to render products
function renderProducts() {
  var productList = document.getElementById("product-list");
  productList.innerHTML = ""; // Clear previous products
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
      <button onclick="buyNow(${product.id})">Buy Now</button>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
      </div>`;

    productList.appendChild(productCard);
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
  var pagination = document.getElementById("pagination");
  pagination.innerHTML = ""; //important

  for (var i = 1; i <= totalPages; i++) {
    var pageLink = document.createElement("a");
    pageLink.href = "#";
    pageLink.innerText = i;
    pageLink.onclick = function(page) {
      return function() {
        currentPage = page;
        renderProducts();
        renderPagination();
        stars();
      };
    }(i);

    pagination.appendChild(pageLink);
  }
}

function initializePage() {
  renderProducts();
  renderPagination();
  stars();
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

  localStorage.setItem("buyNowProduct", JSON.stringify(product));

  alert("Product added to Buy Now!");
}

function addToCart(productId) {
  var product = products.find(function(p) {
    return p.id === productId;
  });

  localStorage.setItem("cartProduct", JSON.stringify(product));

  alert("Product added to Cart!");
}

// Initial rendering
window.onload = initializePage;