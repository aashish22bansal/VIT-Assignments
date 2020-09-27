<?php
    echo "Hello";
    function send(){
        $name = $_POST['fname'];
        $email = $_POST['email'];
        $phone = $_POST['phone'];
        $website = $_POST['website'];
        $priority = $_POST['priority'];
        $type = $_POST['type'];
        $message = $_POST['subject'];
        $formcontent=" From: $name \n Phone: $phone \n Call Back: $call \n Website: $website \n Priority: $priority \n Type: $type \n Message: $message";
        $recipient = "aashish22bansal@gmail.com";
        $subject = "Contact Form";
        $mailheader = "From: $email \r\n";
        mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
        echo "Thank You!" . " -" . "<a href='index.html' style='text-decoration:none;color:#ff0099;'> Return Home</a>";
    }
    
?>