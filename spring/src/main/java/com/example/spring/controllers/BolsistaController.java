package com.example.spring.controllers;

import java.util.List;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.spring.models.Bolsista;
import com.example.spring.repository.BolsistaRepository;

import org.springframework.web.bind.annotation.GetMapping;


@RestController
@RequestMapping("/api/bolsistas")
public class BolsistaController {

    private final BolsistaRepository bolsistaRepository;
    
    public BolsistaController(BolsistaRepository bolsistaRepository) {
        this.bolsistaRepository = bolsistaRepository;
    }

    @GetMapping    
    public List<Bolsista> list() {
        return bolsistaRepository.findAll();
    }




}
