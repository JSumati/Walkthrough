sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel",
	"Walkthrough/controller/HelloDialog"
	], function(UIComponent, JSONModel, HelloDialog){
		"use strict";
		return UIComponent.extend("Walkthrough.Component",{
			metadata:{
				manifest:"json"
			},
			init:function(){
				UIComponent.prototype.init.apply(this, arguments);
				var oData={
					recipient:{
						name:"World",
						personality:"Good"
					}
				};
				var oModel = new JSONModel(oData);
				this.setModel(oModel);
				
				//set Dialog
				this._helloDialog = new HelloDialog(this.getRootControl());
				
				//create the views based on the url/hash
				this.getRouter().initialize();
			},
			
			exit : function(){
				this._helloDialog.destroy();
				delete this._helloDialog;
			},
			
			openHelloDialog : function(){
				this._helloDialog.open();
			}

		});
	});