package com.chen.controller;

import com.chen.utils.QiniuUtils;
import com.chen.utils.UploadImage;
import com.chen.vo.Result;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.UUID;
@CrossOrigin
@RestController
@RequestMapping("upload")
public class UploadController {
//    @Autowired
//    private QiniuUtils qiniuUtils;
    @Autowired
    private UploadImage uploadImage;
    @PostMapping
    public Result upload(@RequestParam("images") MultipartFile file){
        //原始文件名称： 比如aa.png
//        String originalFilename=file.getOriginalFilename();
////        唯一的文件名称
//        String fileName = UUID.randomUUID().toString() + "." + StringUtils.substringAfterLast(originalFilename, ".");
////        这里将这个图片上传到七牛云服务器，按量付费 速度快，把图片发放到离用户最近的服务器上
////        降低我们自身应用服务器的带宽消耗
//

//        boolean upload = qiniuUtils.upload(file, fileName);
//        if (upload){
//            return Result.success(QiniuUtils.url + fileName);
//        }
        String uploadurl=uploadImage.upload(file);
        if (uploadurl!=null){
            return  Result.success(uploadurl);
        }
        return Result.fail(20001,"上传失败");
    }
}