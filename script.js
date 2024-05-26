async function foo() {
  try {
    let data = await fetch("https://meowfacts.herokuapp.com/");
    let CatFacts = await data.json();
    console.log(CatFacts);
var final_quote = CatFacts.data;
console.log(final_quote)

    var container = document.createElement("div");
    container.className = "container";
    

    var row = document.createElement("div");
    row.className = "row";

    var heading = document.createElement("h1");
    heading.className = "head";
    heading.innerHTML = "Random Cat Facts Generator";

    var col = document.createElement("div");
    col.className = "col-lg-12";

var image = document.createElement("img");
image.className="img-fluid";
image.setAttribute("src","cat backdrop.jpg");
image.setAttribute("alt","Cat-image")

    var quote = document.createElement("p");
    quote.setAttribute("id", "cat");
    quote.innerHTML = `${final_quote}`;

    var button = document.createElement("button");
    button.setAttribute("id", "show-fact");
    button.setAttribute("type", "button");
    button.className = "btn btn-warning refresh-button";
    button.textContent = "Show a New Fact";

    col.append(image,quote, button);
    row.append(col);
    container.append(heading, row);
    document.body.append(container);


  document.addEventListener("click", function (event) {
    if (event.target && event.target.matches(".refresh-button")) {
      location.reload();
      
    }
  });
  } catch (error) {
    console.log(error);
  }
}

foo();
