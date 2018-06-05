package cn.edu.scnu.it.aipet.controller;

import cn.edu.scnu.it.aipet.pojo.User;
import cn.edu.scnu.it.aipet.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller("registerController")
@RequestMapping("/views")
public class registerController {

    @Autowired
    private UserService userService=null;

    @RequestMapping("/registerl")
    public ModelAndView register(User user){
        System.out.println("进入view");
        userService.insertUser(user);
        ModelAndView mv=new ModelAndView();
        mv.addObject("user",user);
        mv.setViewName("register");
        return mv;
    }
}
