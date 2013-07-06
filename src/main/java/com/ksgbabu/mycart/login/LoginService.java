package com.ksgbabu.mycart.login;

import java.sql.SQLException;

import javax.inject.Inject;
import javax.naming.NamingException;
import javax.ws.rs.Path;
import javax.ws.rs.POST;

import org.apache.log4j.Logger;

import com.ksgbabu.mycart.user.User;


@Path("/login")
public class LoginService {

	Logger logger = Logger.getLogger(this.getClass());
	
	@Inject
	LoginDao loginDao = new LoginDao();
	
	@POST
	public LoginResult authenticate(User user){
		
		LoginResult result = new LoginResult();
		if(isUserLoginInfoExists(user)) {
			return new LoginResult(false);
		}
		LoginInfo loginInfo = getLoginInfo(user);

		if(user.compareLoginInfo(loginInfo)){
			return new LoginResult(true);
		}
		return result;
		
	}
	
	private boolean isUserLoginInfoExists(User user){
		if(user == null){
			return false;
		}
		if(user.getLoginInfo() == null){
			return false;
		}
		if(user.getLoginInfo().getLogin() == null){
			return false;
		}
		if(user.getLoginInfo().getPassword() == null){
			return false;
		}
		
		return true;
	}
	
	private LoginInfo getLoginInfo(User user){
		
		LoginInfo loginInfo = null;
		try {
			loginInfo = loginDao.getUserLoginInfo(user);
		} catch (NamingException e) {
			throw new IllegalStateException(e);
		} catch (SQLException e) {
			throw new IllegalStateException(e);
		}
		return loginInfo;
	}
}
