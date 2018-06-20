package cn.edu.scnu.it.aipet.controller;

import cn.edu.scnu.it.aipet.pojo.Pet;
import cn.edu.scnu.it.aipet.service.PetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("/views")
public class PetController {
    private  PetService petService=null;

    @Autowired
    public PetController(PetService petService) {
        this.petService = petService;
    }

    @RequestMapping(value = "/sendpet")
    public ModelAndView insertPetToDb(Pet pet){
        ModelAndView mv=new ModelAndView();
        petService.insertPet(pet);
        return mv;
}
}
