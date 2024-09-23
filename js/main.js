document.addEventListener('DOMContentLoaded', (event) => {
    new Typed('#typed-text', {
        strings: [
            'Budi izvrstan u onom što ^500vidi^500s^1000',
            'Budi izvrstan u onom što voliš.',
            'Budi izvrstan u onom što voliš.<br><span class="zaiskri">ZAISKRI</span>.'
        ],
        typeSpeed: 50,
        backSpeed: 30,
        startDelay: 500,
        showCursor: true,
        cursorChar: '|',
        autoInsertCss: true,
        loop: true,
        loopCount: Infinity,
        smartBackspace: true,
    });
});