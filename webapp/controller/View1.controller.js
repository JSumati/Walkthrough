sap.ui.define([
	"sap/ui/core/mvc/Controller"
	], function(Controller){
		"use strict";
		return Controller.extend("Walkthrough.controller.View1", {
			onInit: function() {
				this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
				
			},
			onOpenDialog : function(){
				this.getOwnerComponent().openHelloDialog();
			},
			onShowHello: function(oEvent){
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("overview");
			}
		});
	});