package cn.edu.scnu.it.aipet.service.impl;

import cn.edu.scnu.it.aipet.dao.UserMapper;
import cn.edu.scnu.it.aipet.pojo.User;
import cn.edu.scnu.it.aipet.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {
    private final UserMapper userMapper;

    @Autowired
    public UserServiceImpl(UserMapper userMapper) {
        this.userMapper = userMapper;
    }

    @Override
    public Long insertUser(User user) {
        return userMapper.insertUser(user);
    }

    @Override
    public User selectUser(String email) {
        return userMapper.selectUserByEmail(email);
    }
}
