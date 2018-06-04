package cn.edu.scnu.it.aipet.controller;

import cn.edu.scnu.it.aipet.pojo.User;
import cn.edu.scnu.it.aipet.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller("registerController")
@RequestMapping("/test")
public class registerController {

    @Autowired
    private UserService userService=null;

    @RequestMapping("register")
    public ModelAndView register(User user){

    }
}
