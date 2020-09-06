package ca.antany.board.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Home {

	@RequestMapping("/home")
	public String home() {
		return "Home Controller - Home Method";
	}
}
