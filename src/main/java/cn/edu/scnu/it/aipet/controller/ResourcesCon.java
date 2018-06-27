package cn.edu.scnu.it.aipet.controller;

import cn.edu.scnu.it.aipet.dao.PlaceoutMapper;
import cn.edu.scnu.it.aipet.dao.UserMapper;
import cn.edu.scnu.it.aipet.pojo.Placeout;
import cn.edu.scnu.it.aipet.pojo.User;
import cn.edu.scnu.it.aipet.util.jsonUtil.Event;
import cn.edu.scnu.it.aipet.util.jsonUtil.SelectLimit;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.view.json.MappingJackson2JsonView;

import javax.servlet.http.HttpSession;
import java.util.ArrayList;
import java.util.List;

@Controller
@RequestMapping("/resources")
public class ResourcesCon {
    private final PlaceoutMapper placeoutMapper;
    private final UserMapper userMapper;

    @Autowired
    public ResourcesCon(PlaceoutMapper placeoutMapper,UserMapper userMapper) {
        this.placeoutMapper = placeoutMapper;
        this.userMapper=userMapper;
    }

    @RequestMapping(value = "/get_name", method = RequestMethod.POST)
    // @RequestMapping(value="/get_name")
    public ModelAndView rtUserInfo(HttpSession session) {
        ModelAndView mv = new ModelAndView();
        mv.addObject("user_name", session.getAttribute("user_name"));
        mv.setView(new MappingJackson2JsonView());
        return mv;
    }

    @RequestMapping(value = "/get_event", method = RequestMethod.POST)
    // @RequestMapping(value="/get_name")
    public ModelAndView rtUserInfo() {
        System.out.println("收到请求");
        ModelAndView mv = new ModelAndView();
        Event event = new Event();
        event.setEventType("1");
        mv.addObject(event);
        mv.setView(new MappingJackson2JsonView());
        return mv;
    }

    @RequestMapping(value = "/get_placeout", method = RequestMethod.POST)
    public ModelAndView getPlaceout(@RequestBody SelectLimit selectLimit) {
        ModelAndView mv = new ModelAndView();
        List<Placeout> placeouts = placeoutMapper.getPlaceout(selectLimit.getStart(), selectLimit.getSize());
        mv.addObject(placeouts);
        mv.setView(new MappingJackson2JsonView());
        return mv;
    }

    @RequestMapping(value = "/get_user_info",method = RequestMethod.POST)
    public ModelAndView getUserInfo(HttpSession session){
        ModelAndView mv=new ModelAndView();
        mv.setView(new MappingJackson2JsonView());
        Long userId=(Long)session.getAttribute("id");
        User user=userMapper.getUser(userId);
        mv.addObject(user);
        return mv;
    }

}
