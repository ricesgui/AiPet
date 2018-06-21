package cn.edu.scnu.it.aipet.util;

import cn.edu.scnu.it.aipet.pojo.MePlaceout;
import cn.edu.scnu.it.aipet.pojo.Pet;

public class placeoutJson {
    private Pet pet=null;
    private MePlaceout mePlaceout=null;

    public Pet getPet() {
        return pet;
    }

    public void setPet(Pet pet) {
        this.pet = pet;
    }

    public MePlaceout getMePlaceout() {
        return mePlaceout;
    }

    public void setMePlaceout(MePlaceout mePlaceout) {
        this.mePlaceout = mePlaceout;
    }
}
