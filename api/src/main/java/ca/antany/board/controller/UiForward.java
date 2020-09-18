package ca.antany.board.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class UiForward {

	@GetMapping(value="/ui/**")
	public String forward() {
		return "forward:/";
	}
}
