package cn.edu.scnu.it.aipet.controller;

import cn.edu.scnu.it.aipet.pojo.User;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller("registerController")
@RequestMapping("/test")
public class registerController {
    @RequestMapping("register")
    public ModelAndView register(User user){

    }
}
