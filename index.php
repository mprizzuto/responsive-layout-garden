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

<?php 
require 'functions.php';
$responsiveGardensJSON = file_get_contents('gardens.json');
$responsiveGardensPHP = json_decode($responsiveGardensJSON, true);

loopProjects($responsiveGardensPHP);
?>