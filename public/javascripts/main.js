function getXMLHttpRequestObject() {
	var ajax = null;
	if (window.XMLHttpRequest) {
		ajax = new XMLHttpRequest();
	} else if (window.ActiveXObject) {
		ajax = new ActiveXObject('MSXML2.XMLHTTP.3.0');
	}
	return ajax;
}

var ajax = getXMLHttpRequestObject();
	ajax.onreadystatechange = function() {
		if (ajax.readyState == 4) {
			if ((ajax.status >= 200 && ajax.status < 300) || (ajax.status == 304)) {
				console.log(ajax.statusText);
			} else {
        console.log(ajax.statusText);
			}
		}
	};

window.onload = function () {
  var elems = Array.prototype.slice.call(document.querySelectorAll('.js-switch'));

  elems.forEach(function(html) {
    var switchery = new Switchery(html);
    html.addEventListener('change', function() {
      // Enabled
      if(this.checked) {
        ajax.open('GET', '/enable', true);
		    ajax.send(null);
      }
      // Disabled
      else {
        ajax.open('GET', '/disable', true);
        ajax.send(null);
      }
    });
  });

  var killButton = document.querySelector('#kill');
  if(killButton) {
    killButton.addEventListener('click', function() {
      ajax.open('GET', '/kill', true);
      ajax.send(null);
      event.returnValue = false;
    });
  }
};
