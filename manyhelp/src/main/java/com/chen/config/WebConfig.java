package com.chen.config;
//配置类

import com.chen.handler.LoginInterceptor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig  implements WebMvcConfigurer {
    //    注入登录拦截器
    @Autowired
    private LoginInterceptor loginInterceptor;
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        //跨域配置，不可设置为*，不安全, 前后端分离项目，可能域名不一致
        //本地测试 端口不一致 也算跨域
        // 跨域路径
        CorsRegistration cors = registry.addMapping("/**");

        // 可访问的外部域
        cors.allowedOrigins("*");
        // 支持跨域用户凭证
        //cors.allowCredentials(true);
        //cors.allowedOriginPatterns("*");
        // 设置 header 能携带的信息
        cors.allowedHeaders("*");
        // 支持跨域的请求方法
        cors.allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS");
        // 设置跨域过期时间，单位为秒
        cors.maxAge(3600);
    }
    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        //拦截test接口,后续实际遇到需要拦截的接口时，在配置为真正的拦截接口
        registry.addInterceptor(loginInterceptor)
                .addPathPatterns("/test").addPathPatterns("/comments/create/change").addPathPatterns("/tasks/publish").addPathPatterns("/tasks/accepttask/{id}")
                .addPathPatterns("/tasks/altertask").addPathPatterns("/tasks/usertasks").addPathPatterns("/tasks/uaccepttasks")
                .addPathPatterns("/users/**").addPathPatterns("/sign/**").addPathPatterns("/upload").addPathPatterns("/tasks/getStart")
                .addPathPatterns("/tasks/delStart/{id}").addPathPatterns("/tasks/delTask/{id}");

    }
}
