package cn.edu.scnu.it.aipet.service;

import cn.edu.scnu.it.aipet.pojo.User;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

public interface UserService {
    public int insertUser(User user);
    public User selectUser(String email);
}
