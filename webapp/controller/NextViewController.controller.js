sap.ui.define([
    "sap/ui/core/mvc/Controller"
],

function (Controller) {
    "use strict";

    return Controller.extend("ui.ListViewProject.listviewproject.controller.NextView", {
        onInit: function () {

        },
        onPressBack: function(){
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("RouteListItemsView");
        }
    });
});
