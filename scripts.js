var start = new Date().getTime();

      function getRandomRgbColor() {
        const r = Math.floor(Math.random() * 256); // 0-255
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
      }
      function move() {
        var left;
        var top;
        var wh;
        left = Math.random() * 300;
        top = Math.random() * 300;
        wh = (Math.random() * 300 )+ 100;
        document.getElementById("shape").style.marginLeft = left+"px";
        document.getElementById("shape").style.marginTop = top+"px";
        document.getElementById("shape").style.height = wh+"px";
        document.getElementById("shape").style.width = wh+"px";
        document.getElementById("shape").style.backgroundColor =
          getRandomRgbColor();

        document.getElementById("shape").style.display = "block";

        start = new Date().getTime();
      }
      
      document.getElementById("shape").onclick = function () {
        // document.getElementById("shape").style.display = "none";
        var end = new Date().getTime();
        var timeTaken = end - start;
        alert("your reaction Time : " + timeTaken / 1000 + " sec");
        move();
      };