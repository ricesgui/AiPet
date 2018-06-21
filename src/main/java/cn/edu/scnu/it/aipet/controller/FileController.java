package cn.edu.scnu.it.aipet.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.view.json.MappingJackson2JsonView;

import javax.servlet.MultipartConfigElement;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.io.File;
import java.io.IOException;

@Controller
@RequestMapping(value = "/file")
public class FileController {
    @RequestMapping(value="/upload/pet_picture",method = RequestMethod.POST)
    public ModelAndView uploadPetPicture(MultipartFile file, HttpSession session){
        System.out.println("文件接口收到请求！");
        String root="/Users/wangjun/Documents/upload/aipet/petpicture";
        ModelAndView mv=new ModelAndView();
        //文件名+sessionid+当前时间戳确保文件名唯一
       String fileName=System.currentTimeMillis()+"_"+session.getId()+"_"+file.getOriginalFilename();
        String finalName=root+File.separator+fileName;
        File dest= new File(finalName);
        try{
            file.transferTo(dest);
            //保存成功
            mv.addObject("status","success");
            mv.addObject("msg","上传文件成功");
            mv.addObject("url",finalName);
        }catch (IllegalStateException|IOException e){
            //保存失败
            mv.addObject("status","fail");
            mv.addObject("msg","上传文件失败");
            mv.addObject("url",null);
            e.printStackTrace();
        }
        mv.setView(new MappingJackson2JsonView());
        return mv;
    }
}
