({
	getTheProducts : function(component, filter1, filter2, filter3, firstSearch) {
        console.log('inside get the products filter');
		
        var action = component.get("c.productWishlist");
        console.log('got method');
        action.setParams({
            filter1 : filter1,
            filter2 : filter2,
            filter3 : filter3,
            firstSearch : firstSearch
        });
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                
                console.log("From server: " + response.getReturnValue());
                component.set('v.products', response.getReturnValue());
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
        
	}
})