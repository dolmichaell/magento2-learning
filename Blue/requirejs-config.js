/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            'mySlick': 'js/my-slick',
            'slick': 'js/slick.min',

        }
    },
    shim: {
        slick: {
            deps: ['jquery']
        }
    }
};
