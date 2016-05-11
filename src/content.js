
window.addEventListener('click', handle);
window.addEventListener('click', handle, true);
window.addEventListener('submit', handle);
window.addEventListener('submit', handle, true);

function handle(e) {
    let i = 0, el = e.target;
    while( el && !el.target && i++ < 3 ) {
        el = el.parentNode;
    }
    if( el && el.target == "_blank" ) {
        el.target = "_top";
    }
}
