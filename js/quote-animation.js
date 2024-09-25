document.addEventListener('DOMContentLoaded', function() {
    var quoteContainers = document.querySelectorAll('.quote-container');
    
    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function animateQuotesIfVisible() {
        quoteContainers.forEach(function(container) {
            if (isElementInViewport(container) && !container.classList.contains('animate')) {
                container.classList.add('animate');
            }
        });
    }

    window.addEventListener('scroll', animateQuotesIfVisible);
    animateQuotesIfVisible(); // Check on load
});