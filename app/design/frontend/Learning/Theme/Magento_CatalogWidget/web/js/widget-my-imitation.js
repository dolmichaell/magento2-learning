/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

define([
    'jquery',
    'jquery/ui'
], function ($) {
    'use strict';

    $.widget('acdc.widgetMyImitation', $.acdc.widgetMy, {

        _create: function () {
            console.log("Hello Widget Imitation!!!!!");
            this._super();
        },


    });

    return $.acdc.widgetMyImitation;
});
