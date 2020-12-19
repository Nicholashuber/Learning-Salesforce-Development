({
    doInit : function(component, event, helper) {
        var recID = component.get("v.recordId");
        console.log("recordID "+recID);
        var action = component.get("c.makeCallout");
        action.setParams({
            "recID":recID
        })
        action.setCallback(this, function(response) {
            var state = response.getState();
            if(state === "SUCCESS"){
                var res = response.getReturnValue();
                console.log("successfully callout "+res);
                window.open("https://www.salesforce.com", '_blank');
                if(res === 'OK'){
                    $A.get("e.force:closeQuickAction").fire();
                }
                else{
                    console.log("failed callout");
                    //throw new Error("Error in Callout.Please Try again Letter"+res);
                    var resultsToast = $A.get("e.force:showToast");
                    resultsToast.setParams({
                        mode:'dismissible',
                        message: "Error in Callout.Please Try again Letter",
                        type :'Warning',
                        duration:'250'
                    });
                    $A.get("e.force:closeQuickAction").fire();
                    resultsToast.fire();
                }
            }
        });
        $A.enqueueAction(action);
    },
})
