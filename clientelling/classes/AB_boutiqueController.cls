public class AB_boutiqueController {
   
    @auraEnabled
    public static List<Product2> productBoutiqueTwo(){
        
        List<Product2> myProds = [SELECT Description,Family,Id,Image__c,Image_URL__c,Name,Product_Image__c FROM Product2 LIMIT 20];
        
      
        return myProds;

    }
}