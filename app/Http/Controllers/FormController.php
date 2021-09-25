<?php

namespace App\Http\Controllers;

use Square\SquareClient;

class FormController extends Controller
{
    public function store()
    {
        // $haha = new ZohoController();


        // Use the environment and the key name to get the appropriate values from the .env file.
        $access_token = getenv('SQUARE_ACCESS_TOKEN');
        $location_id =  getenv('SQUARE_LOCATION_ID');

        // Initialize the authorization for Square
        $client = new SquareClient([
            'accessToken' => $access_token,
            'environment' => getenv('ENVIRONMENT')
        ]);


        $body = new \Square\Models\CreateCustomerRequest();
        $body->setGivenName(request('name'));
        $body->setFamilyName('Earhart');
        $body->setEmailAddress(request('email'));
        $body->setPhoneNumber('1-212-555-4240');
        $body->setReferenceId('YOUR_REFERENCE_ID');
        $body->setNote('a customer');

        $api_response = $client->getCustomersApi()->createCustomer($body);

        if ($api_response->isSuccess()) {
            $result = $api_response->getResult();
        } else {
            $errors = $api_response->getErrors();
        }
    }
}
