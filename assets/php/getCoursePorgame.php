<?php

    $course = $_POST["course"];
    $gender = $_POST["gender"];

    $name = $_POST["name"];
    $nic = $_POST["nic-number"];
    $date_birth = $_POST["date-birth"];
    $address = $_POST["address"];
    $mobile_num = $_POST["m-number"];
    $email = $_POST["email"];


    $email_from =  'info@yourwebsitename.com';

    $email_subject = "New Course Inquiry";

    $email_body =   "Selected Course: $course \n".
                    "User Name: $name \n". 
                    "User Email: $email \n". 
                    "Address: $address \n".
                    "Mobile Number: $mobile_num \n".
                    "NIC: $nic \n".
                    "Gender: $gender \n";

    $to = 'personalgamiladdress@gmail.com';
    $headers = "From: $email_from \r\n";
                
    $headers .= "Reply-To: $email \r\n";
                
    mail($to, $email_subject, $email_body, $headers);
    header("Location: ./../../register.html");

?>