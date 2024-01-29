package com.example.spring.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.spring.models.Bolsista;

@Repository
public interface BolsistaRepository extends JpaRepository<Bolsista, Long> {
    
}
