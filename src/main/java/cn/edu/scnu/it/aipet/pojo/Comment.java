package cn.edu.scnu.it.aipet.pojo;

import org.springframework.format.annotation.DateTimeFormat;

import java.sql.Date;

public class Comment {
    private Long idCommet;
    private String content;
    private Long idUser;
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date dateTime;

    public Long getIdCommet() {
        return idCommet;
    }

    public void setIdCommet(Long idCommet) {
        this.idCommet = idCommet;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Long getIdUser() {
        return idUser;
    }

    public void setIdUser(Long idUser) {
        this.idUser = idUser;
    }

    public Date getDateTime() {
        return dateTime;
    }

    public void setDateTime(Date dateTime) {
        this.dateTime = dateTime;
    }
}
