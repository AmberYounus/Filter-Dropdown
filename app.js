function dropDown() {
  document.getElementById("drop").classList.toggle("show");
}
function filterFunction() {
  var input, i, a, filter;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("drop");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.dispalay = "";
    } else {
      a[i].style.dispalay = "none";
    }
  }
}
