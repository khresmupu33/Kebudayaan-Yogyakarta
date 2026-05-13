document.onkeydown = function(e) {
  // Mematikan F12
  if (e.keyCode == 123) {
    return false;
  }
  // Mematikan Ctrl+Shift+I (Inspect)
  if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
    return false;
  }
  // Mematikan Ctrl+Shift+J (Console)
  if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
    return false;
  }
  // Mematikan Ctrl+U (View Source)
  if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
    return false;
  }
  // Mematikan Ctrl+S (Save Page)
  if (e.ctrlKey && e.keyCode == 'S'.charCodeAt(0)) {
    return false;
  }
};
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();;
  });