package com.chen.dao.entity;
import com.baomidou.mybatisplus.annotation.TableField;
import lombok.Data;

import java.util.List;

//创建任务实体类
@Data
public class Task {


    public static final int Task_TOP = 1;

    public static final int Task_Common = 0;
    private Long id;
//    评论数量
    private Integer commentCounts;
//    创建时间
    private Long createDate;
    //    结束时间
    private Long endDate;
//    简介
    private String summary;
//    标题
    private String title;
//    流量数据
    private Integer viewCounts;
//    是否置顶
    private Integer weight ;
    /**
     * 作者id
     */
    private Long authorId;
    /**
     * 内容id
     */
    private Long bodyId;
    /**
     *类别id
     */
    private Long categoryId;
    /**
     * 接受任务的用户id
     */
    private Long acceptUserId;
    /**
     * 发布任务的学校id
     */
    private Long publishSchoolId;
    /**
     * 任务进行状态
     */
    private Long status;
    /**
     * 类别
     */
    @TableField(exist = false)
    private Category category;
    /**
     * 标签
     */
    @TableField(exist = false)
    private List<Tag> tasktag;
    /**
     * 内容
     */
    @TableField(exist = false)
    private TaskBody taskBody;

}
