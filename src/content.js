
window.addEventListener('click', (e) => {
    let i = 0, el = e.target;
    while( el && el.tagName != 'A' && i++ < 3 ) {
        el = el.parentNode;
    }
    if( el && el.tagName == 'A' && el.target == "_blank" ) {
        el.target = "_self";
    }
}, true);