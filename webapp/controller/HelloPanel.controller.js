sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
	], function(Controller, MessageToast){
		"use strict";
		return Controller.extend("Walkthrough.controller.HelloPanel", {
			onShowHello: function(){
				var oBundle = this.getView().getModel("i18n").getResourceBundle();
				var sRecipient = this.getView().getModel().getProperty("/recipient/name");
				var sMsg = oBundle.getText("helloMsg", [sRecipient]);
				MessageToast.show(sMsg);
			},
			onOpenDialog: function(){
				var oView = this.getView();
				var oDialog = oView.byId("helloDialog");
				if(!oDialog){
					oDialog = sap.ui.xmlfragment(oView.getId(), "Walkthrough.view.HelloDialog", this);
					oView.addDependent(oDialog);
				}
				oDialog.open();
			},
			onCloseDialog : function(){
				this.byId("helloDialog").close();
			}
			
		});
	});