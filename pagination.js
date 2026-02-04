let data = [];
let filteredData = [];
let itemsPerPage = 5;
let currentPage = 1;

fetch("https://dummyjson.com/products")
    .then(res => res.json())
    .then(result => {
        data = result.products;
        filteredData = data;
        showData();
    });

function showData() {
    let list = document.getElementById("list");
    list.innerHTML = "";

    let start = (currentPage - 1) * itemsPerPage;
    let end = start + itemsPerPage;

    let pageData = filteredData.slice(start, end);

    pageData.forEach(item => {
        let card = document.createElement("div");
        card.className = "card";

        let img = document.createElement("img");
        img.src = item.thumbnail;

        let title = document.createElement("p");
        title.textContent = item.title;

        card.appendChild(img);
        card.appendChild(title);
        list.appendChild(card);
    });

    document.getElementById("page").innerText = `Page ${currentPage}`;
}

// NEXT
document.getElementById("next").addEventListener("click", () => {
    let totalPages = Math.ceil(filteredData.length / itemsPerPage);
    if (currentPage < totalPages) {
        currentPage++;
        showData();
    }
});

// PREV
document.getElementById("prev").addEventListener("click", () => {
    if (currentPage > 1) {
        currentPage--;
        showData();
    }
});

// SEARCH
const input = document.getElementById("searchInput");
const btn = document.getElementById("search");

btn.addEventListener("click", () => {
    let query = input.value.trim().toLowerCase();
    if (query === "") return;

    filteredData = data.filter(item =>
        item.title.toLowerCase().includes(query)
    );

    currentPage = 1;
    showData();

    let history = JSON.parse(localStorage.getItem("searchHistory")) || [];
    history.push(query);
    localStorage.setItem("searchHistory", JSON.stringify(history));

    input.value = "";
    showHistory();
});

function showHistory() {
    let history = JSON.parse(localStorage.getItem("searchHistory")) || [];
    let list = document.getElementById("historyList");
    list.innerHTML = "";

    history.forEach(item => {
        let li = document.createElement("li");
        li.textContent = item;
        list.appendChild(li);
    });
}

showHistory();
