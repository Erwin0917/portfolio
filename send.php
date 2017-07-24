<?php
//if "email" variable is filled out, send email
  if (isset($_REQUEST['email']))  {
  
  //Email information
  $admin_email = "erwinfrontdev@gmail.com";
  $email = $_REQUEST['e-mail'];
  $subject = $_REQUEST['name'];
  $comment = $_REQUEST['msg'];
  
  //send email
  mail($admin_email, "$subject", $comment, "From:" . $email);
  
  //Email response
  echo "Wiadomość została wysłana";
  }
  
  
?>