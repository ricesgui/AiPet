package cn.edu.scnu.it.aipet.pojo;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.stereotype.Component;

import java.util.Date;


public class Adopt {
    private Long idadopt=null;
    private Long iduser=null;
    private String adoptDes=null; //the description of the adoption
    private String adoptSpecies=null;
    private String placeInTitle=null;
    private String telNumber=null;
    private String touchName=null;
    private String petSex=null;
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date datetime=null;

    public Long getIdadopt() {
        return idadopt;
    }

    public void setIdadopt(Long idadopt) {
        this.idadopt = idadopt;
    }

    public Long getIduser() {
        return iduser;
    }

    public void setIduser(Long iduser) {
        this.iduser = iduser;
    }

    public String getAdoptDes() {
        return adoptDes;
    }

    public void setAdoptDes(String adoptDes) {
        this.adoptDes = adoptDes;
    }

    public String getAdoptSpecies() {
        return adoptSpecies;
    }

    public void setAdoptSpecies(String adoptSpecies) {
        this.adoptSpecies = adoptSpecies;
    }

    public String getPlaceInTitle() {
        return placeInTitle;
    }

    public void setPlaceInTitle(String placeInTitle) {
        this.placeInTitle = placeInTitle;
    }

    public String getTelNumber() {
        return telNumber;
    }

    public void setTelNumber(String telNumber) {
        this.telNumber = telNumber;
    }

    public String getPetSex() {
        return petSex;
    }

    public void setPetSex(String petSex) {
        this.petSex = petSex;
    }

    public Date getDatetime() {
        return datetime;
    }

    public void setDatetime(Date datetime) {
        this.datetime = datetime;
    }

    public String getTouchName() {
        return touchName;
    }

    public void setTouchName(String touchName) {
        this.touchName = touchName;
    }

}
