/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

/**
 * @api
 */
define([
    'jquery',
    'slick'
], function ($) {
    return function (config, element) {
        $(element).slick(config);
    };
});
