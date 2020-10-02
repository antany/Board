package ca.antany.board.z.entities;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity(name="AUTHORITY")
public class Authority {

	@Id
	private String authorityId;
	private String authorityDesc;
	
	public String getAuthorityId() {
		return authorityId;
	}
	public void setAuthorityId(String authorityId) {
		this.authorityId = authorityId;
	}
	public String getAuthorityDesc() {
		return authorityDesc;
	}
	public void setAuthorityDesc(String authorityDesc) {
		this.authorityDesc = authorityDesc;
	}
	
	
}
