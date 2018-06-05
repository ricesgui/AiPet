package cn.edu.scnu.it.aipet.pojo;

import org.springframework.stereotype.Component;


public class Adopt {
    private Long idadopt=null;
    private Long iduser=null;
    private String adoptdescri=null; //the description of the adoption

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

    public String getAdoptdescri() {
        return adoptdescri;
    }

    public void setAdoptdescri(String adoptdescri) {
        this.adoptdescri = adoptdescri;
    }
}
