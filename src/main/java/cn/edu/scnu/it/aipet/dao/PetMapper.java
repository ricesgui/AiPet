package cn.edu.scnu.it.aipet.dao;

import cn.edu.scnu.it.aipet.pojo.Pet;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface PetMapper {
    public Long insertPet(Pet pet);
    public Pet getPet(@Param("idpet") Long idpet);
    public int deletePet(@Param("idpet") Long idpet);
}
