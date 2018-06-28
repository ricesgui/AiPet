package cn.edu.scnu.it.aipet.util.jsonUtil;

import java.sql.Date;

public class IndexJson {
    private Long idPlaceout;
    private String address;
    private Date dateTime;
    private String petDescri;
    private int ageYear;
    private int ageMonth;
    private String image;
    public Long getIdPlaceout() {
        return idPlaceout;
    }

    public void setIdPlaceout(Long idPlaceout) {
        this.idPlaceout = idPlaceout;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public Date getDateTime() {
        return dateTime;
    }

    public void setDateTime(Date dateTime) {
        this.dateTime = dateTime;
    }

    public String getPetDescri() {
        return petDescri;
    }

    public void setPetDescri(String petDescri) {
        this.petDescri = petDescri;
    }

    public int getAgeYear() {
        return ageYear;
    }

    public void setAgeYear(int ageYear) {
        this.ageYear = ageYear;
    }

    public int getAgeMonth() {
        return ageMonth;
    }

    public void setAgeMonth(int ageMonth) {
        this.ageMonth = ageMonth;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }
}
