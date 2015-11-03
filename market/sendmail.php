<?php
    $to      = 'santiago.kea@gmail.com';
    $subject = 'IMPORTANT MESSAGE';
    $message = 'Hello Santiago, Danske Spil gonna send you 1.000.000.000 Kr next monday';
    $headers = 'From: info@danskespil.dk' . "\r\n" .
        'Reply-To: hello@masht.dk' . "\r\n" .
        'X-Mailer: PHP/' . phpversion();
    $function = $_GET['function'];

    if ($function == 'mail'){
        if(mail($to, $subject, $message, $headers) == true){
            echo "Email Sent";
        }else{
            echo "ERROR";
        } 
    }


    ///////////////////////////////////////////////////

    if(mail("d_kristian_s@hotmail.com", "test", "airlines test") == true){
        echo "Sent";
    }
    else {
        echo "Error!";
    }
?>