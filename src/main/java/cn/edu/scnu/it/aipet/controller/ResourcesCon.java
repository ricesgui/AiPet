package cn.edu.scnu.it.aipet.controller;

import cn.edu.scnu.it.aipet.util.Event;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.view.json.MappingJackson2JsonView;

import javax.servlet.http.HttpSession;

@Controller
@RequestMapping("/resources")
public class ResourcesCon {
   @RequestMapping(value="/get_name",method = RequestMethod.POST)
   // @RequestMapping(value="/get_name")
    public ModelAndView rtUserInfo(HttpSession session){
        ModelAndView mv=new ModelAndView();
        mv.addObject("user_name",session.getAttribute("user_name"));
        mv.setView(new MappingJackson2JsonView());
        return mv;
    }

    @RequestMapping(value="/get_event",method = RequestMethod.POST)
    // @RequestMapping(value="/get_name")
    public ModelAndView rtUserInfo(){
        System.out.println("收到请求");
        ModelAndView mv=new ModelAndView();
        Event event=new Event();
        event.setEventType("1");
        mv.addObject(event);
        mv.setView(new MappingJackson2JsonView());
        return mv;
    }
}
