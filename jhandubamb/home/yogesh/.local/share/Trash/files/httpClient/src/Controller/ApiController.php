<?php

namespace Drupal\httpClient\Controller;

use Drupal\Core\Controller\ControllerBase;

class ApiController extends ControllerBase{

    public function content(){
        $client = \Drupal::httpClient();

        $request=$client->request('GET', 'https://newsapi.org/v2/everything?q=tesla&from=2022-09-28&sortBy=publishedAt&apiKey=8cd8fd3702cb4bbbb790f226130b4fc5');
        $response = json_decode($request->getBody());
        $news_result= $response->articles;

        $result=[
            '#theme'=> 'httpClient_theme_hook',
            '#data' => $news_result,
        ];
        // dd($result);
        return $result;
    }

}