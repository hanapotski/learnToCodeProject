// this will set the unique id of each element
// it will eventually get quite big
var i = 1;

function addTODO() { // This creates a notDone item using input from id="inputTODO"
  // create a new li element
  var listItem = document.createElement("LI");
  // set the id of the new element to elem#
  listItem.setAttribute("id", "elem" + i);
  // create a var holding a node containing the contents of the text box on submission
  var itemText = document.createTextNode(document.getElementById("inputTODO").value);
  // append contents of itemText to li element we just created
  listItem.appendChild(itemText);

  // insert the li element and its contents to the ul with id="listTODO"
  document.getElementById('listTODO').appendChild(listItem);

  // replace the innerHTML of the li element you just created with one containing
  // links to other JS functions and a unique id span tag around just the user-input text
  document.getElementById('elem' + i).innerHTML = "<span id='span" + i + "'>" + document.getElementById("inputTODO").value + "</span> | <a onclick='delItem(\"elem" + i + "\")'>del</a> | <a onclick='jobDone(\"" + i + "\")'>done</a>";
  // increase i
  i++;
}

function delItem( elemID ) { // This deletes either a done or notDone item
  // create a var containing the li element with id passed by the function
  var delItem = document.getElementById(elemID);
  // remove that element and its contents from its parent element
  delItem.parentNode.removeChild(delItem);
}

function jobDone( elemID ) { // This deletes a notDone item and creates a clone as a done item
  // create a var holding text inside span id="span#" where # is passed by the function
  var insideText = document.getElementById("span" + elemID).innerText;
  // create a var holding a node containing the contents of the above variable
  var itemText = document.createTextNode(insideText);

  // create a new li element
  var listItem = document.createElement("LI");
  // set the id of the new element to elem#
  listItem.setAttribute("id", "elem" + i);
  // append contents of itemText to li element we just created
  listItem.appendChild(itemText);

  // create a var containing the li element with id passed by the function
  var delItem = document.getElementById("elem" + elemID);
  // remove the element and its contents from its parent element
  delItem.parentNode.removeChild(delItem);

  // insert the li element and its contents to the ul with id="listDone"
  document.getElementById("listDone").appendChild(listItem);

  // replace the innerHTML of the li element you just created with one contianing
  // links to other JS functions and a unique id span tag around the text from insideText
  document.getElementById('elem' + i).innerHTML = "<span id='span" + i + "'>" + insideText + "</span> | <a onclick='delItem(\"elem" + i + "\")'>del</a> | <a onclick='jobNotDone(\"" + i + "\")'>unfinished</a>";
  // increase i
  i++;
}

function jobNotDone( elemID ) { // This deletes a done item and creates a clone as a notDone item
  // create a var holding text inside span id="span#" where # is passed by the function
  var insideText = document.getElementById("span" + elemID).innerText;
  // create a var holding a node containing the contents of the above variable
  var itemText = document.createTextNode(insideText);

  // create a new li element
  var listItem = document.createElement("LI");
  // set the id of the new elemnt to elem#
  listItem.setAttribute("id", "elem" + i);
  // append contents of itemText to li element we just created
  listItem.appendChild(itemText);

  // create a var containing the li element with id passed by the function
  var delItem = document.getElementById("elem" + elemID);
  // remove the element and its contents from its parent element
  delItem.parentNode.removeChild(delItem);

  // insert the li element and its contents to the ul with id="listTODO"
  document.getElementById("listTODO").appendChild(listItem);

  // replace the innerHTML of the li element you just created with one contianing
  // links to other JS functions and a unique id span tag around the text from insideText
  document.getElementById('elem' + i).innerHTML = "<span id='span" + i + "'>" + insideText + "</span> | <a onclick='delItem(\"elem" + i + "\")'>del</a> | <a onclick='jobDone(\"" + i + "\")'>done</a>";
  // increase i
  i++;
}

// comments are fun!
/* Yay, comments!

function total() {
  var no1 = document.getElementById("text1").value;
  var no2 = document.getElementById("text2").value;
  var sum = parseInt(no1) + parseInt(no2);
  document.getElementById("sum").innerHTML=sum;
}

TODO LIST:
We'll add and delete items from our todo list.
Write functions to add items
Write functions to delete items
Write functions to mark done
Write functions to mark notDone

Not storing these items anywhere yet.
Just JS practice. :)
 */
