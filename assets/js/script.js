var copyrightYear = document.getElementById('year_copy');
if (copyrightYear) {
  var dateC = new Date();
  copyrightYear.innerHTML = dateC.getFullYear();
}
