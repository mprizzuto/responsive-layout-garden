

<?php include('header.php'); ?>



<section class='welcome'>
	<inner-column>

		<?php include('modules/graphic-diptych.php'); ?>

	</inner-column>
</section>



<section class='get-involved'>
	<inner-column>

		<?php include('modules/call-to-action.php'); ?>

	</inner-column>
</section>

<section class='stuff'>
	<inner-column>
		
		<?php include('modules/articles-intro.php'); ?>

	</inner-column>
</section>


<section class='help-us'>
	<inner-column>

		<?php include('modules/call-to-action.php'); ?>

	</inner-column>
</section>

<!-- 
  -use file put contents to get gardens.json
  
  -decode from JSON to associative array
  
  -pass to loopProjects function
  
-function loopProjects accepts an array. templates out a section and with the name of the garden. and includes the garden within the section
-->