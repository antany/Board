package ca.antany.board.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import ca.antany.board.service.AuthService;
import ca.antany.board.z.po.RegisterDetail;

@RestController
public class Auth {

	@Autowired
	AuthService authService;
	
	@PostMapping("/api/auth/register")
	public void register(@RequestBody RegisterDetail registerDetail) {
		RegisterDetail response = authService.register(registerDetail);
	}
}
