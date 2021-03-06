package cn.edu.scnu.it.aipet.dao;

import cn.edu.scnu.it.aipet.pojo.Placeout;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface PlaceoutMapper {
    public List<Placeout> getPlaceoutByUserId(Long userId);
    public Long insertPlaceout(Placeout placeout);
    public List<Placeout>  getPlaceout(@Param("start") int start, @Param("size")int size);
}
