package com.chen.vo;
//设置返回给前端的参数
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.ser.std.ToStringSerializer;
import lombok.Data;

import java.util.List;

@Data
public class TaskVo {
//    设置返回给前端需要的参数
//    @JsonSerialize(using = ToStringSerializer.class)//使用fastjson的ToStringSerializer注解，让系统序列化时，保留相关精度
    private String id;
    private String title;
    private String summary;//简介
//    评论数量
    private Integer commentCounts;
    private Integer viewCounts;
    private Integer weight;
    /**
     * 创建时间
     */
    private String createDate;

//    标签
    private List<TagVo> tags;

    private String author;
    private String avatar;
    //    任务内容
    private TaskBodyVo body;
    //  任务类别
    private CategoryVo category;
    /**
     * 接受任务的用户id
     */
    @JsonSerialize(using= ToStringSerializer.class)
    private Long acceptUserId;
    @JsonSerialize(using= ToStringSerializer.class)
    private Long authorId;
    /**
     * 发布任务的学校id
     */
    private Long publishSchoolId;

    /**
     * 发布学校的名称
     */
    private String publishSchoolName;

    /**
     * 图片
     */
    private String images;

    /**
     * 任务进行状态
     */
    private Long status;

    private Integer money;
}
