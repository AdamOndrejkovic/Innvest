<?php

$headerFile = 'header.php';
$footerFile = 'footer.php';

if (file_exists($headerFile)) {
    include $headerFile;
}


echo '
<div class="container">
<div class="m-auto btn-info">
 <form action="" method="post" id="contactForm">
  <div class="form-group">
    <label for="name">Full Name</label>
    <input type="text" class="form-control" id="name" aria-describedby="name" placeholder="Enter your name">
  </div>
  
  <div class="form-group">
    <label for="email">Email</label>
    <input type="email" class="form-control" id="email" placeholder="Enter your email">
  </div>
  
  <div class="form-group">
    <label for="phone">Phone number</label>
    <input type="number" class="form-control" id="phone" placeholder="Enter your phone number">
  </div>
  
  <div class="form-group">
    <label for="topic">Topic</label>
    <input type="password" class="form-control" id="topic" placeholder="Enter the problem">
  </div>
  
  <div class="form-group">
    <label for="message">Message</label>
    <textarea name="message" id="message" cols="30" rows="5" class="form-control" ></textarea>
  </div>
  
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Do you agree with us storing the data</label>
  </div>
  
  <button type="submit" class="btn btn-primary float-right">Submit</button>
</form>
</div>
</div>
';


if (file_exists($footerFile)) {
    include $footerFile;
}