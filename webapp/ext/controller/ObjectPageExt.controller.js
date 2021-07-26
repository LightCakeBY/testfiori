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

    toActiveStatus: function(oEvent){
        
            this.getOwnerComponent().getModel().setProperty("/Categories(" + categoryID + ")/StatusID", 2);
            this.getOwnerComponent().getModel().submitChanges();
            this.getOwnerComponent().getModel().refresh();
	
        sap.m.MessageToast.show("Category was activated!")
    }
});
