package ca.antany.board.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import ca.antany.board.service.AuthService;
import ca.antany.board.y.dao.AuthDao;
import ca.antany.board.z.po.Input;
import ca.antany.board.z.po.RegisterDetail;

@Service
public class AuthServiceImpl implements AuthService{

	@Autowired
	AuthDao dao;
	
	@Override
	public RegisterDetail register(RegisterDetail registerDetails) {
		Input<String> password = registerDetails.getPassword();
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
		password.setValue(encoder.encode(password.getValue()));
		return dao.register(registerDetails);
	}

}
