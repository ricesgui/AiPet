package cn.edu.scnu.it.aipet.service;

import cn.edu.scnu.it.aipet.pojo.Pet;
import cn.edu.scnu.it.aipet.pojo.User;
import org.springframework.stereotype.Service;

public interface PetService {
    public Long insertPet(Pet pet);
}
