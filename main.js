'use strict';

module.exports = {
    load () {
        Editor.log('Leon Plugin loaded');        
    },

    messages: {
        'hello' () {
            Editor.log('Leon hello!');
        }
    }
}
