var arr = ["stuff", "things"];
function submit_id() {
  var pusher = document.getElementById('a').value;
  arr.push(pusher);
  document.getElementById('disp').innerHTML = arr;
}
