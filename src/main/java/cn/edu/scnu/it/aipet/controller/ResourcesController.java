package cn.edu.scnu.it.aipet.controller;

import cn.edu.scnu.it.aipet.pojo.User;
import org.springframework.session.Session;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.view.json.MappingJackson2JsonView;

import javax.servlet.http.HttpSession;

@Controller
@RequestMapping("/resources")
public class ResourcesController {
    @RequestMapping("/get_name")
    public ModelAndView rtUserInfo(HttpSession session){
        ModelAndView mv=new ModelAndView();
        mv.addObject("tname",session.getAttribute("name"));
        mv.addObject("tpassword",session.getAttribute("password"));
        mv.setView(new MappingJackson2JsonView());
        return mv;
    }
}
