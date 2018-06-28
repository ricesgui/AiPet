package cn.edu.scnu.it.aipet.util;

import cn.edu.scnu.it.aipet.pojo.Pet;
import cn.edu.scnu.it.aipet.pojo.Placeout;
import cn.edu.scnu.it.aipet.util.jsonUtil.IndexJson;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public class IndexJsonUtil {
    public static List<IndexJson> parseIndexJson(List<Placeout> placeouts){
        List<IndexJson> indexJsons=new ArrayList<>();
        for(Placeout placeout:placeouts){
            IndexJson indexJson=new IndexJson();
            Pet pet=placeout.getPet();
            indexJson.setIdPlaceout(placeout.getIdplaceout());
            indexJson.setAddress(placeout.getAddress());
            indexJson.setAgeYear(pet.getAge_year());
            indexJson.setAgeMonth(pet.getAge_month());
            indexJson.setPetDescri(pet.getPetdescri());
            try {
                indexJson.setImage(ImgUtil.encodeImage(pet.getPetphotourl()));
            }catch (IOException e){
                System.err.println("宠物图片路径错误!");
                e.printStackTrace();
            }
            indexJsons.add(indexJson);
        }
        return indexJsons;
    }
}
