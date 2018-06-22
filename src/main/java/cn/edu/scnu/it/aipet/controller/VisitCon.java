package cn.edu.scnu.it.aipet.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class VisitCon {
    @RequestMapping("/index")
    public String rtIndex(){
        System.out.println("请求index");
        return "index";
    }
    @RequestMapping("/")
    public ModelAndView rtIndex1(){
        ModelAndView mv=new ModelAndView();
        mv.setViewName("redirect:/views/index.html");
        return mv;
    }
}
