package cn.edu.scnu.it.aipet.service.impl;

import cn.edu.scnu.it.aipet.dao.AdoptMapper;
import cn.edu.scnu.it.aipet.pojo.Adopt;
import cn.edu.scnu.it.aipet.service.AdoptService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdoptServiceImpl implements AdoptService {
    private final AdoptMapper adoptMapper;

    @Autowired
    public AdoptServiceImpl(AdoptMapper adoptMapper) {
        this.adoptMapper = adoptMapper;
    }

    public Long insertAdopt(Adopt adopt){
        return adoptMapper.insertAdopt(adopt);
    }
}
