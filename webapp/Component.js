sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel",
	"Walkthrough/controller/HelloDialog"
	// "sap/ui/model/resource/ResourceModel"
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
				// var i18nModel = new ResourceModel({
				// 	bundleName:"Walkthrough.i18n.i18n"
				// });
				// this.setModel(i18nModel, "i18n");
//..........................set Dialog
				this._helloDialog = new HelloDialog(this.getRootControl());
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