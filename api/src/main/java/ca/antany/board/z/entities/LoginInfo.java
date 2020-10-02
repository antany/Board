package ca.antany.board.z.entities;

import java.sql.Timestamp;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class LoginInfo {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public int id;
	public String userId;
	public String password;
	public Timestamp lastLogged;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public Timestamp getLastLogged() {
		return lastLogged;
	}
	public void setLastLogged(Timestamp lastLogged) {
		this.lastLogged = lastLogged;
	}
	public LoginInfo(String userId, String password, Timestamp lastLogged) {
		super();
		this.userId = userId;
		this.password = password;
		this.lastLogged = lastLogged;
	}
	
	
}
