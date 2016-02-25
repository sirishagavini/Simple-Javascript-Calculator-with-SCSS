       function add()
        {
            var a = document.getElementById("num1").value;
            var b = document.getElementById("num2").value;
            var c = +a + +b;
            document.getElementById("showadd").innerHTML = c;
        }

             function sub()
        {
            var a = document.getElementById("num1").value;
            var b = document.getElementById("num2").value;
            var c = +a - +b;
            document.getElementById("showsub").innerHTML = c;
        }
          function mul()
        {
            var a = document.getElementById("num1").value;
            var b = document.getElementById("num2").value;
            var c = +a * +b;
            document.getElementById("showmul").innerHTML = c;
        }
            function div()
        {
            var a = document.getElementById("num1").value;
            var b = document.getElementById("num2").value;
            var c = +a / +b;
            document.getElementById("showdiv").innerHTML = c;
        }
        
