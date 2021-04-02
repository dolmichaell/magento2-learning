/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            'gridSlick': 'Magento_CatalogWidget/js/grid-slick',
            'slick': 'Magento_CatalogWidget/js/slick.min',
            'widgetMy': 'Magento_CatalogWidget/js/widget-my',
            'widgetMyImitation': 'Magento_CatalogWidget/js/widget-my-imitation',
        }
    },
    shim: {
        slick: {
            deps: ['jquery']
        }
    }
};
