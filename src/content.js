
window.addEventListener('click', (e) => {
    let i = 0, el = e.target;
    while( el && el.tagName != 'A' && el.tagName != 'AREA' && i++ < 3 ) {
        el = el.parentNode;
    }
    if( el && el.target == "_blank" ) {
        el.target = "_self";
    }
});