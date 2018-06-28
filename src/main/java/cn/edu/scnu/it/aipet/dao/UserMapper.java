package cn.edu.scnu.it.aipet.dao;

import cn.edu.scnu.it.aipet.pojo.User;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface UserMapper {
    public Long insertUser(User user);
    public User getUserByUserId(@Param("iduser") Long iduser);
    public int updateUser(User role);
    public int deleteUser(@Param("iduser") Long iduser);
    public User getUserByEmail(@Param("email") String email);
}
