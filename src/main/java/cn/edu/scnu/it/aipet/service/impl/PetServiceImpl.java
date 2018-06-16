package cn.edu.scnu.it.aipet.service.impl;

import cn.edu.scnu.it.aipet.dao.PetMapper;
import cn.edu.scnu.it.aipet.pojo.Pet;
import cn.edu.scnu.it.aipet.service.PetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PetServiceImpl implements PetService {
    @Autowired
    private PetMapper petMapper=null;
    @Override
    public int insertPet(Pet pet) {
        return petMapper.insertPet(pet);
    }

}
