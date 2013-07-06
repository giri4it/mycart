package com.ksgbabu.mycart.repo;

import java.sql.Connection;
import java.sql.SQLException;

import javax.naming.Context;
import javax.naming.InitialContext;
import javax.naming.NamingException;
import javax.sql.DataSource;

public abstract class AbastractDao {

	protected Connection getConnection() throws NamingException, SQLException{
		Context ctx = new InitialContext();
		DataSource ds = (DataSource)ctx.lookup("java:comp/env/jdbc/mycart");
		Connection conn = ds.getConnection();
		return conn;
	}
}
