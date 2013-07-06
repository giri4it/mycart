package com.ksgbabu.mycart.user;

import com.ksgbabu.mycart.login.LoginInfo;

public class User {

	private LoginInfo loginInfo;

	public User() {

	}

	public User(LoginInfo loginInfo) {
		this.loginInfo = loginInfo;
	}

	public LoginInfo getLoginInfo() {
		return loginInfo;
	}

	public void setLoginInfo(LoginInfo loginInfo) {
		this.loginInfo = loginInfo;
	}

	public boolean compareLoginInfo(LoginInfo loginInfo) {
		return this.loginInfo.compare(loginInfo);
	}

}
