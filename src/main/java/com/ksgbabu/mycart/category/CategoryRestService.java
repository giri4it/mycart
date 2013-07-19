package com.ksgbabu.mycart.category;

import java.util.List;

import javax.enterprise.context.RequestScoped;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

import org.apache.log4j.Logger;

@RequestScoped
@Path("/category")
public class CategoryRestService {
	
	Logger logger = Logger.getLogger(CategoryRestService.class);
	
	CategoryService service = new CategoryService();
	
	@GET
	@Path("/roots")
	@Produces("application/json")
	public List<RootCategoryEntity> categories() {
		return service.getRooCategories();
	
	}

}
