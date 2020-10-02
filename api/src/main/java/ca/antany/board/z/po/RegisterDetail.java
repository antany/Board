package ca.antany.board.z.po;

public class RegisterDetail {

	Input<String> username = new Input<>("");
	Input<String> password = new Input<>("");
	Input<String> email = new Input<>("");
	Input<String> firstname = new Input<>("");
	Input<String> lastname = new Input<>("");
	
	
	public Input<String> getUsername() {
		return username;
	}
	public void setUsername(Input<String> username) {
		this.username = username;
	}
	public Input<String> getPassword() {
		return password;
	}
	public void setPassword(Input<String> password) {
		this.password = password;
	}
	public Input<String> getEmail() {
		return email;
	}
	public void setEmail(Input<String> email) {
		this.email = email;
	}
	public Input<String> getFirstname() {
		return firstname;
	}
	public void setFirstname(Input<String> firstname) {
		this.firstname = firstname;
	}
	public Input<String> getLastname() {
		return lastname;
	}
	public void setLastname(Input<String> lastname) {
		this.lastname = lastname;
	}
	@Override
	public String toString() {
		return "RegisterDetail [username=" + username + ", password=" + password + ", email=" + email + ", firstname="
				+ firstname + ", lastname=" + lastname + "]";
	}
	
	
	
}
