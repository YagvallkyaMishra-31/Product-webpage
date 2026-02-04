// ========================================
// Global Variables
// ========================================
let allProducts = [];
let filteredProducts = [];
let currentPage = 1;
const productsPerPage = 9;

// ========================================
// Fetch Products from API
// ========================================
fetch("https://dummyjson.com/products")
    .then(res => res.json())
    .then(data => {
        allProducts = data.products;
        filteredProducts = allProducts;
        console.log("Products loaded:", data);
        renderPage();
    })
    .catch(error => {
        console.error("Error fetching products:", error);
        showError();
    });

// ========================================
// Search Functionality
// ========================================
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const clearBtn = document.getElementById("clearBtn");

// Search on button click
searchBtn.addEventListener("click", performSearch);

// Search on Enter key
searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        performSearch();
    }
});

// Clear search
clearBtn.addEventListener("click", () => {
    searchInput.value = "";
    filteredProducts = allProducts;
    currentPage = 1;
    renderPage();
});

function performSearch() {
    const searchTerm = searchInput.value.toLowerCase().trim();

    if (searchTerm === "") {
        filteredProducts = allProducts;
    } else {
        filteredProducts = allProducts.filter(product =>
            product.title.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm) ||
            product.category.toLowerCase().includes(searchTerm)
        );
    }

    currentPage = 1; // Reset to first page after search
    renderPage();
}

// ========================================
// Pagination Logic
// ========================================
function getTotalPages() {
    return Math.ceil(filteredProducts.length / productsPerPage);
}

function getCurrentPageProducts() {
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    return filteredProducts.slice(startIndex, endIndex);
}

function changePage(page) {
    const totalPages = getTotalPages();

    if (page < 1 || page > totalPages) return;

    currentPage = page;
    renderPage();

    // Smooth scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ========================================
// Render Functions
// ========================================
function renderPage() {
    renderProducts();
    renderPagination();
    updateProductCount();
}

function renderProducts() {
    const container = document.getElementById("products-container");
    const currentProducts = getCurrentPageProducts();

    // Clear previous content
    container.innerHTML = "";

    // Show empty state if no products
    if (currentProducts.length === 0) {
        container.innerHTML = `
            <div class="empty-state" style="grid-column: 1 / -1;">
                <h3>No products found</h3>
                <p>Try adjusting your search terms</p>
            </div>
        `;
        return;
    }

    // Render products with staggered animation
    currentProducts.forEach((product, index) => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
        productCard.style.animationDelay = `${index * 0.1}s`;

        productCard.innerHTML = `
            <img class="product-image" src="${product.thumbnail}" alt="${product.title}" loading="lazy">
            <div class="product-info">
                <div class="product-category">${product.category}</div>
                <div class="product-title">${product.title}</div>
                <div class="product-description">${product.description}</div>
                <div class="product-footer">
                    <div class="product-price">$${product.price.toFixed(2)}</div>
                    <div class="product-rating">
                        ★ ${product.rating.toFixed(1)}
                    </div>
                </div>
            </div>
        `;

        container.appendChild(productCard);
    });
}

function renderPagination() {
    const totalPages = getTotalPages();
    const pageNumbersContainer = document.getElementById("pageNumbers");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    // Clear previous page numbers
    pageNumbersContainer.innerHTML = "";

    // Hide pagination if only one page or no products
    const paginationElement = document.getElementById("pagination");
    if (totalPages <= 1) {
        paginationElement.style.display = "none";
        return;
    }
    paginationElement.style.display = "flex";

    // Update prev/next buttons
    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages;

    // Add event listeners
    prevBtn.onclick = () => changePage(currentPage - 1);
    nextBtn.onclick = () => changePage(currentPage + 1);

    // Generate page numbers with ellipsis
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    // Adjust start if we're near the end
    if (endPage - startPage < maxVisiblePages - 1) {
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    // Always show first page
    if (startPage > 1) {
        createPageButton(1);
        if (startPage > 2) {
            createEllipsis();
        }
    }

    // Show page numbers
    for (let i = startPage; i <= endPage; i++) {
        createPageButton(i);
    }

    // Always show last page
    if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
            createEllipsis();
        }
        createPageButton(totalPages);
    }
}

function createPageButton(pageNum) {
    const pageNumbersContainer = document.getElementById("pageNumbers");
    const pageBtn = document.createElement("button");
    pageBtn.classList.add("page-number");
    pageBtn.textContent = pageNum;

    if (pageNum === currentPage) {
        pageBtn.classList.add("active");
    }

    pageBtn.onclick = () => changePage(pageNum);
    pageNumbersContainer.appendChild(pageBtn);
}

function createEllipsis() {
    const pageNumbersContainer = document.getElementById("pageNumbers");
    const ellipsis = document.createElement("span");
    ellipsis.classList.add("page-ellipsis");
    ellipsis.textContent = "...";
    pageNumbersContainer.appendChild(ellipsis);
}

function updateProductCount() {
    const productCount = document.getElementById("productCount");
    const startIndex = (currentPage - 1) * productsPerPage + 1;
    const endIndex = Math.min(currentPage * productsPerPage, filteredProducts.length);
    const total = filteredProducts.length;

    if (total === 0) {
        productCount.textContent = "No products";
    } else {
        productCount.textContent = `Showing ${startIndex}-${endIndex} of ${total} products`;
    }
}

function showError() {
    const container = document.getElementById("products-container");
    container.innerHTML = `
        <div class="empty-state" style="grid-column: 1 / -1;">
            <h3>Oops! Something went wrong</h3>
            <p>Unable to load products. Please try again later.</p>
        </div>
    `;
}