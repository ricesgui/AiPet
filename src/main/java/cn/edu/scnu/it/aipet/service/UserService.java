package cn.edu.scnu.it.aipet.service;

import cn.edu.scnu.it.aipet.pojo.User;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

public interface UserService {
    public Long insertUser(User user);
    public User getUserByEmail(String email);
    public User getUserByUserId(Long userId);
}
