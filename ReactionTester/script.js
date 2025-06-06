 var startTime;
        
        function getRandomColor() {
            var colors = ["red", "blue", "green", "yellow", "purple"];
            return colors[Math.floor(Math.random() * colors.length)];
        }

        function moveShape() {
            var shape = document.getElementById("shape");
            var left = Math.random() * (window.innerWidth - 100);
            var top = Math.random() * (window.innerHeight - 100);
            var wh = (Math.random() * 200) + 50; 

            shape.style.left = left + "px";
            shape.style.top = top + "px";
            shape.style.width = wh + "px";
            shape.style.height = wh + "px";
            shape.style.backgroundColor = getRandomColor();
            shape.style.display = "block";

            startTime = new Date().getTime();
        }

        document.getElementById("shape").onclick = function() {
            var endTime = new Date().getTime();
            var reactionTime = (endTime - startTime) / 1000;
            document.getElementById("reactionTime").textContent = "Your reaction time: " + reactionTime + " seconds";

            this.style.display = "none";
            setTimeout(moveShape, Math.random() * 2000 + 500); // Random delay before showing again
        };

        moveShape();