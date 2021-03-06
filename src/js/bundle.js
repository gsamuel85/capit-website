'use strict';

// Show / hide menu on scroll
var stickMenu = function stickMenu() {
	var navHeight = document.getElementById("header").clientHeight + 100;
	var header = document.getElementById("header");

	if (window.scrollY > navHeight) {
		header.className = "reveal";
	}
	else {
		header.className = "reveal alt";

	}
};

window.addEventListener("scroll", function(e) {
	stickMenu();
});


// Handle form submission
var form = document.getElementById("contact-form");

if (form) {
	form.addEventListener("submit", function submitContact(e) {
		e.preventDefault();

		var contactData = new FormData();
		contactData.append("formId", "wRKKzTKy5PoyLATiwmQi4A==");
		contactData.append("emails[0].Label", "Work");
		contactData.append("email[0]_Value", document.getElementById("email").value);

		var xhttp = new XMLHttpRequest();
		// xhttp.onreadystatechange = function() {
		//   if (xhttp.readyState === 4 && xhttp.status === 200) {

		//     console.log("Contact details sent");
		//   }
		// };
		xhttp.open("POST", "https://googleapps.insight.ly/WebToContact/Create", true);
		xhttp.send(contactData);

		// Toggle form / thank you
		var form = document.getElementById("contact-form");
		var thanks = document.getElementById("contact-thanks");

		form.style.display = "none";
		thanks.style.display = "block";
	});
}
function ScrollSpy (wrapper, opt) {

  this.doc = document;
  this.wrapper = (typeof wrapper === 'string') ? this.doc.querySelector(wrapper) : wrapper;
  this.nav = this.wrapper.querySelectorAll(opt.nav);

  this.contents = [];
  this.win = window;

  this.winH = this.win.innerHeight;

  this.className = opt.className;

  this.callback = opt.callback;

  this.init();
}

ScrollSpy.prototype.init = function () {
  this.contents = this.getContents();
  this.attachEvent();
};

ScrollSpy.prototype.getContents = function () {
  var targetList = [];

  for (var i = 0, max = this.nav.length; i < max; i++) {
    var href = this.nav[i].href;

    targetList.push(this.doc.getElementById(href.split('#')[1]));
  }

  return targetList;
};

ScrollSpy.prototype.attachEvent = function () {
  this.win.addEventListener('load', (function () {
    this.spy(this.callback);
  }).bind(this));


  var scrollingTimer;

  this.win.addEventListener('scroll', (function () {
    if (scrollingTimer) {
      clearTimeout(scrollingTimer);
    }

    var _this = this;

    scrollingTimer = setTimeout(function () {
      _this.spy(_this.callback);
    }, 10);
  }).bind(this));


  var resizingTimer;

  this.win.addEventListener('resize', (function () {
    if (resizingTimer) {
      clearTimeout(resizingTimer);
    }

    var _this = this;

    resizingTimer = setTimeout(function () {
      _this.spy(_this.callback);
    }, 10);
  }).bind(this));
};

ScrollSpy.prototype.spy = function (cb) {
  var elems = this.getElemsViewState();

  this.markNav(elems);

  if (typeof cb === 'function') {
    cb(elems);
  }
};

ScrollSpy.prototype.getElemsViewState = function () {
  var elemsInView = [],
    elemsOutView = [],
    viewStatusList = [];

  for (var i = 0, max = this.contents.length; i < max; i++) {
    var currentContent = this.contents[i],
      isInView = this.isInView(currentContent);

    if (isInView) {
      elemsInView.push(currentContent);
    } else {
      elemsOutView.push(currentContent);
    }
    viewStatusList.push(isInView);
  }

  return {
    inView: elemsInView,
    outView: elemsOutView,
    viewStatusList: viewStatusList
  };
};

ScrollSpy.prototype.isInView = function (el) {
  var winH = this.winH,
    scrollTop = this.doc.documentElement.scrollTop || this.doc.body.scrollTop,
    scrollBottom = scrollTop + winH,
    elTop = el.offsetTop,
    elBottom = elTop + el.offsetHeight;

  return (elTop < scrollBottom) && (elBottom > scrollTop);
};

ScrollSpy.prototype.markNav = function (elems) {
  var navItems = this.nav,
    isAlreadyMarked = false;

  for (var i = 0, max = navItems.length; i < max; i++) {
    if (elems.viewStatusList[i] && !isAlreadyMarked) {
      isAlreadyMarked = true;
      navItems[i].classList.add(this.className);
    } else {
      navItems[i].classList.remove(this.className);
    }
  }
};


// Set up ScrollSpy
var spy = new ScrollSpy("#header", {
	nav: ".scrollspy-nav > li > a",
	className: "active"
});
'use strict';
// TODO: ES6


// Show / hide menu on scroll
var stickMenu = function stickMenu() {
	var navHeight = document.getElementById("header").clientHeight + 100;
	var header = document.getElementById("header");

	if (window.scrollY > navHeight) {
		header.className = "reveal";
	}
	else {
		header.className = "reveal alt";

	}
};

window.addEventListener("scroll", function(e) {
	stickMenu();
});
function ScrollSpy (wrapper, opt) {

  this.doc = document;
  this.wrapper = (typeof wrapper === 'string') ? this.doc.querySelector(wrapper) : wrapper;
  this.nav = this.wrapper.querySelectorAll(opt.nav);

  this.contents = [];
  this.win = window;

  this.winH = this.win.innerHeight;

  this.className = opt.className;

  this.callback = opt.callback;

  this.init();
}

ScrollSpy.prototype.init = function () {
  this.contents = this.getContents();
  this.attachEvent();
};

ScrollSpy.prototype.getContents = function () {
  var targetList = [];

  for (var i = 0, max = this.nav.length; i < max; i++) {
    var href = this.nav[i].href;

    targetList.push(this.doc.getElementById(href.split('#')[1]));
  }

  return targetList;
};

ScrollSpy.prototype.attachEvent = function () {
  this.win.addEventListener('load', (function () {
    this.spy(this.callback);
  }).bind(this));


  var scrollingTimer;

  this.win.addEventListener('scroll', (function () {
    if (scrollingTimer) {
      clearTimeout(scrollingTimer);
    }

    var _this = this;

    scrollingTimer = setTimeout(function () {
      _this.spy(_this.callback);
    }, 10);
  }).bind(this));


  var resizingTimer;

  this.win.addEventListener('resize', (function () {
    if (resizingTimer) {
      clearTimeout(resizingTimer);
    }

    var _this = this;

    resizingTimer = setTimeout(function () {
      _this.spy(_this.callback);
    }, 10);
  }).bind(this));
};

ScrollSpy.prototype.spy = function (cb) {
  var elems = this.getElemsViewState();

  this.markNav(elems);

  if (typeof cb === 'function') {
    cb(elems);
  }
};

ScrollSpy.prototype.getElemsViewState = function () {
  var elemsInView = [],
    elemsOutView = [],
    viewStatusList = [];

  for (var i = 0, max = this.contents.length; i < max; i++) {
    var currentContent = this.contents[i],
      isInView = this.isInView(currentContent);

    if (isInView) {
      elemsInView.push(currentContent);
    } else {
      elemsOutView.push(currentContent);
    }
    viewStatusList.push(isInView);
  }

  return {
    inView: elemsInView,
    outView: elemsOutView,
    viewStatusList: viewStatusList
  };
};

ScrollSpy.prototype.isInView = function (el) {
  var winH = this.winH,
    scrollTop = this.doc.documentElement.scrollTop || this.doc.body.scrollTop,
    scrollBottom = scrollTop + winH,
    elTop = el.offsetTop,
    elBottom = elTop + el.offsetHeight;

  return (elTop < scrollBottom) && (elBottom > scrollTop);
};

ScrollSpy.prototype.markNav = function (elems) {
  var navItems = this.nav,
    isAlreadyMarked = false;

  for (var i = 0, max = navItems.length; i < max; i++) {
    if (elems.viewStatusList[i] && !isAlreadyMarked) {
      isAlreadyMarked = true;
      navItems[i].classList.add(this.className);
    } else {
      navItems[i].classList.remove(this.className);
    }
  }
};


// Set up ScrollSpy
var spy = new ScrollSpy("#header", {
	nav: ".scrollspy-nav > li > a",
	className: "active"
});
'use strict';
// TODO: ES6


// Show / hide menu on scroll
var stickMenu = function stickMenu() {
	var navHeight = document.getElementById("header").clientHeight + 100;
	var header = document.getElementById("header");

	if (window.scrollY > navHeight) {
		header.className = "reveal";
	}
	else {
		header.className = "reveal alt";

	}
};

window.addEventListener("scroll", function(e) {
	stickMenu();
});
function ScrollSpy (wrapper, opt) {

  this.doc = document;
  this.wrapper = (typeof wrapper === 'string') ? this.doc.querySelector(wrapper) : wrapper;
  this.nav = this.wrapper.querySelectorAll(opt.nav);

  this.contents = [];
  this.win = window;

  this.winH = this.win.innerHeight;

  this.className = opt.className;

  this.callback = opt.callback;

  this.init();
}

ScrollSpy.prototype.init = function () {
  this.contents = this.getContents();
  this.attachEvent();
};

ScrollSpy.prototype.getContents = function () {
  var targetList = [];

  for (var i = 0, max = this.nav.length; i < max; i++) {
    var href = this.nav[i].href;

    targetList.push(this.doc.getElementById(href.split('#')[1]));
  }

  return targetList;
};

ScrollSpy.prototype.attachEvent = function () {
  this.win.addEventListener('load', (function () {
    this.spy(this.callback);
  }).bind(this));


  var scrollingTimer;

  this.win.addEventListener('scroll', (function () {
    if (scrollingTimer) {
      clearTimeout(scrollingTimer);
    }

    var _this = this;

    scrollingTimer = setTimeout(function () {
      _this.spy(_this.callback);
    }, 10);
  }).bind(this));


  var resizingTimer;

  this.win.addEventListener('resize', (function () {
    if (resizingTimer) {
      clearTimeout(resizingTimer);
    }

    var _this = this;

    resizingTimer = setTimeout(function () {
      _this.spy(_this.callback);
    }, 10);
  }).bind(this));
};

ScrollSpy.prototype.spy = function (cb) {
  var elems = this.getElemsViewState();

  this.markNav(elems);

  if (typeof cb === 'function') {
    cb(elems);
  }
};

ScrollSpy.prototype.getElemsViewState = function () {
  var elemsInView = [],
    elemsOutView = [],
    viewStatusList = [];

  for (var i = 0, max = this.contents.length; i < max; i++) {
    var currentContent = this.contents[i],
      isInView = this.isInView(currentContent);

    if (isInView) {
      elemsInView.push(currentContent);
    } else {
      elemsOutView.push(currentContent);
    }
    viewStatusList.push(isInView);
  }

  return {
    inView: elemsInView,
    outView: elemsOutView,
    viewStatusList: viewStatusList
  };
};

ScrollSpy.prototype.isInView = function (el) {
  var winH = this.winH,
    scrollTop = this.doc.documentElement.scrollTop || this.doc.body.scrollTop,
    scrollBottom = scrollTop + winH,
    elTop = el.offsetTop,
    elBottom = elTop + el.offsetHeight;

  return (elTop < scrollBottom) && (elBottom > scrollTop);
};

ScrollSpy.prototype.markNav = function (elems) {
  var navItems = this.nav,
    isAlreadyMarked = false;

  for (var i = 0, max = navItems.length; i < max; i++) {
    if (elems.viewStatusList[i] && !isAlreadyMarked) {
      isAlreadyMarked = true;
      navItems[i].classList.add(this.className);
    } else {
      navItems[i].classList.remove(this.className);
    }
  }
};


// Set up ScrollSpy
var spy = new ScrollSpy("#header", {
	nav: ".scrollspy-nav > li > a",
	className: "active"
});