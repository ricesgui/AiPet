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
    @Autowired
    private User user=null;
    @RequestMapping("/registerEvent")
    public ModelAndView register(String name,String password,String email){
        ModelAndView mv=new ModelAndView();
        if(userService.selectUser(email)!=null){
            mv.setViewName("errorRegister");
            return mv;
        }
        user.setName(name);
        user.setEmail(email);
        user.setPassword(password);
        userService.insertUser(user);
        mv.addObject("user",user);
        mv.setViewName("redirect:/views/index.html");
        return mv;
    }
}
