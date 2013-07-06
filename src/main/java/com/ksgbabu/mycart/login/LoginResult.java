package com.ksgbabu.mycart.login;

public class LoginResult {

	boolean result;

	public LoginResult() {

	}

	public LoginResult(boolean status) {
		this.result = status;
	}

	public boolean isResult() {
		return result;
	}

	public void setResult(boolean result) {
		this.result = result;
	}

}
