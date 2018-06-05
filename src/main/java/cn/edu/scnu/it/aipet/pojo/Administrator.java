package cn.edu.scnu.it.aipet.pojo;

import org.springframework.stereotype.Component;

@Component
public class Administrator {
    private String adminname=null;
    private String password=null;

    public String getAdminname() {
        return adminname;
    }

    public void setAdminname(String adminname) {
        this.adminname = adminname;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
