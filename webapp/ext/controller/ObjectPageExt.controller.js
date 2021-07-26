var categoryID;
sap.ui.controller("testfiori.ext.controller.ObjectPageExt", {
    
    onDeleteAction : function(oEvent) { 
        sap.m.MessageToast.show("Hello world!")
    },

    onInit: function (){
        this.extensionAPI.attachPageDataLoaded(function(oEvent){
			sap.m.MessageToast.show("Current Category ID is " + oEvent.context.getProperty("CategoryID") + ": " +oEvent.context.getProperty("CategoryName"));
            categoryID = oEvent.context.getProperty("CategoryID");
        });
    },

    toActiveStatus: function(){
        
            this.getOwnerComponent().getModel().setProperty("/Categories(" + categoryID + ")/StatusID", 2);
            this.getOwnerComponent().getModel().submitChanges();
            this.getOwnerComponent().getModel().refresh();
	
        sap.m.MessageToast.show("Category was activated!")
    },

    onRandom: function(){
        
        this.getOwnerComponent().getModel().callFunction('/onRandom',{
			method: "GET",
			success: function() {
				var iPreviousStatus = this.getOwnerComponent().getModel().getProperty("/Categories(" + categoryID + ")/StatusID");

				if(iPreviousStatus==2){
					sap.m.MessageToast.show("Category is already active");	
				}else {
					this.getOwnerComponent().getModel().setProperty("/Categories(" + categoryID + ")/StatusID", 2);
					this.getOwnerComponent().getModel().submitChanges();
					this.getOwnerComponent().getModel().refresh();
				}
			}.bind(this),
			error: function() {
				sap.m.MessageToast.show("Error status!!!");
			}
		});     
}
});
//<FunctionImport Name="toActiveStatus" EntitySet="Categories" m:HttpMethod="GET"></FunctionImport>