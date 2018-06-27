package cn.edu.scnu.it.aipet.service.impl;

import cn.edu.scnu.it.aipet.dao.PlaceoutMapper;
import cn.edu.scnu.it.aipet.pojo.Placeout;
import cn.edu.scnu.it.aipet.service.PlaceoutService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PlaceoutServiceImpl implements PlaceoutService {
    private final PlaceoutMapper placeoutMapper;

    @Autowired
    public PlaceoutServiceImpl(PlaceoutMapper placeoutMapper) {
        this.placeoutMapper = placeoutMapper;
    }

    @Override
    public Long insertPlaceout(Placeout placeout) {
        return placeoutMapper.insertPlaceout(placeout);
    }

    @Override
    public List<Placeout> getPlaceout(int start, int size) {
        return placeoutMapper.getPlaceout(start,size);
    }
}
