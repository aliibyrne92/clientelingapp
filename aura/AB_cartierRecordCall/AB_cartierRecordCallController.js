({
    doInit : function(component, event, helper) {
        var today = new Date();
        component.set('v.today', today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate());
    },
    
    newCall :  function(component, event, helper) {
        console.log('clicked new store visit');
        /*
        var descriptionBox = $('#descriptionBox').val();
        console.log(descriptionBox);
        
        var startDate = component.find("startDate").get("v.value");
        console.log(startDate);
        
        var endDate = component.find("endDate").get("v.value");
        console.log(endDate);
        
        var reasonSelect = $('#reasonSelect option:selected').text();
        console.log(reasonSelect);
        
        
        var action = component.get("c.createVisit");
        console.log('got method');
        action.setParams({ descriptionBox : descriptionBox,
                          startDate : startDate,
                          reasonSelect : reasonSelect,
                          endDate : endDate
                          
                         });
        
        
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {*/
                
                console.log('woo you win');
                $(".successPopCall").toggle();
                
                window.setTimeout(
                    $A.getCallback(function() {
                        window.location.reload();
                    }), 1500
                );
               /* 
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
        $A.enqueueAction(action);*/
        
    }, 
    
    cancelVisit :  function(component, event, helper) {
        console.log('reload store visit');
        
        window.location.reload();
        
    },
    
    
    
})