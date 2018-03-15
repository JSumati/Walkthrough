sap.ui.define([
	"jquery.sap.global",
	"sap/m/MessageBox",
	"sap/m/MessageToast",
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/SimpleType",
	"sap/ui/model/ValidateException",
	"sap/ui/model/json/JSONModel"
	], function(jQuery, MessageBox, MessageToast, Controller, SimpleType, ValidateException, JSONModel){
		"use strict";
		return Controller.extend("Walkthrough.controller.View1", {
			onInit: function() {
				var oMode = new JSONModel();        
				oMode.loadData("model/Info.json");
				
				//For the Content Density
				this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
				
				//Validation of form
				var oView = this.getView();
				oView.setModel(new JSONModel({
					email: "",
					password:""
				}));
			
			},
			
			//For the Header Open Dialog Button
			onOpenDialog : function(){
				this.getOwnerComponent().openHelloDialog();
			},
			
			logOut: function(oEvent){
					var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
					oRouter.navTo("login", null, true); 
				
			},
			
			
			
			
			
			
			
			//For Login Click Button
			onShowHello: function(oEvent){
				//collect input controls
				var oView = this.getView();
				var aInputs = [
					oView.byId("emailInput"),
					oView.byId("passwordInput")
					];
				var bValidationError = false;
				jQuery.each(aInputs, function(i, oInput){
				var oBinding = oInput.getBinding("value");
				try{
					oBinding.getType().validateValue(oInput.getValue());
				} catch(oException){
					oInput.setValueState("Error");
					bValidationError=true;
				}
				});
			
							
					
				
				if(!bValidationError){
					
					// //Route to Overview
					var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
					oRouter.navTo("overview", null, true); 
					
				} else {
					MessageBox.alert("A validation error has occured. Complete your Input First");
				}
			},
			customEmailType: SimpleType.extend("email", {
				formatValue: function(oValue){
					return oValue;
				},
				parseValue: function(oValue){
					return oValue;
				},
				validateValue: function(oValue){
					var rexMail = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
					if(!oValue.match(rexMail)){
						throw new ValidateException("'" + oValue + "' is not a valid email address");
					}
				}
			
			})
					
		});
	});