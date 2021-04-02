define([
    'jquery',
], function ($){
    $.widget('custom.myAccordion', {
        options: {
            multiple: false
        },
        lastElement: false,
        _create: function () {
            $($($(this.element).children('.section')).children('.section-button')).on("click", function (e) {
                var el = $(e.currentTarget);
                if (!this.options.multiple) {
                    this.hideLastActiveElement(el);
                }
                this.checkCurrentElement(el);
            }.bind(this))
        },
        setHeight: function (el, value) {
            el.parent(".section").children(".section-content").css("height", value);
        },
        open: function (el) {
            var contentHeight = el.parent(".section").find(".p-content").height(),
                intHeight = contentHeight / 60,
                first = 0,
                intervalId = null;

            el.addClass("active");
            intervalId = setInterval(function () {
                if (first < contentHeight) {
                    this.setHeight(el, first + "px");
                    first = first + intHeight;
                } else {
                    this.setHeight(el, "100%");
                    clearInterval(intervalId);
                }
            }.bind(this), 17)
        },
        close: function (el) {
            var contentHeight = el.parent(".section").find(".p-content").height(),
                intHeight = contentHeight / 60,
                intervalId = null;

            el.removeClass("active");
            intervalId = setInterval(function () {
                if (contentHeight > 0) {
                    this.setHeight(el, contentHeight + "px");
                    contentHeight = contentHeight - intHeight;
                } else {
                    this.setHeight(el, "");
                    clearInterval(intervalId);
                }
            }.bind(this), 17)
        },
        hideLastActiveElement: function (el) {

            if (this.lastElement && el[0] !== this.lastElement[0] && this.lastElement.hasClass("active")) {
                this.close(this.lastElement);
            }
        },
        checkCurrentElement: function (el) {
            if (!el.hasClass("active")) {
                this.open(el);
                this.lastElement = el;
            } else {
                this.close(el);
            }
        }
    });

    return $.custom.myAccordion;
});
