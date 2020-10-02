package ca.antany.board.z.entities;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class RoleAuthority {

	@Id
	private int id;
	
	private String roleId;
	private String authorityId;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getRoleId() {
		return roleId;
	}
	public void setRoleId(String roleId) {
		this.roleId = roleId;
	}
	public String getAuthorityId() {
		return authorityId;
	}
	public void setAuthorityId(String authorityId) {
		this.authorityId = authorityId;
	}
	
	
}
