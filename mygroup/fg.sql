set @regdate='2019-01-01';
set @bgdate='2019-04-01';
set @enddate='2019-05-01';
SELECT css.ShopId 门店ID,ebs.code 门店编码,ebs.name 门店名称
,IFNULL(vp.vipct,0) 新注册人数
,sum(css.SaleMoney) 销售总金额
,sum(css.VipSaleMoney) 会员销售金额
,sum(css.SaleMoney)-sum(css.VipSaleMoney) 非会员金额
,sum(css.SaleNum)  销售总笔数
,sum(css.VipSaleNum) 会员交易笔数
,ifnull(c.vipct,0) 有效会员总数
,ifnull(c.newsct,0) 新会员复购数,ifnull(c.newsctsale,0) 新会员复购金额,ifnull(c.newct,0) 新会员人数
,ifnull(c.newctsale,0) 新会员销售,concat(left(ifnull(newsct/newct*100,0),4),'%') 新会员复购率
,ifnull(c.oldsct,0) 老会员复购数,ifnull(c.oldsctsale,0) 老会员复购金额,ifnull(c.oldct,0) 老会员人数
,ifnull(c.oldctsale,0) 老会员销售,concat(left(ifnull(oldsct/oldct*100,0),4),'%') 老会员复购率
,ifnull(c.regsct,0) 当月会员复购数,ifnull(c.regsctsale,0) 当月会员复购金额,ifnull(c.regct,0) 当月会员人数
,ifnull(c.regctsale,0) 当月会员销售,concat(left(ifnull(regsct/regct*100,0),4),'%') 当期会员复购率
,concat(left((newsct+oldsct+regsct)/c.vipct*100,4),'%')  会员复购率
FROM ed_base_shop ebs inner JOIN crm_sal_shop_sale css
on css.ShopId = ebs.Id
LEFT JOIN (SELECT RegChannel,count(id) vipct 
from crm_vip_info where BrandId =65 AND RegTime BETWEEN @bgdate and @enddate GROUP BY RegChannel) vp
ON css.ShopId=vp.RegChannel
LEFT JOIN (select shopid
	,count(VipId) vipct
	,sum(case when vipstatus='newvip' then salepaymoney else 0 end ) newctsale
	,sum(case when vipstatus='newvip' then 1 else 0 end ) newct
	,sum(case when vipstatus='newvip' and bef3ct>0 then salepaymoney else 0 end ) newsctsale
	,sum(case when vipstatus='newvip' and bef3ct>0 then 1 else 0 end ) newsct
	,sum(case when vipstatus='oldvip' then salepaymoney else 0 end ) oldctsale
	,sum(case when vipstatus='oldvip' then 1 else 0 end ) oldct
	,sum(case when vipstatus='oldvip' then salepaymoney else 0 end ) oldsctsale
	,sum(case when vipstatus='oldvip' then 1 else 0 end ) oldsct
	,sum(case when vipstatus='regvip' then salepaymoney else 0 end ) regctsale
	,sum(case when vipstatus='regvip' then 1 else 0 end ) regct
	,sum(case when vipstatus='regvip' and aa.salect>1 then salepaymoney else 0 end ) regsctsale #当月注册的有两次销售金额
	,sum(case when vipstatus='regvip' and aa.salect>1 then 1 else 0 end ) regsct  #当月注册的有两次销售人次
	from (
	select a.shopid,a.VipId,a.salepaymoney,a.salect,ifnull(b.salect,0) bef3ct,
		(case when RegTime<@regdate then 'oldvip' when RegTime BETWEEN @regdate and @enddate then 'newvip' else 'regvip' end) vipstatus
			from (
					select ShopId,VipId,sum(SalePayMoney) SalePayMoney
					,SUM(case when saletype='s' then 1 else -1 end)  salect
						from crm_sal_vip_sale where SaleDate BETWEEN @bgdate and @enddate
					group by ShopId,VipId
					) a  #当期月有销售的会员
					left join 
					(
						select ShopId,VipId
						,SUM(case when saletype='s' then 1 else -1 end)  salect
							from crm_sal_vip_sale where SaleDate BETWEEN @regdate and @bgdate
						group by ShopId,VipId
					) b #往期3月内有销售
						on a.ShopId=b.ShopId and a.VipId=b.VipId
						left join crm_vip_info cvi
						on a.VipId=cvi.Id
			) aa
	group by shopid
) c
on c.ShopId=css.ShopId
where css.SaleDate BETWEEN @bgdate and @enddate 
and ebs.ChannelType=0
and css.BrandId=65 and ebs.BrandId=65
and ebs.code like '10%'
group by css.ShopId,ebs.code,ebs.name,IFNULL(vp.vipct,0)
order by IFNULL(vp.vipct,0) desc,sum(css.SaleMoney) desc;