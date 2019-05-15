public class AB_cartierEmailCtrl {
    
   @auraEnabled
    public static void sendEmailMethod(String emailSubject, String emailBody){
        
        User cUser = [SELECT AccountId,FirstName,Id,Email,Title,LastName,MobilePhone,Name,Phone FROM User WHERE id=:UserInfo.getUserId()];
        
        Messaging.SingleEmailMessage email = new Messaging.SingleEmailMessage();
            
        email.setSubject(emailSubject);
        email.setPlainTextBody(emailBody);
        
        String addresse = cUser.email;
        System.debug('User address is ' + addresse);
        
        email.setToAddresses(new String[] { ''+addresse});
        List<Messaging.SendEmailResult> results = Messaging.sendEmail(new Messaging.Email[] { email });
    }
    
    
}