 !function () {
   function detectDevTool(allow) {
     if (isNaN(+allow)) allow = 100;
     var start = +new Date(); // Validation of built-in Object tamper prevention.
     debugger;
     // alert("isable debugger");
     var end = +new Date(); // Validates too.
     if (isNaN(start) || isNaN(end) || end - start > allow) {
       // input your code here when devtools detected.
       document.getElementsByTagName("BODY")[0].innerHTML = "<h1>Disable debugger</h1>";
       alert("Disable debugger");
     }
   }
   if (window.attachEvent) {
     if (document.readyState === "complete" || document.readyState === "interactive") {
       detectDevTool();
       window.attachEvent('onresize', detectDevTool);
       window.attachEvent('onmousemove', detectDevTool);
       window.attachEvent('onfocus', detectDevTool);
       window.attachEvent('onblur', detectDevTool);
     } else {
       setTimeout(argument.callee, 0);
     }
   } else {
     window.addEventListener('load', detectDevTool);
     window.addEventListener('resize', detectDevTool);
     window.addEventListener('mousemove', detectDevTool);
     window.addEventListener('focus', detectDevTool);
     window.addEventListener('blur', detectDevTool);
   }
 }();
document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
  }
  );
  document.onkeydown = function (e) {
    if (event.keyCode == 123) {
      return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
      return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
      return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
      return false;
    }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
      return false;
    }
  }
  
