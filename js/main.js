// *******************************************
// **************  with POO  *****************
// *******************************************

function Product(title, sentence, description){
  this.title = title;
  this.sentence = sentence;
  this.description = description;
}

var HtmlManager = {
  getInput: function(){
    let title = document.getElementById("title").value;
    let sentence = document.getElementById("sentence").value;
    let description = document.getElementById("description").value;
    HtmlManager.getNewProduct(title, sentence, description);
  },
  getNewProduct: function(title, sentence, description){
    var x = new Product(title, sentence, description);
    HtmlManager.getNewDiv(x);
  },
  getNewDiv: function(x){
    var newDiv = document.createElement("div");
    newDiv.setAttribute('class', 'col-md-3 mx-auto px-0');

    var cardTitle = document.createElement("div");
    cardTitle.innerHTML = x.title;
    cardTitle.setAttribute('class', 'w-100 text-center p-2 text-white bg-primary');

    var cardSentence = document.createElement("div");
    cardSentence.innerHTML = x.sentence;
    cardSentence.setAttribute('class', 'w-100 text-justify p-2');

    var cardDescription = document.createElement("div");
    cardDescription.innerHTML = x.description;
    cardDescription.setAttribute('class', 'w-100 text-justify p-2 bg-danger');

    cardContainer = document.getElementById("cardContainer");

    cardContainer.append(newDiv);
    newDiv.append(cardTitle);
    newDiv.append(cardSentence);
    newDiv.append(cardDescription);

    HtmlManager.getNewIput();
  },
  getNewIput: function(){
    document.getElementById("title").value = "";
    document.getElementById("sentence").value = "";
    document.getElementById("description").value = "";
  }
};


// *******************************************
// **************  without POO  **************
// *******************************************


// function addProduct(){
//   title = document.getElementById("title").value;
//   sentence = document.getElementById("sentence").value;
//   description = document.getElementById("description").value;
//
//   if (title != "" && sentence !="" && description !="") {
//     addElement(title, sentence, description);
//     document.getElementById("title").value = "";
//     document.getElementById("sentence").value = "";
//     document.getElementById("description").value = "";
//   }
// };
//
// function addElement(title, sentence, description){
//
//   var newDiv = document.createElement("div");
//   newDiv.setAttribute('class', 'col-md-3 mx-auto px-0');
//
//   var cardTitle = document.createElement("div");
//   cardTitle.innerHTML = title;
//   cardTitle.setAttribute('class', 'w-100 text-center p-2 text-white bg-primary');
//
//   var cardSentence = document.createElement("div");
//   cardSentence.innerHTML = sentence;
//   cardSentence.setAttribute('class', 'w-100 text-justify p-2');
//
//   var cardDescription = document.createElement("div");
//   cardDescription.innerHTML = description;
//   cardDescription.setAttribute('class', 'w-100 text-justify p-2 bg-danger');
//
//   cardContainer = document.getElementById("cardContainer");
//
//   cardContainer.append(newDiv);
//   newDiv.append(cardTitle);
//   newDiv.append(cardSentence);
//   newDiv.append(cardDescription);
// }
