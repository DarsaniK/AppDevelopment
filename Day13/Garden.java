package com.example.plantpro.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="garden")
public class Garden{
    @Id
    @GeneratedValue
    private Long id;
    private String garden_name;
    private int no_of_plants;
    private int no_of_lights;
    private int no_of_motors;
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getGarden_name() {
        return garden_name;
    }
    public void setGarden_name(String garden_name) {
        this.garden_name = garden_name;
    }
    public int getNo_of_plants() {
        return no_of_plants;
    }
    public void setNo_of_plants(int no_of_plants) {
        this.no_of_plants = no_of_plants;
    }
    public int getNo_of_lights() {
        return no_of_lights;
    }
    public void setNo_of_lights(int no_of_lights) {
        this.no_of_lights = no_of_lights;
    }
    public int getNo_of_motors() {
        return no_of_motors;
    }
    public void setNo_of_motors(int no_of_motors) {
        this.no_of_motors = no_of_motors;
    }
    public Garden()
    {}
}