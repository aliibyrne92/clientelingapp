public class AB_cartierUserController {
    @auraEnabled
    public static User getUserinfo(){
        User cUser = [SELECT AccountId,FirstName,Id,Email,City,Country,Title,LastName,SmallPhotoUrl,MediumPhotoUrl,MobilePhone,Name,Phone FROM User WHERE id=:UserInfo.getUserId()];
        System.debug('cUser: ' + cUser);
        return cUser;
    }  
}