package cn.edu.scnu.it.aipet.pojo;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.stereotype.Component;

import java.util.Date;
@Component
public class BaiKe {
    private Long idbaike=null;
    private String messsort=null;  //the kind of the message
    private  String messcontent=null;  //the content of the message
    private String userid=null;
    @DateTimeFormat(pattern="yyyy-MM-dd")
    private Date datetime=null;

    public Long getIdbaike() {
        return idbaike;
    }

    public void setIdbaike(Long idbaike) {
        this.idbaike = idbaike;
    }

    public String getMesssort() {
        return messsort;
    }

    public void setMesssort(String messsort) {
        this.messsort = messsort;
    }

    public String getMesscontent() {
        return messcontent;
    }

    public void setMesscontent(String messcontent) {
        this.messcontent = messcontent;
    }

    public String getUserid() {
        return userid;
    }

    public void setUserid(String userid) {
        this.userid = userid;
    }

    public Date getDatetime() {
        return datetime;
    }

    public void setDatetime(Date datetime) {
        this.datetime = datetime;
    }
}
