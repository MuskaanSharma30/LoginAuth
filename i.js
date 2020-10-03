var db = firebase.firestore();
function submitdata(event) {
  event.preventDefault();
  var date = document.getElementById("date").value;
  var Publication = document.getElementById("Publication").selectedIndex;
  var Edition = document.getElementById("Edition").selectedIndex;
  var Category = document.getElementById("Category").selectedIndex;
  var Brand = document.getElementById("Brand").selectedIndex;
  var Type = document.getElementById("Type").selectedIndex;
  var Product = document.getElementById("Product").selectedIndex;
  var Height = document.getElementById("Height").value;
  var Width = document.getElementById("Width").value;
  var Area = document.getElementById("Area").value;
  var Page = document.getElementById("Page").value;
  var Color = document.getElementById("Color").selectedIndex;

  db.collection("Users")
    .doc()
    .set({
      date: date,
      Publication,
      Edition,
      Category,
      Brand,
      Type,
      Product,
      Height,
      Width,
      Area,
      Page,
      Color,
    })
    .then(function () {
      console.log("Document successfully written!");
    })
    .catch(function (error) {
      console.error("Error writing document: ", error);
    });
}
const list_details = document.querySelector(".list_details");
var linebreak = document.createElement("br");
//var space = document.createElement("div");
var space = " ";
db.collection("Users")
  .get()
  .then(function (querySnapshot) {
    querySnapshot.forEach(function (doc) {
      list_details.innerHTML +=
        doc.data().date +
        " " +
        doc.data().Publication +
        " " +
        doc.data().Category +
        " " +
        doc.data().Type +
        " " +
        doc.data().Product +
        " " +
        doc.data().Area +
        " " +
        doc.data().Color;
      list_details.appendChild(linebreak);
    });
  });
