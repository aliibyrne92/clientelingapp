({
    doInitProdTwo : function(component, event, helper) {
        console.log('jquery loaded');
        helper.getTheProductsTwo(component, '','','', true);
    },
    
    filterChangeTwo : function(component, event, helper) {
        console.log('selected filter change');
        
        var collectionFilter = component.find('filterCollection').get('v.value');
        console.log(collectionFilter);
        
        
        var typeFilter = component.find('filterType').get('v.value');
        console.log(typeFilter);
        
        var genderFilter = component.find('filterGender').get('v.value');
        console.log(genderFilter);
        
        
        helper.getTheProductsTwo(component, collectionFilter, typeFilter, genderFilter, false);
    },
    
    openFilters  : function(component, event, helper) {
        console.log('toggle div');
        $(".filterOpen").toggle();
        
    },
    
    openList : function(component, event, helper) {
        console.log('open boutique lists');
        
        $A.util.removeClass(component.find('boutiqueLists'), 'slds-hide');
        
    },
    
    closeList : function(component, event, helper) {
        console.log('open boutique lists');
        
        $A.util.addClass(component.find('boutiqueLists'), 'slds-hide');
        
    },
})