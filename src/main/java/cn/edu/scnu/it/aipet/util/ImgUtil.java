package cn.edu.scnu.it.aipet.util;

import sun.misc.BASE64Encoder;

import java.io.FileInputStream;
import java.io.IOException;

public class ImgUtil {
    public static String encode(byte[] bytes){
        return new BASE64Encoder().encode(bytes);
    }
    public static String encodeImage(String imgUrl) throws IOException {
        FileInputStream fis = new FileInputStream(imgUrl);
        byte[] rs = new byte[fis.available()];
        fis.read(rs);
        fis.close();
        return encode(rs);
    }
}
