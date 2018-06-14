package cn.edu.scnu.it.aipet.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class VisitController {
    @RequestMapping("/index")
    public String rtIndex(){
        System.out.println("请求index");
        return "index";
    }
    @RequestMapping("/")
    public String rtIndex1(){
        System.out.println("请求index");
        return "index";
    }
}
