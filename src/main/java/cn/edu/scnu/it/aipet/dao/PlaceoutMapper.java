package cn.edu.scnu.it.aipet.dao;

import cn.edu.scnu.it.aipet.pojo.Placeout;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface PlaceoutMapper {
    public List<Placeout> getPlaceoutByUserid(Long id);
    public Long insertPlaceout(Placeout placeout);
}
