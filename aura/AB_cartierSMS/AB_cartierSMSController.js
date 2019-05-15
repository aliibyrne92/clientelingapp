({
    sendSMS : function(component, event, helper) {
        console.log('clicked send SMS');
        
        var action = component.get("c.sendOutboundSMS");
        console.log('got method');
        
        
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                
                console.log('woo you win');
                
            }
            else if (state === "INCOMPLETE") {
                // do something
            }
                else if (state === "ERROR") {
                    var errors = response.getError();
                    if (errors) {
                        if (errors[0] && errors[0].message) {
                            console.log("Error message: " + 
                                        errors[0].message);
                        }
                    } else {
                        console.log("Unknown error");
                    }
                }
        });
        $A.enqueueAction(action);
        
        $(".successPopSMS").toggle();
        
        window.setTimeout(
            $A.getCallback(function() {
                window.location.reload();
            }), 2000
            
        );
        
    },
})