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
        $(element).slick({
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 4,
            responsive: [
                {
                    breakpoint: 1280,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    };
});
