package cn.edu.scnu.it.aipet.controller;

import cn.edu.scnu.it.aipet.pojo.Adopt;
import cn.edu.scnu.it.aipet.pojo.Comment;
import cn.edu.scnu.it.aipet.pojo.Pet;
import cn.edu.scnu.it.aipet.pojo.Placeout;
import cn.edu.scnu.it.aipet.service.AdoptService;
import cn.edu.scnu.it.aipet.service.CommentService;
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
    private  final PetService petService;
    private  final PlaceoutService PlaceoutService;
    private  final AdoptService AdoptService;
    private final CommentService commentService;

    @Autowired
    public InteractionCon(PetService petService, PlaceoutService PlaceoutService,
                          AdoptService AdoptService,CommentService commentService) {
        this.petService = petService;
        this.PlaceoutService = PlaceoutService;
        this.AdoptService = AdoptService;
        this.commentService=commentService;
    }


    @RequestMapping(value = "/send_placeout",method = RequestMethod.POST)
    public ModelAndView sendPlaceout(@RequestBody PlaceoutJson PlaceoutJson, HttpSession session){
        System.out.println("进入sendPlaceout!");
        ModelAndView mv=new ModelAndView();
        mv.setView(new MappingJackson2JsonView());
        Long iduser=(Long)session.getAttribute("id");
        Pet pet= PlaceoutJson.getPet();
        Placeout placeout= PlaceoutJson.getPlaceout();
        Long flag=petService.insertPet(pet);  //返回值主键回填
        placeout.setIdpet(pet.getIdpet());
        placeout.setIduser(iduser);
        PlaceoutService.insertPlaceout(placeout);
        if(flag==0)
            mv.addObject("status","fail");
        else
            mv.addObject("status","success");
        return mv;
}

    @RequestMapping(value = "/send_adopt",method = RequestMethod.POST)
    public ModelAndView sendAdopt(@RequestBody Adopt adopt, HttpSession session){
        System.out.println("进入sendAdopt!");
        ModelAndView mv=new ModelAndView();
        mv.setView(new MappingJackson2JsonView());
        Long iduser=(Long)session.getAttribute("id");
        adopt.setIduser(iduser);
        Long flag= AdoptService.insertAdopt(adopt);  //返回值主键回填
        if(flag==0)
            mv.addObject("status","fail");
        else
            mv.addObject("status","success");
        return mv;
    }

    @RequestMapping(value="/send_comment",method = RequestMethod.POST)
    public ModelAndView sendComment(@RequestBody Comment comment,HttpSession session){
        System.out.println("进入sendComment!");
        ModelAndView mv=new ModelAndView();
        mv.setView(new MappingJackson2JsonView());
        comment.setIdUser((Long)session.getAttribute("id"));
        Long flag=commentService.insertComment(comment);
        mv.addObject("user_name",session.getAttribute("name"));
        mv.addObject("content",comment.getContent());
        if(flag!=0)
            mv.addObject("status","success");
        else
            mv.addObject("status","fail");
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
