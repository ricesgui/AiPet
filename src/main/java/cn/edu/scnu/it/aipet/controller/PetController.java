package cn.edu.scnu.it.aipet.controller;

import cn.edu.scnu.it.aipet.pojo.Pet;
import cn.edu.scnu.it.aipet.service.PetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.view.json.MappingJackson2JsonView;

@Controller
@RequestMapping("/views")
public class PetController {
    private  PetService petService=null;

    @Autowired
    public PetController(PetService petService) {
        this.petService = petService;
    }

    @RequestMapping(value = "/sendpet",method = RequestMethod.POST)
    public ModelAndView insertPetToDb(Pet pet){
        ModelAndView mv=new ModelAndView();
        int id=0;
        id=petService.insertPet(pet);  //返回值主键回填
        if(id==0)
            mv.addObject("status","success");
        else
            mv.addObject("status","fail");
        mv.setView(new MappingJackson2JsonView());
        return mv;
}
}
