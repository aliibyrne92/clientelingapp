public class AB_cartierWishListCtrl {
    @auraEnabled
    public static List<Product2> productWishlist(){
        
        List<Product2> myProds = [SELECT Description,Family,Id,Image__c,Image_URL__c,Name,Product_Image__c FROM Product2 LIMIT 5];
        
      
        return myProds;

    }
    
}