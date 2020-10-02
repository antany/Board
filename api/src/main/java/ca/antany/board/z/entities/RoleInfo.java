package ca.antany.board.z.entities;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class RoleInfo {

	@Id
	private String roleId;
	private String roleDisplayNm;
	public String getRoleId() {
		return roleId;
	}
	public void setRoleId(String roleId) {
		this.roleId = roleId;
	}
	public String getRoleDisplayNm() {
		return roleDisplayNm;
	}
	public void setRoleDisplayNm(String roleDisplayNm) {
		this.roleDisplayNm = roleDisplayNm;
	}
	
	
	
}
