(function() {
  function detectDevTools() {
    let threshold = 160;

    if (window.outerWidth - window.innerWidth > threshold || window.outerHeight - window.innerHeight > threshold) {
      return true;
    }

    const element = new Image();
    Object.defineProperty(element, 'id', {
      get: function() {
        document.body.innerHTML = '<h1 style="color:red;text-align:center;margin-top:20%">Access Restricted 🚫</h1>';
        return true;
      }
    });
    console.log(element);

    const start = performance.now();
    debugger;
    const end = performance.now();
    if (end - start > 100) {
      return true;
    }

    return false;
  }

  function protect() {
    if (detectDevTools()) {
      document.body.innerHTML = '<h1 style="color:red;text-align:center;margin-top:20%">Access Restricted 🚫</h1>';
    }
  }

  setInterval(protect, 1000);
  window.addEventListener('resize', protect);
})();