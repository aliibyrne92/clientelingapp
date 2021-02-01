public class AB_cartierHistoryListCtrl {
   
    @AuraEnabled
    public static List<Purchase__c> purchaseList(String clickedContact){
        List<Purchase__c> purchList = [SELECT Account__c,Id,Image__c,Name,Product__c,Product__r.Name,Product__r.Image__c FROM Purchase__c WHERE Customer__c =:clickedContact];
        
        System.debug('Purchases: '+purchList);
        System.debug('Clicked Contact: '+clickedContact);
        
        return purchList;
        
        
    }
}