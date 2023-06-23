<?php

namespace Drupal\dummy\Controller;

use Drupal\Core\Controller\ControllerBase;

class DummyController extends ControllerBase {

	public function content() {
		$simpleform = \Drupal::formBuilder()->getForm('Drupal\dummy\Form\DummyForm');
		

		return $simpleform;

	}
}
