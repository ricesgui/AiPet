package cn.edu.scnu.it.aipet.service.impl;

import cn.edu.scnu.it.aipet.dao.UserMapper;
import cn.edu.scnu.it.aipet.pojo.User;
import cn.edu.scnu.it.aipet.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserMapper userMapper=null;
    @Override
    public int insertUser(User user) {
        return userMapper.insertUser(user);
    }

    @Override
    public User selectUser(String email) {
        return userMapper.selectUserByEmail(email);
    }
}
