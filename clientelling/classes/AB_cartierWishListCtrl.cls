public class AB_cartierWishListCtrl {
@AuraEnabled
public static List<Wish_List__c> wishList(String clickedContact){
System.debug('the Customer is : '+clickedContact);
List<Wish_List__c> wishProds = [SELECT Customer__c,Id,Image__c,Name,Product__c,Product__r.Name,Product__r.Image__c FROM Wish_List__c WHERE Customer__c =:clickedContact];
System.debug('wishProds: '+wishProds);
return wishProds;
}
}