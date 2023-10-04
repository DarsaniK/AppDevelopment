package com.example.plantpro.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.plantpro.Model.Garden;

@Repository
public interface GardenRepository extends JpaRepository<Garden, Long> {
   
}
