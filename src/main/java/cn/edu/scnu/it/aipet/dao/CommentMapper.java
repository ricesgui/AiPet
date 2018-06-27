package cn.edu.scnu.it.aipet.dao;

import cn.edu.scnu.it.aipet.pojo.Comment;
import org.springframework.stereotype.Repository;

@Repository
public interface CommentMapper {
    public Long insertComment(Comment comment);
}
