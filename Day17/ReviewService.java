
package com.example.plantpro.Service;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.example.plantpro.Model.Review;

import java.util.Collections;
import java.util.List;

@Service
public class ReviewService {

    private final RestTemplate restTemplate;

    public ReviewService() {
        this.restTemplate = new RestTemplate();
    }

    public List<Review> getAllFeedback() {
        ResponseEntity<List<Review>> response = restTemplate.exchange(
                "http://localhost:8181/api/feedback",
                HttpMethod.GET,
                null,
                new ParameterizedTypeReference<List<Review>>() {}
        );

        if (response.getStatusCode() == HttpStatus.OK) {
            return response.getBody();
        } else {
            // Handle error or return an empty list
            return Collections.emptyList();
        }
    }

    public Review addFeedback(Review review) {
        ResponseEntity<Review> response = restTemplate.exchange(
                "http://localhost:8181/api/feedback",
                HttpMethod.POST,
                new HttpEntity<>(review),
                Review.class
        );

        if (response.getStatusCode() == HttpStatus.CREATED) {
            return response.getBody();
        } else {
            // Handle error or return null
            return null;
        }
    }
}
//package com.example.plantpro.Service;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.context.annotation.Bean;
// import org.springframework.http.*;
// import org.springframework.stereotype.Service;
// import org.springframework.web.client.RestTemplate;

// import com.example.plantpro.Model.Review;

// import java.util.Arrays;
// import java.util.Collections;
// import java.util.List;

// @Service
// public class ReviewService {

//     @Autowired
//     private final RestTemplate restTemplate;
//     private final String remoteServiceBaseUrl = "http://localhost:8181/api/feedback"; // Adjust the base URL as needed

//     public ReviewService(RestTemplate restTemplate) {
//         this.restTemplate = restTemplate;
//     }

//     public List<Review> getAllFeedback() {
//         HttpHeaders headers = new HttpHeaders();
//         headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
//         HttpEntity<?> entity = new HttpEntity<>(headers);

//         ResponseEntity<Review[]> response = restTemplate.exchange(
//                 remoteServiceBaseUrl,
//                 HttpMethod.GET,
//                 entity,
//                 Review[].class
//         );

//         if (response.getStatusCode() == HttpStatus.OK) {
//             return Arrays.asList(response.getBody());
//         } else {
//             // Handle error or return an empty list
//             return Collections.emptyList();
//         }
//     }

//     public Review addFeedback(Review review) {
//         HttpHeaders headers = new HttpHeaders();
//         headers.setContentType(MediaType.APPLICATION_JSON);
//         HttpEntity<Review> entity = new HttpEntity<>(review, headers);

//         ResponseEntity<Review> response = restTemplate.exchange(
//                 remoteServiceBaseUrl,
//                 HttpMethod.POST,
//                 entity,
//                 Review.class
//         );

//         if (response.getStatusCode() == HttpStatus.CREATED) {
//             return response.getBody();
//         } else {
//             // Handle error or return null
//             return null;
//         }
//     }
    
// }

