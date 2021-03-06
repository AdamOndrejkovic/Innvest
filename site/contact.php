<?php


$headerFile = 'header.php';
$footerFile = 'footer.php';

if (file_exists($headerFile)) {
    include $headerFile;
}


echo '
<div class="row" id="contactBox">
  <div class="col-xs-8 col-lg-4 col-md-6 text-center"><form action="" method="post" id="contactForm">
  <h2>Get in touch with us!</h2>
  <div class="form-group">
    <input type="text" class="form-control" id="name" aria-describedby="name" placeholder="Enter your name">
  </div>
  
  <div class="form-group">
    <input type="email" class="form-control" id="email" placeholder="Enter your email">
  </div>
  
  <div class="form-group">
    <input type="text" class="form-control" id="topic" placeholder="Enter the problem">
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
</form></div>
  <div class="col-xs-8 col-lg-4 overflow-hidden col-md-6 text-center">  <div id="mapBox">
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.587922547179!2d3.3308110145900107!3d6.446919495335855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b897c7ebce6c1%3A0xa7c626be03d895d5!2sIdewu%20St%2C%20Apapa%2C%20Lagos%2C%20Nigeria!5e0!3m2!1sen!2sdk!4v1614262675607!5m2!1sen!2sdk" allowfullscreen="" loading="lazy"></iframe>
</div></div>
  <div class="col-xs-8 col-lg-4 overflow-hidden col-md-6 text-center contactInfo">      
  <h2>Contact :</h2>
  
  <h3>Address : </h3>
  <p>1, hamzat idewu street , salvation estate Owode-langbasa Ajah, Lagos Nigeria.  </p>
    <h3>Email : </h3>
    <p>info@innvestAfrica.com </p>  
        <h3>Phone : </h3>
        <p>+2348154079553</p>
            
         </div>
</div>
';


if (file_exists($footerFile)) {
    include $footerFile;
}