package cn.edu.scnu.it.aipet.pojo;

public class User {
    private Long idusers=null;
    private String name=null;
    private String realname=null;
    private  String sex=null;
    private String password=null;
    private String number=null;
    private String email=null;
    private String address=null;
    private String checknum=null;

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

    public String getChecknum() {
        return checknum;
    }

    public void setChecknum(String checknum) {
        this.checknum = checknum;
    }
}
