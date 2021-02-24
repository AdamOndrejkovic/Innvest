<?php

$headerFile = 'site/header.php';
$footerFile = 'site/footer.php';

if (file_exists($headerFile))
{
    include $headerFile;
}


echo '

';



if (file_exists($footerFile))
{
    include $footerFile;
}