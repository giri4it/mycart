package com.ksgbabu.mycart.login;

import javax.ws.rs.Path;
import javax.ws.rs.POST;


@Path("/login")
public class LoginService {

	@POST
	public LoginResult authenticate(){
		LoginResult result = new LoginResult();
		result.setResult(true);
		
		return result;
		
	}
}
