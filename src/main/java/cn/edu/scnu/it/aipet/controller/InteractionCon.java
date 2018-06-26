package cn.edu.scnu.it.aipet.controller;

import cn.edu.scnu.it.aipet.pojo.Pet;
import cn.edu.scnu.it.aipet.pojo.Placeout;
import cn.edu.scnu.it.aipet.service.PetService;
import cn.edu.scnu.it.aipet.service.PlaceoutService;
import cn.edu.scnu.it.aipet.util.PlaceoutJson;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.view.json.MappingJackson2JsonView;

import javax.servlet.http.HttpSession;

@Controller
@RequestMapping("/views")
public class InteractionCon {
    private  PetService petService=null;
    private  PlaceoutService placeoutService=null;

    @Autowired
    public InteractionCon(PetService petService, PlaceoutService placeoutService) {
        this.petService = petService;
        this.placeoutService = placeoutService;
    }


    @RequestMapping(value = "/sendplaceout",method = RequestMethod.POST)
    public ModelAndView insertPetToDb(@RequestBody PlaceoutJson placeoutJson, HttpSession session){
        System.out.println("进入insetPetToDb!");
        ModelAndView mv=new ModelAndView();
        mv.setView(new MappingJackson2JsonView());
        Long iduser=(Long)session.getAttribute("id");
        Pet pet=placeoutJson.getPet();
        Placeout placeout=placeoutJson.getPlaceout();
        Long idpet=petService.insertPet(pet);  //返回值主键回填
        placeout.setIdpet(idpet);
        placeout.setIduser(iduser);
        placeoutService.insertPlaceout(placeout);
        if(idpet==0)
            mv.addObject("status","fail");
        else
            mv.addObject("status","success");
        return mv;
}
    @RequestMapping(value = "/test/getPetInfo",method = RequestMethod.POST)
    public ModelAndView getPetInfo(){
        Pet pet=new Pet();
        pet.setName("dengxiaogui");
        Placeout placeout=new Placeout();
        PlaceoutJson plj=new PlaceoutJson();
        plj.setPet(pet);
        plj.setPlaceout(placeout);
        ModelAndView mv=new ModelAndView();
        mv.setView(new MappingJackson2JsonView());
        mv.addObject(plj);
        return mv;

    }
}
