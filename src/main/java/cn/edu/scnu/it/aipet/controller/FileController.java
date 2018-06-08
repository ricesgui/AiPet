package cn.edu.scnu.it.aipet.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.view.json.MappingJackson2JsonView;

import javax.servlet.MultipartConfigElement;
import javax.servlet.http.HttpServletRequest;
import java.io.File;
import java.io.IOException;

@Controller
@RequestMapping(value = "/flie")
public class FileController {
    @RequestMapping(value="/upload/pet_picture")
    public ModelAndView uploadPetPicture(@RequestParam("file") MultipartFile file){
        String root="/Users/wangjun/Documents/upload/aipet/petpicture";
        ModelAndView mv=new ModelAndView();
        String fileName=file.getOriginalFilename();
        File dest= new File(root+File.separator+fileName);
        try{
            file.transferTo(dest);
            //保存成功
            mv.addObject("sucess",true);
            mv.addObject("msg","上传文件成功");
        }catch (IllegalStateException|IOException e){
            //保存失败
            mv.addObject("success",false);
            mv.addObject("msg","上传文件失败");
            e.printStackTrace();
        }
        mv.setView(new MappingJackson2JsonView());
        return mv;
    }
}
