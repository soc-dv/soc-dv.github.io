<?php
  // Path to the visitor count file
  $file = "C:\Users\PMLS\Desktop\SoC-DV\soc-dv.github.io\visitor_count.txt";

  // Read the current count from the file (if the file exists)
  $visitor_count = (int)file_get_contents($file);

  // Increment the visitor count
  $visitor_count++;

  // Write the new count back to the file
  file_put_contents($file, $visitor_count);

  // Display the visitor count
  echo $visitor_count;
?>

