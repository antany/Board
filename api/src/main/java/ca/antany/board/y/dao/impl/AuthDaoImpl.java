package ca.antany.board.y.dao.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import ca.antany.board.constants.Roles;
import ca.antany.board.y.dao.AuthDao;
import ca.antany.board.y.repositories.LoginInfoRepository;
import ca.antany.board.y.repositories.UserDetailsRepository;
import ca.antany.board.y.repositories.UserRoleRepository;
import ca.antany.board.z.entities.LoginInfo;
import ca.antany.board.z.entities.UserDetails;
import ca.antany.board.z.entities.UserRole;
import ca.antany.board.z.po.RegisterDetail;

@Repository
public class AuthDaoImpl implements AuthDao {

	@Autowired
	UserDetailsRepository userDetailRepository;
	
	@Autowired
	UserRoleRepository userRoleRepository;
	
	@Autowired
	LoginInfoRepository loginInfoRepository;
	
	@Override
	public RegisterDetail register(RegisterDetail registerDetails) {
		String userId = registerDetails.getUsername().getValue();
		String firstName = registerDetails.getFirstname().getValue();
		String lastName = registerDetails.getLastname().getValue();
		String emailAddress = registerDetails.getEmail().getValue();
		String password = registerDetails.getPassword().getValue();
		UserDetails userDetails = new UserDetails(userId, firstName, lastName, emailAddress);
		UserRole userRole = new UserRole(Roles.VIEWER.name(),userId);
		LoginInfo loginInfo = new LoginInfo(userId, password, null);
		userDetailRepository.save(userDetails);
		userRoleRepository.save(userRole);
		loginInfoRepository.save(loginInfo);
		
		return registerDetails;
	}

}
