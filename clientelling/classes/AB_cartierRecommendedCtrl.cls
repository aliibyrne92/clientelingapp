public class AB_cartierRecommendedCtrl {
    
    @AuraEnabled
    public static List<Recommended_Product__c> recommendedList(String clickedContact){
        List<Recommended_Product__c> recProds = [SELECT Contact__c,Id,Image__c,Name,Product__c,Product__r.Name,Product__r.Image__c FROM Recommended_Product__c WHERE Contact__c =:clickedContact];
        
        System.debug('recProds: '+recProds);
        return recProds;
        
    }
    
    
    
}