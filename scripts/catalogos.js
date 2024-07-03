const $catalogosList = $('#catalogos-ul-lista');

function setGridColumns() {
    const listWidth = $($catalogosList).width();
    const gridColumns = Math.floor(listWidth / 80);
    $catalogosList.css('grid-template-columns', `repeat(${gridColumns}, minmax(250px, 1fr))`);
}

setGridColumns();

$(window).resize(function() {
    setGridColumns();
});