package cn.edu.scnu.it.aipet.controller;

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

@Controller
@RequestMapping("/check")
public class CheckCon {
    private UserService userService = null;

    @Autowired
    public CheckCon(UserService userService) {
        this.userService = userService;
    }

    @RequestMapping(value = "/username",method = RequestMethod.POST)
    public ModelAndView checkUserName(@RequestBody String email){
        ModelAndView mv = new ModelAndView();
        User user = userService.selectUser(email);
        if (user == null)
            //用户名不存在
            mv.addObject("validity","true");
        else
            mv.addObject("validity", "false");
            mv.setView(new MappingJackson2JsonView());
            return mv;
    }
}
