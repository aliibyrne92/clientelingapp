({
    doInitProd : function(component, event, helper) {
        console.log('doinit loaded');
        helper.getTheProducts(component, '','','', true);
    },
    
    filterChange : function(component, event, helper) {
        console.log('selected filter change');
        
        var collectionFilter = component.find('filterCollection').get('v.value');
        console.log(collectionFilter);
        
        
        var typeFilter = component.find('filterType').get('v.value');
        console.log(typeFilter);
        
        var genderFilter = component.find('filterGender').get('v.value');
        console.log(genderFilter);
        
        
        helper.getTheProducts(component, collectionFilter, typeFilter, genderFilter, false);
    },
    
    openFilters  : function(component, event, helper) {
        console.log('toggle div');
        $(".filterOpen").toggle();
        
    }
})