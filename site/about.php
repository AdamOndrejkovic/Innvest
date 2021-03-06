<?php

$headerFile = 'header.php';
$footerFile = 'footer.php';

if (file_exists($headerFile))
{
    include $headerFile;
}


echo '
<div class="container">
<div id="aboutContBox">
<h2>About us:</h2>
<p>

Welcome to Innvest Africa , your number one platform for cryptocurrency savings and stock investment in Africa. 
We&apos;re dedicated to providing you the very best of finical services, with an emphasis on savings, loans, investments.
<br>
<br>

Founded in 2021, Innvest Africa intends to provide cryptocurrency savings services to everyone, anywhere in Africa,  beyond Lagos-Nigeria where we first started out.
Our passion for helping africans secure their financial future drove us to start our business and we aim to provide the best financial services on the continent
<br>
<br>

We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don&apos;t hesitate to <a href="contact.php" id="aboutConBtn">contact us</a>.
<br>
<br>

Sincerely,
<br>

Innvest Africa.
</p>



</div>
<div id="startBox">
<h2>Get started with Innvest</h2>
<a href="">Start</a>
</div>
</div>
';



if (file_exists($footerFile))
{
    include $footerFile;
}