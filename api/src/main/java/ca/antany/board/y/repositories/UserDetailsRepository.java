package ca.antany.board.y.repositories;

import org.springframework.data.repository.CrudRepository;

import ca.antany.board.z.entities.UserDetails;


public interface UserDetailsRepository extends CrudRepository<UserDetails, String> {

}
