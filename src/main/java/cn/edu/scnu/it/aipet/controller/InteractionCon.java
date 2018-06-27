package cn.edu.scnu.it.aipet.controller;

import cn.edu.scnu.it.aipet.pojo.Adopt;
import cn.edu.scnu.it.aipet.pojo.Pet;
import cn.edu.scnu.it.aipet.pojo.Placeout;
import cn.edu.scnu.it.aipet.service.AdoptService;
import cn.edu.scnu.it.aipet.service.PetService;
import cn.edu.scnu.it.aipet.service.PlaceoutService;
import cn.edu.scnu.it.aipet.util.jsonUtil.PlaceoutJson;
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
    private  final PetService PetService;
    private  final PlaceoutService PlaceoutService;
    private  final AdoptService AdoptService;

    @Autowired
    public InteractionCon(PetService PetService, PlaceoutService PlaceoutService, AdoptService AdoptService) {
        this.PetService = PetService;
        this.PlaceoutService = PlaceoutService;
        this.AdoptService = AdoptService;
    }


    @RequestMapping(value = "/send_placeout",method = RequestMethod.POST)
    public ModelAndView insertPlaceoutToDb(@RequestBody PlaceoutJson PlaceoutJson, HttpSession session){
        System.out.println("进入insetPlaceoutToDb!");
        ModelAndView mv=new ModelAndView();
        mv.setView(new MappingJackson2JsonView());
        Long iduser=(Long)session.getAttribute("id");
        Pet pet= PlaceoutJson.getPet();
        Placeout placeout= PlaceoutJson.getPlaceout();
        Long idpet= PetService.insertPet(pet);  //返回值主键回填
        placeout.setIdpet(idpet);
        placeout.setIduser(iduser);
        PlaceoutService.insertPlaceout(placeout);
        if(idpet==0)
            mv.addObject("status","fail");
        else
            mv.addObject("status","success");
        return mv;
}

    @RequestMapping(value = "/send_adopt",method = RequestMethod.POST)
    public ModelAndView insertAdoptToDb(@RequestBody Adopt adopt, HttpSession session){
        System.out.println("进入insetAdoptToDb!");
        ModelAndView mv=new ModelAndView();
        mv.setView(new MappingJackson2JsonView());
        Long iduser=(Long)session.getAttribute("id");
        adopt.setIduser(iduser);
        Long idpet= AdoptService.insertAdopt(adopt);  //返回值主键回填
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
