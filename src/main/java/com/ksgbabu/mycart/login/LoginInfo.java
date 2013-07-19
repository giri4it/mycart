package com.ksgbabu.mycart.login;

public class LoginInfo {
	
	
	private String login;
	private String password;

	public LoginInfo(){
		
	}
	
	public LoginInfo(String login, String password){
		this.login = login;
		this.password = password;
	}

	
	public String getLogin() {
		return login;
	}
	public void setLogin(String login) {
		this.login = login;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
	public boolean compare(LoginInfo loginInfo){
		if(loginInfo == null){
			return false;
		}
		
		boolean loginStatus = false;
		if(login != null && password != null){
			if(isCredentialMatch(loginInfo)){
				loginStatus = true;
			}
		}
		return loginStatus;
	}
	
	
	private boolean isCredentialMatch(LoginInfo loginInfo){
		
		return login.equalsIgnoreCase(loginInfo.getLogin()) && password.equals(loginInfo.getPassword());
	}
	
	
}
