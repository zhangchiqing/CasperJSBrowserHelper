defineCasper('webpage', function(require, exports) {
exports.create = function() {
    var page = {
        settings: {},
        customHeaders: {},
        evaluate: function(fn) {
            try {
                if (Object.prototype.toString.call(fn) === '[object String]') {
                    return eval('(' + fn + ')');
                } else {
                    return fn.apply(this, [].slice.call(arguments, 1));
                }
            } catch (e) {
            }
        },
        injectJs: function() {
            return true;
        },
        
        openUrl: function() {
            
        },

        render: function() {
            return true;
        }
    };
    return page;
};
});
