package cn.edu.scnu.it.aipet.service;

import cn.edu.scnu.it.aipet.pojo.Placeout;

import java.util.List;

public interface PlaceoutService {
public Long insertPlaceout(Placeout placeout);
public List<Placeout> getPlaceout(int start,int size);
}
