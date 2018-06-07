package cn.edu.scnu.it.aipet.service;

import cn.edu.scnu.it.aipet.pojo.User;
import org.springframework.stereotype.Component;


public interface UserService {
    public int insertUser(User user);
    public User selectUser(String email);
}
