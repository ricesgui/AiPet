package cn.edu.scnu.it.aipet.controller;

import cn.edu.scnu.it.aipet.pojo.User;
import cn.edu.scnu.it.aipet.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller("registerController")
@RequestMapping("/views/jsp")
public class registerController {

    @Autowired
    private UserService userService=null;
    @Autowired
    private User user=null;
    @RequestMapping("/register")
    public ModelAndView register(String name,String password,String email){
        user.setName(name);
        user.setEmail(email);
        user.setPassword(password);
        userService.insertUser(user);
        ModelAndView mv=new ModelAndView();
        mv.addObject("user",user);
        mv.setViewName("index");
        return mv;
    }
}
