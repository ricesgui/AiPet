package cn.edu.scnu.it.aipet.controller;

import cn.edu.scnu.it.aipet.pojo.Event;
import cn.edu.scnu.it.aipet.pojo.User;
import cn.edu.scnu.it.aipet.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpSession;

@Controller
@RequestMapping("/views")
public class loginController {
    @Autowired
    private UserService userService = null;

    @RequestMapping(value = "/login_in",method =RequestMethod.POST)
    public ModelAndView loginIn(String email, String password, HttpSession session) {
        ModelAndView mv = new ModelAndView();
        User user = userService.selectUser(email);
        if (user == null) {
            mv.addObject("type", "1");
            mv.setViewName("errorLogin");
            return mv;
        }
        if (!user.getPassword().equals(password)) {
            mv.addObject("type", "2");
            mv.setViewName("errorLogin");
            return mv;
        }
        session.setAttribute("name", user.getName());
        session.setAttribute("password",user.getPassword());
        mv.setViewName("redirect:/views/index.html");
        return mv;
    }
    @RequestMapping(value = "/login_out",method = RequestMethod.POST)
    public ModelAndView loginOut(@RequestBody Event event,HttpSession session){
        if(event.getEventType().equals("1"))
            session.invalidate();
        ModelAndView mv = new ModelAndView();
        mv.setViewName("redirect:/views/index.html");
        return mv;


    }

    
}
