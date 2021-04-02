/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

define([
    'jquery',
    'jquery/ui'
], function ($) {
    'use strict';

    $.widget('acdc.widgetMy', {

        _create: function () {
            console.log("Hello Widget!!!!!");
            console.log(this.element);
        },


    });

    return $.acdc.widgetMy;
});
