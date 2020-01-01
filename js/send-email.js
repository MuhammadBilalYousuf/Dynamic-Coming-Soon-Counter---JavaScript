function sendEnquiryform(){
    var name=$('#name').val();
    var email=$('#email').val();
    var phone=$('#phone').val();
    var subject=$('#subject').val();
    var message=$('#message').val();
    $.post("send_form_email.php",'name='+name+'&email='+email+'&phone='+phone+'&subject='+subject+'&message='+message,function(result,status,xhr) {

    })
    alert("Email has been send successfully") ;
}
