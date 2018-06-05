package cn.edu.scnu.it.aipet.pojo;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.stereotype.Component;

import java.util.Date;
@Component
public class PrimaryPost {
    private Long idpripost=null;
    private String priposttitle=null;
    private String pripostcontent=null;
    private Long userid=null;
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date datetime=null;

    public Long getIdpripost() {
        return idpripost;
    }

    public void setIdpripost(Long idpripost) {
        this.idpripost = idpripost;
    }

    public String getPriposttitle() {
        return priposttitle;
    }

    public void setPriposttitle(String priposttitle) {
        this.priposttitle = priposttitle;
    }

    public String getPripostcontent() {
        return pripostcontent;
    }

    public void setPripostcontent(String pripostcontent) {
        this.pripostcontent = pripostcontent;
    }

    public Long getUserid() {
        return userid;
    }

    public void setUserid(Long userid) {
        this.userid = userid;
    }

    public Date getDatetime() {
        return datetime;
    }

    public void setDatetime(Date datetime) {
        this.datetime = datetime;
    }
}
