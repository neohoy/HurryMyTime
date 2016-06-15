//==============================================================================
// 【HOY插件】增加战斗队员数量
//==============================================================================
/*:
 * @plugindesc 增加战斗人员数量
 * @author HOY
 * @Data : 2016/01/19
 * @Version : 1.0
 *
 * @param Max Battle Members
 * @desc 设置允许参战的最大人数，默认为4人
 * @default 4
 *
 * @param Member Battle Position
 * @desc 改变战斗Y轴位置
 * @default -40
 *
 * @param Party Followers
 * @desc 改变队伍跟随者数量
 * @default 4
 * 
 * @help 增加最大战斗人数，队伍跟随人数及角色战斗位置
 */

var Imported = Imported || {};
Imported.HOY_PartyMember = true;
var HOY = HOY || {};

HOY.parameters = PluginManager.parameters('HOY_PartyMember');
HOY.MaxBattleMembers = Number(HOY.parameters['Max Battle Members']);
HOY.MemberBattlePosition = Number(HOY.parameters['Member Battle Position']);
HOY.PartyFollowers = Number(HOY.Parameters['Party Followers']);

function HOY_PartyMember() {


	Game_Party.prototype.maxBattleMembers = function() {
		return HOY.MaxBattleMembers;
	};

	Sprite_Actor.prototype.setActorHome = function(index) {
		this.setHome(600 + index * 32, 280 + index * 48 + HOY.MemberBattlePosition);
	};

	Game_Followers.prototype.follower = function() {
		return HOY.PartyFollowers;
	};

};
//===============================================================================