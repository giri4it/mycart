package com.ksgbabu.mycart.login;

import javax.enterprise.context.RequestScoped;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.apache.log4j.Logger;

import com.ksgbabu.mycart.user.User;
 
@RequestScoped
@Path("/loginservice")
public class LoginRestService {
	
	Logger logger = Logger.getLogger(this.getClass());
 
	@POST
	@Path("/login")
	@Produces("application/json")
	@Consumes(MediaType.APPLICATION_JSON)
	public Response login(LoginInfo loginInfo) {
 
		logger.info("Login: " + loginInfo.getLogin());
		User user = new User(loginInfo);
		LoginService service = new LoginService();
		LoginResult result = service.authenticate(user);
		return Response.status(200).entity(result).build();
 
	}
 
}