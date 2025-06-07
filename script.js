var startTime;

        function getRandomColor() {
            var colors = ["red", "blue", "green", "yellow", "purple"];
            return colors[Math.floor(Math.random() * colors.length)];
        }

        function moveShape() {
            var shape = document.getElementById("shape");
            var wh = (Math.random() * 200) + 50;  

            // Center horizontally and keep it near the top
            var left = (window.innerWidth / 2) - (wh / 2); // Center horizontally
            var top = 50; // Fixed near the top

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
            setTimeout(moveShape, Math.random() * 1000 + 300); // Random delay before showing again
        };

        moveShape();
