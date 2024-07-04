export function addIndiceLinkListeners() {
    $('#indice-list li a').each(function() {
        // Add click event listener
        $(this).on('click', function(e) {
            e.preventDefault();

            $('body, html').animate({ scrollTop: 0 }, 'slow');            
        });
    });
}

addIndiceLinkListeners();

