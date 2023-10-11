package com.example.plantpro.Service;

import com.example.plantpro.Model.Garden;
import com.example.plantpro.Repository.GardenRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class GardenService {
    @Autowired
    private final GardenRepository gardenRepository;

    public GardenService(GardenRepository gardenRepository) {
        this.gardenRepository = gardenRepository;
    }

    public List<Garden> getAllGardens() {
        return gardenRepository.findAll();
    }

    public Optional<Garden> getGardenById(long id) {
        return gardenRepository.findById(id);
    }

    public Garden createGarden(Garden garden) {
        return gardenRepository.save(garden);
    }

    public Garden updateGarden(long id, Garden updatedGarden) {
        updatedGarden.setGId(id);
        return gardenRepository.save(updatedGarden);
    }

    public void deleteGarden(long id) {
        gardenRepository.deleteById(id);
    }

    public List<Garden> getAllGardensByUserId(long userId) {
        return gardenRepository.findAllByUserId(userId);
    }
}

