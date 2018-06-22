package cn.edu.scnu.it.aipet.dao;

import cn.edu.scnu.it.aipet.pojo.MePlaceout;

import java.util.List;

public interface MePlaceoutMappler {
    public List<MePlaceout> getMePlaceoutByUserId(Long iduser);
    public MePlaceout getMePlaceout(Long id);
    public int insertMePlaceout(MePlaceout mePlaceout);
}
