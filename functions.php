<?php function loopProjects(array $projects) { ?>
	<?php foreach($projects as $project): ?>
	<section class=<?=$project['name']?>>
		<inner-column>
			<?php include $project['location']?>
		</inner-column>
	</section>
	<?php endforeach; ?>
<?php } ?>