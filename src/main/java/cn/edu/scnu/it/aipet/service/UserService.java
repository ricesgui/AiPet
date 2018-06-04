package cn.edu.scnu.it.aipet.service;

import cn.edu.scnu.it.aipet.pojo.User;
import org.springframework.stereotype.Component;

@Component
public interface UserService {
    public int insertUser(User user);
}
