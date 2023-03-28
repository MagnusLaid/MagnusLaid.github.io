$(document).ready(function() {

    $("button.plus").on("click", function() {
  
      $("div:last").after("<div class=item><h1>Pealkiri</h1></div>");

      

      
      
    })
  })


  function test1() {
    var node1 = document.createElement("div");
    var node2 = document.createElement("p");
    node2.innerHTML = "test para";
    var node3 = document.createElement("h2");
    node3.innerHTML = "Heading";
    node3.classList.add("test1");
    node3.classList.add("test2");
    node1.appendChild(node3);
    node1.appendChild(node2);
    document.getElementById("test").appendChild(node1);

    $("button.plus").on("click", function() {
  
        $("div:last").after("<div id=test><p>Title</p></div>");
    })
    }