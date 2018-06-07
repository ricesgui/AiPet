package cn.edu.scnu.it.aipet.controller;

import cn.edu.scnu.it.aipet.pojo.User;
import cn.edu.scnu.it.aipet.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("/views")
public class loginController {
    @Autowired
    private UserService userService = null;

    @RequestMapping("/loginEvent")
    public ModelAndView judge(String email, String password) {
        ModelAndView mv = new ModelAndView();
        User user = userService.selectUser(email);
        if (user == null) {
            mv.addObject("type", "1");
            mv.setViewName("errorLogin");
        } else if (!user.getPassword().equals(password)) {
            mv.addObject("type", "2");
            mv.setViewName("errorLogin");
        } else {
            mv.addObject("user", user);
            mv.setViewName("index");
        }
        return mv;
    }
}
