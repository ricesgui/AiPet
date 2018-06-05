package cn.edu.scnu.it.aipet.pojo;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.stereotype.Component;

import java.util.Date;

public class MePlaceout {
    private Long idmp=null;
    private Long iduser=null;
    private Long idplaceout=null;
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date datetime=null;

    public Long getIdmp() {
        return idmp;
    }

    public void setIdmp(Long idmp) {
        this.idmp = idmp;
    }

    public Long getIduser() {
        return iduser;
    }

    public void setIduser(Long iduser) {
        this.iduser = iduser;
    }

    public Long getIdplaceout() {
        return idplaceout;
    }

    public void setIdplaceout(Long idplaceout) {
        this.idplaceout = idplaceout;
    }

    public Date getDatetime() {
        return datetime;
    }

    public void setDatetime(Date datetime) {
        this.datetime = datetime;
    }
}
