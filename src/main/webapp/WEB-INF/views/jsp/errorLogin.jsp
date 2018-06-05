<%--
  Created by IntelliJ IDEA.
  User: wangjun
  Date: 2018/6/5
  Time: 下午9:51
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c"
           uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<head>
    <title>错误</title>
    <meta http-equiv="Content-Type" content="text/html" charset="utf-8">
</head>
<body>
<p>
    <c:choose>
        <c:when test="${type== 1}">
            <c:out value="用户名不存在，请检查用户名"/>
        </c:when>
        <c:otherwise>
            <c:out value="用户名或密码错误!"/>
        </c:otherwise>
    </c:choose>
</p>
<a href="/views/login.html">返回登陆界面</a>
</body>
</html>
