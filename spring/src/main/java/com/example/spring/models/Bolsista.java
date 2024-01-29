package com.example.spring.models;

import org.springframework.boot.actuate.autoconfigure.metrics.MetricsProperties.Data;

import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@lombok.Data
@Entity
public class Bolsista {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @JsonProperty("_id")
    private Long id;
    @Column(length = 200, nullable = false)
    private String name;
    @Column(length = 10)
    private String identificador;
    @Column(length = 30)
    private String numeroDoc;
    @Column(length = 255)
    private String dadosBanco;
}
