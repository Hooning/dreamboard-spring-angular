package com.practice.mavenangularspring;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

@SpringBootApplication
@EnableJpaAuditing
public class MavenAngularSpringApplication extends SpringBootServletInitializer {

  public static void main(String[] args) {
    SpringApplication.run(MavenAngularSpringApplication.class, args);

  }

}
