package cn.edu.scnu.it.aipet.dao;

import cn.edu.scnu.it.aipet.pojo.Adopt;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AdoptMapper {
    public List<Adopt> getAdoptByUserId(Long userId);

    public Long insertAdopt(Adopt adopt);
}
