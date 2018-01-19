'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var user = "pencilrocketman";
var endPoint = 'https://shareki.tokyo/';

var onVisited = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(historyItem) {
    var res;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return window.fetch(endPoint, {
              method: 'POST',
              //body: data.map((a) => encodeURIComponent(a[0]) + '=' + encodeURIComponent(a[1])).join('&'),
              body: JSON.stringify({
                name: user,
                title: historyItem.title,
                url: historyItem.url
              }),
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                //'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
              }
            });

          case 2:
            res = _context.sent;

          case 3:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function onVisited(_x) {
    return _ref.apply(this, arguments);
  };
}();

browser.history.onVisited.addListener(onVisited);