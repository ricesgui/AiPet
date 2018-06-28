package cn.edu.scnu.it.aipet.pojo;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.stereotype.Component;

import java.sql.Date;

public class ReplyPost {
    private Long idreplypost=null;
    private String rptitle=null;
    private String rpcontent=null;
    private Long userid=null;
    private Long fatherid=null;
    private Long pripostid=null;
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date datetime=null;

    public Long getIdreplypost() {
        return idreplypost;
    }

    public void setIdreplypost(Long idreplypost) {
        this.idreplypost = idreplypost;
    }

    public String getRptitle() {
        return rptitle;
    }

    public void setRptitle(String rptitle) {
        this.rptitle = rptitle;
    }

    public String getRpcontent() {
        return rpcontent;
    }

    public void setRpcontent(String rpcontent) {
        this.rpcontent = rpcontent;
    }

    public Long getUserid() {
        return userid;
    }

    public void setUserid(Long userid) {
        this.userid = userid;
    }

    public Long getFatherid() {
        return fatherid;
    }

    public void setFatherid(Long fatherid) {
        this.fatherid = fatherid;
    }

    public Long getPripostid() {
        return pripostid;
    }

    public void setPripostid(Long pripostid) {
        this.pripostid = pripostid;
    }

    public Date getDatetime() {
        return datetime;
    }

    public void setDatetime(Date datetime) {
        this.datetime = datetime;
    }
}
