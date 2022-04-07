/*
 Navicat Premium Data Transfer

 Source Server         : 阿里云
 Source Server Type    : MySQL
 Source Server Version : 80026
 Source Host           : 121.41.122.194:3306
 Source Schema         : apartment

 Target Server Type    : MySQL
 Target Server Version : 80026
 File Encoding         : 65001

 Date: 07/04/2022 23:39:45
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for maintenance_type
-- ----------------------------
DROP TABLE IF EXISTS `maintenance_type`;
CREATE TABLE `maintenance_type`  (
  `id` int(0) NOT NULL,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '维修类型',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci COMMENT = '维修类型表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for notices
-- ----------------------------
DROP TABLE IF EXISTS `notices`;
CREATE TABLE `notices`  (
  `id` int(0) NOT NULL AUTO_INCREMENT COMMENT '公告信息ID识别号',
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '通知标题',
  `content` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '公告信息具体公告内容信息',
  `time` timestamp(0) NULL DEFAULT NULL COMMENT '公告信息发布时间',
  `status` int(0) NULL DEFAULT 1 COMMENT '状态 0=>撤回 1=> 通知',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `user_uuid`(`title`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci COMMENT = '公告信息表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for room_rel_image
-- ----------------------------
DROP TABLE IF EXISTS `room_rel_image`;
CREATE TABLE `room_rel_image`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `room_uuid` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '房屋uuid识别号',
  `time` timestamp(0) NULL DEFAULT NULL COMMENT '插入时间',
  `url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '房屋环境照片',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `room_uuid`(`room_uuid`) USING BTREE,
  CONSTRAINT `room_rel_image_ibfk_1` FOREIGN KEY (`room_uuid`) REFERENCES `rooms` (`uuid`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 20 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci COMMENT = '房屋环境图片数据表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for room_rel_room_type
-- ----------------------------
DROP TABLE IF EXISTS `room_rel_room_type`;
CREATE TABLE `room_rel_room_type`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `room_uuid` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '公寓ID',
  `room_type_id` int(0) NOT NULL COMMENT '类别ID',
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `room_uuid_2`(`room_uuid`, `room_type_id`) USING BTREE,
  INDEX `room_uuid`(`room_uuid`) USING BTREE,
  INDEX `room_type_id`(`room_type_id`) USING BTREE,
  CONSTRAINT `room_rel_room_type_ibfk_1` FOREIGN KEY (`room_uuid`) REFERENCES `rooms` (`uuid`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `room_rel_room_type_ibfk_2` FOREIGN KEY (`room_type_id`) REFERENCES `room_type` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 159 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci COMMENT = '房屋信息与房屋类型信息关联表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for room_type
-- ----------------------------
DROP TABLE IF EXISTS `room_type`;
CREATE TABLE `room_type`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `time` timestamp(0) NULL DEFAULT NULL COMMENT '插入时间',
  `status` int(0) NULL DEFAULT 0 COMMENT '状态',
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '房屋类型信息',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 17 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci COMMENT = '房屋类型表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for rooms
-- ----------------------------
DROP TABLE IF EXISTS `rooms`;
CREATE TABLE `rooms`  (
  `uuid` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '房间名称',
  `mobile` char(11) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '联系电话',
  `address` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '公寓地址',
  `msg` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '房屋描述',
  `startMoney` int(0) NOT NULL COMMENT '房屋价格-起',
  `status` int(0) NULL DEFAULT 0 COMMENT '房屋使用状态 0=>未上架 1=>已上架[空闲] 2=>非空闲',
  `endMoney` int(0) NOT NULL COMMENT '房屋价格-后',
  `time` timestamp(0) NULL DEFAULT NULL COMMENT '插入时间',
  PRIMARY KEY (`uuid`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci COMMENT = '房屋信息表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for user_maintenance_type
-- ----------------------------
DROP TABLE IF EXISTS `user_maintenance_type`;
CREATE TABLE `user_maintenance_type`  (
  `id` int(0) NOT NULL,
  `user_uuid` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '用户uuid',
  `type_id` int(0) NULL DEFAULT NULL COMMENT '维修类型id',
  `state` int(0) NULL DEFAULT NULL COMMENT '维修状态',
  `note` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '备注',
  `time` datetime(0) NULL DEFAULT NULL COMMENT '时间',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `user_uuid`(`user_uuid`) USING BTREE,
  INDEX `type_id`(`type_id`) USING BTREE,
  CONSTRAINT `user_maintenance_type_ibfk_1` FOREIGN KEY (`user_uuid`) REFERENCES `users` (`uuid`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `user_maintenance_type_ibfk_2` FOREIGN KEY (`type_id`) REFERENCES `maintenance_type` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci COMMENT = '用户表与维修类型关联表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for user_rel_notice
-- ----------------------------
DROP TABLE IF EXISTS `user_rel_notice`;
CREATE TABLE `user_rel_notice`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `user_uuid` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '用户ID',
  `notice_id` int(0) NOT NULL COMMENT '通知id',
  `time` timestamp(0) NULL DEFAULT NULL COMMENT '时间',
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `user_uuid`(`user_uuid`, `notice_id`) USING BTREE,
  INDEX `user_rel_notice_noticeId`(`notice_id`) USING BTREE,
  CONSTRAINT `user_rel_notice_noticeId` FOREIGN KEY (`notice_id`) REFERENCES `notices` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `user_rel_notice_userId` FOREIGN KEY (`user_uuid`) REFERENCES `users` (`uuid`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for user_rel_room
-- ----------------------------
DROP TABLE IF EXISTS `user_rel_room`;
CREATE TABLE `user_rel_room`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `user_uuid` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '用户uuid',
  `room_uuid` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '房屋uuid',
  `startTime` timestamp(0) NOT NULL COMMENT '入住时间',
  `endTime` timestamp(0) NOT NULL COMMENT '到期时间',
  `money` int(0) NOT NULL COMMENT '租金',
  `status` int(0) NULL DEFAULT 1 COMMENT '状态 0=>退租 1=> 在租',
  `msg` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '备注',
  `time` timestamp(0) NULL DEFAULT NULL COMMENT '插入时间',
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `room_uuid_2`(`room_uuid`, `user_uuid`) USING BTREE,
  INDEX `user_uuid`(`user_uuid`) USING BTREE,
  INDEX `room_uuid`(`room_uuid`) USING BTREE,
  CONSTRAINT `user_rel_room_ibfk_1` FOREIGN KEY (`user_uuid`) REFERENCES `users` (`uuid`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `user_rel_room_ibfk_2` FOREIGN KEY (`room_uuid`) REFERENCES `rooms` (`uuid`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 8 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci COMMENT = '用户与房屋数据关联表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for user_rel_room_continue
-- ----------------------------
DROP TABLE IF EXISTS `user_rel_room_continue`;
CREATE TABLE `user_rel_room_continue`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `user_rel_room_id` int(0) NOT NULL COMMENT '续租Id',
  `startTime` timestamp(0) NOT NULL COMMENT '从',
  `money` int(0) NOT NULL COMMENT '钱',
  `msg` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '备注',
  `endTime` timestamp(0) NOT NULL COMMENT '至',
  `time` timestamp(0) NULL DEFAULT NULL COMMENT '插入时间',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `user_rel_room_continue_id`(`user_rel_room_id`) USING BTREE,
  CONSTRAINT `user_rel_room_continue_id` FOREIGN KEY (`user_rel_room_id`) REFERENCES `user_rel_room` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`  (
  `uuid` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `name` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '姓名',
  `mobile` varchar(11) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '手机号码',
  `card_img_1` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '身份证正面',
  `card_img_2` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '身份证背面',
  `idcard` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '身份证号码',
  `passwd` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '密码',
  `time` timestamp(0) NULL DEFAULT NULL COMMENT '用户注册时间',
  `identity` int(0) NULL DEFAULT 0 COMMENT '用户权限设置：1=> 管理员 0=>用户',
  PRIMARY KEY (`uuid`) USING BTREE,
  UNIQUE INDEX `mobile`(`mobile`, `identity`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci COMMENT = '用户信息表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Triggers structure for table notices
-- ----------------------------
DROP TRIGGER IF EXISTS `notices_trigger_time`;
delimiter ;;
CREATE TRIGGER `notices_trigger_time` BEFORE INSERT ON `notices` FOR EACH ROW BEGIN
			set new.time = NOW();
    END
;;
delimiter ;

-- ----------------------------
-- Triggers structure for table room_rel_image
-- ----------------------------
DROP TRIGGER IF EXISTS `room_image_time`;
delimiter ;;
CREATE TRIGGER `room_image_time` BEFORE INSERT ON `room_rel_image` FOR EACH ROW BEGIN
			set new.time = NOW();
    END
;;
delimiter ;

-- ----------------------------
-- Triggers structure for table room_type
-- ----------------------------
DROP TRIGGER IF EXISTS `user_room_time_1`;
delimiter ;;
CREATE TRIGGER `user_room_time_1` BEFORE INSERT ON `room_type` FOR EACH ROW BEGIN
			set new.time = NOW();
    END
;;
delimiter ;

-- ----------------------------
-- Triggers structure for table rooms
-- ----------------------------
DROP TRIGGER IF EXISTS `rooms_time`;
delimiter ;;
CREATE TRIGGER `rooms_time` BEFORE INSERT ON `rooms` FOR EACH ROW BEGIN
			set new.time = NOW();
    END
;;
delimiter ;

-- ----------------------------
-- Triggers structure for table rooms
-- ----------------------------
DROP TRIGGER IF EXISTS `rooms_trigger_uuid`;
delimiter ;;
CREATE TRIGGER `rooms_trigger_uuid` BEFORE INSERT ON `rooms` FOR EACH ROW BEGIN
			set new.uuid = UUID();
    END
;;
delimiter ;

-- ----------------------------
-- Triggers structure for table user_rel_notice
-- ----------------------------
DROP TRIGGER IF EXISTS `user_rel_notice_time`;
delimiter ;;
CREATE TRIGGER `user_rel_notice_time` BEFORE INSERT ON `user_rel_notice` FOR EACH ROW BEGIN
			set new.time = NOW();
    END
;;
delimiter ;

-- ----------------------------
-- Triggers structure for table user_rel_room
-- ----------------------------
DROP TRIGGER IF EXISTS `user_room_time`;
delimiter ;;
CREATE TRIGGER `user_room_time` BEFORE INSERT ON `user_rel_room` FOR EACH ROW BEGIN
			set new.time = NOW();
    END
;;
delimiter ;

-- ----------------------------
-- Triggers structure for table user_rel_room_continue
-- ----------------------------
DROP TRIGGER IF EXISTS `user_rel_room_time`;
delimiter ;;
CREATE TRIGGER `user_rel_room_time` BEFORE INSERT ON `user_rel_room_continue` FOR EACH ROW BEGIN
			set new.time = NOW();
    END
;;
delimiter ;

-- ----------------------------
-- Triggers structure for table users
-- ----------------------------
DROP TRIGGER IF EXISTS `users_time`;
delimiter ;;
CREATE TRIGGER `users_time` BEFORE INSERT ON `users` FOR EACH ROW BEGIN
			set new.time = NOW();
    END
;;
delimiter ;

-- ----------------------------
-- Triggers structure for table users
-- ----------------------------
DROP TRIGGER IF EXISTS `user_trigger_uuid`;
delimiter ;;
CREATE TRIGGER `user_trigger_uuid` BEFORE INSERT ON `users` FOR EACH ROW BEGIN
			set new.uuid = UUID();
    END
;;
delimiter ;

SET FOREIGN_KEY_CHECKS = 1;
