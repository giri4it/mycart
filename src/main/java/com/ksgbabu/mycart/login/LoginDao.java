package com.ksgbabu.mycart.login;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import javax.inject.Named;
import javax.inject.Singleton;
import javax.naming.NamingException;

import com.ksgbabu.mycart.repo.AbastractDao;
import com.ksgbabu.mycart.user.User;

@Named
@Singleton
public class LoginDao extends AbastractDao{

	public LoginInfo getUserLoginInfo(User user) throws NamingException, SQLException{
		
		Connection connection =  getConnection();
		PreparedStatement stmt = connection.prepareStatement("select login, password from user where login=? and password=?");
		stmt.setString(1,user.getLoginInfo().getLogin());
		stmt.setString(2, user.getLoginInfo().getPassword());
		ResultSet rst = stmt.executeQuery();
		String login = null;
		String password = null;
		
		while(rst.next()) {
		 login = rst.getString(1);
		 password = rst.getString(2);
		}
		
		connection.close();
		LoginInfo loginInfo = new LoginInfo(login,password);
		return loginInfo;
	}
}
