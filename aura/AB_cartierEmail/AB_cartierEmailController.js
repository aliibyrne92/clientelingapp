({
    sendEmail : function(component, event, helper) {
        console.log('clicked select email');
        
        var emailSubject = component.find("emailSubject").get("v.value"); 
        console.log(emailSubject);
        
        var emailBody = component.find("emailBody").get("v.value"); 
        console.log(emailBody);
        
        
        var action = component.get("c.sendEmailMethod");
        console.log('got method');
        action.setParams({ emailSubject : emailSubject,
                          emailBody : emailBody
                          
                         });
        
        
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                
                console.log('email sent');
                $(".successPopFour").toggle();
                
                window.setTimeout(
                    $A.getCallback(function() {
                        window.location.reload();
                    }), 2000
                );
                
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
        
    },
        
    
    cancelEdit : function(component, event, helper) {
        console.log('clicked cancel email');
        window.location.reload();
        
    },
    
})