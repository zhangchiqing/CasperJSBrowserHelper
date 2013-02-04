function CasperError(msg) {
    console.log(msg);
}

CasperError.prototype = new Error();

phantom = {
    defaultPageSettings: {
        userAgent: ''
    },

    casperScript: '',

    casperPath: '',

    casperVersion: '',

    casperArgs: '',

    exit: function() {
        console.log('Exit');
    }
};

