defineCasper('fs', function(require, exports) {
    exports.pathJoin = function() {
        return Array.prototype.join.apply(arguments);
    };

    exports.isWindows = function() {
        return true;
    };

    exports.absolute = function() {
        return '';
    };

    exports.write = function() {
        return '';
    };

    exports.workingDirectory = '';

});
