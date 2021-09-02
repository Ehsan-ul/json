// AJAX code
// browser e console kore dekhte hobe

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    // console.log(this.responseText);
    var data = this.responseText;
    // console.log(data);
    jsonData(data);
  }
};
xmlhttp.open('GET', 'data.json', true);
xmlhttp.send();

function jsonData(json_data) {
  console.log(json_data);
  var json_obj = JSON.parse(json_data);
  console.log(json_obj);

  for (x in json_obj.person) {
    console.log(json_obj[x]);
  }
}
