package com.ksgbabu.mycart.category;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;

import com.ksgbabu.mycart.repo.AbastractDao;

public class RootCategoryDAO extends AbastractDao {

	public List<RootCategoryEntity> getRootCategories(){
		
		EntityManager em = getEntityManager();
		TypedQuery<RootCategoryEntity> q = em.createQuery("select c from RootCategoryEntity c", RootCategoryEntity.class);
		List<RootCategoryEntity> results = q.getResultList();
		return results;
		
	}
}
