package com.example.plantpro.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.plantpro.Model.SignupEntity;
import com.example.plantpro.Servivce.SignupService;

@RestController
@RequestMapping("/login")
@CrossOrigin("http://localhost:3000")
public class LoginController {
	@Autowired 
	SignupService ser;
	@GetMapping("/get")
	private Iterable<SignupEntity> GetUsers(){
		return ser.GetAll();
	}
//	@GetMapping("/get")
//	private Iterable<SignUp> GetUsers(@PathVariable String username){
//		return ser.GetUserPassService(username);
//	}
}
