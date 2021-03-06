package com.chen.service;

import com.chen.dao.entity.UserRole;
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
public interface UserRoleService extends IService<UserRole> {
    /**
     * 给用户分配角色
     */
    Result permRoleUser(Long userId,Long[] roleIds);
}
