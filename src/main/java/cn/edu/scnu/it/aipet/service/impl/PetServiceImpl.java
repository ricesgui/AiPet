package cn.edu.scnu.it.aipet.service.impl;

import cn.edu.scnu.it.aipet.dao.PetMapper;
import cn.edu.scnu.it.aipet.pojo.Pet;
import cn.edu.scnu.it.aipet.service.PetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PetServiceImpl implements PetService {
    private final PetMapper petMapper;

    @Autowired
    public PetServiceImpl( PetMapper petMapper) {
        this.petMapper = petMapper;
    }

    @Override
    public Long insertPet(Pet pet) {
        return petMapper.insertPet(pet);
    }

    public  Pet selectPet(Long idpet){
        return petMapper.getPet(idpet);
    }

}
