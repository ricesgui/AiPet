package cn.edu.scnu.it.aipet.controller;

import cn.edu.scnu.it.aipet.util.Event;
import cn.edu.scnu.it.aipet.util.LoginUser;
import cn.edu.scnu.it.aipet.pojo.User;
import cn.edu.scnu.it.aipet.service.UserService;
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
public class StatusController {
    @Autowired
    private UserService userService = null;
    @RequestMapping(value = "/log_in",method =RequestMethod.POST)
    public ModelAndView logIn(@RequestBody LoginUser loginUser, HttpSession session) {
        ModelAndView mv = new ModelAndView();
        mv.setView(new MappingJackson2JsonView());
        User user = userService.selectUser(loginUser.getEmail());
        if (user == null) {
            //用户名不存在
            mv.addObject("status", "fail");
            mv.addObject("errorType", "1");
            return mv;
        }
        if (!user.getPassword().equals(loginUser.getPassword())) {
            //用户名或密码错误
            mv.addObject("status", "fail");
            mv.addObject("errorType", "2");
            return mv;
        }
        session.setAttribute("user_name", user.getName());
        mv.addObject("status", "ok");
        mv.addObject("errorType", "0");
        System.out.println(user.getName()+":login success!");
        return mv;
    }
    @RequestMapping(value = "/log_out",method = RequestMethod.POST)
    public ModelAndView logOut(@RequestBody Event event,HttpSession session){
        ModelAndView mv=new ModelAndView();
        if(event.getEventType().equals("1")){
            session.invalidate();
            mv.addObject("status","success");
        }
        else
            mv.addObject("status","fail");
        mv.setView(new MappingJackson2JsonView());
        return  mv;
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