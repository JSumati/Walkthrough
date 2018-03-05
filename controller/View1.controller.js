sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
	// "sap/ui/model/json/JSONModel",
	// "sap/ui/model/resource/ResourceModel"
	], function(Controller, MessageToast){
		"use strict";
		return Controller.extend("Walkthrough.controller.View1", {
			onShowHello: function(){
				var oBundle = this.getView().getModel("i18n").getResourceBundle();
				var sRecipient = this.getView().getModel().getProperty("/recipient/name");
				var sMsg = oBundle.getText("helloMsg", [sRecipient]);
				MessageToast.show(sMsg);
			}
		});
	});