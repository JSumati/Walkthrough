sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"Walkthrough/model/formatter",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], function (Controller, JSONModel, formatter, Filter, FilterOperator) {
	"use strict";

	return Controller.extend("Walkthrough.controller.InvoiceList", {
		formatter : formatter,
		onInit : function () {
			var oViewModel = new JSONModel({
				currency: "EUR"
			});
			this.getView().setModel(oViewModel, "view");
		},
		
		
		//to count the number of products/rows
		onUpdateFinished: function(oEvent){
			var sTitle = "Products",
				oTable = this.getView().byId("invoiceList");
				if(oTable.getBinding("items").isLengthFinal()) {
					var iCount = oEvent.getParameter("total"),
						iItems = oTable.getItems().length;
						sTitle += "(" + iItems + "/" + iCount + ")";
				}
			this.getView().byId("title").setText(sTitle);
			
		},
		
		onFilterInvoices : function (oEvent) {
			var aFilter = [];
			var sQuery = oEvent.getParameter("query");
			if (sQuery) {
				aFilter.push(new Filter("ProductName", FilterOperator.Contains, sQuery));
			}
			//filter binding
			var oList = this.byId("invoiceList");
			var oBinding = oList.getBinding("items");
			oBinding.filter(aFilter);
		},
		onPress: function(oEvent) {
			var oItem = oEvent.getSource();
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("detail", {
				invoicePath: encodeURIComponent(oItem.getBindingContext("invoice").getPath().substr(1))
			});
		}
	});
});