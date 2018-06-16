package cn.edu.scnu.it.aipet.dao;

import cn.edu.scnu.it.aipet.pojo.Pet;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface PetMapper {
    public int insertPet(Pet pet);
    public Pet getPet(@Param("iduser") Long idpet);
    public int updatePet(Pet role);
    public int deletePet(@Param("idpet") Long idpet);
}
