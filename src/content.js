
window.addEventListener('click', handle);
window.addEventListener('click', handle, true);
window.addEventListener('submit', handle);
window.addEventListener('submit', handle, true);

function handle(e) {
  let i = 0, el = e.target;
  let frames = Array.from(document.querySelectorAll('iframe,frame')).map(f => f.name).filter(f => f);
  try {
    if( window.parent != window ) {
      frames.push(...Array.from(window.parent.document.querySelectorAll('iframe,frame')).map(f => f.name).filter(f => f));
    }
  } catch(e) {}

  while( el && !el.target && i++ < 5 ) {
    el = el.parentNode;
  }
  if( el && el.target ) {
    if( el.target.startsWith('_') ) {
      if( el.target == "_blank" ) {
        el.target = "_top";
      }
    } else if( !frames.includes(el.target) ) {
      el.target = "_top";
    }
  }
}
