sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel",
	"Walkthrough/controller/HelloDialog",
	"sap/ui/Device"
	], function(UIComponent, JSONModel, HelloDialog, Device){
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
				
				//disable batch grouping for V2 API of the northwind service
				//this.getModel("invoice").setUseBatch(false);
				
				//set device model
				var oDeviceModel = new JSONModel(Device);
				oDeviceModel.setDefaultBindingMode("OneWay");
				this.setModel(oDeviceModel, "device");
				
				//set Dialog
				this._helloDialog = new HelloDialog(this.getRootControl());
				
				//create the views based on the url/hash
				this.getRouter().initialize();
			},
			getContentDensityClass : function() {
			if (!this._sContentDensityClass) {
				if (!sap.ui.Device.support.touch) {
					this._sContentDensityClass = "sapUiSizeCompact";
				} else {
					this._sContentDensityClass = "sapUiSizeCozy";
				}
			}
			return this._sContentDensityClass;
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