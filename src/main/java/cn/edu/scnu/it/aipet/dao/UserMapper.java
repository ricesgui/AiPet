package cn.edu.scnu.it.aipet.dao;

import cn.edu.scnu.it.aipet.pojo.User;
import org.apache.ibatis.annotations.Param;

public interface UserMapper {
    public int insertUser(User user);
    public User getUser(@Param("iduser") Long iduser);
    public int updateUser(User role);
    public int deleteUser(@Param("iduser") Long iduser);
}
