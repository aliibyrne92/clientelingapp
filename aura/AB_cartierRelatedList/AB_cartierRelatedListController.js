({
    goToRec : function(component, event, helper) {
        console.log('clicked go to RECOMMENDED');
        
        $A.util.addClass(component.find('relatedInnerId'), 'slds-hide');
        $A.util.removeClass(component.find('relatedBodyId'), 'slds-hide');
        
    },
    
    goToWish : function(component, event, helper) {
        console.log('clicked go to wishlist');
        
        $A.util.addClass(component.find('relatedInnerId'), 'slds-hide');
        $A.util.removeClass(component.find('wishListBody'), 'slds-hide');
        
    },
    
     goToActivity : function(component, event, helper) {
        console.log('clicked go to activity');
        
        $A.util.addClass(component.find('relatedInnerId'), 'slds-hide');
        $A.util.removeClass(component.find('activityBody'), 'slds-hide');
        
    },
    
    goToVisualStudio : function(component, event, helper) {
        console.log('clicked go to visual studio');
        
        $A.util.addClass(component.find('relatedInnerId'), 'slds-hide');
        $A.util.removeClass(component.find('visualStudioBody'), 'slds-hide');
        
    }, 
    
    ChatterFeed : function(component, event, helper) {
        console.log('clicked go to chatter feed');
        
        $A.util.addClass(component.find('relatedInnerId'), 'slds-hide');
        $A.util.removeClass(component.find('chatterFeedBody'), 'slds-hide');
        
    }, 
})