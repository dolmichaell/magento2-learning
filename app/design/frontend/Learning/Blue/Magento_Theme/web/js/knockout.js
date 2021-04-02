define([
    'jquery',
    'uiComponent',
    'ko',
], function ($, Component, ko) {
    'use strict';

    return Component.extend({
        initialize: function () {
            this._super();
            this.inputName = ko.observable();
            this.inputLastName = ko.observable();
            this.value = ko.observable();
            this.array = ko.observableArray([
                {
                    name: "Fedia",
                    lastName: "Fedorov",
                    change: ko.observable(false)
                },
                {
                    name: "Petia",
                    lastName: "Petrov",
                    change: ko.observable(false)
                }
            ]);
        },

        add: function (scope, event) {

            var arr = this.array(),
                nameMy = this.inputName(),
                lastNameMy = this.inputLastName();
            console.log(nameMy, lastNameMy);
            console.log(nameMy && lastNameMy);
            if (nameMy && lastNameMy) {
                arr.push({
                    name: nameMy,
                    lastName: lastNameMy,
                    change: ko.observable(false)
                });
                this.array(arr);
                this.inputName("");
                this.inputLastName("");
            }
        },

        edit: function (index, scope, event) {
            scope.change(true);
        },

        ok: function (index, scope, event) {
            if (scope.name && scope.lastName) {
                scope.change(false);
            }
        },

        delete: function (index, scope, event) {
            this.array.remove(scope);
        }
    });
});