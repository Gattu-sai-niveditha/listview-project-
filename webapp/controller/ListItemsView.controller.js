sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/m/MessageToast"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,Filter,FilterOperator,MessageToast) {
        "use strict";

        return Controller.extend("ui.ListViewProject.listviewproject.controller.ListItemsView", {
            onInit: function () {

            },
            onSearch: function(oEvent)
            {
                //Adding filter for search
                var products=[];
                var searchQuery = oEvent.getSource().getValue();
                if(searchQuery && searchQuery.length > 0)
                    {
                        var filter = new Filter("Name",FilterOperator.Contains,searchQuery);
                        products.push(filter);
                    }
                    
                // update List Binding
                var oList = this.byId("list");
                var oBinding = oList.getBinding("items");
                oBinding.filter(products,"Application");    
            },


            onPressNext: function(){
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("RouteNextView");
            },

            
            onPressDate: function(){
                MessageToast.show(moment().format('MMMM Do YYYY, h:mm:ss a'));
            }

        });
    });
