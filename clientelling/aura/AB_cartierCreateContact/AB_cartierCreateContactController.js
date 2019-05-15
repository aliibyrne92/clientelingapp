({
    createContact : function(component, event, helper) {
        console.log('clicked create action');
        
        var fNameC = $('#fNameC').val();
        console.log(fNameC);
        var lNameC = $('#lNameC').val();
        console.log(lNameC);
        var selectGender = $('#selectGender option:selected').text();
        console.log(selectGender);
        var collections = $('#collections').val();
        console.log(collections);
        var selectMarital = $('#selectMarital option:selected').text();
        console.log(selectMarital);
        var email = $('#email').val();
        console.log(email);
        var mobilePhone = $('#mobilePhone').val();
        console.log(mobilePhone);
        var birthDate = component.find("birthDate").get("v.value");
        console.log(birthDate);
        
        
        var action = component.get("c.createCon");
        console.log('got method');
        action.setParams({ fNameC : fNameC,
                          lNameC : lNameC,
                          selectGender : selectGender,
                          collections : collections,
                          selectMarital : selectMarital,
                          email : email,
                          mobilePhone : mobilePhone,
                          birthDate : birthDate
                          
                         });
        
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                
                console.log('woo you win');
                $(".successPopThree").toggle();
                
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
        console.log('clicked cancel action');
        
        window.location.reload();
    },
})