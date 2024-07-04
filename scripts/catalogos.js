import { favoriteItems, catalogosItems } from "./data/items.js";
import AppState from "./state.js";

const $favoriteList = $('#deseados-lista');
const $catalogosList = $('#catalogos-ul-lista');

function createItem({ name, price, discount, rating, image }) {
    return `
    <li>
        <section class="catalogo">
            <figure>
                <img src="${image}" alt="">
            </figure>
            <h3>${name}</h3>
            <section class="catalogo-price">
                <h4>S/. ${price}</h4>
                <span>S/. ${discount}% OFF</span>
            </section>
            <section class="catalogo-buttons">
                <button>Comprar</button>
                <button>Detalles</button>
            </section>
        </section>
    </li>
    `;
}

function addClickEvents() {
    const detailBtns = $(".catalogo .catalogo-buttons button:nth-child(2)");
    [...detailBtns].forEach(btn => {
        btn.addEventListener("click", () => {
            window.location.href = "../pages/detalle.html";
        })
    })
}

function displayFavorites() {
    favoriteItems.forEach(data => {
        const item = createItem(data);
        $favoriteList.append(item);
    });
}

function displayCatalogos() {
    catalogosItems.forEach(data => {
        const item = createItem(data);
        $catalogosList.append(item);
    })
}

function setGridColumns() {
    const $catalogosList = $('#catalogos-ul-lista');
    const listWidth = $($catalogosList).width();
    const gridColumns = Math.floor(listWidth / 100);
    $catalogosList.css('grid-template-columns', `repeat(${gridColumns}, minmax(250px, 1fr))`);
}

displayFavorites();
displayCatalogos();
addClickEvents();
setGridColumns();

$(window).resize(function() {
    setGridColumns();
});