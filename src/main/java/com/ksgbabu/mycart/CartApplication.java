package com.ksgbabu.mycart;

import java.util.HashSet;
import java.util.Set;

import javax.ws.rs.core.Application;


public class CartApplication extends Application{

	private Set<Object> singletons = new HashSet<Object>();

	private Set<Class<?>> empty = new HashSet<Class<?>>();

	 

	public CartApplication() {

	// ADD YOUR RESTFUL RESOURCES HERE

	this.singletons.add(new MessageRestService());

	}


	public Set<Class<?>> getClasses()

	{

	return this.empty;

	}

	 

	public Set<Object> getSingletons()

	{

	return this.singletons;

	}
}
