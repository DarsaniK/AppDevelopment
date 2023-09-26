package com.example.plantpro.Controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.plantpro.Model.SignupEntity;
import com.example.plantpro.Repository.Signuprepo;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/signup")
public class SignupController {
	@Autowired Signuprepo repo;
	@PostMapping("/post")
	private SignupEntity PostUser(@RequestBody SignupEntity s){
		return repo.save(s);
	}
}

