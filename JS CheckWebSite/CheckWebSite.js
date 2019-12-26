// var client = new XMLHttpRequest();
// client.open("GET", "https://stackoverflow.com/", true);
// client.overrideMimeType("text/plain; charset=x-user-defined");


function getHeaderTime () {
    alert(this.getResponseHeader("Last-Modified"));  /* A valid GMTString date or null */
  }
  
  var oReq = new XMLHttpRequest();
  oReq.open("HEAD" /* use HEAD if you only need the headers! */, "https://stackoverflow.com/", true);
  oReq.onload = getHeaderTime;
  oReq.send();