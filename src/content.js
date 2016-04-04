
window.addEventListener('click', (e) => {
    if( e.target.tagName == 'A' && (!e.target.target || e.target.target == "_blank") ) {
        e.target.target = "_self";
    }
}, true);