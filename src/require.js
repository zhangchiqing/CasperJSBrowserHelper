(function(win) {
    var module_map = { };
    var require = function(module_name) {
        var mod = module_map[module_name];
        if (mod) { return mod; }

        throw new Error('module cant be found' + module_name);
    };

    var defineCasper = function(module_name, fn) {
        var exports = {};
        fn(require, exports);
        module_map[module_name] = exports;
    };

    win.defineCasper = defineCasper;
    win.require = require;
})(window);

