package cn.edu.scnu.it.aipet.service.impl;

import cn.edu.scnu.it.aipet.dao.CommentMapper;
import cn.edu.scnu.it.aipet.pojo.Comment;
import cn.edu.scnu.it.aipet.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CommentServiceImpl implements CommentService {
    private final CommentMapper commentMapper;

    @Autowired
    public CommentServiceImpl(CommentMapper commentMapper) {
        this.commentMapper = commentMapper;
    }

    @Override
    public Long insertComment(Comment comment) {
        return commentMapper.insertComment(comment);
    }
}
