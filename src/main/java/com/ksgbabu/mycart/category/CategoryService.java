package com.ksgbabu.mycart.category;

import java.util.List;

import javax.enterprise.context.SessionScoped;

public class CategoryService {


	private RootCategoryDAO categoryDAO = new RootCategoryDAO();
	
	public List<RootCategoryEntity> getRooCategories(){
		return categoryDAO.getRootCategories();
	}
}
