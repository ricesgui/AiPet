package cn.edu.scnu.it.aipet.pojo;

import org.springframework.stereotype.Component;

import java.io.Serializable;
import java.util.List;

@Component
public class User implements Serializable {

    private Long idusers=null;
    private String name=null;
    private String realname=null;
    private  String sex=null;
    private String password=null;
    private String number=null;
    private String email=null;
    private String address=null;
    private List<Placeout> placeouts=null;
    private List<Adopt> adopts=null;

    public Long getIdusers() {
        return idusers;
    }

    public void setIdusers(Long idusers) {
        this.idusers = idusers;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getRealname() {
        return realname;
    }

    public void setRealname(String realname) {
        this.realname = realname;
    }

    public String getSex() {
        return sex;
    }

    public void setSex(String sex) {
        this.sex = sex;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getNumber() {
        return number;
    }

    public void setNumber(String number) {
        this.number = number;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public List<Placeout> getPlaceouts() {
        return placeouts;
    }

    public void setPlaceouts(List<Placeout> placeouts) {
        this.placeouts = placeouts;
    }

    public List<Adopt> getAdopts() {
        return adopts;
    }

    public void setAdopts(List<Adopt> adopts) {
        this.adopts = adopts;
    }
}
