package cn.edu.scnu.it.aipet.service.impl;

import cn.edu.scnu.it.aipet.dao.PlaceoutMapper;
import cn.edu.scnu.it.aipet.pojo.Placeout;
import cn.edu.scnu.it.aipet.service.PlaceoutService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PlaceoutServiceImpl implements PlaceoutService {
    @Autowired
    private PlaceoutMapper placeoutMapper=null;

    @Override
    public Long insertPlaceout(Placeout placeout) {
        return placeoutMapper.insertPlaceout(placeout);
    }
}
