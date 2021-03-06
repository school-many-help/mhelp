package com.chen.service;

import com.chen.dao.entity.Menu;
import com.chen.dao.entity.Role;
import com.baomidou.mybatisplus.extension.service.IService;
import com.chen.vo.Result;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author mhelp-admin
 * @since 2021-11-18
 */
public interface RoleService extends IService<Role> {
    /**
     * 通过角色id获取数据
     */
    Result getIDRole(Long id);
    /**
     * 获取角色列表，也可以通过关键字查询
     * name
     */
    Result listNameRole(String name);
    /**
     * 添加角色
     */
    Result saveRole(Role role);
    /**
     * 更新角色
     */
    Result updateRole(Role role);
    /**
     * 删除角色
     */
    Result deleteRole(Long[] ids);
}
