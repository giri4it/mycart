package com.ksgbabu.mycart.repo;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

public abstract class AbastractDao {

	protected EntityManager getEntityManager(){
		EntityManagerFactory factory =   Persistence.createEntityManagerFactory("mycartPU");
		EntityManager em = factory.createEntityManager();
		return em;
	}
}
