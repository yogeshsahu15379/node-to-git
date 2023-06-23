<?php

namespace Drupal\ourServices\Form;

use Drupal\Core\Form\FormBase;
use Drupal\Core\Form\FormStateInterface;

/**
 * This example demonstrates a simple form with a singe text input element. We
 * extend FormBase which is the simplest form base class used in Drupal.
 */

class OurServicesForm extends FormBase
{
    /**
     * Getter method for Form ID.
     * @return string
     * The unique ID of the form defined by this class.
     */
    public function getFormId()
    {
        return 'our_Services_form';
    }

    /**
     * Build the services form.
     *
     * @param array $form
     *   Default form array structure.
     * @param \Drupal\Core\Form\FormStateInterface $form_state
     *   Object containing current form state.
     * @return array
     *   The render array defining the elements of the form.
     */
    public function buildForm(array $form, FormStateInterface $form_state)
    {
    

        $form['title']= [
        '#type'=> 'textfield',
        '#title' => t('Title'),
        '#size' => 180,
        '#required' => true
        ];
        $form['body']= [
        '#type' => 'text_format',
        '#title' => t('Body'),
        '#format'=> 'full_html',
        '#required' => true
        ];
        
        $form['card']= array(
            '#type' => 'fieldset',
            '#title' => t('Card'),
            '#collapsible' => TRUE, // Added
            '#collapsed' => FALSE,  // Added
          );
          $form['card']['name'] = array(
            '#type' => 'textfield',
            '#title' => t('Name'),
            '#required' => TRUE, // Added
          );
          $form['card']['role'] = array(
            '#type' => 'textfield',
            '#title' => t('Role'),
            '#required' => TRUE, // Added
          );
          $form['card']['image'] = array(
            '#type' => 'managed_file',
            '#title' => 'image',
            '#upload_location' => 'public://'
          );

        $form['card']['social']= array(
          '#type' => 'textfield',
          '#title' => $this->t('Social'),
          '#size' => 30,
        );
         
 
        $form['submit'] = [
        '#type' => 'submit',
        '#value' => t('Submit')
        ];     

        $form['nid'] = [
        '#type' => 'hidden',
        '#value' => $nid,
        ];
        // kint($form);
        return $form;
    }
    // public function validateForm($form, $form_state){
    //   // /Drupal($form);
    // }
    // public function submitForm(array &$form, FormStateInterface $form_state)
    // {
    //   $title = $form['title'];
    //   $body= $form_state->getValue('body');
    //   $card=$form_state->getValue('card');
    //   // var_dump($body);
    //   $this->messenger()->addStatus($this->t('You specified a title of %body.', ['%body' => $title]));
    //   // drupal_set_massage();
    // }
    public function submitForm(array &$form, FormStateInterface $form_state) {
      // drupal_set_message($this->t('@can_name ,Your application is being submitted!', array('@can_name' => $form_state->getValue('candidate_name'))));
       foreach ($form_state->getValues() as $key => $value) {
        \Drupal::messenger()->addMessage($key . ': ' . $value);
       }
      }
}




// /**
//  * @file
//  * Contains \Drupal\resume\Form\ResumeForm.
//  */
// namespace Drupal\ourServices\Form;
// use Drupal\Core\Form\FormBase;
// use Drupal\Core\Form\FormStateInterface;
// class OurServicesForm extends FormBase {
//   /**
//    * {@inheritdoc}
//    */
//   public function getFormId() {
//     return 'our_services_form';
//   }

//    /**
//    * {@inheritdoc}
//    */
//   public function buildForm(array $form, FormStateInterface $form_state) {
//     $form['candidate_name'] = array(
//       '#type' => 'textfield',
//       '#title' => t('Candidate Name:'),
//       '#required' => TRUE,
//     );
//     $form['candidate_mail'] = array(
//       '#type' => 'email',
//       '#title' => t('Email ID:'),
//       '#required' => TRUE,
//     );
//     $form['candidate_number'] = array (
//       '#type' => 'tel',
//       '#title' => t('Mobile no'),
//     );
//     $form['candidate_dob'] = array (
//       '#type' => 'date',
//       '#title' => t('DOB'),
//       '#required' => TRUE,
//     );
//     $form['candidate_gender'] = array (
//       '#type' => 'select',
//       '#title' => ('Gender'),
//       '#options' => array(
//         'Female' => t('Female'),
//         'male' => t('Male'),
//       ),
//     );
//     $form['candidate_confirmation'] = array (
//       '#type' => 'radios',
//       '#title' => ('Are you above 18 years old?'),
//       '#options' => array(
//         'Yes' =>t('Yes'),
//         'No' =>t('No')
//       ),
//     );
//     $form['candidate_copy'] = array(
//       '#type' => 'checkbox',
//       '#title' => t('Send me a copy of the application.'),
//     );
//     $form['actions']['#type'] = 'actions';
//     $form['actions']['submit'] = array(
//       '#type' => 'submit',
//       '#value' => $this->t('Save'),
//       '#button_type' => 'primary',
//     );
//     return $form;
//   }


//    /**
//    * {@inheritdoc}
//    */
//   public function submitForm(array &$form, FormStateInterface $form_state) {
//     // drupal_set_message($this->t('@can_name ,Your application is being submitted!', array('@can_name' => $form_state->getValue('candidate_name'))));
//      foreach ($form_state->getValues() as $key => $value) {
//       \Drupal::messenger()->addMessage($key . ': ' . $value);
//      }
//     }


// }