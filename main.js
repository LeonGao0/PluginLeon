'use strict';

module.exports = {
    load () {
        Editor.log('loaded Leon');        
    },

    unload() {
        Editor.log('unloaded Leon');
    },

    messages: {
        'hello' () {
            Editor.log('Leon hello!');
        }
    },
};
