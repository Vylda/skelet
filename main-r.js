(function () {
'use strict';

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var Roman = function () {
	function Roman() {
		classCallCheck(this, Roman);
	}

	createClass(Roman, [{
		key: "getX",
		value: function getX() {
			return "x je 5";
		}
	}]);
	return Roman;
}();

var Main = function () {
	function Main() {
		classCallCheck(this, Main);

		this._roman = new Roman();
	}

	createClass(Main, [{
		key: "getX",
		value: function getX() {
			return this._roman.getX();
		}
	}, {
		key: "getY",
		value: function getY() {
			return "bla";
		}
	}]);
	return Main;
}();



new Main();

}());
