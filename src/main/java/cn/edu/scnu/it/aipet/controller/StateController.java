package cn.edu.scnu.it.aipet.controller;

import cn.edu.scnu.it.aipet.pojo.Event;
import cn.edu.scnu.it.aipet.pojo.User;
import cn.edu.scnu.it.aipet.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.view.json.MappingJackson2JsonView;

import javax.servlet.http.HttpSession;

@Controller
@RequestMapping("/views")
public class StateController {
    @Autowired
    private UserService userService = null;

    @RequestMapping(value = "/log_in",method =RequestMethod.POST)
    public ModelAndView loginIn(String email, String password, HttpSession session) {
        ModelAndView mv = new ModelAndView();
        User user = userService.selectUser(email);
        if (user == null) {
            mv.addObject("error", 1);
            mv.setView(new MappingJackson2JsonView());
            return mv;
        }
        if (!user.getPassword().equals(password)) {
            mv.addObject("error", 2);
            mv.setView(new MappingJackson2JsonView());
            return mv;
        }
        session.setAttribute("user_name", user.getName());
        mv.setViewName("redirect:/views/index.html");
        System.out.println(user.getName()+":login success!");
        return mv;
    }
    @RequestMapping(value = "/log_out",method = RequestMethod.POST)
    public void loginOut(@RequestBody Event event,HttpSession session){
        System.out.print(session.getAttribute("user_name")+":log out");
        if(event.getEventType().equals("1")){
            session.invalidate();
            System.out.println(" success!");
        }
    }
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
